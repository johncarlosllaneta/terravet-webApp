import React from 'react'
import {
    Card,
    Button,
    Container,
    Form,
    Modal,
    CarouselItem,
} from "react-bootstrap";
function PetCarouselHome(props) {
    return (
        <div>
            <Card
                style={{
                    borderColor: "#19B9CC",
                    borderWidth: 9,
                    borderRadius: 30,
                    width: 200,
                    marginRight: 15,
                    marginLeft: 15
                }}
            >
                <Card.Img
                    variant="top"
                    src={props.data.pet_picture}
                    style={{ borderRadius: 30, padding: 10, height: 200 }}
                />
                <Card.Body>
                    <Card.Title style={{ color: "#19B9CC" }}>
                        {props.data.pet_name}
                    </Card.Title>

                </Card.Body>
            </Card>
        </div>
    )
}

export default PetCarouselHome
