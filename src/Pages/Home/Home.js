import React,{useEffect} from 'react';
import { gsap } from "gsap";
import "./Home.css"
import { Hand } from '../../Components/Icons/Icons';
const Home = () => {
    useEffect(()=>{
        let tl = gsap.timeline()
        tl.from(".welcome-msg",{duration:1.1,opacity:0,scale:0.3, ease:"back"})
        tl.from(".card",{duration:1,opacity:0,scale:0.3, ease:"back"})
    })
    return ( 
        <>
        <header>
            <div className="welcome-msg">
                <h4>Hi there <span><Hand/></span></h4>
            </div>

          <div className="display-card">
          <div className="card blue">
                <p>Make Your Transfers Better Than ever</p>
            </div>
            <div className="card green">
                <p>Easy Integration</p>
            </div>
          </div>
        </header>
        </>
     );
}
 
export default Home;