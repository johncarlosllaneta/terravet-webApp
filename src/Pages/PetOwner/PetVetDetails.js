import React, { useState, useEffect } from "react";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import NavBarHome from "../../Components/navBarHome/NavBarHome";
import { useParams, BrowserRouter as Router, Link } from "react-router-dom";
import background from "../../Images/bg.png";
import Axios from "axios";
import { hostUrl } from "../../Components/Host";
const ratingChanged = (newRating) => {
  console.log(newRating);
};

function PetVetDetails() {
  let { vetid } = useParams();
  // alert(vetid);

  const [vetclinic, setVetClinic] = useState([]);
  useEffect(() => {
    Axios.get(`${hostUrl}/vetclinic/verified/:${vetid}`).then(
      (response) => {
        setVetClinic(response.data[0]);
        // console.log(vetclinic.vet_name);
        // alert(vetclinic.vet_name);
      }
    );
  }, [vetclinic]);

  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        height: window.screen.height,
        marginTop: 110,
      }}
    >
      <NavBarHome />
      <Container>
        <Row style={{ justifyContent: "space-between", padding: 20 }}>
          <h5
            style={{ color: "#696969", fontWeight: "bold", display: "inline" }}
          >
            Veterinary Clinic Details
          </h5>
          <Button
            href="/petOwner/Appointment"
            style={{
              display: "inline",
              backgroundColor: "#3BD2E3",
              paddingLeft: 30,
              paddingRight: 30,
              borderRadius: 30,
              borderColor: "#FFFFFF",
            }}
          >
            Back
          </Button>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <Card
              style={{
                backgroundColor: "#DAF1F8",
                borderRadius: 30,
                borderColor: "#19B9CC",
                borderWidth: 3,
                height: 480,
              }}
            >
              <Row xs={4} md={4} lg={6}>
                <Col>
                  <Container style={{ marginLeft: 25, marginTop: 20 }}>
                    <Image
                      src={vetclinic.vet_picture}
                      style={{
                        height: 85,
                        width: 85,
                      }}
                      roundedCircle
                    />
                  </Container>
                </Col>
                <Col>
                  <Container
                    style={{ width: 400, textAlign: "left", marginLeft: 35 }}
                  >
                    <h5
                      style={{
                        color: "#696969",
                        fontWeight: "bold",
                        marginTop: 35,
                      }}
                    >
                      {vetclinic.vet_name}
                    </h5>
                    <h6
                      style={{
                        color: "#696969",
                        fontWeight: "bold",
                        marginTop: -10,
                        marginLeft: 2,
                      }}
                    >
                      Veterinary CLinic
                    </h6>
                    <p
                      style={{
                        color: "#707070",
                        marginLeft: 2,
                        marginTop: -10,
                      }}
                    ></p>
                  </Container>
                </Col>
              </Row>
              <Row style={{ justifyContent: "center" }}>
                <h6
                  style={{
                    marginTop: 15,
                    marginRight: 40,
                    fontWeight: "bold",
                    fontSize: 17,
                  }}
                >
                  Veterinary Clinic Information
                </h6>
                <Button
                  style={{
                    borderRadius: 30,
                    borderWidth: 5,
                    borderColor: "#FFFFFF",
                    paddingLeft: 35,
                    paddingRight: 35,
                    paddingTop: 10,
                    paddingBottom: 10,
                    backgroundColor: "#3BD2E3",
                  }}
                >
                  Direction
                </Button>
              </Row>
              <Row>
                <Container style={{ height: 220, textIndent: 10 }}>
                  <h5 style={{ marginTop: 10 }}>Operating Schedule:</h5>
                  <br />
                  <p style={{ marginTop: -30, color: "#696969" }}>
                    Monday-Saturday
                  </p>
                  <br />
                  <p style={{ marginTop: -40, color: "#696969" }}>
                    9:00 AM- 5:00 PM
                  </p>

                  <br />
                  <h5>Contact Details:</h5>
                  <br />
                  <p style={{ marginTop: -30, color: "#696969" }}>
                    {vetclinic.email}
                  </p>
                  <br />
                  <p style={{ marginTop: -40, color: "#696969" }}>
                    {vetclinic.vet_contact_number}
                  </p>
                </Container>
              </Row>

              <Row
                style={{
                  marginTop: 10,
                  justifyContent: "space-around",
                }}
              >
                <Link
                  to={`/petOwner/Appointment/vetdetails/service/${vetclinic.vet_admin_id}`}
                >
                  <Button
                    style={{
                      borderRadius: 30,
                      borderWidth: 5,
                      borderColor: "#FFFFFF",
                      paddingRight: 20,
                      paddingLeft: 20,
                      backgroundColor: "#3BD2E3",
                      display: "inline",
                    }}
                  >
                    View Shop
                  </Button>
                </Link>
                <Button
                  href="/petOwner/Appointment/vetdetails/:vetid/talkVet"
                  style={{
                    borderRadius: 30,
                    borderWidth: 5,
                    borderColor: "#FFFFFF",
                    paddingRight: 20,
                    paddingLeft: 20,
                    backgroundColor: "#3BD2E3",
                    display: "inline",
                  }}
                >
                  Talk to Vet
                </Button>
              </Row>
            </Card>
          </Col>
          <Col>
            <Card
              style={{
                backgroundColor: "#DAF1F8",
                borderRadius: 30,
                borderColor: "#19B9CC",
                borderWidth: 3,
                height: 480,
              }}
            >
              <Container style={{ padding: 20 }}>
                <Row style={{ padding: 10 }}>
                  <h5 style={{ display: "inline", fontWeight: "bold" }}>
                    Ratings and Feedbacks
                  </h5>
                  <div style={{ marginTop: -17 }}>
                    <ReactStars
                      count={5}
                      onChange={ratingChanged}
                      size={35}
                      isHalf={true}
                      emptyIcon={<BsStar />}
                      halfIcon={<BsStarHalf />}
                      fullIcon={<BsStarFill />}
                      activeColor="#ffd700"
                    />
                  </div>
                  <label style={{ display: "inline", fontWeight: "bold" }}>
                    0/5
                  </label>
                </Row>
                <hr />
              </Container>

              <Container style={{ marginLeft: 10 }}>
                <Row>
                  <Image
                    style={{ width: 60, height: 70 }}
                    src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80"
                    roundedCircle
                  />
                  <p
                    style={{ marginTop: 10, marginLeft: 5, textAlign: "left" }}
                  >
                    Maria Deltor
                    <br />
                    The clinic is so accomodate
                  </p>

                  <div style={{ marginTop: 10, marginLeft: 10 }}>
                    <ReactStars
                      count={5}
                      value={4}
                      size={30}
                      emptyIcon={<BsStar />}
                      halfIcon={<BsStarHalf />}
                      fullIcon={<BsStarFill />}
                      edit={false}
                    />
                  </div>
                </Row>
              </Container>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default PetVetDetails;
