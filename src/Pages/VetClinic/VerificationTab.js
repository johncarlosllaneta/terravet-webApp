import React, { useState, useRef, useEffect } from "react";
import { Col, Row, Card, Button, Image, Modal, Form, Alert } from "react-bootstrap";
import imgUrlForm from "../../Images/assets/check-mark.png";
import imgUrlUploads from "../../Images/assets/upoads.png";
import imgUrlTimerCopy from "../../Images/assets/timercopy.png";
import imgUrlFindVet from "../../Images/assets/findVet.png";
import imgUrlProductPlus from "../../Images/assets/productsPlus.png";
import imgUrlRating from "../../Images/assets/rating.png";
import { AiOutlineUpload } from 'react-icons/ai';
import Axios from 'axios';
import { hostUrl } from "../../Components/Host";


const VerificationTab = () => {
  var imagecss = {
    width: "50%",
    height: "18vh",
    marginRight: "30%",
    marginLeft: "30%",
    marginTop: "20%",
  };

  var imagecsss = {
    width: "50%",
    height: "18vh",
    marginRight: "30%",
    marginLeft: "25%",
    marginTop: "10%",
  };

  var cardcss = {
    width: "100%",
    height: "70%",
    borderRadius: 20,
    backgroundColor: "white",
    boxShadow: "#cdc8c6 -15px 20px 15px -15px",
  };

  var textcss = {
    fontSize: 14,
    textAlign: "center",
    marginBottom: "30%",
  };


  const [user, setuser] = useState([]);
  const [userole, setuserole] = useState('');

  useEffect(() => {

    var token = localStorage.getItem('ajwt');
    var roles = localStorage.getItem('role');

    setuserole(roles);
    // alert(userole);
    Axios.get(`${hostUrl}/home`,
      { headers: { Authorization: `Bearer ${token}` } }
    ).then((response) => {
      setuser(response.data.result[0]);
      console.log(user);
    });


  }, [user]);



  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const [imageUrl, setimageUrl] = useState();
  // const [profile, setprofile] = useState();
  const [preview, setPreview] = useState();
  const inputFile = useRef(null);
  const onClickProfile = () => {
    // `current` points to the mounted file input element
    inputFile.current.click();
  };


  useEffect(() => {
    if (imageUrl) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(imageUrl);
      console.log(imageUrl);
    } else {
      setPreview(null)
    }
  }, [imageUrl]);


  const submitPermit = () => {

    if (
      imageUrl !== ""
    ) {



      var stringImageUrl;
      var data = new FormData();
      data.append('vet_permit', imageUrl);
      console.log(data);

      Axios.post(`${hostUrl}/upload/vet/vet_permit`, data).then(function (response) {
        console.log(JSON.stringify(response.data));
        stringImageUrl = JSON.parse(JSON.stringify(response.data.profile_url));
        console.log(stringImageUrl);


        Axios.put(`${hostUrl}/vetclinic/verification/${user.vet_admin_id}`, {
          vet_permit: stringImageUrl
        }
        ).then((response) => {
          if (response.data.message === 'Update Successfully') {

            handleClose();
            handleShowUpload();
            setTimeout(() => {
              handleCloseUpload();
            }, 2000);
          }

        })




      })
    }
  };

  const [showUpload, setShowUpload] = useState(false);
  const handleCloseUpload = () => setShowUpload(false);
  const handleShowUpload = () => setShowUpload(true);

  return (
    <div className="mt-4">

      <Modal show={showUpload} onHide={handleCloseUpload} >

        <Modal.Body>

          <Alert variant="success" onClose={handleCloseUpload} dismissible>
            <Alert.Heading>Upload File Successfully</Alert.Heading>
            <p>
              Wait for the validation of your account on your registered email.
            </p>
            <hr />
            <p className="mb-0">
              Thankyou for choosing TerraVet!
            </p>
          </Alert>
        </Modal.Body>


      </Modal>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Upload Permit</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ display: 'inline-block', }}>

          <Col>

            <Form.Group
              onClick={onClickProfile}
            >
              {preview ? (
                <Image style={{ border: '2px solid grey', backgroundColor: 'lightblue', height: 300, width: 425, objectFit: "cover" }} src={preview} alt={"preview"} />
              ) : (
                <div style={{
                  border: '2px solid grey',
                  backgroundColor: '#FAFAFA', height: 300, width: 425, cursor: 'pointer', position: 'relative'
                }}>
                  <div style={{ margin: 0, position: 'absolute', top: '50%', left: '50%', msTransform: 'translate(-50%, -50%)', transform: 'translate(-50%, -50%)', }}>
                    <AiOutlineUpload className='ml-3' style={{ fontSize: 80, color: '#57D4FF', }} />
                    <p>Upload Image File</p>
                  </div>
                </div>
              )}
              <input type='file' id='file' ref={inputFile} style={{ display: 'none' }}
                accept="image/*"
                required
                name='profile_pet'
                // value={profile}
                // key='profile_petowner'
                onChange={(event) => {
                  const file = event.target.files[0];
                  if (file && file.type.substr(0, 5) === "image") {
                    console.log(event.target.value);
                    // setprofile(event.target.value)
                    setimageUrl(file);
                  } else {
                    setimageUrl(null);
                  }
                }}
              />
            </Form.Group>

          </Col>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={submitPermit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      <div style={{ display: 'flow', marginLeft: 25 }}>
        <h1 style={{ color: "#0A94A4", textAlign: "left", }}>
          Why do I need to get Verified?
        </h1>
        <p style={{ textAlign: "left" }}>
          It is a one-time validation process that we do to make sure you are a
          genuine veterinary clinic.
          <br /> When you are verified, you will have access to more features and
          services.
        </p>

      </div>
      <Row>
        <Col style={{ display: 'block', marginLeft: 45 }}>
          <Row>
            <h2 style={{ color: "#0A94A4" }}>After Verification</h2>
          </Row>
          <Row>
            <p>Unlock more features like:</p>
          </Row>
          <Row>
            <Col>
              <Card style={cardcss}>
                <Image src={imgUrlFindVet} style={imagecss} />
                <Card.Body>
                  <Card.Title style={textcss}>
                    Visibility of Vet Clinic
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={cardcss}>
                <Image src={imgUrlRating} style={imagecss} />
                <Card.Body>
                  <Card.Title style={textcss}>
                    Get Ratings from the Pet Owners
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={cardcss}>
                <Image src={imgUrlProductPlus} style={imagecss} />
                <Card.Body>
                  <Card.Title style={textcss}>
                    Add Product and Services
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
        <Col style={{ paddingRight: "5%" }}>
          <h2 style={{ color: "#0A94A4" }}>Levels of Verification</h2>
          <p style={{ textAlign: "left" }}>
            1. Basic Vet Clinic (Non-verified) - you've only just registered to
            Terravet and can access basic services like setting up Profile, but
            you have the option to be verified further.
          </p>
          <p style={{ textAlign: "left" }}>
            2. Fully Verified (verified) - you've gone through the whole
            verification process and submitted a liscence permit. You now have
            access to all Terravet services and features!
          </p>
        </Col>
      </Row>

      <Row>
        <div style={{ paddingLeft: "5%", paddingRight: "5%" }}>
          <Row>
            <h1 style={{ color: "#0A94A4" }}>Get Verified</h1>
          </Row>
          <Row>
            <p>
              Get Verified now to secure your account and gain access to all
              Terravet service
            </p>
          </Row>
          <Row>
            <Col>
              <Card style={cardcss}>
                <Image src={imgUrlUploads} style={imagecsss} />
                <Card.Body>
                  <Card.Title style={textcss}>
                    Upload Business Permit
                  </Card.Title>
                </Card.Body>
              </Card>

              <Button
                variant="outline-primary"
                onClick={handleShow}
                style={{ marginTop: "10%", float: "left" }}
              >
                Verified Now
              </Button>{" "}
            </Col>
            <Col>
              <Card style={cardcss}>
                <Image src={imgUrlTimerCopy} style={imagecsss} />
                <Card.Body>
                  <Card.Title style={textcss}>
                    Wait for Confirmation to Your Email
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col>

              <Card style={cardcss}>
                <Image src={imgUrlForm} style={imagecsss} />
                <Card.Body>
                  <Card.Title style={textcss}>Done Verifying</Card.Title>
                </Card.Body>
              </Card>

            </Col>
          </Row>
        </div>
      </Row>
    </div>
  );
};

export default VerificationTab;
