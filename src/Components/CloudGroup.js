import Cloud from "./Cloud";

import "../Styles/Cloud.css"

function CloudGroup({ inFront }) {

    return (
        <div className="CloudGroup">
            {inFront ? 
                <div>
                    <Cloud size={200} pos={[-20,10]}/>
                    <Cloud size={150} pos={[300, 200]}/>
                    <Cloud size={250} pos={[1400, 200]}/>
                </div>
                :
                <div>
                    <Cloud size={100} pos={[10,500]}/>
                    <Cloud size={170} pos={[700,100]}/>
                    <Cloud size={70} pos={[1100,0]}/>

                </div>
            }
            
        </div>
    )
}

export default CloudGroup;