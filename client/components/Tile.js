import React from 'react';
import Paper from 'material-ui/Paper'

class Tile extends React.Component {

  render() {
    const { tile } = this.props
    const style = {
      height: 120,
      width: 150,
      display: 'inline-block',
      verticalAlign: 'top',
      fontsize: 40,
      backgroundImage: 'url(' + tile.image + ')',
      backgroundColor: '#FFFFFF',
      backgroundSize: 'contain',
      textAlign: 'center',
      borderStyle: 'solid',
      borderColor: '#ff0000',
      borderWidth: tile.borderwidth,
      boxSizing: 'border-box',
      borderRadius: tile.borderradius,
    };
    const player = {
      color:"#ea0000"
    }
    return (
      <div style={style}>
        <p>{ tile.cellNumber }</p>
        {tile.players.map(function(p, i){
            return <div key={i} style={player}> {p.name} </div>
          })
        }
      </div>
    );
  }
}

export default Tile;
