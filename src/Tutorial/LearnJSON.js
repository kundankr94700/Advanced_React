import axios from 'axios'
import React from 'react'
import Forms from './Forms'

function LearnJSON() {
    const handleClick=()=>
    {
        const promise=axios.post('http://localhost:4000/users',{
            name:'Nishant',
            

        })}
        const getUsers=()=>
        {

        }
    return (
        <>
            <button type='button' className='btn' onClick={handleClick}>Send Data</button>
            <button type='button' className='btn' onClick={getUsers}>getUser</button>
            
        </>
    )
}

export default LearnJSON
