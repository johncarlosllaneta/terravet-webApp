import React from "react";
import NavBarHome from "../../Components/navBarHome/NavBarHome";
import SystemAdHome from "./SystemAdHome";
import background from "../../Images/bg.png";

function SystemAdminHome() {

  var screenh = window.screen.height;
  return (
    <div style={{ backgroundImage: `url(${background})`, backgroundRepeat: 'repeat' }}>
      <NavBarHome />
      <div style={{ marginTop: 100 }}>
        <SystemAdHome />
      </div>
    </div>
  );
}

export default SystemAdminHome;
