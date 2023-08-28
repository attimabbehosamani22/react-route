import React from "react";
import Header from "./header";
import { Outlet, useNavigate } from "react-router-dom";

const Mainheader = () => {
  const navigate = useNavigate();
  const clickfunc = () => {
    navigate("/");
  };
  return (
    <div>
      <Header />
      <button onClick={() => navigate(-1)}>goback</button>
      <button style={{ margin: 30 }} onClick={clickfunc}>
        click to home page
      </button>
      <Outlet />
    </div>
  );
};

export default Mainheader;
