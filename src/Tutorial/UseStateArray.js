import React from 'react'
import {data} from './Data.js'

function UseStateArray() {
    const [people,setPeople]=React.useState(data)
    const removeItem=(id)=> {
        let newPeople=people.filter(person=> person.id!==id)
        setPeople(newPeople)
    }
    return (
        <>
            {
               people.map(person=>{
                   const {id,name}=person;
                   return(
                       <div key={id} classname='item'>
                           <h4>{name}</h4>
                           <button onClick={()=>removeItem(id)}>Remove him</button>
                       </div>

                   );
               })
                    
            }
            <h2>Use State is in action</h2>
            <button className='btn' onClick={()=>setPeople([])}>Clear Name</button>
        </>
    )
}

export default UseStateArray
