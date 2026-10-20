import React from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'

function MyApp() {
  return(
    <div>
      <h1>custom apk with chai</h1>
    </div>
  )
}

const AnotherElement = (
  <a href="https://google.com" target="_blank">Visit Google</a>

)
const reactElement = React.createElement(
  "a",
  {href:"https://google.com"},
  "click me visit google"

)


createRoot(document.getElementById('root')).render(
  
    reactElement
  
)
