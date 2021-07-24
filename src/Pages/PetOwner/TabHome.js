import React, { useEffect, useState } from "react";
import { Col, Row, Container, Card, Spinner, Button } from "react-bootstrap";
import { IoIosAddCircle } from "react-icons/io";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import PetCarousel from "./PetCarousel";
import PetCarouselHome from "./PetCarouselHome";
import Axios from "axios";
import { hostUrl } from "../../Components/Host";
import News from "../../Components/News";
import { NewsContextProvider } from "../../Components/NewsContext";
import AppointmentHomePage from "./AppointmentHomePage";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
const TabHome = (props) => {

  const [pet, setPet] = useState([]);


  useEffect(() => {
    Axios.get(`${hostUrl}/pets/:${props.data.pet_owner_id}`).then(
      (response) => {
        setPet(response.data);
        // console.log(pet);
      }
    );
  }, [pet]);


  return (
    <Row style={{ backgroundColor: "transparent" }}>
      <Col sm={8} style={{ height: 620, width: 600 }}>
        <Container style={{ margin: 10 }}>

          <Row style={{ marginTop: 10 }}>
            <Row className='mb-3'
              style={{
                backgroundColor: "white",
                height: 375,
                borderRadius: 30,


              }}
            >
              <Container
                style={{
                  padding: 10,
                  borderRadius: 30,
                  width: 970,
                  boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
                  padding: 20
                }}
              >
                <h4 style={{ color: "#19B9CC", textAlign: 'left' }}>Pets</h4>


                <Carousel responsive={responsive}>
                  {pet.length != 0 ? pet.map((val) => {
                    return <PetCarouselHome data={val} />
                  }) : <Spinner animation="border" role="status" style={{ marginLeft: 450, marginTop: 100 }}>
                    <span className="visually-hidden"></span>
                  </Spinner>}

                </Carousel>
              </Container>
            </Row>
            <Row
              style={{
                backgroundColor: "white",
                borderRadius: 30
              }}
            >
              <Container
                style={{
                  borderRadius: 30,
                  backgroundColor: "white",
                  padding: 20,
                  boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
                }}
              >

                <NewsContextProvider>
                  <News />
                </NewsContextProvider>
              </Container>
            </Row>
          </Row>


        </Container>
      </Col>
      <Col sm={4}>
        <Container
          style={{
            marginLeft: 40,
            borderRadius: 30,
            backgroundColor: "white",
            height: 700,
            padding: 30,
            boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
          }}
        >
          <Row className='mb-2'>
            <Col>
              <h5 style={{ color: "#19B9CC", textAlign: 'left' }} className='mt-2'>Appointment</h5>
            </Col>

            <Col>
              <Button style={{ display: 'inline-flex', justifyContent: 'flex-end', alignItems: 'flex-end', float: 'right' }}>Set Appointment</Button>
            </Col>
          </Row>


          <AppointmentHomePage data={props.data} />
        </Container>
      </Col>
    </Row>
  );
};

export default TabHome;
