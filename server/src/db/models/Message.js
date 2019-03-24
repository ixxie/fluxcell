import BaseModel from './BaseModel';
import PostedIn from './PostedIn';

export default class Message extends BaseModel {
  constructor(body) {
    super('message', body);
  }

  async add({ userId, createEdge = true }) {
    const message = await super.add();

    if (createEdge) {
      const postedIn = new PostedIn({ _from: message._id, _to: userId });
      await postedIn.add();
    }

    return message;
  }
}
