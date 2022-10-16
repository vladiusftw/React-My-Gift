import React from 'react'
import "../Styles/TopBar.css"
import {db} from "../Firebase"

const TopBar = () => {
  return (
    <div className='top-bar'>
        <h1 className='title'>WHERE IT ALL BEGAN!</h1>
    </div>
  )
}

export default TopBar