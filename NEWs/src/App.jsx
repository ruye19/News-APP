import React, { useState } from 'react'
import { NewsNav } from './components/NewsNav'
import News from './components/News'

const App = () => {
    const [category, setCategory] = useState("general")
  return (
    <>
      <NewsNav setCategory = {setCategory}/>
      <News category = {category}/>
    </>
  )
}

export default App
