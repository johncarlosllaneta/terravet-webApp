import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Button,
  Col,
  Card,
  Form,
  Modal,
} from "react-bootstrap";
import NavBarHome from "../../Components/navBarHome/NavBarHome";

import { useParams, BrowserRouter as Router, Link } from "react-router-dom";
import Axios from "axios";
import background from "../../Images/bg.png";
import ServCard from "./ServCard";
import { hostUrl } from "../../Components/Host";

const PetServDetail = () => {
  let { serviceid } = useParams();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [dateSet, setdateSet] = useState();
  const [timeSet, settimeSet] = useState();

  const [user, setuser] = useState([]);

  useEffect(() => {
    var token = localStorage.getItem("ajwt");
    Axios.get(`${hostUrl}/home`, {
      headers: { Authorization: `Bearer ${token}` },
    }).then((response) => {
      setuser(response.data.result[0]);
    });
  }, [user]);

  const [pet, setPet] = useState([]);
  const [petId, setpetId] = useState();
  const [petName, setpetName] = useState();

  let optionss = [];
  useEffect(() => {
    Axios.get(
      `${hostUrl}/pets/appointment/submit/${user.pet_owner_id}`
    ).then((response) => {
      response.data.forEach((element) => {
        optionss.push(element);
      });
      setPet(optionss);
    });
    console.log(pet);
  }, [pet]);

  const [services, setservices] = useState([]);
  useEffect(() => {
    Axios.get(`${hostUrl}/services/details/info/:${serviceid.split('&')[1] + "&" + serviceid.split('&')[0]}`,

    ).then(
      (response) => {
        setservices(response.data);
        // console.log(response.data)
      }
    );
    console.log(services);
  }, [services]);

  const [vetclinic, setVetClinic] = useState([]);
  useEffect(() => {
    Axios.get(
      `${hostUrl}/vetclinic/verified/:${services.vet_admin_id}`
    ).then((response) => {
      setVetClinic(response.data[0]);
    });
  }, [vetclinic]);

  const [serviceId, setserviceId] = useState();
  const [serviceName, setserviceName] = useState();
  const [serviceDescription, setserviceDescription] = useState();
  const [serviceFee, setserviceFee] = useState();
  const submitAppointment = () => {
    Axios.post(`${hostUrl}/appointment/set`, {
      vet_admin_id: serviceid.split('&')[1],
      pet_owner_id: user.pet_owner_id,
      pet_id: petId,
      dateSet: dateSet,
      timeSet: timeSet,
      service_id: serviceId,
    }).then((response) => {
      alert(response.data.message);
      handleClose();
      window.location.replace("/");
    });
  };


  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        height: window.screen.height,
      }}
    >
      <NavBarHome />
      <Modal show={show} onHide={handleClose}>
        <Container style={{ margin: 20 }}>
          <h6 style={{ color: "#FF0000", fontSize: 25 }}>Alert!</h6>
          <p style={{ fontWeight: "bold" }}>
            Are you sure you want to proceed
            <br />
            settings up appointment?
          </p>
        </Container>
        <Container style={{ margin: 20 }}>
          <Row style={{ justifyContent: "space-evenly" }}>
            <Button
              style={{
                backgroundColor: "#3BD2E3",
                borderRadius: 30,
                borderWidth: 5,
                borderColor: "#FFFFFF",
                paddingLeft: 30,
                paddingRight: 30,
              }}
              onClick={handleClose}
            >
              Cancel
            </Button>
            <Button
              style={{
                backgroundColor: "#3BD2E3",
                borderRadius: 30,
                borderWidth: 5,
                borderColor: "#FFFFFF",
                paddingLeft: 25,
                paddingRight: 25,
              }}
              onClick={submitAppointment}
            >
              Proceed
            </Button>
          </Row>
        </Container>
      </Modal>
      <Container style={{ marginTop: 110 }}>
        <Row
          style={{
            padding: 15,
            justifyContent: "flex-end",
          }}
        >
          <Button
            href={`/petOwner/Appointment/vetdetails/service/${serviceid.split('&')[1]}`}
            style={{
              paddingLeft: 30,
              paddingRight: 30,
              backgroundColor: "#3BD2E3",
              borderRadius: 30,
              borderColor: "#FFFFFF",
              marginRight: 10,
            }}
          >
            Back
          </Button>
        </Row>
        <Row>
          <Container
            style={{
              backgroundColor: "#FFFFFF",
              marginTop: 20,
              borderRadius: 30,
              textIndent: 10,
              marginBottom: 20,
            }}
          >
            <h2>Services</h2>
            <Row>
              <Col>
                <Container
                  style={{
                    backgroundColor: "#EFF1F7",
                    height: 575,
                    width: 500,
                    borderRadius: 30,
                    margin: 10,
                    textAlign: "left",
                    padding: 10,
                  }}
                >
                  <h4>Type of Service</h4>
                  <Container
                    style={{
                      padding: 10,
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        overflowY: "auto",
                        rowGap: 20,
                        justifyContent: "center",
                        alignItems: "center",
                        display: "flex",
                        // backgroundColor: 'red'
                      }}
                    >



                      {services.map((e) => {
                        return (
                          <Card style={{ height: 90, width: 400, justifyContent: "center", borderRadius: 30 }} >
                            <Card.Title
                              className='mt-1'
                              onClick={() => { setserviceId(e.service_id); setserviceName(e.service_name); setserviceDescription(e.service_description); setserviceFee(e.service_fee) }}
                              style={{
                                cursor: 'pointer',
                                fontSize: 25,
                                marginLeft: 10,
                                color: "#3BD2E3",
                                fontWeight: "bold",
                              }}
                            >
                              {e.service_name}
                            </Card.Title>
                          </Card>
                        )
                      })}
                    </div>
                  </Container>
                </Container>
              </Col>
              <Col>
                <Container
                  style={{
                    backgroundColor: "transparent",
                    height: 600,
                    width: 520,
                    margin: 10,
                  }}
                >
                  <Row style={{ rowGap: 10 }}>
                    <Col>
                      <Container
                        style={{
                          padding: 20,
                          borderRadius: 30,
                          backgroundColor: "#EFF1F7",
                        }}
                      >
                        <Container
                          style={{
                            backgroundColor: "#FFFFFF",
                            height: 380,
                            width: 450,
                            borderRadius: 30,
                          }}
                        >
                          <div
                            style={{
                              flexDirection: "column",
                              padding: 15,
                            }}
                          >
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-between",
                                padding: 10,
                              }}
                            >
                              <h5 style={{ color: "#3BD2E3" }}>
                                Service Name:
                              </h5>
                              <p>{serviceName}</p>
                            </div>
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-between",
                                padding: 10,
                              }}
                            >
                              <h5 style={{ color: "#3BD2E3" }}>
                                Service Description:
                              </h5>
                              <p>{serviceDescription}</p>
                            </div>
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-between",
                                padding: 10,
                              }}
                            >
                              <h5 style={{ color: "#3BD2E3" }}>Service Fee:</h5>
                              <p>₱{serviceFee}.00­­</p>
                            </div>
                          </div>
                        </Container>
                      </Container>
                    </Col>
                    <Col>
                      <Container
                        style={{
                          padding: 10,
                          borderRadius: 30,
                          backgroundColor: "#EFF1F7",
                        }}
                      >
                        <Container
                          style={{
                            // backgroundColor: "#FFFFFF",
                            height: 140,
                            width: 470,
                            borderRadius: 30,
                          }}
                        >
                          <Form style={{ margin: 5 }}>
                            <Form.Group as={Row}>
                              <Form.Label
                                column
                                sm="2"
                                style={{ fontWeight: "bold" }}
                              >
                                Pets
                              </Form.Label>
                              <Col sm="10">
                                <Form.Control
                                  as="select"
                                  style={{
                                    textIndent: 130,
                                    fontWeight: "bold",
                                    marginLeft: -20,
                                    width: 370,
                                  }}
                                  // defaultValue={pet[0].pet_id}
                                  onChange={(e) => {
                                    setpetId(e.target.value);

                                    e.preventDefault();

                                  }}
                                >
                                  {pet.map((val) => {
                                    return (
                                      <option value={val.pet_id}>
                                        {val.pet_name}
                                      </option>
                                    )
                                  })}
                                </Form.Control>
                              </Col>
                            </Form.Group>
                            <Row style={{ justifyContent: "center" }}>
                              <Col>
                                <Form.Group
                                  as={Row}
                                  controlId="formDate"
                                  style={{ textAlign: "left " }}
                                >
                                  <Form.Label
                                    column
                                    sm="2"
                                    style={{ fontWeight: "bold" }}
                                  >
                                    Date
                                  </Form.Label>
                                  <Col sm={10}>
                                    <Form.Control
                                      type="date"
                                      onChange={(e) => {
                                        setdateSet(e.target.value);
                                        // alert(dateSet);
                                      }}
                                      style={{ marginLeft: 10 }}
                                    />
                                  </Col>
                                </Form.Group>
                              </Col>
                              <Col style={{ justifyContent: "space-evenly" }}>
                                <Form.Group
                                  controlId="formGridStateTypeOfPet"
                                  style={{ textAlign: "left " }}
                                  as={Row}
                                >
                                  <Form.Label
                                    column
                                    sm="2"
                                    style={{
                                      fontWeight: "bold",
                                    }}
                                  >
                                    Time
                                  </Form.Label>
                                  <Col sm={10}>
                                    <Form.Control
                                      as="select"
                                      custom
                                      onChange={(e) => {
                                        settimeSet(e.target.value);
                                      }}
                                    >
                                      <option value={"08:00 AM - 09:00 AM"}>
                                        08:00 AM - 09:00 AM
                                      </option>
                                      <option value={"09:00 AM - 10:00 AM"}>
                                        09:00 AM - 10:00 AM
                                      </option>
                                      <option value={"10:00 AM - 11:00 AM"}>
                                        10:00 AM - 11:00 AM
                                      </option>
                                      <option value={"11:00 AM - 12:00 PM"}>
                                        11:00 AM - 12:00 PM
                                      </option>
                                      <option value={"12:00 PM - 01:00 PM"}>
                                        12:00 PM - 01:00 PM
                                      </option>
                                      <option value={"01:00 PM - 02:00 PM"}>
                                        01:00 PM - 02:00 PM
                                      </option>
                                      <option value={"02:00 PM - 03:00 PM"}>
                                        02:00 PM - 03:00 PM
                                      </option>
                                      <option value={"03:00 PM - 04:00 PM"}>
                                        03:00 PM - 04:00 PM
                                      </option>
                                      <option value={"04:00 PM - 05:00 PM"}>
                                        04:00 PM - 05:00 PM
                                      </option>
                                    </Form.Control>
                                  </Col>
                                </Form.Group>
                              </Col>
                            </Row>
                            <Button
                              style={{
                                marginTop: -5,
                                // paddingLetft: 270,
                                // paddingRight: 270,
                                backgroundColor: "#3BD2E3",
                                fontWeight: "bold",
                                // textAlign: "center",
                                borderColor: "#FFFFFF",
                                width: "100%",
                                marginLeft: 10,

                                // padding: 5,
                              }}
                              onClick={() => {
                                handleShow();
                              }}
                            >
                              Set Appointment
                            </Button>
                          </Form>
                        </Container>
                      </Container>
                    </Col>
                  </Row>
                </Container>
              </Col>
            </Row>
          </Container>
        </Row>
      </Container>
    </div>
  );
};

export default PetServDetail;
