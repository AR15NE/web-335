# Hands-On 4.2: Python with MongoDB, Part I

## Explanation
This project connects to the `web335DB` MongoDB database and performs various operations as specified in the assignment instructions. The use of a virtual environment is necessary because the system-wide installation of packages was restricted. 

## Setup Instructions
**Create a virtual environment**:
   ```bash
   python3 -m venv venv

## Activate the virtual environment:
source venv/bin/activate

## Install the dependencies:
python -m pip install "pymongo[srv]"

## Run the Python script:
python rovey_usersp1.py