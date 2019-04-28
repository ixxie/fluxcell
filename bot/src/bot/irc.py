from pinhook.bot import Bot
from ruamel.yaml import YAML

yaml = YAML(typ='safe')


class IrcBot(Bot):

    def __init__(self, config_file):

        with open(config_file, 'r') as stream:
            try:
                self.config = yaml.load(stream)
            except yaml.YAMLError as exc:
                print(exc)

        super().__init__(
           plugin_dir='./src/bot/plugins',
           use_prefix_for_plugins=True,
           **self.config['bot'])
