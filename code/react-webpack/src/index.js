'use strict'


import React from 'react'
import {AppContainer} from 'react-hot-loader'
import { render } from 'react-dom'

import App from './app'


const renderApp = (NextApp) => {
  render(
    <AppContainer>
      <NextApp />
      </AppContainer>,
    document.querySelector('[data-js="app"]')
  )
}
renderApp(App)

// sE O Module.hot esta ativo ele atualiza e manda o Nextapp 
if (module.hot) {
  module.hot.accept('./app', () => {

  const NextApp =  require('./app').default
  renderApp(NextApp)
  })
}