import '../styles/globals.css'
import React from 'react';
import ReactDOM from 'react-dom';
import Cabecalho from '../components/Cabecalho';
import { Typography } from '@material-ui/core';

function MyApp({ Component, pageProps }) {
    return (
    <div>
      <Cabecalho></Cabecalho>
      <Typography paragraph>
        <Component {...pageProps} />
      </Typography>
    </div>
  )
}

export default MyApp
