import React, { useEffect, useState } from "react";
import NavBarHome from "../../Components/navBarHome/NavBarHome";
import UnVetVerticableTab from "./UnVetVerticableTab";
import VetVerticalTab from "./VetVerticalTab";
import Axios from "axios";
import background from "../../Images/bg.png";
import { hostUrl } from "../../Components/Host";

const VetHome = () => {
  var vetContent;
  const [vetStatus, setVetStatus] = useState("");
  const [user, setuser] = useState([]);

  useEffect(() => {

    var token = localStorage.getItem('ajwt');



    Axios.get(`${hostUrl}/home`,
      { headers: { Authorization: `Bearer ${token}` } }
    ).then((response) => {
      setuser(response.data.result[0]);
      // console.log(user);
    });


  }, [user]);


  useEffect(() => {
    const vetClinicStatus = localStorage.getItem("vetStatus");
    setVetStatus(vetClinicStatus);
  }, [vetStatus]);

  if (vetStatus === "Pending") {
    vetContent = <UnVetVerticableTab />;
  } else {
    vetContent = <VetVerticalTab />;
  }
  return (
    <div style={{ backgroundImage: `url(${background})`, backgroundRepeat: 'repeat' }}>
      <NavBarHome />
      <div style={{ marginTop: 100 }}>
        {vetContent}
      </div>
    </div>
  );
};

export default VetHome;
