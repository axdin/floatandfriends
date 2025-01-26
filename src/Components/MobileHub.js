import MobileIcon from "./MobileIcon";
import Menu from "./Menu"

import Star from "../Assets/Friends/Idle-Star.gif";
import Halo from "../Assets/Friends/Idle-Halo.gif";
import Bear from "../Assets/Friends/Idle-Bear.gif";
import Chiffon from "../Assets/Friends/Chiffon_IdleAnimation.gif";
import Bubble from "../Assets/Friends/Idle-Bubble.gif";
import logo from "../Assets/Icons/MobileHeaderLogo.png";


import "../Styles/MobileHub.css";

function MobileHub() {
    return (
        <div className="HubContainer">
            <div className="MobileHubHeader">
                <Menu isMobile={true}/>
                <img className="MobileHubHeaderImg" src={logo}/>
            </div>
            <div className="MobileHubBody">
                <MobileIcon name="About Float and Friends" loc="/Mobile/About" icon={Star}/>
                <MobileIcon name="Post a Message!" loc="/Mobile/MessagePost" icon={Halo}/>
                <MobileIcon name="Upcoming Community Events" loc="/Mobile/Events" icon={Bear}/>
                <MobileIcon name="Contact us!! Pls!!!" loc="/Mobile/Contact" icon={Chiffon}/>
                <MobileIcon name="Exhibit" loc="/Mobile/Exhibit" icon={Bubble}/>
            </div>
        </div>
    )
}

export default MobileHub;