import time

from flask import Flask, request, jsonify, abort
from flask_cors import CORS
from Midjounery import *
from Dell import *
from HostingModel import *

app = Flask(__name__)


CORS(app, resources={r"/*": {"origins": "*"}})


@app.route('/', methods=['POST'])
def index():
    user_message = request.json.get('message')
    return jsonify({'response': user_message})


@app.route("/generate", methods=['POST'])
def generate():

    response = {}
    prompt = request.json.get('message')
    print(prompt)
    if prompt is not None:
        # response = dellGenerate(prompt)
        response = midjourneyGenerate(prompt)
    else:
        response['error'] = 'Invalid Input,please check your  prompt'
    return jsonify({'response': response})


@app.route("/generate/script", methods=['POST'])
def generateModify():

    scriptData = request.json.get('script')
    print("Prompt: ", scriptData)
    if scriptData is None:
        return jsonify({'status': 'error', 'errorMessage': "Prompt is invalid"})
    time.sleep(10)
    chapters = generateCharptersForTaleWaver(scriptData)
#     chapters=[
#   {
#     "chapterTitle": "Chapter 1: Allen's Grand Adventure",
#     "chapterContent": "Once upon a time in a quaint village, lived a young girl named Allen. Allen was curious and loved exploring the world around her. With her trusty pet dog, Max, by her side, Allen set off on a grand adventure beyond the village’s boundaries. As they ventured through the forest, they discovered sparkling streams and hidden trails."
#   },
#   {
#     "chapterTitle": "Chapter 2: The Enchanted Woods",
#     "chapterContent": "Allen and Max entered the Enchanted Woods. The trees whispered secrets and the air was filled with magic. Suddenly, they came across a riddle carved into a tree trunk. Allen had to solve it to continue their journey. With Max's barking and wagging providing encouragement, Allen cracked the riddle and a secret path appeared before them."
#   },
#   {
#     "chapterTitle": "Chapter 3: The Friendly Fairy",
#     "chapterContent": "Walking down the secret path, Allen and Max met a friendly fairy named Lila. Lila needed help finding her lost wand. Allen and Max agreed to help and they searched high and low, finally finding the wand in a nest of twinkling leaves. Lila thanked them and gifted Allen a charm that would grant them courage on their journey."
#   },
#   {
#     "chapterTitle": "Chapter 4: The Bridge of Fear",
#     "chapterContent": "Allen and Max reached a rickety old bridge swaying over a deep gorge. Max whimpered in fear, and Allen’s heart pounded. Remembering Lila’s charm, Allen felt a surge of courage. She held Max tight and started crossing the bridge. Step by step, they made it to the other side, their bravery paying off."
#   },
#   {
#     "chapterTitle": "Chapter 5: The Mysterious Cave",
#     "chapterContent": "Beyond the bridge was a dark, mysterious cave. Allen and Max entered cautiously, their way lit by the glow of Lila’s charm. Inside the cave, they found ancient drawings and glittering treasures. But the real treasure was a message of wisdom - 'Courage and kindness will always guide your way.'"
#   },
#   {
#     "chapterTitle": "Chapter 6: Return to the Village",
#     "chapterContent": "With new experiences and lessons learned, Allen and Max made their way back to the village. The villagers were amazed by their tales. Allen shared the wisdom from the cave, inspiring everyone to be brave and kind. Allen and Max's adventure taught that challenges can be overcome with courage, curiosity, and companionship."
#   }
# ]

    if chapters:
        return jsonify({'status': 'success', 'chapters': chapters})
    else:
        return jsonify({'status': 'error', 'errorMessage': "Generation Chapters failed please try again!"})


