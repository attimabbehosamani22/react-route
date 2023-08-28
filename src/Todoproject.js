import React, { useState } from "react";
import Todo2 from "./todo2";

const Todoproject = () => {
  const [state, setstate] = useState("");
  const [array, setArray] = useState([]);

  const clickfunc = () => {
    //setArray([...array, state]);
    setArray((olditem) => {
      return [...olditem, state];
    });
    setstate("");
  };

  const selctfunc = (id) => {
    setArray((array) => {
      return array.filter((item, index) => {
        //  return id !== array.indexOf(item);
        return id !== index;
      });
    });
  };

  const deleteall = () => {
    setArray([]);
  };
  return (
    <div>
      <input value={state} onChange={(e) => setstate(e.target.value)}></input>
      <button onClick={clickfunc}>clickhere</button>

      {/* {array.map((a) => {
        return <Todo2 text={a} />;
      })} */}
      <button onClick={deleteall}>clear all</button>
      <Todo2 array={array} onSelect={(index) => selctfunc(index)} />
    </div>
  );
};

export default Todoproject;
