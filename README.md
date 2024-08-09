<h1 align="center">MagicBook: Your Story Journey with AI🔮🌈</h1>

## **Introduction**

This project developed an AI-powered Canva App that offers a one-stop solution for creating children's books, including story writing, storyboard drawing, animation, voice interaction, and music composition. Final outputs seamlessly integrate with Canva's design interface, enabling users to edit and enhance content before exporting. This app simplifies the production of unique stories, helping to build cherished memories for children.

## **Technologies Use**
1. **Frontend**: React, Typescript, JavaScript
2. **UI Libraries**: Canva UI
3. **Backend**: Flask, Canva SDK
4. **AI Development**: Pytorch, Jupyter Notebook
5. **AI Models**: ChatGPT API(text2Text), Stable Diffusion(text2Img, img2Img), LoRA(fine-tuning model), AnimateDiffusion(text2Animation, img2Animation), ChatTTS(text2Speech), and MusicGen(text2Music)
6. **Hosting**: Google Colab, Heroku

## **Core Features**

1. **HomePage**

- **Functionality**: Display two subpages: "Discover" and "Generate." In "Discover," allow users to view generated stories, images, videos, audio, and text, with the option to directly import them into Canva for editing. Use "Generate" to initiate the story creation process.

2. **ScriptPage**

- **Functionality**: Start with generating the story script. Require users to fill in the story description, target age range, story style, teaching content, and chapter length. After clicking "Generate," display the story background, main characters, and the content of each chapter in the outline. Provide options to regenerate or continue to the illustration stage.
  
3. **DesignPage**

- **Functionality**: Proceed to the illustration stage. Let users select the art style and image dimensions to generate story illustrations. Allow generated images to be converted into animated videos. After completion, enable users to continue to the voiceover stage.

4. **VoiceoverPage**

- **Functionality**: Choose the language, gender, age range, and voice style for the voiceover. After clicking "Generate," create the voiceover. Once completed, guide users to the music generation stage.

5. **MusicPage**

- **Functionality**: Define the music style, describe the content, and choose whether it should be instrumental. After clicking "Generate," complete the music creation process.

6. **SummaryPage**

- **Functionality**: Display all generated content in chapters, including images, videos, story text, character dialogues, narration, and background music, allowing users to review and apply them to Canva's design interface.

## Technical Highlights

1. **Comprehensive AI Integration**: Utilizes multiple AI models, including ChatGPT for text generation, Stable Diffusion for image creation, AnimateDiffusion for animations, ChatTTS for voiceovers, and MusicGen for background music, providing an all-in-one solution for creating children’s books.

2. **Seamless Canva Integration**: Directly connects generated content with Canva's design interface, enabling users to easily edit and enhance their stories, images, and videos within Canva before exporting the final product.

3. **User-Friendly Workflow**: Offers a streamlined, step-by-step process for generating scripts, illustrations, voiceovers, and music, making it accessible for users of all levels, including beginners, to create unique, interactive children's audiobooks.

## How to Run

1. **Frontend**

- Install dependencies

```bash
npm install
```

- Start the frontend server

```bash
npm run start
```

2. **Backend**

- Navigate to the backend directory

```bash
cd backend
```

- Create a virtual environment

```bash
python3 -m venv .venv
```

- Activate the virtual environment

```bash
.venv\Scripts\activate  # Windows
source .venv/bin/activate  # macOS/Linux
```

- Install dependencies

```bash
pip install -r requirements.txt
```

- Run the Flask application

```bash
flask --app ChatPage run
```

## Links

- ([Devpost](https://youtu.be/8D57UD3cWfo?si=xhHj6ELR5Tlrhy4y))
- ([Demo Video](https://youtu.be/8D57UD3cWfo?si=xhHj6ELR5Tlrhy4y))

## Contributors

- **Xinyi Gao** [[Linkedin](https://www.linkedin.com/in/xinyi-gao-cn/)][[GitHub](https://github.com/Joan-gao)]: Product Design, UI/UX Design, Front-end Development, AI Model Testing
- **Viet Doan** [[Linkedin](https://www.linkedin.com/in/viet-doan-vqd/)][[GitHub](https://github.com/viet-doan)]: UI/UX Design, Front-end Development
- **Li Cui** [[Linkedin](https://www.linkedin.com/in/li-cui-73809027b)][[GitHub](https://github.com/amandaliberaann)]: Backend Development, AI Model Testing
- **Jiacheng Li** [[Linkedin](https://www.linkedin.com/in/jiacheng-li-b17b41242/)][[GitHub](https://github.com/ljc0359)]: AI Development
