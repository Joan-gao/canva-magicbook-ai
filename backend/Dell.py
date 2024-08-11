
import time
from flask import Flask
from openai import OpenAI
import yaml
import urllib.request
import ssl
from PIL import Image


app = Flask(__name__)


def read_yaml(yaml_file_path):
    """
 Read configuration data from a YAML file and return it as a dictionary.

Args:
    yaml_file_path (str): The path to the YAML file.

Returns:
    dict: A dictionary containing the configuration data.
    """
    with open(yaml_file_path, 'rb') as f:
        config_data = yaml.safe_load(f.read())
    return config_data


config_data = read_yaml("setting.yaml")
app.config.update(config_data)
openapi_key = app.config['COMMON']['OPENAI_API_KEY']
client = OpenAI(api_key=openapi_key)

response = {}


def promptOptimizeForImage(prompt):
    prefix_reqiurement = 'Please help me optimize this prompt so that it meets the requirements of DALL-E 2 for generating images，please only return the prompt content, I do not need any other content cause this prompt will be passed to dall-e-2 directly '
    promptStr = ""
    promptStr += prompt['prompt']
    promptStr += ','
    promptStr += prompt['model']
    promptStr += ','
    promptStr += prompt['aspectRatio']

    final_prompt = prefix_reqiurement+promptStr

    completion = client.chat.completions.create(
        model="gpt-4o",
        messages=[
            {"role": "system", "content": "You are a helpful assistant."},
            {"role": "user", "content": final_prompt}
        ]
    )

    message = completion.choices[0].message.content

    return message


def promptOptimizeForCaption(prompt):
    prefix_reqiurement = 'Please create a TikTok-style video caption and tags based on the  description that I provide， make the caption shorter and only one sentence which includes 2 emojis and please make only 3 tags as well, please only return the prompt content, I do not need any other content cause this prompt will be used directly '

    final_prompt = prefix_reqiurement+prompt

    completion = client.chat.completions.create(
        model="gpt-4o",
        messages=[
            {"role": "system", "content": "You are a helpful assistant."},
            {"role": "user", "content": final_prompt}
        ]
    )

    message = completion.choices[0].message.content

    return message


def dellGenerate(prompt):
    time.sleep(60)
    message = promptOptimizeForImage(prompt)
    prompt = message
    images = []

    try:

        imageResponse = client.images.generate(
            model="dall-e-2",
            prompt=prompt,
            quality="standard",
            n=4,
            size="256x256"
        )

        for item in imageResponse.data:
            images.append(item.url)
        # print("imageResponse: ", imageResponse.data[0].url)
        # images.append(imageResponse.data[0].url)
        response["images"] = images
    except:
        response["error"] = "Generation failed"
    finally:

        return response


def dellEdit(imageUrl, prompt):
    time.sleep(60)
    # default_img = "https://anai-9atmfta1xwyli1hklmwd-assets.s3.ap-southeast-2.amazonaws.com/5lVaoQAxDn9e55u7qNF5.jpg"
    ssl._create_default_https_context = ssl._create_unverified_context
    urllib.request.urlretrieve(imageUrl, "edited-image.png")
    input_image_path = "edited-image.png"
    image = Image.open(input_image_path)
    rgba_image = image.convert("RGBA")
    output_image_path = "output_rgba.png"
    rgba_image.save(output_image_path)

    try:

        imageResponse = client.images.edit(
            model="dall-e-2",
            image=open(output_image_path, "rb"),
            prompt=prompt,
            n=1,
            size="256x256"
        )
        # response["images"] = default_img
        response["images"] = imageResponse.data[0].url
    except:
        response["error"] = "Generation failed"
    finally:

        return response


def generateCharptersForTaleWaver(scriptData):
    pages = scriptData.get("pages")
    readingLevel = scriptData.get("readingLevel")
    subject = scriptData.get("subject")
    messageToconvey = scriptData.get("message")
    character = scriptData.get("character")
    language = scriptData.get("language")
    specialNeeds = scriptData.get("specialNeeds")
    storyStyle = scriptData.get("type")

    prompt = f"please write me the script of the children story ," \
        f"this book has about {pages} pages,which means {pages} charpters, " \
        f"and the subject of the story " \
        f"is about {subject}, aside from character in the subject, the character " \
        f"also need to include a {character},the reading level for the story is {readingLevel} and the" \
        f" language needs to be {language}, also this story's style needs to be {storyStyle}, " \
        f"and it needs to be aligned with children who have {specialNeeds} and the message to covey in the story" \
        f"needs to be centered around { messageToconvey}"

    suffix_requirement = "remember please assemble each charpter you generate in a list :[{charpterTitle: title,charpterContent:content}]" \
        "and I only need the this list it self please do not return any other content cause I will need to use this list in frontend directly "
    finalPrompt = prompt+suffix_requirement
    completion = client.chat.completions.create(
        model="gpt-4o",
        messages=[
            {"role": "system", "content": "You are a helpful assistant."},
            {"role": "user", "content": finalPrompt}
        ]
    )

    message = completion.choices[0].message.content
    print(message)

    return message


