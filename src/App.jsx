import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Welcome from './components/Welcome' 
import Goodbye from './components/Goodbye'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='h-screen flex items-center justify-center flex-col'>
      {/* <Welcome name={"Arijit"} age={22} email={"aaa@gmail.com"}/>
      <Welcome name={"sukriti"} age={22} email={"surkriti@gmail.com"} />
      <Welcome name={"dev"} /> */}
      <Goodbye name={"sukriti"} / >
      <Goodbye name={"aryan"} / >
      <Goodbye name={"sukrs"} / >


    </div>

  )
}

export default App
