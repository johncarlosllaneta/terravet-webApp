import React, { useState, useEffect } from "react";
import { Card, Row, Col, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactApexChart from "react-apexcharts";
import axios from "axios";
import { RiStethoscopeFill } from "react-icons/ri";
import { FaUserAlt, FaPaw, FaClinicMedical } from "react-icons/fa";
import { Bar } from "react-chartjs-2";
import { hostUrl } from "../../Components/Host";

function PetPopulationGraph() {
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

    return (
        <div>
            <Card
                style={{
                    marginLeft: 60,
                    boxShadow:
                        "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",

                }}
            >
                <ReactApexChart options={options} series={series} type="bar" />
            </Card>
        </div>
    )
}

export default PetPopulationGraph
