import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "../Styles/Menu.css";

function Menu({ isMobile }) {
    const [isExpanded, setIsExpanded] = useState(false);
    const navigate = useNavigate();

    const reroute = (loc) => {
        navigate(loc);
    }

    const toggleMenuExpansion = () => {
        setIsExpanded(!isExpanded);
        console.log(isExpanded);
        console.log(isMobile);
    }

    return (
        <div className="MenuContainer">
            
            { !isExpanded ? 
                <div className="ClosedMenu">
                    <button className="MenuContainerButton" onClick={toggleMenuExpansion}>
                        Menu
                    </button>
                </div> :
                <div className="OpenMenu">
                    { isMobile ? 
                        <div className="MobileMenu">
                            <button className="MenuContainerButton" onClick={toggleMenuExpansion}>
                                Menu
                            </button>
                            <button className="MenuButton" onClick={() => reroute("/Mobile/Hub")}>
                                Home
                            </button>
                            <button className="MenuButton" onClick={() => reroute("/Mobile/About")}>
                                About
                            </button>
                            <button className="MenuButton" onClick={() => reroute("/Mobile/MessagePost")}>
                                Post
                            </button>
                            <button className="MenuButton" onClick={() => reroute("/Mobile/Events")}>
                                Events
                            </button>
                            <button className="MenuButton" onClick={() => reroute("/Mobile/Contact")}>
                                Contact
                            </button>
                            <button className="MenuButton" onClick={() => reroute("/Mobile/Exhibit")}>
                                Exhibit
                            </button>
                        </div> 
                        :
                        <div className="ComputerMenu">
                            <button className="MenuButton" onClick={() => reroute("/Hub")}>
                                Home
                            </button>
                            <button className="MenuButton" onClick={() => reroute("/MessagePost")}>
                                Message Post
                            </button>
                        </div>
                    }
                </div>
            }
            
        </div>
    );
}

export default Menu;