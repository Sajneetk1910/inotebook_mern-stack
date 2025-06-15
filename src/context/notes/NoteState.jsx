import { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesInitial = [];

  // GET ALL NOTES
  const getNotes = async () => {
    try {
      const response = await fetch(`${host}api/notes/fetchallnotes`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjgyNDJlZDhhYzA2OGJlOGNiYTU3NTkwIn0sImlhdCI6MTc0NzcwMDkxM30.522D1HsVTJRiKIBwlXHo_eFtMp8PksB-IcOtCQK5oIs",
        },
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const json = await response.json();
      console.log(json);
      setNotes(json);
    } catch (error) {
      console.error("Error fetching notes:", error.message);
    }
  };

  const [notes, setNotes] = useState(notesInitial);
  // add a note
  const addNote = async (title, description, tag) => {
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjgyNDJlZDhhYzA2OGJlOGNiYTU3NTkwIn0sImlhdCI6MTc0NzcwMDkxM30.522D1HsVTJRiKIBwlXHo_eFtMp8PksB-IcOtCQK5oIs",
      },
      body: JSON.stringify({ title, description, tag }),
    });
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
  const deleteNote = (id) => {
    console.log("deleteing note with id" + id);
    const newNotes = notes.filter((note) => {
      note._id !== id;
    });
    setNotes(newNotes);
  };

  // edit a node
  const editNote = async (id, title, description, tag) => {
    // api call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjgyNDJlZDhhYzA2OGJlOGNiYTU3NTkwIn0sImlhdCI6MTc0NzcwMDkxM30.522D1HsVTJRiKIBwlXHo_eFtMp8PksB-IcOtCQK5oIs",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json = response.json();

    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }
  };
  return (
    <>
      <NoteContext.Provider
        value={{ notes, addNote, deleteNote, editNote, getNotes }}
      >
        {props.children}
      </NoteContext.Provider>
    </>
  );
};
export default NoteState;
