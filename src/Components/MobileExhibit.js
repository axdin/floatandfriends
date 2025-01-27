import { useState, useEffect } from "react";

import Menu from "./Menu";
import ExhibitIcon from "./ExhibitIcon";

import loveLetter from "../Assets/Icons/LoveLetterExhibitIcon.png";

import "../Styles/MobileExhibit.css";

function MobileExhibit() {
    const [exhibitIndex, setExhibitIndex] = useState(0);
    const [exhibits, setExhibits] = useState([]);

    useEffect(() => {
        setExhibits([
            {
                title: "Love Letters to a Friend",
                icon: loveLetter,
                suffix: "LoveLetters"
            }
        ])
    }, [])

    return (
        <div className="MobileExhibitPage">
            <div className="MobileEventsHeaderRow">
                <Menu isMobile={true}/>
            </div>
            { exhibits.length > 0 &&
                <div className="MobileExhibitContainer">
                    <div className="CurrentExhibitContainer">
                        <ExhibitIcon exhibit={exhibits[exhibitIndex]} fullSize={true}/>
                    </div>
                    <div className="AllExhibitsContainer">
                        {exhibits.map((exhibit, index) => {
                            return( <ExhibitIcon exhibit={exhibit} fullSize={false} setExhibit={() => setExhibitIndex(index)}/> )
                        })}
                    </div>
                </div>
            }
        </div>
    );
}

export default MobileExhibit;