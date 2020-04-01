import React from 'react'
import {useSpring} from 'react-spring'
import letter from '../../assets/images/black letters.svg'


function Black() {
    const props = useSpring({opacity: 1, from: {opacity: 0.5}})
    return (
        <div>
            <img src={letter} className="block-letters" style={props}></img>
        </div>
    )
}

export default Black
