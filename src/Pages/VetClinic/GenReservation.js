import React from "react";
import { useState, useEffect } from "react";
import { Col, Button, Modal, Row, Form, OverlayTrigger, Popover } from "react-bootstrap";
import { AiOutlineDelete, AiOutlineSearch } from "react-icons/ai";
import { FaRegEdit } from "react-icons/fa";
import MaterialTable from 'material-table';
import Axios from 'axios';
import { hostUrl } from "../../Components/Host";

const GenReservation = (props) => {
  const [showInsert, setShowInsert] = useState(false);
  const handleCloseInsert = () => setShowInsert(false);
  const handleShowInsert = () => {
    setShowInsert(true);
    // setUpdateProductId(id);
    // setUpdateProductName(name);
    // setUpdateProductDescription(desc);
    // setUpdateProductQuantity(quantity);
  };




  const [appointment, setappointment] = useState([]);
  useEffect(() => {
    Axios.get(`${hostUrl}/general/appointment/${props.data.vet_admin_id}`).then((response) => {
      setappointment(response.data);
    });
  }, [appointment]);

  function dateConvertion(date) {
    var str = date.split('-');
    var year = str[0];
    var month;
    var day = str[2];

    if (str[1] === "01") {
      month = 'January';
    }
    else if (str[1] === "02") {
      month = 'February';
    }
    else if (str[1] === "03") {
      month = 'March';
    }
    else if (str[1] === "04") {
      month = 'April';
    }
    else if (str[1] === "05") {
      month = 'May';
    }
    else if (str[1] === "06") {
      month = 'June';
    }
    else if (str[1] === "07") {
      month = 'July';
    }
    else if (str[1] === "08") {
      month = 'August';
    }
    else if (str[1] === "09") {
      month = 'September';
    }
    else if (str[1] === "10") {
      month = 'October';
    }
    else if (str[1] === "11") {
      month = 'November';
    }
    else if (str[1] === "12") {
      month = 'December';
    }

    return (month + " " + day + ", " + year);

  }


  const renderTooltip = (props) => (
    <Popover >
      {props.msg}
    </Popover>
  );




  const columns = [
    {
      title: "Pet Owner Name",
      field: "name",
      defaultSort: 'asc',
    },
    {
      title: "Service Name",
      field: "service_name",
      sorting: true,

    },
    {
      title: "Date Schedule",
      field: "date_scheduled",
      sorting: true,

    },

    {
      title: "Time Schedule",
      field: "time_scheduled",
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
            onClick={() => { alert('hi') }}>
            <AiOutlineSearch style={{ fontSize: 25, }} />
          </Button>
        </OverlayTrigger>

        <OverlayTrigger

          placement="top-start"
          delay={{ show: 250, }}
          overlay={renderTooltip({ msg: 'Edit Details' })}
        >
          <Button variant='primary' className='mr-3'
            onClick={() => { }}>
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



            }}>
            <AiOutlineDelete style={{ fontSize: 25 }} />
          </Button>
        </OverlayTrigger>
      </div>,


    },
  ];


  return (
    <div>
      {/* //Add */}
      <Modal show={showInsert} onHide={handleCloseInsert}>
        <Modal.Header closeButton>
          <Modal.Title>Insert</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicProduct">
              <Form.Label>Pet Owner Name</Form.Label>
              <Form.Control
                type="text"
                // value={updateProductName}
                placeholder="Sample Pet Owner Name"
              // onChange={(e) => {
              //   setUpdateProductName(e.target.value);
              // }}
              />
            </Form.Group>

            <Form.Group controlId="formBasicProductD">
              <Form.Label>Pet</Form.Label>
              <Form.Control
                type="text"
                // value={updateProductDescription}
                placeholder="Sample Pet"
              // onChange={(e) => {
              //   setUpdateProductDescription(e.target.value);
              // }}
              />
            </Form.Group>

            <Form.Group controlId="formBasicProductD">
              <Form.Label>Service Name</Form.Label>
              <Form.Control
                type="text"
                // value={updateProductDescription}
                placeholder="Sample Service Name"
              // onChange={(e) => {
              //   setUpdateProductDescription(e.target.value);
              // }}
              />
            </Form.Group>

            <Form.Group controlId="formBasicProductD">
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="number"
                // value={updateProductDescription}
                placeholder="Sample Date"
              // onChange={(e) => {
              //   setUpdateProductDescription(e.target.value);
              // }}
              />
            </Form.Group>

            <Form.Group controlId="formBasicProductD">
              <Form.Label>Time scheduled</Form.Label>
              <Form.Control
                type="number"
                // value={updateProductDescription}
                placeholder="Sample scheduled"
              // onChange={(e) => {
              //   setUpdateProductDescription(e.target.value);
              // }}
              />
            </Form.Group>

            <Form.Group controlId="formBasicProductD">
              <Form.Label>Status</Form.Label>
              <Form.Control
                type="number"
                // value={updateProductDescription}
                placeholder="Sample Status"
              // onChange={(e) => {
              //   setUpdateProductDescription(e.target.value);
              // }}
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
              handleCloseInsert();
              // updateProduct(updateProductId);
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>


      {/* Data Table */}


      <MaterialTable

        columns={columns}
        data={appointment}
        title={'Reservation  Table'}
        cellEditable={false}
        options={{
          sorting: true,
          search: true,

        }}
        actions={[
          {
            icon: 'add',
            tooltip: 'Add Services',
            isFreeAction: true,
            onClick: (event) => alert("You want to add a new row")
          },
        ]}
      />
    </div>
  );
};

export default GenReservation;
