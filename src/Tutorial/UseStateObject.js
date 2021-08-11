import React from 'react'

function UseStateObject() {
    const [person,setperson]=useState({
        name:"Star Lord",
        age:50,
        message:'I am a god'
    })
    const changeMsg=()=>{
        //setperson("not anymore") // this woll not change the msg. it will change the person from object to string
    
    }
    return (
        <div>
            <>
            <h3>{person.name}</h3>
            <h3>{person.age}</h3>
            <h3>{person.message}</h3>
            <button className='btn' onClick={changeMsg}>Change MSG</button>
            </>
        </div>
    )
}

export default UseStateObject