@app.route("/generate/story", methods=['POST'])
def generateStory():

    generateData = request.json.get('generatePrompt')
    print("Prompt: ", generateData)
    if generateData is None:
        return jsonify({'status': 'error', 'errorMessage': "Prompt is invalid"})

    # message=generateChaptersForChildBook(generateData)
    # data = json.loads(message)
    time.sleep(10)

    data = {
        "storyTitle": "The Little Mermaid's Adventure",
        "Characters": [
            {"name": "Marina",
             "description": "A small, adventurous mermaid with shimmering scales and a kind heart "},
            {"name": "Lily", "description": "A young human girl who loves the beach and is curious about the ocean."},

        ],
        "storyBackground": "In a magical underwater kingdom, a curious little mermaid named Marina dreams of "
                           "exploring the human world. One day, she bravely leaves her ocean home and ventures onto "
                           "the land, where she meets a human girl named Lily. Together, they explore, play, "
                           "and learn about each other's worlds, forming a unique and special friendship.",

        "storyOutline": [
            {"title": "Chapter 1: Introduction",
             "content": "Marina's underwater life and her dream to explore the human world."},
            {"title": "Chapter 2: The Adventure Begins",
             "content": "Marina's journey to the shore and her first encounter with Lily."},
            {"title": "Chapter 3: A Day of Fun",
             "content": "Marina and Lily spend the day exploring, playing, and sharing stories."},
            {"title": "Chapter 4: A Special Friendship",
             "content": "The girls learn about each other's worlds and become best friends."},
            {"title": "Chapter 5: Goodbye for Now",
             "content": "Marina returns to the ocean but promises to visit Lily again."}
        ],

        "scence": [
            {
                "scenceName": "Underwater Kingdom",
                "scenceDescription": "A vibrant, colorful underwater city with fish and coral.",
                "narrationDialogue": "In the deep blue sea, a little mermaid named Marina lived in a beautiful "
                                     "kingdom filled with fish and coral. She often dreamt of the world above the "
                                     "waves, wondering what it would be like to walk on land and meet humans."
            },
            {
                "scenceName": "Marina's Journey",
                "scenceDescription": "Marina swimming towards the ocean surface, looking excited.",
                "narrationDialogue": "One sunny day, with her heart full of curiosity and excitement, Marina decided to explore the human world. She swam up, up, up, until she reached the shore, where the water kissed the sand."
            },
            {
                "scenceName": "Meeting Lily",
                "scenceDescription": "Marina peeking from behind a rock, Lily building a sandcastle.",
                "narrationDialogue": "As Marina peeked from behind a rock, she saw a girl building a sandcastle. The girl looked kind and friendly. Gathering her courage, Marina spoke. Marina: 'Hello! My name is Marina. What's yours?' Lily: 'I'm Lily! Wow, you're a real mermaid!'"
            },
            {
                "scenceName": "Beach Exploration",
                "scenceDescription": "Marina and Lily playing with seashells, running along the beach.",
                "narrationDialogue": "The two new friends laughed and played together. Marina showed Lily how to find the prettiest seashells, while Lily taught Marina how to build a sandcastle. They ran along the beach, splashing in the waves and discovering treasures washed ashore."
            },
            {
                "scenceName": "Sharing Stories",
                "scenceDescription": "Sitting together, Marina tells stories about the sea, Lily talks about her school.",
                "narrationDialogue": "As they sat together on a big rock, Marina shared tales of the underwater world, filled with dancing dolphins and singing whales. Lily listened in awe and then shared her own stories about her school and life on land. Lily: 'We learn about the ocean at school, but I've never met a mermaid before!' Marina: 'And I've never met a human! It's so exciting to learn about each other's worlds.'"
            },
            {
                "scenceName": "Saying Goodbye",
                "scenceDescription": "Marina waving from the water, Lily waving from the shore.",
                "narrationDialogue": "As the sun began to set, painting the sky with orange and pink hues, Marina knew it was time to return to the sea. With a heavy heart but a bright smile, she waved goodbye to her new friend. Marina: 'I'll come back to visit!' Lily: 'I can't wait!'"
                                     " Marina swam back into the deep, knowing she had made a friend for life."
            }
        ],

        "scenceImagePrompts": [
            {
                "scenceName": "Underwater Kingdom",
                "prompt": "A vibrant, colorful underwater city teeming with a variety of fish and coral. The scene features Marina, a petite and slender mermaid, with a long, graceful tail adorned with bright, aqua-blue scales that shimmer under the soft underwater light. She has pale skin and large, expressive eyes filled with curiosity. Marina's long, flowing sea-green hair is decorated with small shells and pearls. She wears a top made of soft seaweed and shells. The background showcases a bustling kingdom filled with aquatic creatures, vibrant corals, and plants, capturing the magical essence of her underwater home"
            },
            {
                "scenceName": "Marina's Journey",
                "prompt": "Marina, the adventurous little mermaid, swims towards the ocean surface with a look of excitement and wonder. Her shimmering aqua-blue scales and flowing sea-green hair contrast against the deep blue of the ocean. The scene shows her breaking through the water's surface, where the sunlight dances on the waves. The background includes the tranquil ocean surface meeting the bright, sandy shore, setting the stage for her first encounter with the human world."
            },
            {
                "scenceName": "Meeting Lily",
                "prompt": "On a sunny beach, Marina peeks from behind a rock, her sea-green hair gently flowing around her. She looks curiously at Lily, a young human girl with light skin, freckles, and short, curly blonde hair. Lily, dressed in a floral summer dress and barefoot, is building a sandcastle. The scene captures the moment of discovery and wonder, with Marina partially submerged in water and Lily on the sandy beach. The background includes the gentle waves of the ocean and a bright, clear sky, highlighting the serene and inviting atmosphere of their meeting place."
            },
            {
                "scenceName": "Beach Exploration",
                "prompt": "Marina and Lily play together on the beach. Marina, with her shimmering scales and sea-green hair, explores the shore while holding seashells. Lily, full of energy, runs alongside her, barefoot and with a carefree spirit. The two friends laugh and enjoy the warm sun, with the ocean waves gently lapping against the shore. The background features the expansive sandy beach, the sparkling blue ocean, and a clear sky, capturing the joy and excitement of their newfound friendship."
            },
            {
                "scenceName": "Sharing Stories",
                "prompt": "Marina and Lily sit together on a large rock, sharing stories. Marina, with her sea-green hair adorned with shells, talks animatedly about the underwater world. Lily listens intently, her bright eyes wide with wonder, her summer dress fluttering in the sea breeze. The background shows the peaceful beach and the vast ocean, with the sun beginning to set, casting a warm glow over the scene. This tranquil moment captures the bonding between the two, as they exchange tales from their different worlds."
            },
            {
                "scenceName": "Saying Goodbye",
                "prompt": "As the sun sets, painting the sky with orange and pink hues, Marina waves goodbye from the water, her tail glistening in the fading light. Her expressive eyes reflect a mix of sadness and hope. On the shore, Lily waves back with a smile, her curly blonde hair illuminated by the sunset. She stands barefoot on the sand, the waves gently caressing her feet. The background showcases the calm ocean and the colorful sky, symbolizing the end of a magical day and the promise of future reunions."
            },

        ]
    }
    if data:
        return jsonify({'status': 'success', 'story': data})
    else:
        return jsonify({'status': 'error', 'errorMessage': "Generation Chapters failed please try again!"})


