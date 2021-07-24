import React, { useState, useRef, useEffect } from "react";
import { Button, Form, Image, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Axios from "axios";
import { IoChevronBack } from "react-icons/io5";
import { MdAddAPhoto } from 'react-icons/md';
import RegisterFooter from "./RegisterFooter";
import logo from "../../src/Images/assets/logo.png";
import FormData from 'form-data';
import { hostUrl } from "../Components/Host";
import DataPrivacyNotice from "./DataPrivacyNotice";

function RegisterForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [agree, setagree] = useState('');
  const [address, setaddress] = useState("");
  const [contactNumber, setcontactNumber] = useState('');
  const [firstPane, setfirstPane] = useState('block');
  const [secondPane, setsecondPane] = useState('none');
  const [imageUrl, setimageUrl] = useState();
  const [preview, setPreview] = useState();
  const [dataPrivacyPane, setdataPrivacyPane] = useState('block');
  const [FormPane, setFormPane] = useState('none')

  useEffect(() => {
    if (imageUrl) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(imageUrl);
      console.log(imageUrl);
    } else {
      setPreview(null)
    }
  }, [imageUrl]);

  const submitRegister = (e) => {

    if (
      name !== "" &&
      email !== "" &&
      password !== "" &&
      password === confirmPassword &&
      address !== "" &&
      contactNumber !== ""
    ) {

      var stringImageUrl;
      var data = new FormData();
      data.append('profile_petowner', imageUrl);
      console.log(data);

      Axios.post(`${hostUrl}/upload/petowner`, data).then(function (response) {
        console.log(JSON.stringify(response.data));
        stringImageUrl = JSON.parse(JSON.stringify(response.data.profile_url));
        console.log(stringImageUrl);


        Axios.post(`${hostUrl}/register/petowner`, {
          email: email,
          password: password,
          name: name,
          address: address,
          contactNumber: contactNumber,
          profile_petowner: stringImageUrl
        }
        ).then((response) => {

          if (response.data.message === 'Registered') {
            Axios.get(`${hostUrl}/api/login`, {
              params: {
                email: email,
                password: password
              }
            }).then((response) => {
              if (response.data.message === "Correct") {
                alert(response.data.accessToken);
                localStorage.setItem("ajwt", response.data.accessToken);
                localStorage.setItem("rjwt", response.data.refreshToken);
                localStorage.setItem("isLogin", true);
                localStorage.setItem("role", response.data.role);
                window.location.href = `${hostUrl}/`;
              }
            })
          }
        })
      })
    }
    e.preventDefault();
  };


  const second = (e) => {
    if (
      name !== "" &&
      email !== "" &&
      password !== "" &&
      password === confirmPassword &&
      agree === 'on'
    ) {
      setfirstPane('none');
      setsecondPane('block');
    }

    e.preventDefault();
  }

  const inputFile = useRef(null);
  const onClickProfile = () => {
    // `current` points to the mounted file input element
    inputFile.current.click();
  };


  const changePaneFunction = () => {
    setdataPrivacyPane('none');
    setFormPane('block');
  }

  return (
    <div style={{ marginTop: "5%" }}>
      <a href="/" className='mb-5 ml-5' style={{ textDecoration: 'none', float: 'left', fontSize: 20 }}><IoChevronBack />Return to Home</a>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <Image src={logo} />



      <div style={{ display: dataPrivacyPane }}>
        <DataPrivacyNotice changePaneFunction={changePaneFunction} />

      </div>

      <div style={{ display: FormPane }}>
        <h1
          style={{
            textAlign: "center",
            fontSize: 50,
            color: "#0A94A4",
            fontWeight: "bold",
            marginLeft: '10%'
          }}
        >
          Create an Account
        </h1>
        <Form style={{ width: "50%", marginLeft: '30%' }} onSubmit={second}>
          <div style={{ display: firstPane }}>
            <Form.Group style={{ textAlign: "left" }}>
              <Form.Control
                style={{ height: 50, backgroundColor: "white" }}
                type="text"
                placeholder="Name"
                required
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </Form.Group>

            <Form.Group style={{ textAlign: "left" }}>

              <Form.Control
                style={{ height: 50, backgroundColor: "white" }}
                type="email"
                placeholder="Email Address"
                required
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </Form.Group>

            <Form.Group style={{ textAlign: "left" }}>
              <Form.Control
                style={{ height: 50, backgroundColor: "white" }}
                type="password"
                placeholder="Password"
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                required
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <Form.Text id="passwordHelpBlock" muted>
                Your password must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters
              </Form.Text>
            </Form.Group>

            <Form.Group style={{ textAlign: "left" }}>
              <Form.Control
                style={{ height: 50, backgroundColor: "white" }}
                type="password"
                placeholder="Confirm Password"
                pattern={password}
                required
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                }}
              />
            </Form.Group>



            <Button
              variant="primary"
              type='submit'
              style={{
                backgroundColor: "#0A94A4",
                width: "100%",
                height: '100%',
                borderRadius: 5,
                borderColor: "white",
                fontWeight: "bold",
                fontSize: 15,
                textAlign: "center",
              }}
            >
              REGISTER
            </Button>
          </div>

        </Form>
        <Form style={{ width: "50%", marginLeft: '30%' }} onSubmit={submitRegister}>


          <div style={{ display: secondPane }}>
            <h5>Personal Information</h5>


            <Col>

              <Form.Group
                onClick={onClickProfile}
              >
                {preview ? (
                  <Image style={{ display: 'inline-block', border: 2, backgroundColor: 'lightblue', height: 150, width: 150, borderRadius: 75, objectFit: "cover" }} src={preview} alt={"preview"} />
                ) : (
                  <div style={{ border: 3, borderStyle: 'solid', borderColor: 'black', display: 'inline-block', backgroundColor: 'lightblue', height: 100, width: 100, borderRadius: 50, cursor: 'pointer' }}>
                    <MdAddAPhoto className='mt-4' style={{ fontSize: 40 }} />
                  </div>
                )}
                <input type='file' id='file' ref={inputFile} style={{ display: 'none' }}
                  accept="image/*"
                  required
                  name='profile_pet'
                  onChange={(event) => {
                    const file = event.target.files[0];
                    if (file && file.type.substr(0, 5) === "image") {
                      console.log(event.target.value);
                      setimageUrl(file);
                    } else {
                      setimageUrl(null);
                    }
                  }}
                />
              </Form.Group>
              <p>Profile Picture</p>
            </Col>


            <Form.Group style={{ textAlign: "left" }}>
              <Form.Control
                style={{ height: 50, backgroundColor: "white" }}
                type="text"
                placeholder="Address"
                required
                onChange={(e) => {
                  setaddress(e.target.value);
                }}
              />
            </Form.Group>

            <Form.Group style={{ textAlign: "left" }}>
              <Form.Control
                style={{ height: 50, backgroundColor: "white", appearance: 'none', MozAppearance: 'textfield' }}
                type="number"
                placeholder="Contact Number"
                pattern="\d*"
                maxLength={11}
                max={11}

                required

                onChange={(e) => {
                  setcontactNumber(e.target.value);
                }}
              />
            </Form.Group>


            <Button
              variant="primary"
              type='submit'
              style={{
                backgroundColor: "#0A94A4",
                width: "100%",
                height: '100%',
                borderRadius: 5,
                borderColor: "white",
                fontWeight: "bold",
                fontSize: 15,
                textAlign: "center",
              }}
            >
              DONE
            </Button>

          </div>


          <hr></hr>
          <p>Login Already? <a href='/login'>Login</a></p>
        </Form>

      </div>



    </div>
  );
}

export default RegisterForm;
