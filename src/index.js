import React from 'react'
import { render } from 'react-dom'
import domReady from 'document-ready-promise'
import { HashRouter as Router } from 'react-router-dom'

import './styles.css'
import App from './components/App'

const run = () => {
  const appPlaceholder = document.createElement('div')
  document.body.appendChild(appPlaceholder)

  render(<Router><App/></Router>, appPlaceholder)
}

domReady().then(run)
