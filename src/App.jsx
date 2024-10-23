import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const src = "https://i.imgur.com/yXOvdOSs.jpg"

  return (
    <>
      <div className='intro'>
        <h1>Welcome to my website</h1>
      </div>
      <p className='summary'>
      You can find my thoughts here.
      <br /><br />
      <b>And <i>picture</i></b> of scientists!
      </p>
    </>
  )
}

export default App
