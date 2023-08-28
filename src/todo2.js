import React from "react";

const Todo2 = (props) => {
  // const deletefunc = (id) => {
  //   console.log("deleted ", id);
  //   props.array.filter((item, index) => {
  //     return props.array.indexof(item) !== id;
  //   });
  // };
  return (
    <>
      {props.array.map((a, index) => {
        return (
          <li key={index} id={index}>
            {a}
            <button onClick={() => props.onSelect(index)}>*</button>
          </li>
        );
      })}
    </>
  );
};

export default Todo2;
