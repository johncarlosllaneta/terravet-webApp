import React, { useState, useEffect } from "react";
import {
  Row,
  Card,
  Col,
  Container,
  Button,
  Form,
  Modal,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import PetFindVet from "../PetOwner/PetFindVet";
import { Link } from "react-router-dom";
import Axios from "axios";
import "../PetOwner/Css/petAppointmentStyle.css";
import { hostUrl } from "../../Components/Host";

const PetAppointment = () => {
  const [user, setuser] = useState([]);
  const [appointment, setAppointment] = useState([]);
  useEffect(() => {
    var token = localStorage.getItem("ajwt");
    Axios.get(`${hostUrl}/home`, {
      headers: { Authorization: `Bearer ${token}` },
    }).then((response) => {
      setuser(response.data.result[0]);
      // console.log(user);
    });
  }, [user]);

  useEffect(() => {
    Axios.get(`${hostUrl}/appointments/:${user.pet_owner_id}`).then(
      (response) => {
        setAppointment(response.data);
      }
    );
  }, [appointment]);

  function dateConvertion(date) {
    var str = date.split("-");
    var year = str[0];
    var month;
    var day = str[2];

    if (str[1] === "01") {
      month = "January";
    } else if (str[1] === "02") {
      month = "February";
    } else if (str[1] === "03") {
      month = "March";
    } else if (str[1] === "04") {
      month = "April";
    } else if (str[1] === "05") {
      month = "May";
    } else if (str[1] === "06") {
      month = "June";
    } else if (str[1] === "07") {
      month = "July";
    } else if (str[1] === "08") {
      month = "August";
    } else if (str[1] === "09") {
      month = "September";
    } else if (str[1] === "10") {
      month = "October";
    } else if (str[1] === "11") {
      month = "November";
    } else if (str[1] === "12") {
      month = "December";
    }

    return month + " " + day + ", " + year;
  }

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [serviceName, setserviceName] = useState();
  const [serviceDescription, setserviceDescription] = useState();
  const [vetName, setvetName] = useState();
  const [timeSet, settimeSet] = useState();
  const [dateSet, setdateSet] = useState();
  const [fee, setfee] = useState();
  const [petName, setpetName] = useState();
  const [status, setstatus] = useState();

  function getVetName(vet_admin_id) {
    Axios.get(
      `${hostUrl}/vetclinic/verified/appointment/${vet_admin_id}`
    ).then((response) => {
      setvetName(response.data[0].vet_name);
    });
  }

  function getPetName(pet_id) {
    Axios.get(`${hostUrl}/pets/appointment/${pet_id}`).then(
      (response) => {
        setpetName(response.data[0].pet_name);
      }
    );
  }

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Appointment Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            <strong>Service Name: </strong> {serviceName}
          </p>
          <p>
            <strong>Service Description: </strong> {serviceDescription}
          </p>
          <p>
            <strong>Vet Name: </strong> {vetName}
          </p>
          <p>
            <strong>Date: </strong> {dateSet} <br></br> <strong>Time: </strong>{" "}
            {timeSet}
          </p>
          <p>
            <strong>Fee: </strong> {fee}
          </p>
          <p>
            <strong>Pet Involved: </strong> {petName}
          </p>
          <p>
            <strong>Status: </strong> {status}
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <Row>
        <Container className="mb-3">
          <Row
            style={{
              justifyContent: "space-between",
            }}
          >
            <h1 style={{ display: "inline" }}>Upcoming Appointment</h1>
            <Link to={"/petOwner/Appointment"} style={{ display: "inline" }}>
              <Button
                style={{
                  borderRadius: 20,
                  border: "3px solid white",
                  backgroundColor: "#3BD2E3",
                  height: 50,
                }}
              >
                Add appointment
              </Button>
            </Link>
          </Row>
        </Container>

        <br />

        <div
          id="wrapper"
          style={{
            maxHeight: 300,
            display: "flex",
            overflowX: "auto",
            backgroundColor: "white",
            borderRadius: 30,
            padding: 40,
          }}
        >
          {appointment.map((val) => {
            return (
              <div>
                <Card id="item">
                  <h3 className="ml-4 mt-4">{val.service_name}</h3>
                  <p className="ml-5 ">
                    <strong>Date: </strong>{" "}
                    {dateConvertion(val.date_scheduled.split("T")[0])}{" "}
                  </p>
                  <p className="ml-5 ">
                    <strong>Time: </strong> {val.time_scheduled}{" "}
                  </p>

                  <Container style={{ margin: 0, position: "relative" }}>
                    <Button
                      style={{
                        borderRadius: 30,
                        width: 200,
                        backgroundColor: "#3BD2E3",
                        borderColor: "transparent",
                        justifyContent: "flex-end",

                        float: "right",
                      }}
                      onClick={() => {
                        setserviceName(val.service_name);
                        setserviceDescription(val.service_description);
                        getVetName(val.vet_admin_id);
                        settimeSet(val.time_scheduled);
                        setdateSet(
                          dateConvertion(val.date_scheduled.split("T")[0])
                        );
                        setfee(val.service_fee);
                        getPetName(val.pet_id);
                        setstatus(val.appointment_status);
                        handleShow();
                      }}
                    >
                      View Details
                    </Button>
                  </Container>
                </Card>
              </div>
            );
          })}
        </div>
      </Row>

      <Row>
        <div
          className="mt-5 mb-5"
          style={{
            backgroundColor: "white",
            borderRadius: 30,
            height: 350,
            width: 1500,
          }}
        >
          <div
            style={{
              width: 1000,
              height: 80,
              backgroundColor: "#EFF1F7",
              borderRadius: 30,
              position: "absolute",
              padding: 10,
              marginTop: 20,
              marginLeft: 20,
            }}
          >
            <Row
              style={{
                paddingLeft: 15,
                paddingRight: 15,
                fontSize: 20,
                fontWeight: "bold",
              }}
            >
              <Col
                style={{
                  backgroundColor: "white",
                  borderRadius: 30,
                  height: 50,
                  margin: 5,
                  color: "#57D4FF",
                  padding: 10,
                }}
              >
                Done Appointment
              </Col>
              <Col style={{ padding: 15 }}>Cancelled Appointment</Col>
              <Col style={{ padding: 15 }}>Declined Appointment</Col>
            </Row>
          </div>

          <div
            style={{
              width: 1000,
              height: 200,
              backgroundColor: "#EFF1F7",
              borderRadius: 30,
              position: "absolute",
              padding: 10,
              marginTop: 125,
              marginLeft: 30,
            }}
          ></div>
        </div>
      </Row>
    </div>
  );
};

export default PetAppointment;
