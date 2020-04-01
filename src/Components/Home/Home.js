import React ,{useState} from 'react'
import './Home.css'  
// import Loader from '../Loader/Loader'
import Black from '../Animations/Black'
import Pink from '../Animations/PInk'
import Floro from '../Animations/floro'
import Sidebarleft from '../Sidebar/Sidebarleft'
import Toggle from '../Buttons/Toggle'


function Home() {
    const [sidebarleftOpen, setSidebarleftOpen] = useState(false)
    const [floroBlock, setfloroBlock] = useState("floro")

    const openHandler = () =>{
        if(!sidebarleftOpen){
            setSidebarleftOpen(true)
            setfloroBlock("floro-changed")
        }else{
            setSidebarleftOpen(false)
            setfloroBlock("floro")
        }
    }

    const sidebarCloseHandler = ()=>{
        setSidebarleftOpen(false)
    }
    let sidebarleft
    if( sidebarleftOpen)
    {
        sidebarleft = <Sidebarleft close={sidebarCloseHandler} sidebar={"sidebarleftopen"}/>
    }

    return (
        <div>
            <div className="block black">
                <Black/>
            </div>

            <div className="block pink">
                <div className="row pink-letters">
                    <Pink/>
                </div>
            </div>

            <div className="block blue">

            </div>

            <div className="block black">

            </div>

            <div className='block '>
                <div className={floroBlock}>
                    {sidebarleft}
                    <Toggle click={openHandler}></Toggle>
                    <Floro></Floro>
                </div>
                

            </div>
        </div>
    )
}

export default Home
