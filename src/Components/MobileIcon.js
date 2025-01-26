import { useNavigate } from "react-router-dom";

import "../Styles/MobileIcon.css";

function MobileIcon({ name, loc, icon }) {
    const navigate = useNavigate();

    const goTo = () => {
        navigate(loc);
    };

    return (
        <div className="MobileIconContainer">
            <button onClick={goTo} className="MobileIconButton">
                <img src={icon} className="MobileIconFriend"/>
            </button>
            <div className="MobileIconTitle">
                {name}
            </div>
        </div>
    )
}

export default MobileIcon;