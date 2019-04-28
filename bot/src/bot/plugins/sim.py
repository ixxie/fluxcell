import pinhook.plugin
from torch import dot, norm, squeeze


@pinhook.plugin.register('sim')
def similarity(msg):
    lines = msg.arg.split('//')
    sentences = [msg.bot.model.parse(line) for line in lines]
    vecs = [squeeze(s.embedding) for s in sentences]
    sim = dot(vecs[0], vecs[1])/(norm(vecs[0])*norm(vecs[1]))
    return pinhook.plugin.message(f'the similarity is {sim}')
