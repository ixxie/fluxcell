import pinhook.plugin


@pinhook.plugin.register('parse')
def parse(msg):

    sentence = msg.bot.model.parse(msg.arg)

    return pinhook.plugin.message(sentence.to_tagged_string())
