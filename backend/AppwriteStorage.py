from appwrite.client import Client
from appwrite.input_file import InputFile
from appwrite.services.storage import Storage
from flask import Flask
import yaml
import random
import string


def generate_unique_id_v2(length=20):
    characters = string.ascii_lowercase + string.digits
    unique_id = ''.join(random.choice(characters) for _ in range(length))
    return unique_id


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
# project_id= app.config['COMMON']['APPWRITE_PROJECT_ID']
# bucket_id= app.config['COMMON']['APPWRITE_BUCKET_ID']
# audio_file_id= app.config['COMMON']['APPWRITE_AUDIO_FILE_ID']
# image_file_id= app.config['COMMON']['APPWRITE_IMAGE_FILE_ID']
project_id = "66ab7c0f0031bd4ae2ac"
image_bucket_id = "66ab98e800074cb72188"
audio_bucket_id = "66ae2161000aa12e92bf"
video_bucket_id = "66ae1dd8000f785812d9"


client = Client()
client.set_endpoint('https://cloud.appwrite.io/v1')  # Your API Endpoint
client.set_project(project_id)  # Your project ID
client.set_session('')  # The user session to authenticate with
storage = Storage(client)


def generate_unique_id_v2(length=20):
    characters = string.ascii_lowercase + string.digits
    unique_id = ''.join(random.choice(characters) for _ in range(length))
    return unique_id


def generateImageFileUrl(filePath):
    fileId = generate_unique_id_v2()
    try:
        result = storage.create_file(
            bucket_id=image_bucket_id,
            file_id=fileId,
            file=InputFile.from_path(filePath),

        )
        url = getFileUrl(fileId, image_bucket_id)
        return url
    except Exception as error:
        print(error)
        return None


def generateVideoFileUrl(filePath):
    fileId = generate_unique_id_v2()
    try:
        result = storage.create_file(
            bucket_id=video_bucket_id,
            file_id=fileId,
            file=InputFile.from_path(filePath),

        )
        url = getFileUrl(fileId, video_bucket_id)
        return url
    except Exception as error:
        print(error)
        return None


def generateAudioFileUrl(filePath):
    fileId = generate_unique_id_v2()
    try:
        result = storage.create_file(
            bucket_id=audio_bucket_id,
            file_id=fileId,
            file=InputFile.from_path(filePath),

        )
        url = getFileUrl(fileId, audio_bucket_id)
        return url
    except Exception as error:
        print(error)
        return None


def getFileUrl(file_id, bucket_id):
    base_url = "https://cloud.appwrite.io/v1/storage/buckets/"
    url = f"{base_url}{bucket_id}/files/{file_id}/view?project={project_id}&mode=admin"
    return url
