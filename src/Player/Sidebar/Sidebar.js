import React from "react";
import SidebarOption from "./SidebarOption/SidebarOption";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import { useDataLayerValue } from "../../Essentials/DataLayer";

import "./Sidebar.css";

// Use MaterialUI and make a glob type on
// whose hovering, the sidebar slides
// in from the left

let Sidebar = () => {
  // const [data, dispatch] = useDataLayerValue();
  const [{ playlists }, dispatch] = useDataLayerValue();
  return (
    <div className="sidebar">
      <img
        className="sidebar_logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
      ></img>

      <SidebarOption title="Home" Icon={HomeIcon} />
      <SidebarOption title="Search" Icon={SearchIcon} />
      <SidebarOption title="Your Library" Icon={LibraryMusicIcon} />

      <br />

      <strong className="sidebar_title">PLAYLISTS</strong>

      <hr />

      {playlists?.items?.map((playlist) => (
        <SidebarOption title={playlist.name} />
      ))}
    </div>
  );
};

export default Sidebar;
