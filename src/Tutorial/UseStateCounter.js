import React ,{useState} from 'react'

function UseStateCounter() {
    const [value,setValue]=useState(0)
    const IncreaseValue=()=>
    {

        setValue(value+1)
    }
    const DecreaseValue=()=>
    {
        setValue(value-1)
    }
    return (
        <>
            <section style={{margin:'4rem 0'}}>
                <h2>A regular Counter</h2>
                <h1>{value}</h1>
                <button className='btn' onClick={DecreaseValue}>Decreace</button>
                <button className='btn' onClick={IncreaseValue}>Increace</button>
                <button className='btn' onClick={()=>{setValue(0)}}>Reset</button>
            </section>
        </>
    )
}

export default UseStateCounter
