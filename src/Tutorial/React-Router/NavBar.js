import React from 'react'
import {Link} from 'react-router-dom'
import {Links} from '../Links'

function NavBar() {
    const [myLink,setLinks]=React.useState(Links)
    return (
        <div className='item' style={{width:100,height:50,margin:'4rem'}}>
            {
                myLink.map(x=>{
                    return(
                    <div className='item'>
                        <Link to={x.lin} ><h4>{x.name}</h4></Link>

                        </div>)
                })
            }
            
        </div>
    )
}

export default NavBar
