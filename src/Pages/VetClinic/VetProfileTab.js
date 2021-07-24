import React, { useState, useEffect } from "react";
import { Col, Container, Row, Tab, Tabs, Image, Button, Card, Modal, Alert, Form } from "react-bootstrap";
import Axios from 'axios';
import { HiOutlineMail, HiOutlineLocationMarker } from 'react-icons/hi';
import { BiPhone } from 'react-icons/bi';
import { IoTimeSharp } from 'react-icons/io5';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { hostUrl } from "../../Components/Host";


function VetProfileTab() {

  const [user, setuser] = useState([]);
  const [imgProfile, setimgProfile] = useState('');



  useEffect(() => {

    var token = localStorage.getItem('ajwt');



    Axios.get(`${hostUrl}/home`,
      { headers: { Authorization: `Bearer ${token}` } }
    ).then((response) => {
      setuser(response.data.result[0]);

    });

    setimgProfile(user.vet_picture);


  }, [user]);


  var cardCssBio = {
    position: 'relative',
    width: '16vw',
    height: '10vh',
    borderRadius: 30,
    margin: '2vh 0vh 1vh 5vh',
    backgroundColor: "white",
    boxShadow: "#cdc8c6 -15px 20px 15px -15px",
  };

  var cardCssOperation = {
    position: 'relative',
    width: '100%',
    height: '36vh',
    borderRadius: 30,
    margin: '2vh 0vh 1vh 0vh',
    backgroundColor: "white",
    boxShadow: "#cdc8c6 -15px 20px 15px -15px",
  };



  var iconsCss = {
    fontSize: '300%',
    padding: 5,
    textAlign: 'center',
    color: '#57D4FF',
    marginTop: '35%'
  };

  var descCssTitle = {
    fontSize: '70%',
    marginTop: '2vh'
  };


  var descCssLabel = {
    fontSize: '70%'
  };

  var descCssLabelDay = {
    fontSize: '70%',
    color: '#57D4FF',
    fontWeight: 'bold',
    textAlign: 'center'
  };



  const containerStyle = {
    width: '100%',
    height: '36vh',
    borderRadius: 30,
    display: 'inline-flex',
    // border:
  };

  const center = {
    lat: 14.5834,
    lng: 121.0367
  };

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyB2uqvQNV8t-Zwt4mQzzX1t62I8vEbJxug"
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  return (
    <div style={{ display: 'flow', }}>
      <Modal size="xl" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Alert variant="info" >
              <Alert.Heading>Vet Information</Alert.Heading>
              <Row>

                <Col>
                  <div style={{ alignContent: 'center' }}>
                    <img src={user.vet_picture} style={{
                      height: 100,
                      width: 100,
                      borderRadius: 50,
                      border: "7px",
                      borderStyle: "solid",
                      borderColor: "transparent",
                      marginTop: '2vh'
                    }}></img>

                    <Form.Group controlId="formBasicEmail">
                      <Form.Label><strong>Name:</strong></Form.Label>
                      <Form.Control type="text" value={user.vet_name} />
                    </Form.Group>
                  </div>


                  <Form.Group controlId="formBasicEmail">
                    <Form.Label><strong>Email:</strong></Form.Label>
                    <Form.Control type="email" value={user.email} />
                  </Form.Group>

                  <Form.Group controlId="formBasicEmail">
                    <Form.Label><strong>Address:</strong></Form.Label>
                    <Form.Control type="text" value={user.vet_address} />
                  </Form.Group>

                  <Form.Group controlId="formBasicEmail">
                    <Form.Label><strong>Contact Number:</strong></Form.Label>
                    <Form.Control type="text" value={user.vet_contact_number} />
                  </Form.Group>

                </Col>
                <Col>
                  <p><strong>Time Schedule:</strong></p>


                </Col>
              </Row>
            </Alert>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      <Card>
        <Container>
          <Row >
            <Col>
              <Container style={{ alignItems: "center" }}>
                {user.vet_picture !== undefined ? <Image
                  src={user.vet_picture}
                  roundedCircle
                  alt={user.vet_name}
                  style={{
                    height: 120,
                    width: 120,
                    borderRadius: 50,
                    border: "7px",
                    borderStyle: "solid",
                    borderColor: "transparent",
                    marginTop: '2vh'
                  }}
                /> :
                  <div data-initials="GC" style={{
                    backgroundColor: '#099bdd',
                    color: 'white',
                    opacity: 1,
                    content: 'Data Initials',
                    display: 'inline-block',
                    borderRadius: '50%',
                    verticalAlign: 'middle',
                    width: 50,
                    height: 50,
                    lineHeight: 50,
                    textAlign: 'center'
                  }}></div>
                }

                <h4>{user.vet_name}</h4>
                <h5>{user.vet_status}</h5>
              </Container>
              <Button variant="outline-info" className="float-right" onClick={handleShow}>
                Edit profile
              </Button>
            </Col>
          </Row>
          <Tabs defaultActiveKey="about" id="uncontrolled-tab-example">
            <Tab eventKey="about" title="About">

              {/* <PetAbout /> */}

              <Row>
                <Col sm='3' >
                  <Row>
                    <Card style={cardCssBio} >
                      <Row>
                        <Col sm='3'>
                          <HiOutlineMail style={iconsCss} />
                        </Col>
                        <Col sm='9' >
                          <Row><h5 style={descCssTitle}>Email Address</h5></Row>
                          <Row><p style={descCssLabel}> {user.email}</p></Row>
                        </Col>
                      </Row>
                    </Card>
                  </Row>
                  <Row>
                    <Card style={cardCssBio}>
                      <Row>
                        <Col sm='3'>
                          <BiPhone style={iconsCss} />
                        </Col>
                        <Col sm='9'>
                          <Row><h5 style={descCssTitle}>Contact Number</h5></Row>
                          <Row><p style={descCssLabel}>{user.vet_contact_number}</p></Row>
                        </Col>
                      </Row>
                    </Card>
                  </Row>
                  <Row>
                    <Card style={cardCssBio}>
                      <Row>
                        <Col sm='3'>
                          <HiOutlineLocationMarker style={iconsCss} />
                        </Col>
                        <Col sm='9'>
                          <Row><h5 style={descCssTitle} >Location</h5></Row>
                          <Row><p style={descCssLabel} >{user.vet_address}</p></Row>
                        </Col>
                      </Row>
                    </Card>
                  </Row>
                </Col>



                <Col style={{ display: 'inline-block' }}>
                  <Card style={cardCssOperation}>
                    {isLoaded ? (
                      <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={center}
                        zoom={10}
                        onLoad={onLoad}
                        onUnmount={onUnmount}
                      >
                        { /* Child components, such as markers, info windows, etc. */}
                        <></>
                      </GoogleMap>
                    ) : <></>}
                  </Card>
                </Col>

              </Row>




            </Tab>
            <Tab eventKey="photo" title="Photo">
              <Container >
                {/* <PetPhoto /> */}

                <Row>
                  <Col><p>Nothing to show</p></Col>
                </Row>
              </Container>
            </Tab>
          </Tabs>
        </Container>
      </Card>
    </div >
  );
};

export default VetProfileTab;
