import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import CreateContext from './createcontext/CreateContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
<CreateContext>
<React.StrictMode>
    <App />
  </React.StrictMode>,
</CreateContext>
)
