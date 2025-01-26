import { useState, useEffect } from "react";

import FriendGreeting from "./FriendGreeting";

import "../Styles/Friend.css";

function Friend({ pos, idle, greeting, passMic }) {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const [isGreeting, setIsGreeting] = useState(false);

    useEffect(() => {
        setX(pos[0]);
        setY(pos[1]);
    }, [])

    const greet = () => {
        setIsGreeting(true);
    }
    const endGreet = () => {
        setIsGreeting(false);
    }

    return (
        <div className="CharacterContainer">
            <img src={idle} className="CharacterIdle"
                onMouseEnter={greet}
                onMouseLeave={endGreet}
                onClick={passMic}
                style={{transform: `translate(${x}px, ${y}px)`}}/>
            {isGreeting && 
                <div className="DialogueContainer" style={{transform: `translate(${x + 150}px, ${y - 50}px)`}}>
                    <FriendGreeting greeting={greeting}/>
                </div>
            }
        </div>
    );
}

export default Friend;