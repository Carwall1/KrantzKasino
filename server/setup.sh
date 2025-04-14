#!/bin/bash

# Exit if any command fails
set -e

echo "Creating python virtual env"
python -m venv krantz
source krantz/bin/activate

echo "installing dependencies from requirements.txt"
pip install -r requirements.txt