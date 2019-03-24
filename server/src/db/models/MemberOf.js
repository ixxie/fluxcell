import { aql } from 'arangojs';
import DB from '../index';
import BaseEdgeModel from './BaseEdgeModel';

export default class MemberOf extends BaseEdgeModel {
  constructor(edge) {
    super('memberOf', edge);
  }

  add() {
    return super.add();
  }

  async getAll() {
    const query = aql`
      FOR o IN memberOf
      RETURN o
    `;
    const entries = await DB.query(query);
    return entries;
  }
}
