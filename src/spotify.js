export const authEndpoint = "https://accounts.spotify.com/authorize";
const redirectUri = "http://localhost:3000/callback/";
const clientId = "01b8157de0a44c3e914f92b3cb995c26";

const scopes = [
  "user-read-currently-playing",
  "user-modify-playback-state",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
];

export const getToken = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      let parts = item.split("=");

      initial[parts[0]] = decodeURIComponent(parts[1]);

      return initial;
    }, {});
};

export const accessUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
