import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./about";

import Home from "./home";
import Mainheader from "./mainheader";
const Reactlazy = React.lazy(() => import("./contact"));

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mainheader />}>
          <Route index element={<Home />}></Route>
          <Route path="/about/:id/:name" element={<About />}></Route>
          <Route
            path="contact"
            element={
              <React.Suspense fallback="loading....">
                <Reactlazy />
              </React.Suspense>
            }
          ></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

// import React from "react";
// import Userlist from "./Userlist";
// import TodoList from "./TodoList";
// import "./App.css";

// const App = () => {
//   return (
//     <div>
//       <h1>Highre order component</h1>
//       <div className="section">
//         <div>
//           <Userlist />
//         </div>
//         <div>
//           <TodoList />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;

// import React from "react";
// import Todoproject from "./Todoproject";
// import Classcompinent from "./classcompinent";
// import Prps from "./prps";

// const App = () => {
//   return (
//     <div>
//       {/* <Todoproject></Todoproject> */}
//       <Prps></Prps>
//     </div>
//   );
// };

// export default App;
