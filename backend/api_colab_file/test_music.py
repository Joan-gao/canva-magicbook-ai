import requests
import json
import base64
from io import BytesIO
from scipy.io.wavfile import write

# Define the URL of your API endpoint
url = "https://4626-34-125-42-159.ngrok-free.app/api/generate_music"

# Define the input data
input_data = {
    "input": "80s pop track with bassy drums and synth"
}

# Send a POST request to the API
response = requests.post(url, data=json.dumps(input_data), headers={"Content-Type": "application/json"})

# Check if the request was successful
if response.status_code == 200:
    # Get the JSON response
    result = response.json()
    
    # Get the base64-encoded audio string
    audio_base64 = result["output"]
    
    # Decode the base64 string to bytes
    audio_bytes = base64.b64decode(audio_base64)
    
    # Convert bytes to a WAV file and save it
    with open("output_audio.wav", "wb") as audio_file:
        audio_file.write(audio_bytes)
    
    print("Audio file saved successfully as 'output_audio.wav'.")
else:
    print("Failed to get a response from the API. Status code:", response.status_code)
    print("Response content:", response.content)
