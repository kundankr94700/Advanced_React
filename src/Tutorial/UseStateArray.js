import React from 'react'
import {data} from './Tuitorial/Data.js'

function UseStateArray() {
    const [people,setPeople]=React.useState(data)
    
    return (
        <div>
            {
                people.map(person=>{
                    console.log(person);
                    return "hello my friend I am Learning about the avengers";})
            }
            <h2>Use State is in action</h2>
        </div>
    )
}

export default UseStateArray
