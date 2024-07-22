
## 1. Generate GIF API

### Endpoint Description

- **URL:** `/api/generate_gif`
- **Method:** `POST`
- **Auth Required:** No
- **Permissions Required:** None

### Data Model

```json
{
  "input": "A short description for the GIF you want to generate."
}
```

### Request Fields

- `input` (string): A brief description of the scene or emotion you want to capture in a GIF.

### Response

The response includes a base64 encoded string of the generated GIF.

```json
{
  "output": "base64-encoded-gif-string"
}
```

### Response Fields

- `output` (string): A base64 encoded string of the GIF generated from the input text.

### Usage Example

```python
import requests

url = 'http://your-api-url/api/generate_gif'
data = {'input': 'Excited crowd cheering at a concert.'}

response = requests.post(url, json=data)

if response.status_code == 200:
    print("GIF generated successfully.")
    gif_data = response.json().get('output')
else:
    print("Failed to generate GIF. Status:", response.status_code)
```

## 2. Generate Music API

### Endpoint Description

- **URL:** `/api/generate_music`
- **Method:** `POST`
- **Auth Required:** No
- **Permissions Required:** None

### Data Model

```json
{
  "input": "Lyrics or mood for the music you want to generate."
}
```

### Request Fields

- `input` (string): Lyrics or a description of the mood/scene for which you want music to be generated.

### Response

The response includes a base64 encoded string of the generated music.

```json
{
  "output": "base64-encoded-music-string"
}
```

### Response Fields

- `output` (string): A base64 encoded audio file generated from the input text.

### Usage Example

```python
import requests

url = 'http://your-api-url/api/generate_music'
data = {'input': 'A calm morning scene with birds chirping.'}

response = requests.post(url, json=data)

if response.status_code == 200:
    print("Music generated successfully.")
    music_data = response.json().get('output')
else:
    print("Failed to generate music. Status:", response.status_code)
```

# Text to Image API

The `/api/text_to_image` endpoint provides an interface for generating images from textual descriptions using the Stable Diffusion model. This API is built using FastAPI and is designed to transform descriptions into vivid images.

## Endpoint Description

- **URL:** `/api/text_to_image`
- **Method:** `POST`
- **Auth Required:** No
- **Permissions Required:** None

## Data Model

The data model for requests is simple:

```json
{
  "input": "A textual description of the image you want to generate."
}
```

### Request Fields

- `input` (string): A detailed description of the image you wish to generate.

## Response

The response will contain a base64 encoded string of the generated image, which can be rendered directly into an HTML image element or saved as an image file.

```json
{
  "output": "base64-encoded-image-string"
}
```

### Response Fields

- `output` (string): A base64 encoded JPEG/PNG of the image generated from the input text.

## Usage Example

### Request

Here's how you can call this endpoint using Python's requests library:

```python
import requests

url = 'http://your-api-url/api/text_to_image'
my_data = {'input': 'A serene beach with a sunset in the background.'}

response = requests.post(url, json=my_data)

if response.status_code == 200:
    print("Image generated successfully.")
    image_data = response.json().get('output')
else:
    print("Failed to generate image. Status:", response.status_code)
```

# Generate Audio API

The `/api/generate_audio` endpoint is designed to synthesize audio from textual input using advanced TTS (Text-To-Speech) settings. This endpoint utilizes the `chatTTS` model to offer granular control over voice modulation parameters.

## Endpoint Description

- **URL:** `/api/generate_audio`
- **Method:** `POST`
- **Auth Required:** No
- **Permissions Required:** None

## Data Model

The API expects the following JSON structure in the POST request:

```json
{
  "input": "Your text here",
  "temperature": 0.5,
  "top_P": 0.8,
  "top_K": 10,
  "oral": 2,
  "laugh": 1,
  "break_": 3
}
```

### Request Fields

- `input` (string): The text to be converted into speech.
- `temperature` (float): Controls the randomness in the output, range 0.00001 to 1.
- `top_P` (float): Controls the nucleus sampling decoding, range 0.1 to 0.9.
- `top_K` (int): Controls the top-k filtering, range 1 to 20.
- `oral` (int): Indicates the level of oral expression.
- `laugh` (int): Indicates the frequency of laughter in the speech.
- `break_` (int): Controls the frequency of pauses in the speech.

## Response

The response will contain a base64 encoded string of the generated audio, which can be decoded and played or saved as an audio file.

```json
{
  "output": "base64-encoded-audio-string"
}
```

### Response Fields

- `output` (string): A base64 encoded string of the generated audio.

## Usage Example

### Request

Here's how you can call this endpoint using Python's requests library:

```python
import requests

url = 'http://your-api-url/api/generate_audio'
my_data = {
    "input": "Hello world",
    "temperature": 0.5,
    "top_P": 0.8,
    "top_K": 10,
    "oral": 2,
    "laugh": 1,
    "break_": 3
}

response = requests.post(url, json=my_data)

if response.status_code == 200:
    print("Audio generated successfully.")
    audio_data = response.json().get('output')
else:
    print("Failed to generate audio. Status:", response.status_code)
```

### Playing the Audio (Python)

To play the audio in Python:

```python
from io import BytesIO
import base64
from pydub import AudioSegment
from pydub.playback import play

audio_bytes = base64.b64decode(audio_data)
audio_stream = BytesIO(audio_bytes)
audio_segment = AudioSegment.from_file(audio_stream, format="wav")
play(audio_segment)
```

