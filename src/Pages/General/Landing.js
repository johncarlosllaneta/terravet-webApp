import React from "react";
import Join from "../../Components/Join";
import AboutUs from "./AboutUs";
import FindVet from "./FindVet";
import TalkVet from "./TalkVet";
import background from "../../Images/bg.png";
import MainNavBar from "../../Components/MainNavBar";
import SubNavBar from "../../Components/SubNavBar";
import KnowPet from "./KnowPet";

import { Container } from "react-bootstrap";
import GeneralNavBar from "./GeneralNavBar";
function Landing() {
  var bg = {
    backgroundImage: `url(${background})`,
    margin: 0,
  };

  return (
    <div style={bg}>
      <GeneralNavBar />
      <Join />
      <FindVet />
      <TalkVet />
      <KnowPet />
      <AboutUs />
    </div>
  );
}

export default Landing;
