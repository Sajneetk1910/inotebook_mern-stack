import Card from "react-bootstrap/Card";
import noteContext from "../context/notes/NoteContext";
import { useContext } from "react";
const Noteitem = (props) => {
   const context = useContext(noteContext);
  const { deleteNote} = context;
  const { note } = props;
  return (
    <div className="col-md-3">
      <div className="card my-3">
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <div className="d-flex align-items-center">
              <Card.Title>{note.title}</Card.Title>
              <i className="fa-solid fa-trash mx-2" onClick={()=>{deleteNote(note._id)}}></i>
              <i className="fa-solid fa-pen-to-square mx-2"></i>
            </div>

            <Card.Text>{note.description}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Noteitem;
