import React from "react";
import { accessUrl } from "../Essentials/spotify";

import "./Login.css";

let Login = () => {
  return (
    <div className="login">
      <img src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"></img>

      <a href={accessUrl}>Login with Spotify</a>
    </div>
  );
};

export default Login;
