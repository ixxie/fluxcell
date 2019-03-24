import { aql } from 'arangojs';
import DB from '../index';
import BaseEdgeModel from './BaseEdgeModel';

export default class PostedIn extends BaseEdgeModel {
  constructor(edge) {
    super('postedIn', edge);
  }

  add() {
    return super.add();
  }

  async getAll() {
    const query = aql`
      FOR o IN postedIn
      RETURN o
    `;
    const entries = await DB.query(query);
    return entries;
  }
}
