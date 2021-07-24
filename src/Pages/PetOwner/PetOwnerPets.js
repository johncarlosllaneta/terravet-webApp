import React, { useState, useEffect, useRef } from "react";
import {
  Col,
  Button,
  Container,
  Form,
  Modal,
  Alert,
  Image,
} from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import PetCarousel from "./PetCarousel";
import Axios from "axios";
import { MdAddAPhoto } from "react-icons/md";
import { hostUrl } from "../../Components/Host";

const PetOwnerPets = () => {
  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => {
    setShow2(true);
  };

  const [imageUrl, setimageUrl] = useState();
  const [preview, setPreview] = useState();
  useEffect(() => {
    if (imageUrl) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(imageUrl);
      console.log(imageUrl);
    } else {
      setPreview(null);
    }
  }, [imageUrl]);

  const inputFile = useRef(null);
  const onClickProfile = () => {
    // `current` points to the mounted file input element
    inputFile.current.click();
  };

  const [idx, setidx] = useState("");
  const [variant, setvariant] = useState();
  const [alertMessage, setAlertMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const [petname, setPetName] = useState("");
  const [typeOfPet, setTypeOfPet] = useState("");
  const [breedOfPet, setBreedOfPet] = useState("");
  const [genderOfPet, setGenderOfPet] = useState("");
  const [birthDate, setBirthDate] = useState("");

  const [user, setuser] = useState([]);
  useEffect(() => {
    var token = localStorage.getItem("ajwt");
    Axios.get(`${hostUrl}/home`, {
      headers: { Authorization: `Bearer ${token}` },
    }).then((response) => {
      setuser(response.data.result[0]);
    });
  }, [user]);

  const submitRegister = () => {
    // alert('clicked')

    if (
      petname !== "" &&
      typeOfPet !== "" &&
      breedOfPet !== "" &&
      genderOfPet !== "" &&
      birthDate !== ""
    ) {
      console.log(
        user.pet_owner_id,
        user.name,
        petname,
        typeOfPet,
        breedOfPet,
        genderOfPet,
        birthDate
      );

      var stringImageUrl;
      var data = new FormData();
      data.append("profile_pet", imageUrl);
      console.log(data);

      Axios.post(`${hostUrl}/upload/pet`, data).then(function (
        response
      ) {
        console.log(JSON.stringify(response.data));
        stringImageUrl = JSON.parse(JSON.stringify(response.data.profile_url));
        console.log(stringImageUrl);

        Axios.post(`${hostUrl}/pets/insert`, {
          petOwnerId: user.pet_owner_id,
          petOwnerName: user.name,
          petname: petname,
          typeOfPet: typeOfPet,
          breedOfPet: breedOfPet,
          genderOfPet: genderOfPet,
          birthDate: birthDate,
          imageUrl: stringImageUrl,
        });
        handleClose2();
      });
    } else {
      setidx(1);
      setvariant("danger");
      setAlertMessage("Something went wrong, failed to register pet");
      setShowAlert(true);
    }
  };

  var optionsGender = [
    { id: 100, gender: "" },
    { id: 101, gender: "Male" },
    { id: 102, gender: "Female" },
  ];

  var screenh = window.screen.height - 250;
  return (
    <div style={{ height: screenh }}>
      <Modal show={show2} onHide={handleClose2}>
        <Modal.Header closeButton>
          <Modal.Title>Pet Registration</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Alert key={idx} variant={variant} show={showAlert}>
              {alertMessage}
            </Alert>

            <Col>
              <Form.Group onClick={onClickProfile}>
                {preview ? (
                  <Image
                    style={{
                      display: "inline-block",
                      border: 2,
                      backgroundColor: "lightblue",
                      height: 150,
                      width: 150,
                      borderRadius: 75,
                      objectFit: "cover",
                    }}
                    src={preview}
                    alt={"preview"}
                  />
                ) : (
                  <div
                    style={{
                      border: 3,
                      borderStyle: "solid",
                      borderColor: "grey",
                      display: "inline-block",
                      backgroundColor: "white",
                      height: 100,
                      width: 100,
                      borderRadius: 50,
                      cursor: "pointer",
                    }}
                  >
                    <MdAddAPhoto
                      className="mt-4 ml-4"
                      style={{ fontSize: 40 }}
                    />
                  </div>
                )}
                <input
                  type="file"
                  id="file"
                  ref={inputFile}
                  style={{ display: "none" }}
                  accept="image/*"
                  required
                  name="profile_pet"
                  // value={profile}
                  // key='profile_petowner'
                  onChange={(event) => {
                    const file = event.target.files[0];
                    if (file && file.type.substr(0, 5) === "image") {
                      console.log(event.target.value);
                      // setprofile(event.target.value)
                      setimageUrl(file);
                    } else {
                      setimageUrl(null);
                    }
                  }}
                />
              </Form.Group>
              <p>Pet Profile</p>
            </Col>

            <Form.Group controlId="formBasicProduct">
              <Form.Label>Pet Name</Form.Label>
              <Form.Control
                type="text"
                // value={updateProductName}
                placeholder="Sample Pet Name"
                onChange={(e) => {
                  setPetName(e.target.value);
                }}
              />
            </Form.Group>

            <Form.Group controlId="formBasicProductD">
              <Form.Label>Type of Pet</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ex.Dog"
                onChange={(e) => {
                  setTypeOfPet(e.target.value);
                }}
              />
            </Form.Group>

            <Form.Group controlId="formBasicProductQ">
              <Form.Label>Breed</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ex.Aspin"
                onChange={(e) => {
                  setBreedOfPet(e.target.value);
                }}
              />
            </Form.Group>

            <Form.Group controlId="formGridStateGender">
              <Form.Label>Gender of Pet</Form.Label>
              <Form.Control
                as="select"
                onChange={(e) => {
                  setGenderOfPet(e.target.value);
                }}
              >
                {optionsGender.map((val) => {
                  return <option key={val.id}>{val.gender}</option>;
                })}
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="formGridState">
              <Form.Label>Birth Date</Form.Label>
              <Form.Control
                type="date"
                required
                onChange={(e) => {
                  setBirthDate(e.target.value);
                }}
              ></Form.Control>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={submitRegister}>
            Register
          </Button>
        </Modal.Footer>
      </Modal>

      <Container style={{ margin: 30 }}>
        <h2 style={{ textAlign: "left" }}>My Pets</h2>
        <Form inline style={{ justifyContent: "flex-end" }}>
          <Button
            style={{
              borderRadius: 30,
              borderColor: "white",
              borderWidth: 5,
              backgroundColor: "#3BD2E3",
              marginRight: 5,
            }}
            onClick={() => {
              handleShow2();
            }}
          >
            Add Pet
          </Button>
        </Form>
        <PetCarousel petOwnerId={user.pet_owner_id} />
      </Container>
    </div>
  );
};

export default PetOwnerPets;
