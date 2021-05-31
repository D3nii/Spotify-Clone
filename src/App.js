import { useEffect, useState } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import { getToken } from "./Essentials/spotify";
import Login from "./Login/Login";
import Player from "./Player/Player";
import { useDataLayerValue } from "./Essentials/DataLayer";

import "./App.css";

const spotify = new SpotifyWebApi();

function App() {
  const [token, setToken] = useState(null);
  const [data, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getToken();
    const _token = hash.access_token;

    window.location.hash = "";

    if (_token) {
      setToken(_token);

      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      spotify.setAccessToken(_token);

      spotify.getMe().then((_user) => {
        dispatch({
          type: "SET_USER",
          user: _user,
        });

        spotify.getUserPlaylists().then((playlists) => {
          dispatch({
            type: "SET_PLAYLISTS",
            playlists: playlists,
          });
        });

        spotify.getPlaylist("37i9dQZEVXcIJazRV9ISoM").then((response) => {
          dispatch({
            type: "SET_DISCOVER_WEEKLY",
            discover_weekly: response,
          });
        });
      });
    }
  }, []);

  return (
    <div className="app">
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
