import { useState, useEffect } from "react";

import Menu from "./Menu";
import EventCard from "./EventCard";

import wfFront from "../Assets/EventCards/PostCardFront-WF.png";
import wfBack from "../Assets/EventCards/PostCardBack-WF.png";
import ccFront from "../Assets/EventCards/PostCardFront-CC.png";
import ccBack from "../Assets/EventCards/PostCardBack-CC.png";

import "../Styles/MobileEvents.css";

function MobileEvents() {
    const [eventIndex, setEventIndex] = useState(0);
    const [events, setEvents] = useState([]);

    useEffect(() => {
        setEvents([
            {
                title: "Writer's Float",
                front: wfFront,
                back: wfBack,
                desc: "Free virtual 8-week program to help you build a writing project from scratch.",
                dates: "01.16.2025 to 03.06.2025",
                link: ""
            },
            {
                title: "Cloud Cafe",
                front: ccFront,
                back: ccBack,
                desc: "Write, create, and design in a virtual community workspace.",
                dates: "01.06.2025, 01.20.2025",
                link: "",
            }
        ])
    }, [])

    const increment = () => {
        setEventIndex(eventIndex + 1);
    }
    const decrement = () => {
        setEventIndex(eventIndex - 1);
    }
    const checkLeft = () => {
        return(eventIndex > 0 ? true : false);
    }
    const checkRight = () => {
        return(eventIndex < (events.length - 1) ? true : false);
    }

    return (
        <div className="MobileEventsPage">
            <div className="MobileEventsHeaderRow">
                <Menu isMobile={true}/>
            </div>
            { (events.length > 0 && eventIndex < events.length) &&
                <div className="MobileEventContainer">
                    <EventCard event={events[eventIndex]} 
                        hasLeft={checkLeft()} 
                        hasRight={checkRight()}
                        goLeft={() => decrement()}
                        goRight={() => increment()}/>
                </div>
            }
        </div>
    );
}

export default MobileEvents;