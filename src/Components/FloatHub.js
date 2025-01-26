import Lamp from "./Lamp";
import Friends from "./Friends";
import CloudGroup from "./CloudGroup";
import Menu from "./Menu";

import clouds from "../Assets/Backgrounds/clouds.gif";

import "../Styles/FloatHub.css"

function FloatHub () {

    return (
        <div>
            <div className="Sky">
                <Menu isMobile={false}/>
                <img src={clouds} className="Clouds"/>
                <div className="LampBlock">
                    <Lamp/>
                </div>
                <div className="Friends">
                    <Friends/>
                </div>
                {/* <div className="CloudLayerBehind">
                    <CloudGroup inFront={false}/>
                </div>
                <div className="CloudLayerFront">
                    <CloudGroup inFront={true}/>
                </div> */}
            </div>           
        </div>
    );
}

export default FloatHub;