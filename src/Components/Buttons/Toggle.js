import React ,{Fragment}from 'react'

function Toggle(props) {
    return (
        <div>
            <Fragment>
                <button onClick={props.click} id="toggle">&#8801;</button>
            </Fragment>
        </div>
    )
}

export default Toggle
 