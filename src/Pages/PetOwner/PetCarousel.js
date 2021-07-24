import React, { useEffect, useState } from "react";
import {
  Card,
  Button,
  Container,
  Form,
  Modal,
  CarouselItem,
} from "react-bootstrap";
import Carousel from "react-multi-carousel";
import Axios from "axios";
import { hostUrl } from "../../Components/Host";

function PetCarousel(props) {
  const [pet, setPet] = useState([]);
  const [petHealthRecord, setPetHealthRecord] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    Axios.get(`${hostUrl}/pets/:${props.petOwnerId}`).then(
      (response) => {
        setPet(response.data);
        // console.log(pet);
      }
    );
  }, [pet]);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
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

  return (
    <div>
      <Container style={{ display: "inline-flex" }}>
        {pet.map((val) => {
          return (
            <div>
              <Card
                style={{
                  borderColor: "#19B9CC",
                  borderWidth: 9,
                  borderRadius: 30,
                  width: 250,
                  marginRight: 10,
                }}
              >
                <Card.Img
                  variant="top"
                  src={val.pet_picture}
                  style={{ borderRadius: 30, padding: 10, height: 200 }}
                />
                <Card.Body>
                  <Card.Title style={{ color: "#19B9CC" }}>
                    {val.pet_name}
                  </Card.Title>
                  <Card.Text>I love playing outside</Card.Text>
                  <Button variant="info">Go somewhere</Button>
                </Card.Body>
              </Card>
            </div>
          );
        })}
        {/* <Carousel
                    swipeable={true}
                    draggable={true}
                    responsive={responsive}
                    customTransition="all .5"
                    containerClass="carousel-container"
                    itemClass="carousel-item-padding-40-px"
                >
                </Carousel> */}
      </Container>
    </div>
  );
}

export default PetCarousel;
