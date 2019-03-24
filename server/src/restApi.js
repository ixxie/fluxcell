import { log } from './utils/logger';

module.exports = function restApi(app) {
  app.post('/api/postTest', (req, res) => {
    log('req.body', req.body);
    res.json({ payload: 'ok', status: 'postTest OK' });
  });

  app.get('/api/getTest', (req, res) => {
    log('req.query', req.query);
    res.json({ payload: 'ok', status: 'getTest OK' });
  });

  app.get('/api/getPostsByChannel', async (req, res) => {
    log('getting posts by channel', req.query.q);

    // const posts = await Space.getMessagesOfSpace(req.query.q);
    res.json({ payload: posts });
  });
};
