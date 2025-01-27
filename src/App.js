import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "./Components/Landing";
import FloatHub from "./Components/FloatHub";
import Events from "./Components/Events";
import MessagePost from "./Components/MessagePost";

import MobileHub from "./Components/MobileHub";
import MobileAbout from "./Components/MobileAbout";
import MobileEvents from "./Components/MobileEvents";
import MobileMessagePost from "./Components/MobileMessagePost";
import MobileContact from "./Components/MobileContact";
import MobileExhibit from "./Components/MobileExhibit";

import "./Styles/App.css"
import LoveLetters from "./Components/LoveLetters";

function App() {
  return (
    <div className="App">

      <BrowserRouter basename="/floatandfriends">
        <Routes>
          <Route path="/" element={<Landing/>}/>
          <Route path="/Hub" element={<FloatHub/>}/>
          <Route path="/Events" element={<Events/>}/>
          <Route path="/MessagePost" element={<MessagePost/>}/>

          <Route path="/Mobile/Hub" element={<MobileHub/>}/>
          <Route path="/Mobile/About" element={<MobileAbout/>}/>
          <Route path="/Mobile/Events" element={<MobileEvents/>}/>
          <Route path="/Mobile/MessagePost" element={<MobileMessagePost/>}/>
          <Route path="/Mobile/Contact" element={<MobileContact/>}/>
          <Route path="/Mobile/Exhibit" element={<MobileExhibit/>}/>
          <Route path="/Exhibits/LoveLetters" element={<LoveLetters/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
