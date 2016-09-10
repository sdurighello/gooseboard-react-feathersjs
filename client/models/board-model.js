import BaseModel from './base-model'

class BoardModel extends BaseModel {

  defaults() {
    return { };
  }

  findParams() {
    return {
      query: {
        $sort: { createdAt: -1 },
        $limit: 10
      }
    };
  }

  constructor(dispatch, onError) {
    super('board', dispatch, onError);
  }
}

const boardModel = new BoardModel()

export default boardModel
