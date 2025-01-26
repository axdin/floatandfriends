import { useState } from "react";
import { useNavigate } from "react-router-dom";

import computer from "../Assets/Objects/Computer.png";
import mobile from "../Assets/Objects/Mobile.png";
import computerGif from "../Assets/Objects/Computer.gif";
import mobileGif from "../Assets/Objects/Mobile.gif";

import "../Styles/Landing.css";

function Landing() {
    const [isHoveringComputer, setIsHoveringComputer] = useState(false);
    const [isHoveringMobile, setIsHoveringMobile] = useState(false);

    const navigate = useNavigate();

    const enter = (isMobile) => {
        if (!isMobile) {
            setIsHoveringComputer(true);
            setTimeout(() => navigate("/Hub"), 1000);
        } 
        else {
            setIsHoveringMobile(true);
            setTimeout(() => navigate("/Mobile/Hub"), 1000);
        }
    }

    return (
        <div className="OptionContainer">
            <button onClick={(() => enter(false))}
                onMouseEnter={() => setIsHoveringComputer(true)}
                onMouseLeave={() => setIsHoveringComputer(false)}
            className="OptionButton">
                { isHoveringComputer ? 
                     <img src={computerGif} className="OptionIcon"/> :
                    <img src={computer} className="OptionIcon"/>
                }
                <div className="OptionLabel">Computer</div>
            </button>
            <button onClick={(() => enter(true))}
                onMouseEnter={() => setIsHoveringMobile(true)}
                onMouseLeave={() => setIsHoveringMobile(false)}
                className="OptionButton">                
                { isHoveringMobile ? 
                    <img src={mobileGif} className="OptionIcon"/> :
                    <img src={mobile} className="OptionIcon"/>
                }
                <div className="OptionLabel">Mobile</div>
            </button>
        </div>
    )
}

export default Landing;