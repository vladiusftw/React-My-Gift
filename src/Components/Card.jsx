import React, { useEffect, useState } from 'react'
import "../Styles/Card.css"

const Card = (props) => {
    const [content,setContent] = useState("")
    const [show,setShow] = useState(false);
    useEffect(() => {
        const text = props.content;
        const temp = <div style={{opacity: show ? 1 : 0.04, transition: "1s linear"}}>{text.split("\\n").map(str => <p className='content'>{str}</p>)}</div>
        console.log(temp)
        setContent(temp);
    },[show])
  return (
    <button className='card-container' onClick={() => setShow(!show)}>
        {content}
    </button>
  )
}

export default Card