@app.route("/generate/image", methods=['POST'])
def generateImages():

    scencePrompt = request.json.get('scenePrompts')
    imageStyle = request.json.get('imageStyle')
    size = request.json.get('size')
    print("ScencePrompt", scencePrompt)
    if scencePrompt is None:
        return jsonify({'status': 'error', 'errorMessage': "Generate Image Failed,Please try again"})

    # imageData=batch_process_image(scencePrompt,imageStyle,size)
    time.sleep(10)
    imageData = {"Underwater Kingdom": "https://cloud.appwrite.io/v1/storage/buckets/66ab98e800074cb72188/files/66b1a22b00393cd70848/view?project=66ab7c0f0031bd4ae2ac&mode=admin",
                 "Marina's Journey":
                     "https://cloud.appwrite.io/v1/storage/buckets/66ab98e800074cb72188/files/66b1a2d4001c089c7831/view?project=66ab7c0f0031bd4ae2ac&mode=admin",
                 "Meeting Lily":
                     "https://cloud.appwrite.io/v1/storage/buckets/66ab98e800074cb72188/files/66b1a23800366734fa77/view?project=66ab7c0f0031bd4ae2ac&mode=admin",
                 "Beach Exploration": "https://cloud.appwrite.io/v1/storage/buckets/66ab98e800074cb72188/files/66b1a245002386c1ae25/view?project=66ab7c0f0031bd4ae2ac&mode=admin",
                 "Sharing Stories": "https://cloud.appwrite.io/v1/storage/buckets/66ab98e800074cb72188/files/66b1a2c6002a8a528214/view?project=66ab7c0f0031bd4ae2ac&mode=admin",
                 "Saying Goodbye": "https://cloud.appwrite.io/v1/storage/buckets/66ab98e800074cb72188/files/66b1a3730027154f2ca5/view?project=66ab7c0f0031bd4ae2ac&mode=admin"
                 }

    if imageData:
        return jsonify({'status': 'success', 'imageData': imageData})
    else:
        return jsonify({'status': 'error', 'errorMessage': "Generation Chapters failed please try again!"})


