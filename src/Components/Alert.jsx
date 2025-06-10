import React from "react";

const Alet = (props) => {
  return (
    <div>
      <div className="alert alert-primary" role="alert">
        {props.message}
      </div>
    </div>
  );
};

export default Alet;
