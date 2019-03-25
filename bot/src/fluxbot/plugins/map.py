import pinhook.plugin
from imgurpython import ImgurClient

from fluxbot.nlp.tensors import PCA, plot_embeddings, normalize_tensors
from fluxbot.nlp.parse import parse_veclang


@pinhook.plugin.register('mindmap')
def mindmap(msg):

    # creds
    creds = msg.bot.config['imgur']
    client = ImgurClient(creds['id'], creds['secret'])

    # parsing
    text, arrows = parse_veclang(msg.arg)
    sentences = [msg.bot.model.parse(line) for line in text]
    tensors = [s.get_embedding() for s in sentences]

    # tensor processing
    norm_tensors = normalize_tensors(tensors)
    flat_tensors = PCA(norm_tensors)

    # plot map
    filename = plot_embeddings(text, flat_tensors, arrows)
    response = client.upload_from_path(filename, config=None, anon=True)
    link = response['link']

    return pinhook.plugin.message(f'Wordmap posted to {link}')
