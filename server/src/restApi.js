import { log } from './utils/logger';
import { createCell, createSpace, createUser, createMessage, createChannel } from './db/helper';

module.exports = function restApi(app) {
  app.post('/api/postTest', (req, res) => {
    log('req.body', req.body);
    res.json({ payload: 'ok', status: 'postTest OK' });
  });

  app.get('/api/getTest', (req, res) => {
    log('req.query', req.query);
    res.json({ payload: 'ok', status: 'getTest OK' });
  });

  app.post('/api/createSpace', async (req, res) => {
    log('creating new Space', req.body);
    const r = await createSpace({ name: req.body.name });

    res.json({ payload: r });
  });

  app.post('/api/createChannel', async (req, res) => {
    log('creating new Channel', req.query.q);
    const { spaceId, title, topic } = req.body;
    const r = await createChannel({ spaceId, title, topic });

    res.json({ payload: r });
  });

  app.post('/api/createUser', async (req, res) => {
    log('creating new User', req.body);
    const { userName, email, spaceId } = req.body;

    const r = await createUser({ userName, email, spaceId });

    res.json({ payload: r });
  });

  app.post('/api/createMessage', async (req, res) => {
    log('creating new Message', req.body);
    const { userId, channelId, body } = req.body;

    const r = await createMessage({ userId, channelId, body });

    res.json({ payload: r });
  });

  app.get('/api/getSpaceByName', (req, res) => {
    log('req.query', req.query);
    res.json({ payload: 'ok', status: 'getTest OK' });
  });
};
