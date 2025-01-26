import { useState, forwardRef, useImperativeHandle } from "react";
import { collection, addDoc } from "firebase/firestore";

import { db } from "../firebase";

import heart from "../Assets/Objects/HeartPost.png";
import bubble from "../Assets/Objects/BubblePost.png";
import prism from "../Assets/Objects/PrismPost.png";
import star from "../Assets/Objects/StarPost.png";

import "../Styles/PostCreator.css";

const PostCreator = forwardRef((props, ref) => {
    const [postShape, setPostShape] = useState(heart);
    const [shapeString, setShapeString] = useState("Heart");
    const [to, setTo] = useState("");
    const [from, setFrom] = useState("");
    const [postContent, setPostContent] = useState("");

    useImperativeHandle(ref, () => ({
        postPost: async () => {
            try {
                const docRef = await addDoc(collection(db, "posts"), {
                    shape: shapeString,
                    to: to,
                    from: from,
                    content: postContent,
                });
                console.log("Document written with ID: ", docRef.id);
            } catch (e) {
                console.error("Error adding document: ", e);
            }
        },
    }));

    const toggleShape = (shape, str) => {
        setPostShape(shape);
        setShapeString(str);
    }

    return (
        <div className="PostContainer">
            <div className="PostInputContainer">
                <img src={postShape} className="PostImg" id={shapeString + "Img"}/>
                <label className="PostPersonContainer"  id={shapeString + "To"}>
                    To:
                    <input className="PostPerson" onChange={(e)=>setTo(e.target.value)}/>
                </label>
                <textarea 
                    type="text" 
                    className="PostTxt" 
                    maxlength="150" 
                    id={shapeString + "Txt"}
                    onChange={(e)=>setPostContent(e.target.value)}/>
                <label className="PostPersonContainer"  id={shapeString + "From"}>
                    Love:
                    <input className="PostPerson" onChange={(e)=>setFrom(e.target.value)}/>
                </label>
            </div>
            <div className="PostButtonContainer">
                <button onClick={() => toggleShape(heart, "Heart")} className="PostButton">
                    <img src={heart} className="PostButtonImg"/>
                </button>
                <button onClick={() => toggleShape(bubble, "Bubble")} className="PostButton">
                    <img src={bubble} className="PostButtonImg"/>
                </button>
                <button onClick={() => toggleShape(prism, "Prism")} className="PostButton">
                    <img src={prism} className="PostButtonImg"/>
                </button>
                <button onClick={() => toggleShape(star, "Star")} className="PostButton">
                    <img src={star} className="PostButtonImg"/>
                </button>
            </div>
        </div>
    );
});

export default PostCreator;