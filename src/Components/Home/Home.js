import React from 'react'
import './Home.css'
import letter from '../../assets/images/black letters.svg'
import {useSpring, animated} from 'react-spring'
// import Loader from '../Loader/Loader'

function Home() {
    const props = useSpring({opacity: 1, from: {opacity: 0.5}})
    return (
        <div>
            <div className="block black">
                <div>
                    <img src={letter} className="block-letters" style={props}></img>
                </div>
            </div>
            
            <div className="block pink">
                <div class="row pink-letters">
                    Rouser
                    <br/>
                    makes things
                    <br/>that make
                    <br/>you think. 
                </div>
            </div>
            <div className="block blue">

            </div>
            <div className="block black">
                <div>
                
                </div>
            </div>
        </div>
    )
}

export default Home
