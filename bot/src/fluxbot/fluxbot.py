from pinhook.bot import Bot
from ruamel.yaml import YAML

from fluxbot.nlp.model import Model

yaml = YAML(typ='safe')


class Fluxbot(Bot):

    def __init__(self, config_file):

        with open(config_file, 'r') as stream:
            try:
                self.config = yaml.load(stream)
            except yaml.YAMLError as exc:
                print(exc)

        super().__init__(
           plugin_dir='./src/fluxbot/plugins',
           use_prefix_for_plugins=True,
           **self.config['bot'])

        self.model = Model()
