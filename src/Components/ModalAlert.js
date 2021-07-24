import React from 'react'
import { Modal, Alert } from "react-bootstrap";

function ModalAlert(props) {

    return (
        <div>


            <Modal.Body>

                <Alert variant={props.variant} >
                    <Alert.Heading>{props.title}</Alert.Heading>
                    <p>
                        {props.desc}
                    </p>

                </Alert>
            </Modal.Body>


        </div>
    )
}

export default ModalAlert
