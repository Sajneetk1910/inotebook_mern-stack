import NoteContext from "./NoteContext";
import { useState } from "react";

const NoteState = (props) => {
  // const s1 = {
  //   name: "sajneet",
  //   class: "10-A",
  // };

  // const [state, setState] = useState(s1);
  // const update = () => {
  //   setTimeout(() => {
  //     setState({
  //       name: "coco",
  //       class: "9-B",
  //     });
  //   }, 1000);
  // };

  const notesInitial = [
    {
      title: "My Tile",
      description: "Please wake up early",
      tag: "personal",
      _id: "68410c810e85b9c08c9ed3d3",
      date: "2025-06-05T03:18:25.865Z",
      __v: 0,
    },
  ];

  const [notes, setNotes] = useState(notesInitial);

  // add a note
  const addNote = (title, description, tag) => {
    console.log("adding a new note");
    const note = {
      title: title,
      description: description,
      tag: tag,
      _id: "68410c810e85b9c08c9ed3d389",
      date: "2025-06-05T03:18:25.865Z",
      __v: 0,
    };
    setNotes(notes.concat(note));
  };

  //delete a node
  const deleteNote = () => {
    set;
  };

  // edit a node

  const editNote = () => {};
  return (
    <>
      <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
        {props.children}
      </NoteContext.Provider>
    </>
  );
};
export default NoteState;
