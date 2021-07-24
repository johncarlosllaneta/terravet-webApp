import React, { useState, useEffect } from "react";
import { Row, Col, Button, Modal, Form, Card, InputGroup, Tooltip, OverlayTrigger, Popover } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Axios from "axios";
import { AiOutlineMail, AiOutlineDelete, AiOutlineSearch } from "react-icons/ai";
import { BsShieldLock } from "react-icons/bs";
import { FaRegUserCircle, FaRegEdit } from "react-icons/fa";
import { MdClear } from 'react-icons/md';
import DataTable from "react-data-table-component";
import "./PetOwnerTable.css";
import { ToastContainer } from 'react-toastify';
import { ToastDelete, ToastUpdate } from '../../Components/Toast';
import { hostUrl } from "../../Components/Host";

function PetOwnerTable() {

  // pet information
  const [pet, setPet] = useState([]);

  //for view of pet owner data
  const [viewDataProfileChecker, setviewDataProfileChecker] = useState(false);


  const [viewDataProfile, setviewDataProfile] = useState([]);

  const [updateRefresher, setupdateRefresher] = useState(false);

  //information of pet owners need to update
  const [updatePetOwnerId, setUpdatePetOwnerId] = useState("");
  const [updatePetOwnerName, setUpdatePetOwnerName] = useState("");
  const [updatePetOwnerEmail, setUpdatePetOwnerEmail] = useState("");
  const [updatePetOwnerAddress, setUpdatePetOwnerAddress] = useState("");
  const [updatePetOwnerContactNumber, setUpdatePetOwnerContactNumber] = useState("");
  const [updatePetOwnerProfile, setupdatePetOwnerProfile] = useState("");

  //delete functionality
  const [showDeleteId, setShowDeleteId] = useState();
  const [showDelete, setShowDelete] = useState(false);


  const handleCloseDelete = () => setShowDelete(false);
  const handleShowDelete = () => setShowDelete(true);




  const [show, setShow] = useState(false);

  const handleShow = (petOwnerData) => {
    // console.log(petOwnerData);
    setShow(true);
    setUpdatePetOwnerName(petOwnerData.name);
    setUpdatePetOwnerId(petOwnerData.pet_owner_id);
    setUpdatePetOwnerEmail(petOwnerData.email);
    setUpdatePetOwnerAddress(petOwnerData.address);
    setUpdatePetOwnerContactNumber(petOwnerData.contact_number);
    setupdatePetOwnerProfile(petOwnerData.profilePicture);
  };

  const [data, setdata] = useState([]);
  useEffect(() => {
    Axios.get(`${hostUrl}/petowner`).then((response) => {
      setdata(response.data);
    });
  }, [updateRefresher]);




  function getPet(petOwnerId) {
    Axios.get(`${hostUrl}/pets/:${petOwnerId}`).then((response) => {
      setPet(response.data);
      // console.log(pet);
    });
  }

  const renderTooltip = (props) => (
    <Popover >
      {props.msg}
    </Popover>
  );

  const columns = [
    {
      name: "Name",
      selector: "name",
      sortable: true,
    },
    {
      name: "Email",
      selector: "email",
      sortable: true,

    },
    {
      name: "Address",
      selector: "address",
      sortable: true,

    },
    {
      name: "Contact Number",
      selector: "contact_number",
      sortable: true,

    },
    {
      name: "Action",
      cell: row => <div>
        <OverlayTrigger

          placement="top-start"
          delay={{ show: 250, }}
          overlay={renderTooltip({ msg: 'View Details' })}
        >
          <Button variant='info' className='mr-3'
            onClick={() => { setviewDataProfile(row); setviewDataProfileChecker(true); getPet(row.pet_owner_id); setShow(false); }}>
            <AiOutlineSearch style={{ fontSize: 25, }} />
          </Button>
        </OverlayTrigger>

        <OverlayTrigger

          placement="top-start"
          delay={{ show: 250, }}
          overlay={renderTooltip({ msg: 'Edit Details' })}
        >
          <Button variant='primary' className='mr-3'
            onClick={() => { handleShow(row); }}>
            <FaRegEdit style={{ fontSize: 25, }} />
          </Button>
        </OverlayTrigger>

        <OverlayTrigger

          placement="top-start"
          delay={{ show: 250, }}
          overlay={renderTooltip({ msg: 'Delete Details' })}
        >
          <Button variant='danger'
            onClick={() => { handleShowDelete(); setShowDeleteId(row.pet_owner_id); }}>
            <AiOutlineDelete style={{ fontSize: 25 }} />
          </Button>
        </OverlayTrigger>
      </div>,
      sortable: true,

    },
  ];

  const [q, setq] = useState('');

  function search(rows) {
    const columns = rows[0] && Object.keys(rows[0]);

    return rows.filter(
      (row) =>
        columns.some(
          (column) => row[column].toString().toLowerCase().indexOf(q) > -1
        )
    );
  }


  function formatDateAndTime(dateString) {
    const options = { year: "numeric", month: "long", day: "numeric", hour: '2-digit', minute: '2-digit', second: '2-digit' }
    return new Date(dateString).toLocaleDateString(undefined, options)
  }


  const deletePetOwner = () => {
    Axios.delete(`${hostUrl}/petowner/delete/${showDeleteId}`);
    // alert(showDeleteId);
    handleCloseDelete();
    ToastDelete();
    setShow(false); setviewDataProfileChecker(false); setupdateRefresher(!updateRefresher); setviewDataProfile([]);
  };


  const updatePetOwner = (petowner_id) => {
    Axios.put(`${hostUrl}/petowner/update/${petowner_id}`, {
      updatePetOwnerName: updatePetOwnerName,
      updatePetOwnerEmail: updatePetOwnerEmail,
      updatePetOwnerAddress: updatePetOwnerAddress,
      updatePetOwnerContactNumber: updatePetOwnerContactNumber,
    });

    ToastUpdate();
  };



  var profileDetails = {
    display: 'flex', alignItems: 'center', justifyContent: 'center'
  };


  return (
    <div className='ml-5' >
      <ToastContainer />

      <Modal show={showDelete} onHide={handleCloseDelete}>
        <Modal.Header closeButton>
          <Modal.Title>Delete</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Are you sure, you want to delete this pet owner?</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseDelete}>Close</Button>
          <Button variant="primary" onClick={deletePetOwner}>Proceed</Button>
        </Modal.Footer>
      </Modal>





      {/* Data Table */}

      <Row>
        <Col>
          <Card>
            <Card style={{ boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', }}>
              <Card.Body>
                <DataTable
                  actions={<Form.Group><Form.Control type="text" value={q} placeholder={'Search'} onChange={(e) => setq(e.target.value)} /> </Form.Group>}
                  title={'Pet Owner'}
                  pagination
                  columns={columns}
                  data={search(data)}
                  responsive={true}
                  defaultSortField="name"
                />
              </Card.Body>
            </Card>
          </Card>
        </Col>
      </Row>


      {/* pet owner profile data */}
      {
        !show && <Row className='mt-4'>
          <Col>
            <Card>
              <Card style={{ boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', }}>
                {!viewDataProfileChecker ? <Card.Body>
                  <Row style={{ display: 'flex', justifyContent: 'center' }}>
                    Nothing to show
                  </Row>
                </Card.Body> : <Card.Body>
                  <Row>
                    <Col sm='2' className='ml-3 '>
                      <Row className='mt-3' style={profileDetails}>
                        <img src={viewDataProfile.profilePicture} style={{

                          height: 150,
                          width: 150,
                          borderRadius: 100,
                          border: "7px",
                          borderStyle: "solid",
                          borderColor: "transparent",
                          marginTop: '2vh'
                        }}></img>
                      </Row>

                      <Row className='mt-3' style={profileDetails}>
                        <strong style={{ fontSize: 20 }}>{viewDataProfile.name}</strong>
                      </Row>



                    </Col>

                    <Col className='ml-5'>
                      <Row className='mt-3' style={{ fontSize: 25 }}>
                        <strong>Pet Owner Details</strong>

                      </Row>
                      <Row className='ml-5 mt-3' style={{ fontSize: 15, color: 'grey' }}>
                        <strong>Email </strong>
                      </Row>
                      <Row className='ml-5' style={{ fontSize: 20, color: 'black' }}>
                        <p>{viewDataProfile.email}</p>
                      </Row>
                      <Row className='ml-5' style={{ fontSize: 15, color: 'grey' }}>
                        <strong>Address </strong>
                      </Row>
                      <Row className='ml-5' style={{ fontSize: 20, color: 'black' }}>
                        <p>{viewDataProfile.address}</p>
                      </Row>

                      <Row className='ml-5' style={{ fontSize: 15, color: 'grey' }}>
                        <strong>Contact Number </strong>
                      </Row>
                      <Row className='ml-5' style={{ fontSize: 20, color: 'black' }}>
                        <p>{viewDataProfile.contact_number}</p>
                      </Row>


                      <Row className='ml-5' style={{ fontSize: 15, color: 'grey' }}>
                        <strong>Date Created </strong>
                      </Row>
                      <Row className='ml-5' style={{ fontSize: 20, color: 'black' }}>
                        <p>{formatDateAndTime(viewDataProfile.created_date)}</p>
                      </Row>


                    </Col>
                    <Col className='ml-5'>
                      <Row style={{ fontSize: 25 }}>
                        <Col className='mt-3' style={{ display: 'flex', alignItems: 'start' }}>
                          <strong>Pets</strong>
                        </Col>
                        <Col style={{ display: 'flex', alignItems: 'end', justifyContent: 'flex-end', marginRight: 10 }}>
                          <MdClear style={{ fontSize: 25, cursor: 'pointer' }} onClick={() => { setviewDataProfileChecker(false); setviewDataProfile([]); }} />
                        </Col>

                      </Row>

                      <Row className='mt-3' id='petContainer' style={{ fontSize: 25, maxHeight: 205, display: 'flex', overflowY: 'auto' }}>
                        {pet.length === 0 ? <p>No pets registered</p> : pet.map((val) => {

                          return (<div><Card className='mb-3' style={{ boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', height: 200, width: 450, }}>
                            <Row>
                              <Col sm='4' style={profileDetails}>
                                <img src={val.pet_picture} style={{
                                  backgroundColor: 'blanchedalmond',
                                  height: 75,
                                  width: 75,
                                  borderRadius: 50,
                                  border: "7px",
                                  borderStyle: "solid",
                                  borderColor: "transparent",
                                  marginTop: '1vh',

                                }}></img>
                              </Col>
                              <Col sm='8' style={{ display: 'block', justifyContent: 'start' }}>
                                <Row className='mt-3' style={{ fontSize: 25, }}>
                                  <strong>Pets Details</strong>
                                </Row>
                                <Row>
                                  <Col>
                                    <Row style={{ fontSize: 15, color: 'grey' }}>
                                      <strong>Name: </strong>
                                    </Row>
                                    <Row style={{ fontSize: 20, color: 'black' }}>
                                      <p>{val.pet_name}</p>
                                    </Row>
                                  </Col>
                                  <Col>
                                    <Row style={{ fontSize: 15, color: 'grey' }}>
                                      <strong>Breed: </strong>
                                    </Row>
                                    <Row style={{ fontSize: 20, color: 'black' }}>
                                      <p>{val.breed_of_pet}</p>
                                    </Row>
                                  </Col>
                                </Row>

                                <Row>
                                  <Col>
                                    <Row style={{ fontSize: 15, color: 'grey' }}>
                                      <strong>Type of Pet: </strong>
                                    </Row>
                                    <Row style={{ fontSize: 20, color: 'black' }}>
                                      <p>{val.type_of_pet}</p>
                                    </Row>
                                  </Col>
                                  <Col>
                                    <Row style={{ fontSize: 15, color: 'grey' }}>
                                      <strong>Gender: </strong>
                                    </Row>
                                    <Row style={{ fontSize: 20, color: 'black' }}>
                                      <p>{val.gender}</p>
                                    </Row>
                                  </Col>
                                </Row>


                              </Col>
                            </Row>
                          </Card> </div>);
                        })}
                      </Row>

                    </Col>
                  </Row>
                </Card.Body>}
              </Card>
            </Card>
          </Col>
        </Row>
      }


      {/* edit pet owner */}
      {
        show &&
        <Form>
          <Row className='mt-4'>
            <Col>
              <Card>
                <Card style={{ boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', }}>
                  <Card.Body>
                    <Row>
                      <Col sm='2' className='ml-5 '>
                        <Row className='mt-3' style={profileDetails}>
                          <img src={updatePetOwnerProfile} style={{

                            height: 150,
                            width: 150,
                            borderRadius: 100,
                            border: "7px",
                            borderStyle: "solid",
                            borderColor: "transparent",
                            marginTop: '2vh'
                          }}></img>
                        </Row>

                        <Row className='ml-4 mt-3' style={{ fontSize: 15, color: 'grey' }}>
                          <strong>Name </strong>
                        </Row>
                        <Row className='ml-3' style={profileDetails} style={{ display: 'flex', alignItems: 'center', justifyContent: "center" }}>
                          <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Control type="text" value={updatePetOwnerName} onChange={(e) => { setUpdatePetOwnerName(e.target.value) }} />
                          </Form.Group>
                        </Row>



                      </Col>

                      <Col className='ml-5'>
                        <Row className='mt-3' style={{ fontSize: 25 }}>
                          <strong>Pet Owner Details</strong>

                        </Row>
                        <Row className='ml-5 mt-3' style={{ fontSize: 15, color: 'grey' }}>
                          <strong>Email </strong>
                        </Row>
                        <Row className='ml-5' style={{ fontSize: 20, color: 'black', display: 'flex', alignItems: 'center', }}>
                          <Form.Group controlId="exampleForm.ControlInput1">

                            <Form.Control type="email" value={updatePetOwnerEmail} onChange={(e) => { setUpdatePetOwnerEmail(e.target.value) }} />
                          </Form.Group>
                        </Row>
                        <Row className='ml-5 ' style={{ fontSize: 15, color: 'grey' }}>
                          <strong>Address </strong>
                        </Row>
                        <Row className='ml-5' style={{ fontSize: 20, color: 'black' }}>
                          <Form.Group controlId="exampleForm.ControlInput1">

                            <Form.Control type="text" as="textarea" rows={3} cols={50} value={updatePetOwnerAddress} onChange={(e) => { setUpdatePetOwnerAddress(e.target.value) }} />
                          </Form.Group>
                        </Row>

                        <Row className='ml-5' style={{ fontSize: 15, color: 'grey' }}>
                          <strong>Contact Number </strong>
                        </Row>
                        <Row className='ml-5' style={{ fontSize: 20, color: 'black', display: 'flex', alignItems: 'center', }}>
                          <Form.Group controlId="exampleForm.ControlInput1" >

                            <Form.Control type="text" maxLength={11} value={updatePetOwnerContactNumber} onChange={(e) => { setUpdatePetOwnerContactNumber(e.target.value) }} />
                          </Form.Group>
                        </Row>


                      </Col>
                      <Col className='ml-5'>
                        <Row style={{ fontSize: 25 }}>
                          <Col className='mt-3' style={{ display: 'flex', alignItems: 'start' }}>
                            <strong>Actions</strong>
                          </Col>
                          <Col style={{ display: 'flex', alignItems: 'end', justifyContent: 'flex-end', marginRight: 10 }}>
                            <MdClear style={{ fontSize: 25, cursor: 'pointer' }} onClick={() => { setShow(false); setviewDataProfileChecker(false); setviewDataProfile([]); }} />
                          </Col>
                        </Row>

                        <Row style={{ fontSize: 20, }}>
                          <Button className='mt-2 ml-5' variant='success' onClick={() => { updatePetOwner(updatePetOwnerId); setShow(false); setviewDataProfileChecker(false); setviewDataProfile([]); setupdateRefresher(!updateRefresher); }}>Update Changes</Button>
                        </Row>

                        <Row style={{ fontSize: 20, }}>
                          <Button className='mt-2 ml-5' variant='danger' onClick={() => { setShow(false); setviewDataProfileChecker(false); setviewDataProfile([]); }}>Cancel Changes</Button>
                        </Row>

                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Card>
            </Col>
          </Row>
        </Form>
      }



    </div >
  );
}

export default PetOwnerTable;
