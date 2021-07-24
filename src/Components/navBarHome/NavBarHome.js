import React, { useState, useEffect } from "react";
import {
  Navbar,
  DropdownButton,
  Dropdown,
  Container,
  Image,
  Badge,
  Toast,
  Row,
  NavDropdown
} from "react-bootstrap";
// import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { IoSettingsSharp } from 'react-icons/io5';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { TiMessages } from 'react-icons/ti';
import logo from "../../Images/logo.png";
import Axios from 'axios';
import "../../navBarHome.css";
import Notification from '../Notification';
import { hostUrl } from "../Host";


function NavBarHome() {

  const [user, setuser] = useState([]);
  const [userole, setuserole] = useState('');
  var name;
  var toast;
  var accountImg;
  useEffect(() => {

    var token = localStorage.getItem('ajwt');
    var roles = localStorage.getItem('role');

    setuserole(roles);
    // alert(userole);
    Axios.get(`${hostUrl}/home`,
      { headers: { Authorization: `Bearer ${token}` } }
    ).then((response) => {
      setuser(response.data.result[0]);
      // console.log(user);
    });


  }, [user]);

  if (parseInt(userole) === 1) {
    name = <div style={{ display: 'inline-flex' }}>
      <img className='mt-1' src={user.profilePicture} style={{
        height: 70,
        width: 70,
        borderRadius: 50,
        border: "7px",
        borderStyle: "solid",
        borderColor: "transparent",
      }}></img>
      <p className='mt-4'> {user.name}</p></div>;
  }
  else if (parseInt(userole) === 2) {
    name = <div style={{ display: 'inline-flex' }}>
      <img className='mt-1' src={user.vet_picture} style={{
        height: 70,
        width: 70,
        borderRadius: 50,
        border: "7px",
        borderStyle: "solid",
        borderColor: "transparent",
        marginTop: '2vh'
      }}></img>
      <p className='mt-4'> {user.vet_name}</p></div>;
  }
  else if (parseInt(userole) === 3) {
    name = <div style={{ display: 'inline-flex' }}>
      <img className='mt-1' src={user.profilePicture} style={{
        height: 70,
        width: 70,
        borderRadius: 50,
        border: "7px",
        borderStyle: "solid",
        borderColor: "transparent",

      }}></img><p className='mt-4'> {user.name}</p></div>;
  }


  var data = [
    {
      img: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80',
      name: 'Tri-City Vet Clinic',
      description: 'Tri-City Vet Clinic Notifies you!'
    },
    {
      img: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80',
      name: 'Tri-City Vet Clinic',
      description: 'Tri-City Vet Clinic Notifies you!'
    },
    {
      img: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80',
      name: 'Tri-City Vet Clinic',
      description: 'Tri-City Vet Clinic Notifies you!'
    },
    {
      img: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80',
      name: 'Tri-City Vet Clinic',
      description: 'Tri-City Vet Clinic Notifies you!'
    },
    {
      img: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80',
      name: 'Tri-City Vet Clinic',
      description: 'Tri-City Vet Clinic Notifies you! '
    },

  ];







  var colors = {
    Blue: "#3BD2E3",
    LightBlue: "#F1F9FC",
  };


  var logocss = {
    width: 50,
    height: 50,
  };

  var landingPageName = {
    fontWeight: "bold",
    color: colors.Blue,
  };

  const logoutUser = () => {
    // axios.delete("http://localhost:3001/logout", {
    //   token: localStorage.getItem("rjwt"),
    // });

    localStorage.clear();
    window.location.replace("/");
  };

  const [show, setShow] = useState(true);


  var circleAvatar = accountImg;

  return (
    <Navbar
      expand="lg"
      style={{
        backgroundColor: colors.LightBlue,
        padding: 0
      }}

      className='navbar fixed-top'
    >
      <Navbar.Brand className='ml-3' href="/" style={landingPageName}>
        {" "}
        <Image src={logo} style={logocss} /> TERRAVET
      </Navbar.Brand>

      <Navbar.Collapse className="justify-content-end">
        <a href="/" className='mb-2' id='talkToVet' style={{ color: 'black', fontSize: 30 }}><TiMessages /></a>

        <NavDropdown title={<IoMdNotificationsOutline style={{ fontSize: 30, }} />} id="navbarScrollingDropdown" alignRight={true}>
          <NavDropdown.Header>Notification</NavDropdown.Header>
          {data.map((val) => {
            return (
              <Notification img={val.img} name={val.name} description={val.description} />
            )
          })}
          <NavDropdown.Header style={{ textAlign: 'center' }}><a href="#" >See More</a></NavDropdown.Header>
        </NavDropdown>

        <NavDropdown style={{ fontSize: 20, marginRight: 50 }} title={name} >
          <NavDropdown.Item >Change password</NavDropdown.Item>
          <NavDropdown.Item onClick={logoutUser}>Logout</NavDropdown.Item>
        </NavDropdown>

      </Navbar.Collapse>


    </Navbar>
  );
};

export default NavBarHome;
