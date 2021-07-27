import React from 'react';

import { useState } from 'react'
import './homepage.scss'

let Whatever = () => {
  const [val, setval] = useState("Initial Value")

  let btnHandler = () => {
    fetch("/get").then(resp => resp.json()).then(data => {
      setval(data.msg)
    })
  }

  return (
    <header className="headerBox">
      <h1 className="headerTitle">Site Title</h1>
      <div className="headerSubTitle">We're Glad You're Here!</div>
      <div className="headerSubTitle">{val}</div>
      <button onClick={btnHandler}>Click Me!</button>
    </header>
  )
}

export default Whatever;
