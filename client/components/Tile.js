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
      backgroundRepeat: 'no-repeat',
      backgroundColor: '#fffce5',
      backgroundSize: 'contain',
      textAlign: 'center',
      borderStyle: 'solid',
      borderColor: '#ea3838',
      borderWidth: tile.borderwidth,
      boxSizing: 'border-box',
      borderRadius: tile.borderradius,
    };
    const player = {
      color:"#ea0000",
      border: '1px solid blue',
      borderRadius: '100%',
      padding: '2px',
      backgroundColor: 'lightblue',
    }
    return (
      <Paper style={style}>
        <p>{ tile.cellNumber }</p>
        {tile.players.map(function(p, i){
            return <div key={i} style={player}><b>{ p.name }</b></div>
          })
        }
      </Paper>
    );
  }
}

export default Tile;
