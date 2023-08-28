import React, { useEffect, useState } from "react";
import axios from "axios";

const TodoList = () => {
  const [state, setstate] = useState([]);
  const [term, setTerm] = useState("");
  useEffect(() => {
    const list = async () => {
      const res = await axios
        .get("https://jsonplaceholder.typicode.com/todos")
        .then((datas) => datas.data)

        .catch((err) => console.log(err));
      setstate(res);
      console.log(res);
    };
    list();
  }, []);
  // let displaydata = state.map((item) => {
  //   return (
  //     <div key={state.id}>
  //       <h1>{item.name}</h1>
  //     </div>
  //   );
  // });

  let filterData = state
    .slice(0, 10)
    .filter(({ title }) => {
      return title.indexOf(term) >= 0;
    })
    .map((state) => {
      return (
        <div key={state.id}>
          <h1>{state.title}</h1>
        </div>
      );
    });

  return (
    <>
      {/* <div>{displaydata}</div>; */}
      <input type="text" onChange={(e) => setTerm(e.target.value)}></input>
      <div>{filterData}</div>
    </>
  );
};

export default TodoList;
