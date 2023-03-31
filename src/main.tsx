import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import 'mathlive/dist/mathlive-fonts.css';
import 'mathlive/dist/mathlive-static.css';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
