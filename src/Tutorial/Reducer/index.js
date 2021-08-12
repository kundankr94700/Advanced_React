import React,{useState} from 'react'
import Modal from './modal'
import {data} from "../Data"

function Index() {
    const [name,setName]=useState('')
    const [people,setPeople]=useState(data)
    const [showModal,setModal]=useState(false)
    const handleSubmit=(e)=>
    {
        e.preventDefault();
        alert(name)
    }
    return (
        <>
        {showModal && <Modal/>}
        <form onSubmit={handleSubmit} className='form'>
            <div>
                <input type='text' value={name} onChange={(e)=>{setName(e.target.value)}}></input>
            </div>
            <button type='submit' className='btn'>Submit</button>
        </form>
            <Modal/>
        </>
    )
}

export default Index