@app.route("/generate/voice", methods=['POST'])
def generateVoices():

    story = request.json.get('story')
    language = request.json.get("language")
    style = request.json.get("style")
    gender = request.json.get("gender")
    ageGroup = request.json.get("ageGroup")
    print("story: ", story)
    print("voice style ", style)
    if story is None:
        return jsonify({'status': 'error', 'errorMessage': "Generate Voice Failed,Please try again"})

    # voiceData=process_audio_prompt(story=story,language=language,style=style,gender=gender,ageGroup=ageGroup)
    time.sleep(10)
    voiceData = {"Underwater Kingdom": ["https://cloud.appwrite.io/v1/storage/buckets/66ae2161000aa12e92bf/files/66b1a04f00286f161168/view?project=66ab7c0f0031bd4ae2ac&mode=admin"],
                 "Marina's Journey": ["https://cloud.appwrite.io/v1/storage/buckets/66ae2161000aa12e92bf/files/66b19fc70001189c8435/view?project=66ab7c0f0031bd4ae2ac&mode=admin"],
                 "Meeting Lily": ["https://cloud.appwrite.io/v1/storage/buckets/66ae2161000aa12e92bf/files/66b19fd6000e17a6336f/view?project=66ab7c0f0031bd4ae2ac&mode=admin",
                                  "https://cloud.appwrite.io/v1/storage/buckets/66ae2161000aa12e92bf/files/66b19fe000128a9bbf0f/view?project=66ab7c0f0031bd4ae2ac&mode=admin",
                                  "https://cloud.appwrite.io/v1/storage/buckets/66ae2161000aa12e92bf/files/66b19fe8002e80c06069/view?project=66ab7c0f0031bd4ae2ac&mode=admin"],
                 "Beach Exploration": ["https://cloud.appwrite.io/v1/storage/buckets/66ae2161000aa12e92bf/files/66b19ff7002b52029581/view?project=66ab7c0f0031bd4ae2ac&mode=admin"],
                 "Sharing Stories": ["https://cloud.appwrite.io/v1/storage/buckets/66ae2161000aa12e92bf/files/66b1a04100146a619867/view?project=66ab7c0f0031bd4ae2ac&mode=admin",
                                     "https://cloud.appwrite.io/v1/storage/buckets/66ae2161000aa12e92bf/files/66b1a02700047fc7f7fe/view?project=66ab7c0f0031bd4ae2ac&mode=admin",
                                     "https://cloud.appwrite.io/v1/storage/buckets/66ae2161000aa12e92bf/files/66b1a037002a491548d2/view?project=66ab7c0f0031bd4ae2ac&mode=admin"],
                 "Saying Goodbye": ["https://cloud.appwrite.io/v1/storage/buckets/66ae2161000aa12e92bf/files/66b1a01d0024a0eb9186/view?project=66ab7c0f0031bd4ae2ac&mode=admin",
                                    "https://cloud.appwrite.io/v1/storage/buckets/66ae2161000aa12e92bf/files/66b1a010000e99767fa7/view?project=66ab7c0f0031bd4ae2ac&mode=admin",
                                    "https://cloud.appwrite.io/v1/storage/buckets/66ae2161000aa12e92bf/files/66b1a003002dd6396b12/view?project=66ab7c0f0031bd4ae2ac&mode=admin"]}

    if voiceData:
        return jsonify({'status': 'success', 'voiceData': voiceData})
    else:
        return jsonify({'status': 'error', 'errorMessage': "Generation Chapters failed please try again!"})


