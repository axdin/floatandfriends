import { useState } from "react";


import "../Styles/PostView.css";

function PostView({ shape, shapeStr, to, from, msg }) {
    const [isOpen, setIsOpen] = useState(false);

    const togglePostView = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className="PostViewContainer">
            <button className="PostViewButton" onClick={togglePostView}>
                <img src={shape} className="PostViewImg"/>
                <div className="PostViewAddressee">
                    {to}
                </div>
            </button>
            {isOpen && 
                <div className="FullPostContainer">
                    <img src={shape} className="FullPostImg"/>
                    <div className="FullPostPeople" id={"Full" + shapeStr + "To"}>
                        Dear: {to}
                    </div>
                    <textarea className="FullPostMsg" id={"Full" + shapeStr + "Txt"} readOnly>
                        {msg}
                    </textarea>
                    <div className="FullPostPeople" id={"Full" + shapeStr + "From"}>
                        Love, {from}
                    </div>
                    <button onClick={togglePostView} className="FullPostClose">Close</button>
                </div>
            }
        </div>
    )
}

export default PostView;