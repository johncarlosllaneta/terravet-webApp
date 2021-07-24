import React from 'react'
import { FaFacebook, } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Button, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
function RegisterFooter() {
    return (
        <div>

            <p>OR</p>
            <Button className='mb-3' style={{ backgroundColor: "#1877F2", width: "100%", textAlign: 'left', textAlignLast: 'center' }}>
                <FaFacebook className='mr-1 ml-1' style={{ fontSize: 20, color: "white" }} />Sign in with Facebook
            </Button>
            <Button className='mb-3'
                style={{ backgroundColor: "white", color: "black", width: "100%", textAlign: 'left', textAlignLast: 'center' }}
            >
                <FcGoogle className='mr-1 ml-1' style={{ fontSize: 20 }} />Sign in with Google{" "}
            </Button>


            <Col style={{ textAlign: 'center' }}>

            </Col>
        </div>
    )
}

export default RegisterFooter
