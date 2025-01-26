import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import cloudImg from "../Assets/Objects/Cloud.png"

import "../Styles/Cloud.css"

function Cloud({ size, pos }) {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const [animateX, setAnimateX] = useState(0);
    const [animateY, setAnimateY] = useState([]);
    const [dur, setDur] = useState(0.0);
    const [round, setRound] = useState(0);

    useEffect(() => {
        setX(pos[0]);
        setY(pos[1]);
        
        let count = 0;
        let temp = [];
        while (count < 20) {
            temp.push(Math.random(-1,1)*40);
            count = count + 1;
        }

        setAnimateX(window.innerWidth + size - pos[0]);
        setAnimateY(temp);
        setDur(50000/(window.innerWidth + size + pos[0]))
    }, []);

    const handleAnimationComplete = () => {
        setX(-size);

        setTimeout(() => {
            setAnimateX(0);
            round === 0 ? setAnimateX(window.innerWidth + size) : setAnimateX(animateX + 1);
            setDur(50000/(window.innerWidth + size));
            setRound(round + 1);
        }, 10);
    }

    return (
        <div style={{transform: `translate(${x}px, ${y}px)`}}>
            <motion.div 
                key={animateX}
                initial={x}
                animate={{ x: animateX, y: animateY}} 
                transition={{ duration: dur, ease: "linear" }}
                onAnimationComplete={handleAnimationComplete}>
                <img 
                    src={cloudImg} 
                    style={{ width:`${size}px`}}/>
            </motion.div>
        </div>
    )
}

export default Cloud;