import { useState } from "react";
import { motion } from "framer-motion";

import textbox from "../Assets/Objects/CloudTextBox.png";

import "../Styles/FriendInteraction.css";

function FriendInteraction({ contents, end }) {
    const [current, setCurrent] = useState(0);

    const handleClick = () => {
        setCurrent(current + 1);
    }

    return (
        <div>
            <motion.div 
                animate={{ y: -500 }} 
                transition={{ duration: 1, ease: "linear" }}>
                    <div className="InteractionModal">
                        <img src={textbox} className="Textbox"/>
                        <div className="TextboxContents">
                            <h1>
                                {contents[current]}
                            </h1>
                            {current < (contents.length - 1) ? 
                                <button onClick={handleClick}>
                                    Next
                                </button>
                                :
                                <button onClick={end}>
                                    End
                                </button>
                            }    
                        </div>                        
                    </div>
            </motion.div>
        </div>
    );
}

export default FriendInteraction;