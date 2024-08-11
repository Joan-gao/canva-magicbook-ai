
from pydub import AudioSegment
from Dell import *
import requests
import json
import base64
from io import BytesIO
from PIL import Image
from AppwriteStorage import *

tone_settings = {
    "StoryTelling": {
        "temperature": 0.3, "top_P": 0.7, "top_K": 20, "oral": 1, "laugh": 0, "break_": 5
    },
    "Casual": {
        "temperature": 0.3, "top_P": 0.7, "top_K": 20, "oral": 1, "laugh": 0, "break_": 5
    },
    "Friendly": {
        "temperature": 0.3, "top_P": 0.7, "top_K": 20, "oral": 1, "laugh": 0, "break_": 5
    },
    "Cheerful": {
        "temperature": 0.3, "top_P": 0.7, "top_K": 20, "oral": 1, "laugh": 0, "break_": 5
    }
}
voice_character_seed = {
    "Male": {
        "Children": 492, "Young": 1768, "Middle-Aged": 2400, "Senior": 1997
    },
    "Female": {
        "Children": 1397, "Young": 1397, "Middle-Aged": 119, "Senior": 1393
    }
}
imageSize = {"Landscape": {"width": 1920, "height": 1080}, "Portrait": {
    "width": 720, "height": 1080}, "Square": {"width": 600, "height": 600}}
negative_prompt = """NSFW, (worst quality:2), (low quality:2), 
(normal quality:2), lowres, normal quality, ((monochrome)), 
((grayscale)), skin spots, acnes, skin blemishes, age spot, 
(ugly:1.331), (duplicate:1.331), (morbid:1.21), (mutilated:1.21),
 (tranny:1.331), mutated hands, (poorly drawn hands:1.5), blurry, (bad anatomy:1.21), 
 (bad proportions:1.331), extra limbs, (disfigured:1.331), (missing arms:1.331),
  (extra legs:1.331), (fused fingers:1.61051), (too many fingers:1.61051),
   (unclear eyes:1.331), lowers, bad hands, missing fingers, extra digit, bad hands, missing fingers, 
   (((extra arms and legs))), badhandv4, EasyNegativeV2, ng_deepnegative_v1_75t, verybadimagenegative_v1.3, 
   low quality, blurry, low resolution, deformed, distorted, watermark, overexposed, underexposed, noise, 
   artifacts, grainy, unrealistic, bad anatomy, extra limbs, text
"""

audio_fetch_url = "https://3962-34-126-157-248.ngrok-free.app/api/generate_audio"
image_fetch_url = "https://3962-34-126-157-248.ngrok-free.app/api/text_to_image"
video_fetch_url = "https://3962-34-126-157-248.ngrok-free.app/api/generate_video"
music_fetch_url = "https://4626-34-125-42-159.ngrok-free.app/api/generate_music"


def process_audio_prompt(story=None, language="English", style="StoryTelling", gender="Male", ageGroup="Middle-Aged"):
    # Translate the story

    if language != "English":
        message = generateChineseTranslation(story)
        chineseStory = json.loads(message)
        print(chineseStory)

    if language == "English":
        batch_process_audio(story, style, gender, ageGroup)
    else:
        batch_process_audio(chineseStory, style, gender, ageGroup)


def batch_process_audio(story, style, gender, ageGroup):
    audioFiles = {}
    params = tone_settings.get(style)
    temperature = params.get("temperature")
    print("temperature", temperature)
    top_P = params.get("top_P")
    print("Top p", top_P)
    top_K = params.get("top_K")
    print("Top k", top_K)
    oral = params.get("oral")
    print("oral", oral)
    laugh = params.get("laugh")
    print("laugh", laugh)
    break_ = params.get("break_")
    print("break_", break_)
    seed = voice_character_seed.get(gender).get(ageGroup)
    print("seed", seed)
    for scene in story:
        prompt = scene["narrationDialogue"]
        voiceUrls = generate_audio(
            prompt, temperature, top_P, top_K, oral, laugh, break_, seed)
        audioFiles[scene["scenceName"]] = voiceUrls
    print("AudioFiles", audioFiles)
    return audioFiles


