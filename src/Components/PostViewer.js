import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";

import { db } from "../firebase";
import PostView from "./PostView";

import messagePost from "../Assets/Backgrounds/MessagePost.png";
import heart from "../Assets/Objects/HeartPost.png";
import bubble from "../Assets/Objects/BubblePost.png";
import prism from "../Assets/Objects/PrismPost.png";
import star from "../Assets/Objects/StarPost.png";

import "../Styles/PostViewer.css";

function PostViewer({ width }) {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const getPosts = async () => {
            try {
                const snapshot = await getDocs(collection(db,"posts"));
                const documents = snapshot.docs.map(doc => (
                    { id: doc.id, ...doc.data(), img:  imageSwitch(doc.data().shape)}
                ));
                setPosts(documents);
            } catch (error) {
                console.error('Error fetching documents:', error);
            }
        }
        getPosts();
    }, []);

    const imageSwitch = (shape) => {
        console.log(shape);
        switch(shape) {
            default:
                return heart;
            case "Heart":
                return heart;
            case "Bubble":
                return bubble;
            case "Prism":
                return prism;
            case "Star":
                return star;
        }
    }

    return (
        <div className="PostViewer">
            <img src={messagePost} className="MessagePostImg" style={{width: `${width}%`}}/>
            <div className="PostsContainer" style={{width: `${width-6}%`}}>
                { posts.map((post) => {
                    return(
                        <PostView shape={post.img} shapeStr={post.shape} to={post.to} from={post.from} msg={post.content}/>
                    )
                }) }
            </div>
        </div>
    );
}

export default PostViewer;