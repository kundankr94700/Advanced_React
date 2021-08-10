import React,{useState} from 'react'

function UseStateExample() {
    let title="random title";
    const handleClick=()=>{
        console.log(title)
    }
    return (
        <div>
            <h2>{title}</h2>
            <button type='button' className='btn' onClick={handleClick}>Change Title</button>
        </div>
    )
}

export default UseStateExample
