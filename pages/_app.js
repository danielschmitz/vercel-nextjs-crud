import '../styles/globals.css'
import React from 'react';
import ReactDOM from 'react-dom';
import Cabecalho from '../components/Cabecalho';
import { Typography } from '@material-ui/core';

function MyApp({ Component, pageProps }) {
    return (
    <div>
      <Cabecalho title="App Demo"></Cabecalho>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