def generateChaptersForChildBook(generateData):

    pages = generateData.get("length")
    ageRange = generateData.get("ageRange")
    storyType = generateData.get("storyType")
    teachingContent = generateData.get("teachingContent")
    scriptContent = generateData.get("scriptContent")

    promptWithoutTeaching = f"please write me a  children story based on below information provided ," \
        f"this book has about {pages} pages,which means {pages} chapters, " \
        f"and the story is supposed to be about {scriptContent}" \
        f"the age range for the story is {ageRange} years old and the" \
        f" the story's style needs to be {storyType},and please include simple dialogue for " \
                            f"the main character that is understandable for children "

    promptWithTeaching = f"please write me a  children story based on below information provided ," \
        f"this book has about {pages} pages,which means {pages} charpters, " \
                         f"and the story is supposed to about {scriptContent} " \
        f"the age range for the story is {ageRange} and the" \
                         f" the story's style needs to be {storyType}, " \
        f" at the same time it should include some educational part that is about {teachingContent}   " \
        f"which is {storyType}, so that the children can learn sth while reading the story"\


    suffix_requirement = """Please include in your response the story title, story background, main characters . Then, 
    based on the story you generated, create a breakdown for each chapter including scenes, scene descriptions, 
    narration, and character dialogue. Finally, summarize the characters and design concept sketches, describing 
    their body type, appearance, clothing, hairstyle, etc., and convert these descriptions into prompts 
    understandable by Stable Diffusion. Also, convert the generated scene descriptions into prompts understandable by Stable 
    Diffusion. then combine these two prompts together which means if include all the character prompts into the scence
     prompts if the characters appear in the scene ,The final data should be in the following format: { 
    "storyTitle": "", "Characters": [{ "name": "", "description": "" }], "storyBackground": "", "storyOutline": [{ 
    "title": "", "content": "" }], "scence": [{ "scenceName": "", "scenceDescription": "", "narrationDialogue": "" 
    }], "scenceImagePrompts": [{ "scenceName": "", "prompt": "" }] } this is the characters example you can refer to  {"name":Mulan's Father, "description":"An 
    elderly man with a kind heart who worries for Mulan's safety".}, in the description you don't have to tell me how 
    this character look like ,I just need it to be like in the example that I give you Please note that the scence 
    and sceneImagePrompts should have scenceName corresponding to the title in storyOutline. For scenceImagePrompts, 
    please ensure to generate detailed descriptions of the actual image, not just the plot. For example, if there is 
    a village in the scene, describe what the village looks like, and specify the time of day, such as sunrise or 
    sunset. The more specific the description, the better, as general descriptions may not produce good results with 
    Stable Diffusion. Only provide the requested data,this is very important as it will be used directly in the front end."""

    if teachingContent and teachingContent != "":
        finalPrompt = promptWithTeaching + suffix_requirement
    else:

        finalPrompt = promptWithoutTeaching + suffix_requirement

    completion = client.chat.completions.create(
        model="gpt-4o",
        messages=[
            {"role": "system", "content": "You are a helpful assistant."},
            {"role": "user", "content": finalPrompt}
        ]
    )

    message = completion.choices[0].message.content
    print(message)

    return message


def generateChineseTranslation(story=None):
    prompt = f"Now, please translate the given story:{story} from English to Chinese" \

    suffix_requirement = "The story structure that I give you is this [ { scenceName: "", scenceDescription: "", narrationDialogue: "" }]" \
        "what you need to translate is the only narrationDialogue,once you done, replace the original narrationDialogue" \
        "with the translated narrationDialogue keep the rest part the same as before, then return me this data list,I only need the this list it self please do not return any other content cause I will need to " \
        "use this list in frontend directly"

    finalPrompt = prompt + suffix_requirement
    completion = client.chat.completions.create(
        model="gpt-4o",
        messages=[
            {"role": "system", "content": "You are a helpful assistant."},
            {"role": "user", "content": finalPrompt}
        ]
    )

    message = completion.choices[0].message.content
    return message


def checkPromptsForGeneratingVoice(dialogue):
    prompt = f"Now, please check whether the given sentence includes both narration and dialogue or multiple people speaking :{dialogue},for example" \
             f" this sentence:Luna: 'Follow me, I know the way through the forest!'Mia: 'Thanks, Luna! Let's stick together, everyone.' involves two people" \
             f"talking, they are Mia and Luna ,and this sentence:Lily wakes up from her dream and stands by the window, looking outside at the stars and moon. <br> Lily:" \
             f" \"I love you, Grandma.\"contains one narration and Lily talking, if the sentence that I give you are either case, please help me seperate them and then" \
             f"put them in a string array "\

    suffix_requirement = "The data you need to give me is   [""]" \
        ",I only need the this string array it self please do not return any other content cause I will need to " \
        "use this list in frontend directly"

    finalPrompt = prompt + suffix_requirement
    completion = client.chat.completions.create(
        model="gpt-4o",
        messages=[
            {"role": "system", "content": "You are a helpful assistant."},
            {"role": "user", "content": finalPrompt}
        ]
    )

    message = completion.choices[0].message.content
    print(message)
    return message
