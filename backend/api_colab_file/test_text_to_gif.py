import requests
import base64

# Define the URL of the API endpoint
url = "https://4626-34-125-42-159.ngrok-free.app/api/generate_gif"  # Replace with your actual endpoint URL

# Define the payload
payload = {
    "input": "A girl smiling"
}

# Define the headers
headers = {
    'Content-Type': 'application/json'
}

# Send a POST request to the API endpoint
response = requests.post(url, json=payload, headers=headers)

# Check the response status code
if response.status_code == 200:
    # Get the base64 encoded GIF from the response
    gif_base64 = response.json().get("output")
    if gif_base64:
        print("Base64 Encoded GIF: ", gif_base64)
        
        # Optionally, save the GIF to a file
        with open("output.gif", "wb") as gif_file:
            gif_file.write(base64.b64decode(gif_base64))
        print("GIF saved as output.gif")
    else:
        print("No GIF returned.")
else:
    print(f"Request failed with status code {response.status_code}")
