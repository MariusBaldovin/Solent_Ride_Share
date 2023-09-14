import React from "react";

const Table = (props) => {
  return (
    <>
      <tr key={props.id}>
        <td>{props.location}</td>
        <td>{props.seats}</td>
        <td>{props.date}</td>
      </tr>
    </>
  );
};

export default Table;
