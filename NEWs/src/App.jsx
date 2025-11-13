import React, { useState } from 'react'
import { NewsNav } from './components/NewsNav'
import News from './components/News'

const App = () => {
    const [catagory, setcatagory] = useState()
  return (
    <>
      <NewsNav setcatagory = {catagory}/>
      <News catagory = {catagory}/>
    </>
  )
}

export default App
