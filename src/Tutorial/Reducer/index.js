import React,{useState} from 'react'
import Modal from './modal'
import {data} from "../Data"

function Index() {
    const [name,setName]=useState('')
    const [people,setPeople]=useState(data)
    const [showModal,setModal]=useState(true)
    const handleSubmit=(e)=>
    {
        e.preventDefault();
        if(showModal){
            setPeople([...people,{id:new Date().getTime().toString(),name}]) //we have created a program where we are takinh value from user and displaying the same
        }
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
        {
            people.map(x=>{
                return <>
                <div className="item" key={x.id}><h4>{x.name}</h4></div>
                </>
            })
        }
        
        </>
    )
}

export default Index
