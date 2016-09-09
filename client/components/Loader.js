import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';

const loaderStyle = {
  container: {
    padding: '10px 40px',
    background: 'rgba(255, 255, 255, 0.6)',
  },
  message: {
    display: 'inline-block'
  }
}

const Loader = (props) => (
  <div style={ loaderStyle.container }>
    <CircularProgress />
    <p style={ loaderStyle.message }>
      { props.message }
    </p>
  </div>
);

export default Loader;
