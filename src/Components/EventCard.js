import { useState } from "react";

import nextButton from "../Assets/Icons/NextButton.png";
import prevButton from "../Assets/Icons/PrevButton.png";
import flipButton from "../Assets/Icons/FlipButton.png";

import "../Styles/EventCard.css";

function EventCard({ event, hasLeft, hasRight, goLeft, goRight }) {
    const [isFront, setIsFront] = useState(true);

    const flip = () => {
        setIsFront(!isFront);
    }

    return (
        <div className="EventCardContainer">
            { isFront ? 
                <img className="EventCardImg" src={event.front}/> : 
                <div className="EventCardBackContainer">
                    <img className="EventCardBackImg" src={event.back}/>
                    <div className="EventCardBackContent">
                        <div className="EventCardTitle">
                            {event.title}
                        </div>
                        <div className="EventCardDesc">
                            {event.desc}
                        </div>
                        <div className="EventCardDates">
                            {event.dates}
                        </div>
                    </div>
                </div>
            }
            <div className="MobileEventsButtonRow">
                { hasLeft ? 
                    <button className="ShuffleEventButton" onClick={goLeft}>
                        <img className="ShuffleEventButtonImg" src={prevButton}/>
                    </button> : <div className="ShuffleButtonPlaceholder"></div>
                }
                <button className="FlipCardButton" onClick={flip}>
                    <img className="FlipCardImg" src={flipButton}/>
                </button>
                { hasRight ? 
                    <button className="ShuffleEventButton" onClick={goRight}>
                        <img className="ShuffleEventButtonImg" src={nextButton}/>
                    </button> : <div className="ShuffleButtonPlaceholder"></div>
                }
            </div>
        </div>
    );
}

export default EventCard;