@app.route("/generate/animations", methods=['POST'])
def generateAnimation():

    imageFiles = request.json.get('images')

    print("imageFiles: ", imageFiles)

    if imageFiles is None:
        return jsonify({'status': 'error', 'errorMessage': "Generate Voice Failed,Please try again"})

    time.sleep(10)
    # videoData=batch_process_videos(imageFiles)
    videoData = {
        "Underwater Kingdom": "https://cloud.appwrite.io/v1/storage/buckets/66ae1dd8000f785812d9/files/66b1aad7003a0906d6aa/view?project=66ab7c0f0031bd4ae2ac&mode=admin",
        "Marina's Journey":
            "https://cloud.appwrite.io/v1/storage/buckets/66ae1dd8000f785812d9/files/66b1aae00020975f648d/view?project=66ab7c0f0031bd4ae2ac&mode=admin",
        "Meeting Lily":
            "https://cloud.appwrite.io/v1/storage/buckets/66ae1dd8000f785812d9/files/66b1abc40030e4f27ad3/view?project=66ab7c0f0031bd4ae2ac&mode=admin",
        "Beach Exploration": "https://cloud.appwrite.io/v1/storage/buckets/66ae1dd8000f785812d9/files/66b1aaec0030e1686864/view?project=66ab7c0f0031bd4ae2ac&mode=admin",
        "Sharing Stories": "https://cloud.appwrite.io/v1/storage/buckets/66ae1dd8000f785812d9/files/66b1aabf0007283100e0/view?project=66ab7c0f0031bd4ae2ac&mode=admin",
        "Saying Goodbye": "https://cloud.appwrite.io/v1/storage/buckets/66ae1dd8000f785812d9/files/66b1aace000e97f1441b/view?project=66ab7c0f0031bd4ae2ac&mode=admin"
    }

    if videoData:
        return jsonify({'status': 'success', 'videoData': videoData})
    else:
        return jsonify({'status': 'error', 'errorMessage': "Generation Chapters failed please try again!"})


@app.route("/generate/music", methods=['POST'])
def generateMusic():

    option = request.json.get('option')
    description = request.json.get('description')

    print("option: ", option)
    print("description: ", description)
    time.sleep(10)
    # musicData=process_generate_music(option,description)

    musicData = "https://cloud.appwrite.io/v1/storage/buckets/66ae2161000aa12e92bf/files/66b1aa9500348e65b1f3/view?project=66ab7c0f0031bd4ae2ac&mode=admin"

    if musicData:
        return jsonify({'status': 'success', 'musicData': musicData})
    else:
        return jsonify({'status': 'error', 'errorMessage': "Generation Chapters failed please try again!"})
