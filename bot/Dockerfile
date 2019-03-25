FROM pytorch/pytorch

# Install dependencies
COPY requirements.txt /app/

WORKDIR /app
RUN pip install -r requirements.txt

# Install fluxbot
COPY . /app/
RUN python3 setup.py install

# Run fluxbot
CMD [ "python3", "run.py" ]
