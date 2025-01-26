import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";

import { db } from "../firebase";
import Menu from "./Menu";

import chiffon from "../Assets/Friends/Chiffon_Still.png";
import instagram from "../Assets/Icons/IG_Icon.png";
import tiktok from "../Assets/Icons/TikTok_Icon.png";

import "../Styles/MobileContact.css";

const intro = "Reach out to Float and Friends to provide feedback or just say hi! I'll deliver the message in no time! And don't forget to follow their socials while you're here.";

function MobileContact() {
    const [isInputing, setIsInputing] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [isIncomplete, setIsIncomplete] = useState(false);


    const switchMode = () => {
        setIsInputing(!isInputing);
    }

    const submitMessage = async(e) => {
        e.preventDefault(); 

        if (name === "" || email === "" || message === "") {
            setIsIncomplete(true);
        }
        else {
            setIsIncomplete(false);
            try {
                const docRef = await addDoc(collection(db, "emails"), {
                    to: [{
                        email: 'floatandfriends@gmail.com',
                        name: 'Float and Friends'
                        }],
                    reply_to: {
                        email: email,
                        name: name
                    },
                    subject: "New message from the F&F Website",
                    text: message
                });
                console.log("Document written with ID: ", docRef.id);
            } catch (e) {
                console.error("Error adding document: ", e);
            }
            switchMode();
        } 
    }

    return (
        <div className="MobileContactContainer">
            <div className="MobileContactHeaderRow">
                <Menu isMobile={true}/>
            </div>
            <div className="MobileContactTextRow">
                { !isInputing ? 
                    <div className="MobileContactText">
                        {intro}
                    </div> :
                    <div className="MobileContactText">
                        <label className="MobileContactNameLabel">
                            What do we call you?
                            <input className="MobileContactNameInput" onChange={(e)=>setName(e.target.value)} placeholder="Your name"/>
                        </label>
                        <label className="MobileContactEmailLabel">
                            How can we reach you?
                            <input className="MobileContactEmailInput" onChange={(e)=>setEmail(e.target.value)} placeholder="Your email"/>
                        </label>
                        <label className="MobileContactMessageLabel">
                            What do you have to say?
                            <textarea 
                                type="text" 
                                className="MobileContactMessageInput" 
                                maxlength="150" 
                                onChange={(e)=>setMessage(e.target.value)}
                                placeholder="Your message to us"/>
                        </label>
                        { isIncomplete && 
                            <div className="MobileContactIncompleteText">
                                Please make sure to complete all of the fields before submitting!
                            </div>
                        }
                    </div>
                }
            </div>
            <div className="MobileContactFriendRow">
                <img className="MobileContactFriendImg" src={chiffon}/>
                <div className="MobileContactActionsContainer">
                    { !isInputing ?
                        <button className="SwitchContactButton" onClick={switchMode}>
                            Begin message
                        </button> :
                        <button className="SubmitMessageButton" onClick={submitMessage}>
                            Submit for shipment!
                        </button>
                    }
                    <div className="MobileSocialMediaContainer">
                        <div>Check us out on social media here!</div>
                        <div className="MobileSocialMediaIconsContainer">
                            <a href="https://www.instagram.com/floatandfriends" target="_blank">
                                <img className="MobileSocialMediaIcon" src={instagram}/>
                            </a>
                            <a href="https://www.tiktok.com/@floatandfriends" target="_blank">
                               <img className="MobileSocialMediaIcon" src={tiktok}/>
                            </a>
                        </div>        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MobileContact;