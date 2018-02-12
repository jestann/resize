import React from 'react'
import ReactDOM from 'react-dom'
import './styles/main.css'
import App from './components/app'
import registerServiceWorker from './tools/registerServiceWorker'

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
