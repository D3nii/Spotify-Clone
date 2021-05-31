import { useEffect, useState } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import { getToken } from "./Essentials/spotify";
import Login from "./Login/Login";
import Player from "./Player/Player";

import "./App.css";

const spotify = new SpotifyWebApi();

function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const hash = getToken();
    const _token = hash.access_token;

    window.location.hash = "";

    if (_token) {
      setToken(_token);
      spotify.setAccessToken(token);
    }
  }, []);

  return <div className="app">{token ? <Player /> : <Login />}</div>;
}

export default App;
