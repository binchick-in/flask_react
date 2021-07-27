import React from 'react';

import { useState } from 'react'
import './homepage.scss'

let Whatever = () => {
  const [val, setval] = useState("test 3")
  return (
    <header className="headerBox">
      <h1 className="headerTitle">Site Title</h1>
      <div className="headerSubTitle">We're Glad You're Here!</div>
    </header>
  )
}

export default Whatever;
