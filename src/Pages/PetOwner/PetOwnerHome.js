import React from "react";
import NavBarHome from "../../Components/navBarHome/NavBarHome";
import PetOwnerVertical from "./PetOwnerVertical";
import background from "../../Images/bg.png";
import PetProdInfo from "./PetProdInfo";
const PetOwnerHome = () => {

  const screenh = window.screen.height - 200;
  return (
    <div style={{ backgroundImage: `url(${background})`, height: screenh }}>
      <NavBarHome />
      <div style={{ marginTop: 100 }}>
        <PetOwnerVertical />
      </div>
    </div>
  );
};

export default PetOwnerHome;
