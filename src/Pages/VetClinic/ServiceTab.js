import React, { useEffect } from "react";
import { useState } from "react";
import { Col, Button, Modal, Row, Form, OverlayTrigger, Popover, Container } from "react-bootstrap";
import Axios from 'axios';
import { AiOutlineDelete, AiOutlineSearch } from "react-icons/ai";
import { FaRegEdit } from "react-icons/fa";
import MaterialTable from 'material-table';
import { hostUrl } from "../../Components/Host";

const ServiceTab = (props) => {

  const [serviceName, setServiceName] = useState();
  const [serviceDescription, setServiceDescription] = useState();
  const [serviceFee, setserviceFee] = useState();
  const [showInsert, setShowInsert] = useState(false);
  const [category, setCategory] = useState();
  const handleCloseInsert = () => setShowInsert(false);
  const handleShowInsert = () => setShowInsert(true);

  const [services, setservices] = useState([]);
  const [updateService, setupdateService] = useState([]);

  const [updateServiceId, setupdateServiceId] = useState();
  const [updateServiceName, setupdateServiceName] = useState();
  const [updateServiceDescription, setupdateServiceDescription] = useState();
  const [updateServiceFee, setupdateServiceFee] = useState();

  const [showServices, setShowServices] = useState(false);
  const handleCloseServices = () => setShowServices(false);
  const handleShowServices = (val) => {
    // setupdateService(val);
    setupdateServiceId(val.service_id);
    setupdateServiceName(val.service_name);
    setupdateServiceDescription(val.service_description);
    setupdateServiceFee(val.service_fee);
    console.log(updateService);
    setShowServices(true);
  };


  const [showUpdate, setShowUpdate] = useState(false);
  const handleCloseUpdate = () => setShowUpdate(false);
  const handleShowUpdate = (val) => {
    // setupdateService(val);
    setupdateServiceId(val.service_id);
    setupdateServiceName(val.service_name);
    setupdateServiceDescription(val.service_description);
    setupdateServiceFee(val.service_fee);
    console.log(updateService);
    setShowUpdate(true);
  };

  const [showDelete, setShowDelete] = useState(false);
  const handleCloseDelete = () => setShowDelete(false);
  const handleShowDelete = (val) => {
    setupdateServiceId(val.service_id);
    setShowDelete(true);
  };

  useEffect(() => {
    Axios.get(`${hostUrl}/services/:${props.data.vet_admin_id}`)
      .then(
        (response) => {
          setservices(response.data);
          // console.log(response.data)
        }

      )
    // alert(props.data.vet_admin_id);
  }, [services]);

  const submitService = () => {
    Axios.post(`${hostUrl}/services/insert/:${props.data.vet_admin_id}`, {
      serviceName: serviceName,
      serviceDescription: serviceDescription,
      service_fee: serviceFee,
      category: category
    }).then((response) => {
      alert(response.data.message);
    });
  };

  const updatedService = () => {
    Axios.put(`${hostUrl}/service/update/:${updateServiceId}`, {
      updateServiceName: updateServiceName,
      updateServiceDescription: updateServiceDescription,
      updateServiceFee: updateServiceFee,
    }).then((response) => {
      alert(response.data.message);
      handleCloseUpdate();
    });
  };

  const deleteService = () => {
    Axios.delete(
      `${hostUrl}/service/delete/:${updateServiceId}`,
      {}
    ).then((response) => {
      // alert(response.data.message);
    });
  };


  const renderTooltip = (props) => (
    <Popover >
      {props.msg}
    </Popover>
  );

  const columns = [
    {
      title: "Service ID",
      field: "service_id",
      defaultSort: 'asc',
    },
    {
      title: "Service Name",
      field: "service_name",
      sorting: true,

    },
    {
      title: "Fee",
      field: "service_fee",
      sorting: true,

    },
    {
      title: "Action",
      render: row => <div>
        <OverlayTrigger

          placement="top-start"
          delay={{ show: 250, }}
          overlay={renderTooltip({ msg: 'View Information' })}
        >
          <Button variant='info' className='mr-3'
            onClick={() => { handleShowServices(row) }}>
            <AiOutlineSearch style={{ fontSize: 25, }} />
          </Button>
        </OverlayTrigger>

        <OverlayTrigger

          placement="top-start"
          delay={{ show: 250, }}
          overlay={renderTooltip({ msg: 'Edit Details' })}
        >
          <Button variant='primary' className='mr-3'
            onClick={() => { handleShowUpdate(row) }}>
            <FaRegEdit style={{ fontSize: 25, }} />
          </Button>
        </OverlayTrigger>

        <OverlayTrigger

          placement="top-start"
          delay={{ show: 250, }}
          overlay={renderTooltip({ msg: 'Delete Details' })}
        >
          <Button variant='danger'
            onClick={() => {

              handleShowDelete(row);

            }}>
            <AiOutlineDelete style={{ fontSize: 25 }} />
          </Button>
        </OverlayTrigger>
      </div>,


    },
  ];




  return (
    <div>

      <Modal show={showServices} onHide={handleCloseServices}>
        <Modal.Header closeButton>
          <Modal.Title>Service Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <strong>Service Name</strong>
            <p>{updateServiceName}</p>
            <strong>Service Description</strong>
            <p>{updateServiceDescription}</p>
            <strong>Service Fee</strong>
            <p>{updateServiceFee}</p>
          </Container>
        </Modal.Body>

      </Modal>


      <Modal show={showDelete} onHide={handleCloseDelete}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Service</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure? you want to delete this service?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseDelete}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              deleteService(updateServiceId);
              handleCloseDelete();
              // updateProduct(updateProductId);
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showUpdate} onHide={handleCloseUpdate}>
        <Modal.Header closeButton>
          <Modal.Title>Update Service</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicProduct">
              <Form.Label>Service Name</Form.Label>
              <Form.Control
                type="text"
                value={updateServiceName}
                placeholder="Sample Service"
                onChange={(e) => {
                  setupdateServiceName(e.target.value);
                }}
              />
            </Form.Group>

            <Form.Group controlId="formBasicProductD">
              <Form.Label>Service Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                value={updateServiceDescription}
                placeholder="Sample Service description"
                onChange={(e) => {
                  setupdateServiceDescription(e.target.value);
                }}
              />
            </Form.Group>

            <Form.Group controlId="formBasicProduct">
              <Form.Label>Service Fee</Form.Label>
              <Form.Control
                type="number"
                value={updateServiceFee}
                placeholder="Sample Service"
                onChange={(e) => {
                  setupdateServiceFee(e.target.value);
                }}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseUpdate}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              updatedService(updateServiceId);
              handleCloseInsert();
              // updateProduct(updateProductId);
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showInsert} onHide={handleCloseInsert}>
        <Modal.Header closeButton>
          <Modal.Title>Insert</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="exampleForm.SelectCustom">
              <Form.Label>Category</Form.Label>
              <Form.Control as="select" custom onChange={(e) => {
                if (e.target.value === 'Consultation') {

                  setCategory('Consultation');
                } else if (e.target.value === 'Pet examination') {

                  setCategory('Pet examination');
                }
                else if (e.target.value === 'Preventive services') {

                  setCategory('Preventive services');
                }
                else if (e.target.value === 'Pet grooming') {

                  setCategory('Pet grooming');
                }
                else if (e.target.value === 'Vaccination') {

                  setCategory('Vaccination');
                }
              }}>
                <option>Consultation</option>
                <option>Pet examination</option>
                <option>Pet grooming </option>
                <option>Preventive services</option>
                <option>Vaccination</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="formBasicProduct">
              <Form.Label>Service Name</Form.Label>
              <Form.Control
                type="text"
                // value={updateProductName}
                placeholder="Sample Service"
                onChange={(e) => {
                  setServiceName(e.target.value);
                }}
              />
            </Form.Group>

            <Form.Group controlId="formBasicProductD">
              <Form.Label>Service Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Sample Service description"
                onChange={(e) => {
                  setServiceDescription(e.target.value);
                }}
              />
            </Form.Group>

            <Form.Group controlId="formBasicProduct">
              <Form.Label>Service Fee</Form.Label>
              <Form.Control
                type="number"
                // value={updateProductName}
                placeholder="Sample Service Fee"
                onChange={(e) => {
                  setserviceFee(e.target.value);
                }}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseInsert}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              submitService();
              handleCloseInsert();
              // updateProduct(updateProductId);
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>


      {/* Data Table */}
      <Row>
        <Col>
          <MaterialTable
            style={{ boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', }}
            columns={columns}
            data={services}
            title={'Services Table'}
            cellEditable={false}
            options={{
              sorting: true
            }}
            actions={[
              {
                icon: 'add',
                tooltip: 'Add Services',
                isFreeAction: true,
                onClick: (event) => handleShowInsert()
              }
            ]}
          />
        </Col>
      </Row>

    </div>
  );
};

export default ServiceTab;
