import { aql } from 'arangojs';
import DB from '../index';
import BaseEdgeModel from './BaseEdgeModel';

export default class OwnerOf extends BaseEdgeModel {
  constructor(edge) {
    super('ownerOf', edge);
  }

  add() {
    return super.add();
  }

  async getAll() {
    const query = aql`
      FOR o IN ownerOf
      RETURN o
    `;
    const entries = await DB.query(query);
    return entries;
  }
}
