import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Button,
  Card,
  Image,
  Col,
  FormControl,
} from "react-bootstrap";
import Vaccination from "../../Images/PetOwner/Vaccination.png";
import Consultation from "../../Images/PetOwner/Consultation.png";
import Examination from "../../Images/PetOwner/Examination.png";
import Pharmacy from "../../Images/PetOwner/Pharmacy.png";
import Retail from "../../Images/PetOwner/Retail.png";
import Grooming from "../../Images/PetOwner/Grooming.png";
import Preventive from "../../Images/PetOwner/Preventive.png";
import NavBarHome from "../../Components/navBarHome/NavBarHome";
import { useParams, BrowserRouter as Router, Link } from "react-router-dom";
import background from "../../Images/bg.png";
import { GoSettings } from "react-icons/go";
import Axios from "axios";
import PharCard from "./PharCard";
import { hostUrl } from "../../Components/Host";

const PetProdServ = () => {
  let { vetid } = useParams();
  // alert(vetid);

  const [services, setservices] = useState([]);
  useEffect(() => {
    Axios.get(`${hostUrl}/services/${vetid}`).then((response) => {
      setservices(response.data);
      // console.log(response.data)
    });
    // alert(user.vet_admin_id);
  }, [services]);

  const [details, setdetails] = useState();
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        height: window.screen.height,

      }}
    >
      <NavBarHome />
      <Container style={{ marginTop: 110 }}>
        <Container>
          <Row style={{ justifyContent: "flex-end", padding: 15 }}>
            <Button
              href={`/petOwner/Appointment/vetdetails/${vetid}`}
              style={{
                backgroundColor: "#3BD2E3",
                borderRadius: 30,
                borderColor: "#FFFFFF",
                paddingLeft: 40,
                paddingRight: 40,
              }}
            >
              Back
            </Button>
          </Row>
        </Container>

        <Container>
          <Row className='mt-2' >
            <Col sm={8}>
              <Container
                style={{
                  backgroundColor: "#FFFFFF",
                  borderRadius: 30,
                  margin: 10,
                  paddingBottom: 20,
                  height: 550,
                  width: 1000,
                  marginLeft: -250
                }}
              >
                <h5
                  style={{
                    float: "left",
                    color: "#696969",
                    fontWeight: "bold",
                    marginTop: 20,
                    marginLeft: 20,
                  }}
                >
                  Product and Services
                </h5>
                <Container
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    rowGap: 40,
                    columnGap: 110,
                    backgroundColor: "#EFF1F7",
                    justifyContent: "center",
                    padding: 20,
                    borderRadius: 30,
                  }}
                >
                  <Link
                    to={`/petOwner/Appointment/vetdetails/service/servicedetail/:serviceid`}
                  >
                    <Card
                      style={{
                        height: 180,
                        width: 180,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: 30,
                        borderColor: "#19B9CC",
                        borderWidth: 3,
                      }}
                    >
                      <Image
                        src={Consultation}
                        style={{ height: 110, width: 110 }}
                      />
                      <h6>Consulation</h6>
                    </Card>
                  </Link>

                  <Link
                    to={`/petOwner/Appointment/vetdetails/service/servicedetail/:serviceid`}
                  >
                    <Card
                      style={{
                        height: 180,
                        width: 180,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: 30,
                        borderColor: "#19B9CC",
                        borderWidth: 3,
                      }}
                    >
                      <Image
                        src={Examination}
                        style={{ height: 110, width: 110 }}
                      />
                      <h6>Pet Examination</h6>
                    </Card>
                  </Link>

                  <Link
                    to={`/petOwner/Appointment/vetdetails/service/servicedetail/:serviceid`}
                  >
                    <Card
                      style={{
                        height: 180,
                        width: 180,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: 30,
                        borderColor: "#19B9CC",
                        borderWidth: 3,
                      }}
                    >
                      <Image
                        src={Vaccination}
                        style={{ height: 110, width: 110 }}
                      />
                      <h6>Vaccination</h6>
                    </Card>
                  </Link>
                  {/* <Card
              style={{
                height: 140,
                width: 140,
                alignContent: "center",
                alignItems: "center",
                borderRadius: 30,
                borderColor: "#19B9CC",
                borderWidth: 3,
              }}
            >
              <Image
                src={Pharmacy}
                style={{ height: 90, width: 90, marginTop: 10 }}
              />
              <h6>Pharmacy</h6>
            </Card> */}
                  <Link
                    to={`/petOwner/Appointment/vetdetails/service/servicedetail/:serviceid`}
                  >
                    <Card
                      style={{
                        height: 180,
                        width: 180,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: 30,
                        borderColor: "#19B9CC",
                        borderWidth: 3,
                      }}
                    >
                      <Image
                        src={Retail}
                        style={{ height: 110, width: 110 }}
                      />
                      <h6>Retail Product</h6>
                    </Card>
                  </Link>

                  <Link
                    to={`/petOwner/Appointment/vetdetails/service/servicedetail/:serviceid`}
                  >
                    <Card
                      style={{
                        height: 180,
                        width: 180,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: 30,
                        borderColor: "#19B9CC",
                        borderWidth: 3,
                      }}
                    >
                      <Image
                        src={Preventive}
                        style={{ height: 110, width: 110 }}
                      />
                      <h6>Preventive Services</h6>
                    </Card>
                  </Link>

                  <Link

                    to={`/petOwner/Appointment/vetdetails/service/servicedetail/${`Pet Grooming&${vetid}`}`}

                  >
                    <Card

                      style={{
                        height: 180,
                        width: 180,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: 30,
                        borderColor: "#19B9CC",
                        borderWidth: 3,
                      }}
                    >
                      <Image
                        src={Grooming}
                        style={{ height: 110, width: 110 }}
                      />
                      <h6>Pet Grooming</h6>
                    </Card>
                  </Link>
                </Container>
              </Container>
            </Col>
            <Col sm={4} style={{ marginTop: -40 }}>
              <Container
                style={{
                  backgroundColor: "#FFFFFF",
                  borderRadius: 30,
                  margin: 50,
                  height: 550,
                  width: 350,
                }}
              >
                <h5
                  style={{
                    float: "left",
                    color: "#696969",
                    fontWeight: "bold",
                    marginTop: 20,
                    marginLeft: 20,
                  }}
                >
                  Pharmacy
                </h5>
                <Container>
                  <Container
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-evenly",
                    }}
                  >
                    <FormControl placeholder="Search" />
                    <h5 style={{ fontSize: 19, marginTop: 5 }}>Filter</h5>
                    <GoSettings style={{ fontSize: 35 }} />
                  </Container>
                  <Row>
                    <Container
                      style={{
                        backgroundColor: "#EFF1F7",
                        height: 410,
                        marginTop: 10,
                        borderRadius: 30,
                        display: "flex",
                        flexWrap: "wrap",
                        overflowY: "auto",
                      }}
                    >
                      <PharCard />
                    </Container>
                  </Row>
                </Container>
              </Container>
            </Col>
          </Row>
        </Container>


      </Container>
    </div>
  );
};

export default PetProdServ;
