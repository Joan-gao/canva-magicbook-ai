import requests
import base64
from io import BytesIO
from pydub import AudioSegment

def generate_audio(prompt):
    url = "https://db89-34-125-7-185.ngrok-free.app/api/generate_audio"  # Replace with your actual ngrok URL
    payload = {"input": prompt, "temperature": 0.7, "top_P": 0.5, "top_K": 10, "oral": 4, "laugh": 0, "break_": 5, "seed": 1000}
    headers = {'Content-Type': 'application/json'}
    response = requests.post(url, json=payload, headers=headers)

    if response.status_code == 200:
        audio_data = response.json().get("output")
        if audio_data:
            audio = AudioSegment.from_file(BytesIO(base64.b64decode(audio_data)), format="wav")
            audio.export("output_audio.wav", format="wav")
            print("Audio saved as output_audio.wav")
        else:
            print("No audio returned.")
    else:
        print(f"Request failed with status code {response.status_code}")

# Example usage
user_prompt = input("Enter the text for which you want to generate audio: ")
generate_audio(user_prompt)
