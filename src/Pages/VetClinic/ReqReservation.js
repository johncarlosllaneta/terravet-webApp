import React from "react";
import { useState, useEffect } from "react";
import { Col, Button, Modal, Row, Form, OverlayTrigger, Popover } from "react-bootstrap";
import Axios from 'axios';
import { AiOutlineDelete, AiOutlineSearch } from "react-icons/ai";
import { FaRegEdit } from "react-icons/fa";
import MaterialTable from 'material-table';
import { hostUrl } from "../../Components/Host";


const ReqReservation = (props) => {
  const [showView, setShowView] = useState(false);
  const handleCloseView = () => setShowView(false);
  const handleShowView = () => {
    setShowView(true);
    // setUpdateProductId(id);
    // setUpdateProductName(name);
    // setUpdateProductDescription(desc);
    // setUpdateProductQuantity(quantity);
  };


  const [appointment, setappointment] = useState([]);
  useEffect(() => {
    Axios.get(`${hostUrl}/pending/appointment/${props.data.vet_admin_id}`).then((response) => {
      setappointment(response.data);
    });
  }, [appointment]);



  const [appointmentDetails, setappointmentDetails] = useState([]);
  function viewDetails(appointment_id) {
    Axios.get(`${hostUrl}/pending/appointment/viewdetails/${appointment_id}`).then((response) => {
      setappointmentDetails(response.data[0]);
    });
    // console.log(appointmentDetails);
    handleShowView();
  }


  function formatDateAndTime(dateString) {
    const options = { year: "numeric", month: "long", day: "numeric", hour: '2-digit', minute: '2-digit', second: '2-digit' }
    return new Date(dateString).toLocaleDateString(undefined, options)
  }

  function formatDate(dateString) {
    const options = { year: "numeric", month: "long", day: "numeric" }
    return new Date(dateString).toLocaleDateString(undefined, options)
  }


  function confirmAppointment(appointment_id) {
    alert(appointment_id);
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
      {/* View Details */}
      <Modal show={showView} onHide={handleCloseView}>
        <Modal.Header closeButton>
          <Modal.Title>View Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p><strong>Service Name: </strong> {appointmentDetails.service_name}</p>
          <p><strong>Service Description: </strong> {appointmentDetails.service_description}</p>
          <p><strong>Date: </strong>  {formatDate(appointmentDetails.date_scheduled)} <br></br> <strong>Time: </strong>  {appointmentDetails.time_scheduled}</p>
          <p><strong>Fee: </strong> {appointmentDetails.service_fee}</p>
          <p><strong>Pet Owner: </strong> {appointmentDetails.name}</p>
          <p><strong>Pet Involved: </strong> {appointmentDetails.pet_name}</p>
          <p><strong>Status: </strong> {appointmentDetails.appointment_status}</p>
        </Modal.Body>
        <Modal.Footer>

          <Button
            variant="success"
            onClick={() => {
              handleCloseView();
              confirmAppointment(appointmentDetails.appointment_id);
            }}
          >
            Confirm
          </Button>
          <Button
            variant="info"
            onClick={() => {
              handleCloseView();
              // updateProduct(updateProductId);
            }}
          >
            Edit
          </Button>
          <Button variant="secondary" onClick={handleCloseView}>
            Close
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

export default ReqReservation;
