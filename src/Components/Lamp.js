import { useNavigate } from "react-router-dom";

import lampImg from "../Assets/Objects/LampPost.png"

import "../Styles/Lamp.css"

function Lamp() {
    const navigate = useNavigate();

    const goToPost = () => {
        navigate("/MessagePost");
    }

    return (
        <div>
            <img src={lampImg} className="LampImg"/>
            <div className="ClickableContainer">
                <button className="Clickable" onClick={goToPost}/>
            </div>
            
        </div>
    );
}

export default Lamp;