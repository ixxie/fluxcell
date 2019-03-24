import { aql } from 'arangojs';
import DB from '../index';
import BaseEdgeModel from './BaseEdgeModel';

export default class PostedBy extends BaseEdgeModel {
  constructor(edge) {
    super('postedBy', edge);
  }

  add() {
    return super.add();
  }

  async getAll() {
    const query = aql`
      FOR o IN postedBy
      RETURN o
    `;
    const entries = await DB.query(query);
    return entries;
  }
}
