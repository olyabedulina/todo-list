import React from 'react'
import { render } from 'react-dom'
import domReady from 'document-ready-promise'

import './styles.css'
import App from './components/App'

const run = () => {
  const appPlaceholder = document.createElement('div')
  document.body.appendChild(appPlaceholder)

  render(<App/>, appPlaceholder)
}

domReady().then(run)
