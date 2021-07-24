import React, { useState, useEffect } from "react";
import { Card, Row, Col, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactApexChart from "react-apexcharts";
import DataTable from "react-data-table-component";
import axios from "axios";
import { RiStethoscopeFill } from "react-icons/ri";
import { FaUserAlt, FaPaw, FaClinicMedical } from "react-icons/fa";
import { Bar } from "react-chartjs-2";
import { hostUrl } from "../../Components/Host";

function Home() {
  const data = [
    { id: 1, vet_name: "We Are Vet - Animal Clinic", ratings: "4/5 Stars" },
    { id: 2, vet_name: "One Vet Animal Center", ratings: "2/5 Stars" },
    { id: 3, vet_name: "Pet Care Veterinary Clinic", ratings: "3/5 Stars" },
    { id: 4, vet_name: "All for One Veterinary Clinic", ratings: "4/5 Stars" },
    { id: 5, vet_name: "I Love Pet - Animal Clinic", ratings: "5/5 Stars" },
  ];
  const columns = [
    {
      name: "Vet Name",
      selector: "vet_name",
      sortable: true,
    },
    {
      name: "Ratings",
      selector: "ratings",
      sortable: true,
      right: true,
    },
  ];

  // categories: ["Dogs", "Cats", "Fish", "Birds", "Turle", "Hamster"],
  const [numberOfDog, setnumberOfDog] = useState("");
  const [numberOfCat, setnumberOfCat] = useState("");
  const [numberOfFish, setnumberOfFish] = useState("");
  const [numberOfBird, setnumberOfBird] = useState("");
  const [numberOfTurtle, setnumberOfTurtle] = useState("");
  const [numberOfHamster, setnumberOfHamster] = useState("");

  useEffect(() => {
    axios.get(`${hostUrl}/pets/dog`).then((response) => {
      setnumberOfDog(response.data.dog);
    });
  }, [numberOfDog]);

  useEffect(() => {
    axios.get(`${hostUrl}/pets/cat`).then((response) => {
      setnumberOfCat(response.data.cat);
    });
  }, [numberOfCat]);

  useEffect(() => {
    axios.get(`${hostUrl}/pets/fish`).then((response) => {
      setnumberOfFish(response.data.fish);
    });
  }, [numberOfFish]);

  useEffect(() => {
    axios.get(`${hostUrl}/pets/bird`).then((response) => {
      setnumberOfBird(response.data.bird);
    });
  }, [numberOfBird]);

  useEffect(() => {
    axios.get(`${hostUrl}/pets/turtle`).then((response) => {
      setnumberOfTurtle(response.data.turtle);
    });
  }, [numberOfTurtle]);

  useEffect(() => {
    axios.get(`${hostUrl}/pets/hamster`).then((response) => {
      setnumberOfHamster(response.data.hamster);
    });
  }, [numberOfHamster]);

  const series = [
    {
      data: [21, 22, 10, 28, 16],
    },
  ];
  const options = {
    chart: {
      height: 350,
      type: "bar",
      events: {
        click: function (chart, w, e) {
          // console.log(chart, w, e)
        },
      },
    },

    plotOptions: {
      bar: {
        columnWidth: "45%",
        distributed: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    xaxis: {
      categories: [["Dog"], ["Cat"], ["Bird"], ["Small Pets"], ["Farm Animal"]],
      title: {
        text: "Animal Population",
      },
      labels: {
        style: {
          fontSize: "12px",
        },
      },
    },
  };

  var bgColors = {
    Blue: "white",
    Cyan: "white",
    LBlue: "white",
    LTBlue: "white",
  };

  // var numberOfVetClinic = 120;
  // var numberOfPetOwners = 420;
  // var numberOfPets = 200;
  // var numberOfPendingRequest = 23;
  const [numberOfVetClinic, setnumberOfVetClinic] = useState("");
  const [numberOfPetOwners, setnumberOfPetOwners] = useState("");
  const [numberOfPets, setnumberOfPets] = useState("");
  const [numberOfPendingRequest, setnumberOfPendingRequest] = useState("");

  useEffect(() => {
    axios.get(`${hostUrl}/petowner/length`).then((response) => {
      setnumberOfPetOwners(response.data.petOwners);
    });
  }, [numberOfPetOwners]);

  useEffect(() => {
    axios.get(`${hostUrl}/pets/length`).then((response) => {
      setnumberOfPets(response.data.pets);
    });
  }, [numberOfPets]);

  useEffect(() => {
    axios.get(`${hostUrl}/vetclinic/length`).then((response) => {
      setnumberOfVetClinic(response.data.vetclinic);
    });
  }, [numberOfPetOwners]);

  useEffect(() => {
    axios
      .get(`${hostUrl}/pending/vetclinic/length`)
      .then((response) => {
        setnumberOfPendingRequest(response.data.pending);
      });
  }, [numberOfPendingRequest]);

  var containerText = {};

  return (
    <div>
      <Row className=" ml-5 " style={{ paddingBottom: 30 }}>
        <Col>
          <Card
            style={{
              backgroundColor: bgColors.Blue,
              color: "#3BD2E3",
              boxShadow:
                "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
            }}
          >
            <Card.Body>
              <Row>
                <Col>
                  <RiStethoscopeFill style={{ fontSize: 100 }} />
                </Col>
                <Col style={containerText}>
                  <h1>{numberOfVetClinic}</h1>
                  <strong>Veterinary clinic</strong>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card
            style={{
              backgroundColor: bgColors.Cyan,
              color: "#3BD2E3",
              boxShadow:
                "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
            }}
          >
            <Card.Body>
              <Row>
                <Col>
                  <FaUserAlt style={{ fontSize: 100 }} />
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
          <Card
            style={{
              backgroundColor: bgColors.LBlue,
              color: "#3BD2E3",
              boxShadow:
                "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
            }}
          >
            <Card.Body>
              <Row>
                <Col>
                  <FaPaw style={{ fontSize: 100 }} />
                </Col>
                <Col>
                  <h1>{numberOfPets !== "" ? 0 : numberOfPets}</h1>
                  <strong>Pets</strong>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card
            style={{
              backgroundColor: bgColors.LTBlue,
              color: "#3BD2E3",
              boxShadow:
                "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
            }}
          >
            <Card.Body>
              <Row>
                <Col>
                  <FaClinicMedical style={{ fontSize: 100 }} />
                </Col>
                <Col>
                  <h1>{numberOfPendingRequest}</h1>
                  <strong>Pending Request</strong>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col sm={8}>
          <Card
            style={{
              marginLeft: 70,
              boxShadow:
                "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
            }}
          >
            <ReactApexChart options={options} series={series} type="bar" />
          </Card>
        </Col>

        <Col sm={4} style={{ display: "flex" }}>
          <Card
            style={{
              boxShadow:
                "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
            }}
          >
            <Card.Body>
              <DataTable
                style={{ textAlign: "left" }}
                title="Top Vet in Ratings"
                pagination={true}
                columns={columns}
                data={data}
                responsive={true}
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Home;
