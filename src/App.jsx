import { Route, Routes } from "react-router-dom";
import About from "./Components/About";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import NoteState from "./context/notes/NoteState";
import {Alert} from "./Components/Alert";
const App = () => {
  return (
    <>
      <NoteState>
        <Navbar />
        <Alert message="This is amazing course"/>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </NoteState>
    </>
  );
};

export default App;
// video 62