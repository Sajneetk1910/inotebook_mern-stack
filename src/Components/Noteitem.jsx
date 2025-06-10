import Card from "react-bootstrap/Card";
const Noteitem = (props) => {
  const { note } = props;
  return (
    <div className="col-md-3">
      <div className="card my-3">
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <div className="d-flex align-items-center">
              <Card.Title>{note.title}</Card.Title>
              <i className="fa-solid fa-trash mx-2"></i>
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
