import { useState, useEffect } from 'react';
import { db, storage } from "../firebase";
import { ref, listAll, getDownloadURL } from "firebase/storage";
import { collection, getDocs } from "firebase/firestore";

import Menu from "./Menu";

import vid1 from "../Assets/A_Million_Little_Things-Submission.mp4";
import vid2 from "../Assets/Mundane_Simple-Submission.mp4";

import "../Styles/LoveLetters.css";

function LoveLetters() {
    const [stamps, setStamps] = useState([]);
    const [submissions, setSubmissions] = useState([]);
    const [infos, setInfos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [openSubmission, setOpenSubmission] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
          try {
            // 1. Get reference to the stamps folder
            const stampsRef = ref(storage, 'LoveLettersToAFriend/Stamps');
            const submissionsRef = ref(storage, 'LoveLettersToAFriend/Submissions');
    
            // 2. List all items in the stamps folder
            const stampsResult = await listAll(stampsRef);
            const stampsData = stampsResult.items;
    
            // 3. List all items in the assets folder
            const submissionsResult = await listAll(submissionsRef);
            const submissionsData = submissionsResult.items;
    
            // 4. Fetch URLs for stamps
            const stampUrls = await Promise.all(
              stampsData.map((stamp) => getDownloadURL(stamp))
            );
    
            // 5. Fetch URLs for assets (based on the asset filenames matching stamp filenames)
            const submissionUrls = await Promise.all(
              submissionsData.map((submission) =>  getDownloadURL(submission))
            );
    
            // 6. Update state with the fetched URLs
            setStamps(stampUrls);
            setSubmissions(submissionUrls);
            setLoading(false); // Done loading
          } catch (error) {
            console.error("Error fetching data:", error);
            setLoading(false); // Stop loading even if error occurs
          }
        };

        const fetchInfo = async () => {
            try {
                const snapshot = await getDocs(collection(db,"loveLetters"));
                const documents = snapshot.docs.map(doc => (
                    { id: Number(doc.id), ...doc.data()}
                ));
                setInfos(documents.sort((a, b) => a.id > b.id));
            } catch (error) {
                console.error('Error fetching documents:', error);
            }
        }
    
        fetchData();
        fetchInfo();
    }, []);
    

    if (loading) {
        return <div>Loading images...</div>;
    }

    return (
        <div className="LoveLettersPage">
            <div className="LoveLettersHeaderRow">
                <Menu isMobile={true}/>
            </div>
            <div className="StampsGrid">
                {stamps.map((stamp, index) => (
                    <button onClick={() => setOpenSubmission(index + 1)} className="StampButton">
                        <img key={index} src={stamp} alt={`stamp-${index}`} width="100" height="100" className="StampImg"/>
                    </button>
                ))}
                { openSubmission !== 0 &&
                    <button className="OpenStampContainer" >
                        { infos[openSubmission-1].type === "mp4" ? 
                            <video className="OpenStampVideo" controls key={submissions[openSubmission - 1]}>
                                { openSubmission === 1 ? 
                                    <source src={vid1} type="video/mp4" className="OpenStampMov"/> :
                                    <source src={vid2} type="video/mp4" className="OpenStampMov"/>
                                }
                            </video>
                            :
                            <img src={submissions[openSubmission-1]} className="OpenStampImg"/>
                        }
                        <div className="OpenStampInfos">
                            <div className="OpenStampHeadline">
                                <div className="OpenStampTitle">
                                    {infos[openSubmission-1].title + " b"}
                                </div>
                                <div className="OpenStampName">
                                    { "y " + infos[openSubmission-1].name}
                                </div>
                            </div>
                            <div className="OpenStampDescription">
                                Description: 
                                {infos[openSubmission-1].description}
                            </div>
                            { infos[openSubmission-1].bio !== "" && 
                                <div className="OpenStampBio">
                                    Artists' Bio: 
                                    {infos[openSubmission-1].bio}
                                </div>
                            }
                        </div>
                    </button>
                }
            </div>
        </div>
    )
}

export default LoveLetters;