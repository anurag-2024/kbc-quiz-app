import "./Start.css";
import React, { useState } from 'react';

export default function Start({setusername}) {
    const [name,setname]=useState("");
    function handleChange(event){
        setname(event.target.value);
    }
    function handleClick(){
        setusername(name);
    }
    function handlekeypress(e){
      if(e.key==="Enter"){
        return setusername(name);
      }
    }
  return (
    <div className='start' onKeyDown={(e)=>handlekeypress(e)}>
      <input placeholder='Enter Your Name' className='startInput' onChange={handleChange} />
      <button className='startbutton' onClick={handleClick}>Start</button>
      
    </div>
  )
}

