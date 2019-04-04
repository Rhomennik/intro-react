'use strict'


import React from 'react';
import {appContainer} from 'react-hot-loader';
import { render } from 'react-dom';
import app from './app';


const renderApp = (NextApp) => {
  render(
    <appContainer>
      <NextApp />
      </appContainer>,
    document.querySelector('[data-js="app"]')
  )
}
renderApp(app)

// sE O Module.hot esta ativo ele atualiza e manda o Nextapp 
if (module.hot) {
  module.hot.accept('./app', () => {

  const NextApp =  require('./app').default
  renderApp(NextApp)
  })
}