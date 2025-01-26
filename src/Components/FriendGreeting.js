import textbox from "../Assets/Objects/CloudTextBox-mini.png";

import "../Styles/FriendGreeting.css"

function FriendGreeting ({ greeting }) {

    return (
        <div>
            <img src={textbox} className="TextboxMini"/>
            <h2 className="TextboxContentsMini">{greeting}</h2>
        </div>
    );
}

export default FriendGreeting;