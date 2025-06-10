import React, { useEffect } from "react";
import { useContext } from "react";
import noteContext from "../context/notes/NoteContext";
const About = () => {
  // const a = useContext(noteContext);
  // useEffect(() => {
  //   a.update();
  // }, []);
  return (
    <>
      {/* <h1>This is about {a.state.name} and he is in class{a.state.class}</h1> */}
      <h1>this is about page</h1>{" "}
    </>
  );
};

export default About;
