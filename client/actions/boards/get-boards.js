export const GET_BOARDS = 'GET_BOARDS'

export default function getBoards() {
  const existingBoards = [{
    _id: 1,
    winner: null, // Completed if there is a winner
    whoIsPlaying: null, // Not started if there is no who is playing, to be set when clicking "start"
    tiles: [
      { _id: 1, position: 1, cellNumber: 1, players: [], image: "http://static6.tellymixcdn.com/ts/180/100/www.tellymix.co.uk/files/2016/07/CBB_Eye1.jpg", borderwidth: "1px 0px 0px 0px"},
      { _id: 2, position: 2, cellNumber: 2, players: [] , borderwidth: "1px 0px 0px 0px"},
      { _id: 3, position: 3, cellNumber: 3, players: [] , borderwidth: "1px 0px 0px 0px"},
      { _id: 4, position: 4, cellNumber: 4, players: [] , borderwidth: "1px 0px 0px 0px"},
      { _id: 5, position: 5, cellNumber: 5, players: [] , borderwidth: "1px 0px 0px 0px"},
      { _id: 6, position: 6, cellNumber: 6, players: [] , borderwidth: "1px 1px 0px 0px", borderradius: "0px 100px 0px 0px"},
      { _id: 18, position: 7, cellNumber: 18, players: [] , borderwidth: "1px 0px 0px 1px", borderradius: "100px 0px 0px 0px" },
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
    players: [
      { _id: 1, userId: 1,  name: "Eva", position: 1, lastRoll: 0},
      { _id: 2, userId: 2, name: "Isa", position: 1, lastRoll: 0},
    ],
    owner: {
      _id: 1,
      userId: 1,
      name: 'Eva',
    },
    created_at: '2016-09-08'
  }]
  return {
    type: GET_BOARDS,
    payload: existingBoards,
  }
}
