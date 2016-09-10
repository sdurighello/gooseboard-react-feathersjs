import BaseModel from 'feathersjs-redux-model/build/models/base-model'
// import BaseModel from './base-model'

class BoardModel extends BaseModel {
  flipCard(board, index, currentPlayer) {
    const oldCards = board.cards
    const card = oldCards[index]

    const cards = oldCards.slice(0, index)
      .concat([Object.assign({}, card, { flipped: !card.flipped })])
      .concat(oldCards.slice(index + 1))

    window.setTimeout(() => {
      this.save(board, Object.assign({}, board, { cards }), true)
      this.flipBackCards(board, cards, currentPlayer)
    }, 300)
  }

  flipBackCards(board, cards, currentPlayer) {
    console.log('This is where I check the cards!')
    const flippedCards = cards.filter((card) => (card.flipped))
    if (flippedCards.length === 2) {
      console.log('Two cards are flipped, flipping back...')
      window.setTimeout(() => {
        let newCards = board.cards.map((card) => {
          return Object.assign({}, card, { flipped: false })
        })
        this.save(board, { cards: newCards })
      }, 1000)
    }
  }


  defaults() {
    return {
      winner: null,
      whoIsPlaying: null,
      tiles: [
        { position: 1, cellNumber: 1, players: [], image: "http://static6.tellymixcdn.com/ts/180/100/www.tellymix.co.uk/files/2016/07/CBB_Eye1.jpg", borderwidth: "1px 0px 0px 0px"},
        { position: 2, cellNumber: 2, players: [] , borderwidth: "1px 0px 0px 0px"},
        { position: 3, cellNumber: 3, players: [] , borderwidth: "1px 0px 0px 0px"},
        { position: 4, cellNumber: 4, players: [] , borderwidth: "1px 0px 0px 0px"},
        { position: 5, cellNumber: 5, players: [] , borderwidth: "1px 0px 0px 0px"},
        { position: 6, cellNumber: 6, players: [] , borderwidth: "1px 1px 0px 0px", borderradius: "0px 100px 0px 0px"},
        { position: 7, cellNumber: 18, players: [] , borderwidth: "1px 0px 0px 1px", borderradius: "100px 0px 0px 0px" },
        { _id: 19, position: 8, cellNumber: 19, players: [] , borderwidth: "1px 0px 0px 0px" },
        { _id: 20, position: 9, cellNumber: 20, players: [] , borderwidth: "1px 0px 0px 0px" },
        { _id: 21, position: 10, cellNumber: 21, players: [] , borderwidth: "1px 0px 0px 0px" },
        { _id: 22, position: 11, cellNumber: 22, players: [] , borderwidth: "1px 1px 0px 0px", borderradius: "0px 50px 0px 0px"  },
        { _id: 7, position: 12, cellNumber: 7, players: [], borderwidth: "0px 1px 0px 0px",},
        { _id: 17, position: 13, cellNumber: 17, players: [], borderwidth: "0px 0px 0px 1px"},
        { _id: 28, position: 14, cellNumber: 28, players: [], borderwidth: "1px 0px 0px 1px", borderradius: "50px 0px 0px 0px"},
        { _id: 29, position: 15, cellNumber: 29, players: [], borderwidth: "1px 0px 1px 0px"},
        { _id: 30, position: 16, cellNumber: 30, players: [] , borderwidth: "1px 1px 1px 0px", borderradius: "0px 20px 20px 0px"},
        { _id: 23, position: 17, cellNumber: 23, players: [], borderwidth: "0px 1px 0px 0px" },
        { _id: 8, position: 18, cellNumber: 8, players: [], borderwidth: "0px 1px 0px 0px" },
        { _id: 16, position: 19, cellNumber: 16, players: [], borderwidth: "0px 0px 0px 1px" },
        { _id: 27, position: 20, cellNumber: 27, players: [], borderwidth: "0px 0px 1px 1px", borderradius: "0px 0px 0px 50px" },
        { _id: 26, position: 21, cellNumber: 26, players: [], borderwidth: "0px 0px 1px 0px" },
        { _id: 25, position: 22, cellNumber: 25, players: [], borderwidth: "0px 0px 1px 0px", },
        { _id: 24, position: 23, cellNumber: 24, players: [], borderwidth: "0px 1px 1px 0px", borderradius: "0px 0px 60px 0px" },
        { _id: 9, position: 24, cellNumber: 9, players: [], borderwidth: "0px 1px 0px 0px", },
        { _id: 15, position: 25, cellNumber: 15, players: [], borderwidth: "0px 0px 1px 0px", borderradius: "0px 0px 0px 100px" },
        { _id: 14, position: 26, cellNumber: 14, players: [], borderwidth: "0px 0px 1px 0px", },
        { _id: 13, position: 27, cellNumber: 13, players: [], borderwidth: "0px 0px 1px 0px", },
        { _id: 12, position: 28, cellNumber: 12, players: [], borderwidth: "0px 0px 1px 0px", },
        { _id: 11, position: 29, cellNumber: 11, players: [], borderwidth: "0px 0px 1px 0px", },
        { _id: 10, position: 30, cellNumber: 10, players: [], borderwidth: "0px 1px 1px 0px", borderradius: "0px 0px 100px 0px" },
      ],

      cards: [],
      players: [],
      started: false,
      winner: null,
      turn: 0,
      createdAt: Date.now,
      updatedAt: Date.now
    };
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

const BoardModel = new BoardModel()

export default BoardModel
