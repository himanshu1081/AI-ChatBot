import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Left from './Left.jsx'
import Right from './Right.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='page'>
      <Left className="left"/>
      <Right className="right"/>
    </div>
  </StrictMode>,
)
