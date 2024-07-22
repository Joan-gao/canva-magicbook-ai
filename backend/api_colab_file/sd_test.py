import requests
import json
import base64
from io import BytesIO
from PIL import Image

# Define the URL of your API endpoint
url = "https://4626-34-125-42-159.ngrok-free.app/api/text_to_image"

# Define the input data
input_data = {
    "input": "Sydney City",
    "para": 1
}

# Send a POST request to the API
response = requests.post(url, data=json.dumps(input_data), headers={"Content-Type": "application/json"})

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
else:
    print("Failed to get a response from the API. Status code:", response.status_code)
    print("Response content:", response.content)
