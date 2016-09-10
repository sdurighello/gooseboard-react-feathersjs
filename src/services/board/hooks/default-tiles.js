'use strict';

const defaults = {};

module.exports = function(options) {
  options = Object.assign({}, defaults, options);

  return function(hook) {

    let tiles = [
      { position: 1, cellNumber: 1, players: [], image: "http://static6.tellymixcdn.com/ts/180/100/www.tellymix.co.uk/files/2016/07/CBB_Eye1.jpg", borderwidth: "1px 0px 0px 0px"},
      { position: 2, cellNumber: 2, players: [] , borderwidth: "1px 0px 0px 0px"},
      { position: 3, cellNumber: 3, players: [] , borderwidth: "1px 0px 0px 0px"},
      { position: 4, cellNumber: 4, players: [] , borderwidth: "1px 0px 0px 0px"},
      { position: 5, cellNumber: 5, players: [] , borderwidth: "1px 0px 0px 0px"},
      { position: 6, cellNumber: 6, players: [] , borderwidth: "1px 1px 0px 0px", borderradius: "0px 100px 0px 0px"},
      { position: 7, cellNumber: 18, players: [] , borderwidth: "1px 0px 0px 1px", borderradius: "100px 0px 0px 0px" },
      { position: 8, cellNumber: 19, players: [] , borderwidth: "1px 0px 0px 0px" },
      { position: 9, cellNumber: 20, players: [] , borderwidth: "1px 0px 0px 0px" },
      { position: 10, cellNumber: 21, players: [] , borderwidth: "1px 0px 0px 0px" },
      { position: 11, cellNumber: 22, players: [] , borderwidth: "1px 1px 0px 0px", borderradius: "0px 50px 0px 0px"  },
      { position: 12, cellNumber: 7, players: [], borderwidth: "0px 1px 0px 0px",},
      { position: 13, cellNumber: 17, players: [], borderwidth: "0px 0px 0px 1px"},
      { position: 14, cellNumber: 28, players: [], borderwidth: "1px 0px 0px 1px", borderradius: "50px 0px 0px 0px"},
      { position: 15, cellNumber: 29, players: [], borderwidth: "1px 0px 1px 0px"},
      { position: 16, cellNumber: 30, players: [] , borderwidth: "1px 1px 1px 0px", borderradius: "0px 20px 20px 0px"},
      { position: 17, cellNumber: 23, players: [], borderwidth: "0px 1px 0px 0px" },
      { position: 18, cellNumber: 8, players: [], borderwidth: "0px 1px 0px 0px" },
      { position: 19, cellNumber: 16, players: [], borderwidth: "0px 0px 0px 1px" },
      { position: 20, cellNumber: 27, players: [], borderwidth: "0px 0px 1px 1px", borderradius: "0px 0px 0px 50px" },
      { position: 21, cellNumber: 26, players: [], borderwidth: "0px 0px 1px 0px" },
      { position: 22, cellNumber: 25, players: [], borderwidth: "0px 0px 1px 0px", },
      { position: 23, cellNumber: 24, players: [], borderwidth: "0px 1px 1px 0px", borderradius: "0px 0px 60px 0px" },
      { position: 24, cellNumber: 9, players: [], borderwidth: "0px 1px 0px 0px", },
      { position: 25, cellNumber: 15, players: [], borderwidth: "0px 0px 1px 0px", borderradius: "0px 0px 0px 100px" },
      { position: 26, cellNumber: 14, players: [], borderwidth: "0px 0px 1px 0px", },
      { position: 27, cellNumber: 13, players: [], borderwidth: "0px 0px 1px 0px", },
      { position: 28, cellNumber: 12, players: [], borderwidth: "0px 0px 1px 0px", },
      { position: 29, cellNumber: 11, players: [], borderwidth: "0px 0px 1px 0px", },
      { position: 30, cellNumber: 10, players: [], borderwidth: "0px 1px 1px 0px", borderradius: "0px 0px 100px 0px" }
    ]

    tiles.sort(function (a, b) {
      if (a.position > b.position) {
        return 1;
      }
      if (a.position < b.position) {
        return -1;
      }
      return 0;
    });

    hook.data.tiles = tiles;

  };
};
