import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import About from "./Components/About";
import Alert from "./Components/Alert";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import NoteState from "./context/notes/NoteState";
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


// video 66