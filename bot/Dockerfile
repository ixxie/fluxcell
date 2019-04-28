FROM pytorch/pytorch

# Install dependencies
COPY requirements.txt /bot/

WORKDIR /bot
RUN pip install -r requirements.txt

# Install fluxbot
COPY . /bot/
RUN python3 setup.py install

# Run fluxbot
CMD [ "python3", "run.py" ]
