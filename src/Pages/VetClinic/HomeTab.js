import React, { useState, useEffect } from "react";
import { Card, Row, Col, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Axios from "axios";
import { BsFillStarFill } from 'react-icons/bs';
import { FaUserAlt, FaPaw, FaClinicMedical } from 'react-icons/fa';
import Chart from "react-apexcharts";
import DataTable from "react-data-table-component";
import PetPopulationGraph from "./PetPopulationGraph";
import RatingsAndFeedback from "./RatingsAndFeedback";
import { hostUrl } from "../../Components/Host";
import { User } from "../../Components/User";


function HomeTab(props) {

  const [user, setuser] = useState([]);

  useEffect(() => {
    if (user.length === 0) {
      var token = localStorage.getItem('ajwt');
      Axios.get(`${hostUrl}/home`,
        { headers: { Authorization: `Bearer ${token}` } }
      ).then((response) => {
        setuser(response.data.result[0]);
        // console.log(user);
      });
    }

  }, [user]);


  var bgColors = {
    Blue: "white",
    Cyan: "white",
    LBlue: "white",
    LTBlue: "white",
  };



  var numberOfVetClinic = 120;
  var numberOfPetOwners = 420;
  const [numberOfPets, setnumberOfPets] = useState("");
  var numberOfPendingRequest = 23;



  useEffect(() => {

    Axios.get(`${hostUrl}/pets/length/:${user.vet_admin_id}`).then((response) => {
      setnumberOfPets(response.data.pets);
    });
  }, [user]);

  var screenh = window.screen.height - 300;
  return (
    <div >

      <Row className=" ml-5 " style={{ paddingBottom: 30 }}>
        <Col>
          <Card style={{ backgroundColor: bgColors.LBlue, color: "#3BD2E3", boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }}>
            <Card.Body>
              <Row>
                <Col>
                  <FaPaw
                    style={{ fontSize: 100 }}
                  />
                </Col>
                <Col>
                  <h1>{numberOfPets !== '' ? 0 : numberOfPets}</h1>
                  <strong>Pets</strong>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card style={{ backgroundColor: bgColors.Cyan, color: "#3BD2E3", boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }}>
            <Card.Body>
              <Row>
                <Col>
                  <FaUserAlt
                    style={{ fontSize: 100 }}
                  />
                </Col>
                <Col>
                  <h1>{numberOfPetOwners}</h1>
                  <strong>Pet Owner</strong>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card style={{ backgroundColor: bgColors.LTBlue, color: "#3BD2E3", boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }}>
            <Card.Body>
              <Row>
                <Col>
                  <FaClinicMedical
                    style={{ fontSize: 100 }}
                  />
                </Col>
                <Col>
                  <h1>{numberOfPendingRequest}</h1>
                  <strong>Pending Request</strong>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ backgroundColor: bgColors.LTBlue, color: "#3BD2E3", boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }}>
            <Card.Body>
              <Row>
                <Col>
                  <BsFillStarFill
                    style={{ fontSize: 100 }}
                  />
                </Col>
                <Col>
                  <h1>{numberOfPendingRequest}</h1>
                  <strong>Ratings</strong>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>


      <Row>
        <Col sm={8}>
          <PetPopulationGraph />
        </Col>

        <Col sm={4} style={{ display: "flex" }}>
          <Card
            style={{
              boxShadow:
                "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
              width: "100%",

            }}
          >
            <Card.Body>
              <h5 style={{ color: "#19B9CC", textAlign: 'left' }} className='mt-2'>Ratings and Feedback</h5>
              <Card style={{ height: '90%', padding: 10 }}>
                <RatingsAndFeedback />
              </Card>

            </Card.Body>
          </Card>
        </Col>
      </Row>

    </div>
  );
}

export default HomeTab;
