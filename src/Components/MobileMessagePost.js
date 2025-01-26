import { useState, useRef } from "react";

import Menu from "./Menu";
import PostCreator from "./PostCreator";
import PostViewer from "./PostViewer";

import "../Styles/MobileMessagePost.css";

function MobileMessagePost() {
    const [createMode, setCreateMode] = useState(false);
    const postCreatorRef = useRef(null);

    const createPost  = () => {
        createMode && postCreatorRef.current.postPost();
        setCreateMode(!createMode);
    };

    return (
        <div className="MobileMessagePostPage">
            <div className="MobileMessagePostHeaderRow">
                <Menu isMobile={true}/>
                <button onClick={createPost}>
                    { createMode ? "post" : "create"}
                </button>
            </div>
            { !createMode ? 
                <div className="MobileMessagePostContainer">
                    <PostViewer width={70}/>
                </div> :
                <div className="MobileMessagePostContainer">
                    <PostCreator ref={postCreatorRef}/>
                </div>
            
            }
        </div>
    );
}

export default MobileMessagePost;