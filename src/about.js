import React from "react";
import {
  useLocation,
  useParams,
  useHistory,
  useNavigate,
} from "react-router-dom";

const About = ({ match }) => {
  const { id, name } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <div>
      <h1>
        about page id is {id} name is
        {name}
      </h1>
      <h2>about page path is {location.pathname}</h2>
      {location.pathname === "/about/24/chintu" ? (
        <button onClick={() => alert("chintu you are awesome")}>clicke</button>
      ) : null}

      <button onClick={() => navigate(-2)}>nvigate</button>
    </div>
  );
};

export default About;
