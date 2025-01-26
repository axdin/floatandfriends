import { useNavigate } from "react-router-dom";

import "../Styles/ExhibitIcon.css";

function ExhibitIcon({ exhibit, fullSize, setExhibit }) {
    const navigate = useNavigate();

    const goToExhibit = () => {
        navigate("/Exhibits/" + exhibit.suffix);
    }

    return (
        <div className="ExhibitIconContainer">
            { fullSize ? 
                <button className="ExhibitFullContainer" onClick={goToExhibit}>
                    <img src={exhibit.icon} className="ExhibitIconImg"/>
                </button> :
                <button className="ExhibitSmallContainer" onClick={setExhibit}>
                    <img src={exhibit.icon} className="ExhibitIconImg"/>
                </button>
            }
        </div>
    )
}

export default ExhibitIcon;