def generate_audio(prompt, temperature, top_P, top_K, oral, laugh, break_, seed):
    voiceUrls = []

    # Process Prompt to see whether it contains multiple narration or dialogue

    message = checkPromptsForGeneratingVoice(prompt)
    prompts = json.loads(message)
    print("VoicePrompts", prompts)
    if prompts:
        for prompt in prompts:
            payload = {"input": prompt, "temperature": temperature, "top_P": top_P, "top_K": top_K, "oral": oral,
                       "laugh": laugh, "break_": break_, "seed": 836}
            # payload = {"input": prompt, "temperature": 0.3, "top_P": 0.7, "top_K": 20, "oral": 1, "laugh": 0, "break_": 5,
            #            "seed": 836}
            headers = {'Content-Type': 'application/json'}
            response = requests.post(
                audio_fetch_url, json=payload, headers=headers)

            if response.status_code == 200:
                audio_data = response.json().get("output")
                if audio_data:
                    audio = AudioSegment.from_file(
                        BytesIO(base64.b64decode(audio_data)), format="wav")
                    audio.export("output_audio.wav", format="wav")
                    # upload audio file to appwrite and get the url
                    voiceUrl = generateAudioFileUrl("output_audio.wav")
                    voiceUrls.append(voiceUrl)
                    print("Audio saved as output_audio.wav")

                else:
                    print("No audio returned.")

            else:
                print(
                    f"Request failed with status code {response.status_code}")
        if len(voiceUrls) == len(prompts):
            return voiceUrls
        else:
            return None
    else:
        return None


def process_generate_music(option, description):

    # 构建描述句子
    final_description = f"Please generate the {description}  music which the melody needs to be  {option}"

    input_data = {
        "input": final_description
    }

    # Send a POST request to the API
    response = requests.post(music_fetch_url, data=json.dumps(
        input_data), headers={"Content-Type": "application/json"})

    # Check if the request was successful
    if response.status_code == 200:
        # Get the JSON response
        result = response.json()

        # Get the base64-encoded audio string
        audio_base64 = result["output"]

        # Decode the base64 string to bytes
        audio_bytes = base64.b64decode(audio_base64)

        music_path = "output_music.wav"
        # Convert bytes to a WAV file and save it
        with open(music_path, "wb") as audio_file:
            audio_file.write(audio_bytes)

        musicUrl = generateAudioFileUrl(music_path)
        print("Audio file saved successfully as 'output_audio.wav'.")
        return musicUrl
    else:
        print("Failed to get a response from the API. Status code:",
              response.status_code)
        print("Response content:", response.content)
        return None


def batch_process_image(scenePrompt, imageStyle, size="Landscape"):
    imageFiles = {}
    for scene in scenePrompt:

        finalPrompt = scene["prompt"]+","+imageStyle
        width = imageSize[size]["width"]
        height = imageSize[size]["height"]
        imageUrl = generate_image(finalPrompt, height, width)
        imageFiles[scene["scenceName"]] = imageUrl
    print("Imagefiles", imageFiles)
    return imageFiles


def batch_process_videos(imageFiles):
    videoFiles = {}
    for image in imageFiles:

        videoUrl = generate_video(image["url"])
        videoFiles[image["scenceName"]] = videoUrl

    print("videoFiles", videoFiles)
    return videoFiles


def generate_image(prompt, height, width):

    input = {
        "prompt": prompt,
        "height": height,
        "width": width,
        # "negative_prompt": negative_prompt,
        "num_inference_steps": 25,
        "guidance_scale": 4.5,
        "num_images_per_prompt": 1
    }

    # Send a POST request to the API
    response = requests.post(image_fetch_url, data=json.dumps(
        input), headers={"Content-Type": "application/json"})

    # Check if the request was successful
    if response.status_code == 200:
        # Get the JSON response
        result = response.json()
        # Get the base64-encoded image string
        img_str = result["output"]

        # Decode the base64 string to bytes
        img_bytes = base64.b64decode(img_str)

        # Convert bytes to an image
        image = Image.open(BytesIO(img_bytes))

        # Save the image
        image.save("output_image.png")

        print("Image saved successfully as 'output_image.png'.")

        imgUrl = generateImageFileUrl("output_image.png")

        return imgUrl
    else:
        print("Failed to get a response from the API. Status code:",
              response.status_code)
        print("Response content:", response.content)
        return None


def generate_video(imageUrl):

    input = {
        "imageUrl": imageUrl,

    }

    # Send a POST request to the API
    response = requests.post(video_fetch_url, data=json.dumps(
        input), headers={"Content-Type": "application/json"})

    # Check if the request was successful
    if response.status_code == 200:
        # Get the JSON response
        result = response.json()
        # Get the video url
        videoUrl = result["output"]

        print("Get video url successfully.")

        return videoUrl
    else:
        print("Failed to get a response from the API. Status code:",
              response.status_code)
        print("Response content:", response.content)
        return None
