import React, { useState } from 'react'


function Sidebarleft(props) {
    const [sidebarleft, setSidebarleft] = useState(props.sidebar)

    const closeHandler = (e)=>{
        e.preventDefault()
        setSidebarleft('sidebarleftclose') 
        setTimeout(()=>{
            props.close()
        },1000)

    }
    return (
        <div className={sidebarleft}>
            <h2>Sidebar</h2>
            <a href="#" onClick={closeHandler} className="close"> close</a>
        </div>
    )
}

export default Sidebarleft
