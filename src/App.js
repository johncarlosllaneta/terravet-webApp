import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import Forget1 from "./Pages/General/Forget1";
import Forget2 from "./Pages/General/Forget2";
import Forget3 from "./Pages/General/Forget3";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Pages/General/Login";
import Register from "./Pages/General/Register";
import VetRegister from "./Pages/VetClinic/VetRegister";
import Landing from "./Pages/General/Landing";
import TermsAndCondition from "./Pages/General/TermsAndCondition";
import axios from "axios";
// import HomePet from "./Pages/PetOwner/TabHome";
// import PetHistory from "./Pages/PetOwner/PetHistory";
// import VetVerticalTab from "./Pages/VetClinic/VetVerticalTab";
import SystemAdminHome from "./Pages/SystemAdmin/SystemAdminHome";
import VetHome from "./Pages/VetClinic/VetHome";
import PetOwnerHome from "./Pages/PetOwner/PetOwnerHome";
import PetOwnerVertical from "./Pages/PetOwner/PetOwnerVertical";
import PetFindVet from "./Pages/PetOwner/PetFindVet";
import PetVetDetails from "./Pages/PetOwner/PetVetDetails";
import PetProdServ from "./Pages/PetOwner/PetProdServ";
import PetServDetail from "./Pages/PetOwner/PetServDetail";
import PetHistory from "./Pages/PetOwner/PetHistory";
import PetProdInfo from "./Pages/PetOwner/PetProdInfo";
import PetProdPage from "./Pages/PetOwner/PetProdPage";
import PetChat from "./Pages/PetOwner/PetChat";
import { hostUrl } from "./Components/Host";
import DataPrivacyNotice from "./Components/DataPrivacyNotice";
// import PetOwnerVertical from "./Pages/PetOwner/PetOwnerVertical";
// import PetInfo from "./Pages/PetOwner/PetInfo";



function App() {
  const [isLogin, setisLogin] = useState("");
  const [role, setRole] = useState([]);
  const [token, settoken] = useState("");
  var loginContent;

  useEffect(() => {
    const loginState = localStorage.getItem("isLogin");
    setisLogin(loginState);
    const roleuser = parseInt(localStorage.getItem("role"));
    setRole(roleuser);
    settoken(sessionStorage.getItem("ajwt"));
    // alert(token)

    axios
      .get(`${hostUrl}/home`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        setRole(res.data.result[0].password);
      })
      .catch((error) => {
        // console.error(error)
      });

    //   alert(JSON.parse(JSON.stringify(role)))
  }, [isLogin]);
  //islogin

  if (role === 1) {
    loginContent = (
      <Switch>
        <Route path="/" exact component={PetOwnerHome} />
        <Route path="/petOwner/Appointment" exact component={PetFindVet} />
        <Route
          path="/petOwner/Appointment/vetdetails/:vetid"
          exact
          children={<PetVetDetails />}
        />
        <Route
          path="/petOwner/Appointment/vetdetails/service/:vetid"
          exact
          children={<PetProdServ />}
        />
        <Route
          path="/petOwner/Appointment/vetdetails/service/servicedetail/:serviceid"
          exact
          children={<PetServDetail />}
        />
        <Route
          path="/petOwner/Appointment/vetdetails/talkVet"
          exact
          children={<PetChat />}
        />

        {/* <PetOwnerHome /> */}
      </Switch>
    );
  } else if (role === 2) {
    loginContent = <VetHome />;
    // loginContent = <h1>VET</h1>;
  } else if (role === 3) {
    loginContent = <SystemAdminHome />;
  }

  return (
    <div className="App" >
      {/* <h1>Hello World</h1> */}
      <Router>
        {!isLogin ? (
          <div>
            <Switch>
              <Route path="/" exact component={Landing} />
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
              <Route path="/forgetEmail" component={Forget1} />
              <Route path="/forgetCode" component={Forget2} />
              <Route path="/forgetNew" component={Forget3} />
              <Route path="/vetReg" component={VetRegister} />
              <Route path="/terms&condition" component={TermsAndCondition} />
            </Switch>
          </div>
        ) : (
          <div>{loginContent}</div>
        )}
      </Router>
      {/* <PetOwnerVertical /> */}
      {/* <PetOwnerVertical />
      {/* <PetInfo /> */}
      {/* <PetFindVet /> */}
      {/* <PetVetDetails /> */}
      {/* <PetProdServ /> */}
      {/* <PetServDetail /> */}
      {/* <PetVaccine /> */}
      {/* <PetProdInfo /> */}
      {/* <PetProdServ /> */}
      {/* <PetProdPage /> */}
    </div>
  );
}
export default App;
