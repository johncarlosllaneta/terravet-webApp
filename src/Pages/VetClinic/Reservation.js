import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Card, Tabs, Tab, Container } from "react-bootstrap";
import GenReservation from "./GenReservation";
import ReqReservation from "./ReqReservation";
import "../VetClinic/vetClinic.css";

const Reservation = (props) => {

  const [key, setKey] = useState('general');
  return (
    <div >
      {/* <GenReservation data={props.data} /> */}
      <Card style={{ boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', backgroundColor: 'white' }}>
        <Row style={{ fontSize: 25, textAlign: 'left', }}>

          <strong className='ml-5 mt-5 pt-1'>Appointments List</strong>


        </Row>

        <Tabs
          className='ml-1'
          style={{ paddingTop: 30, paddingBottom: 20, }}
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k)}

        >
          <Tab eventKey="general" title={<strong style={{ paddingLeft: 100, paddingRight: 100, letterSpacing: 2, }}>General</strong>}>

            <ReqReservation data={props.data} />

          </Tab>
          <Tab eventKey="pending" title={<strong style={{ paddingLeft: 100, paddingRight: 100, }}>Pending</strong>}>

            <ReqReservation data={props.data} />

          </Tab>

        </Tabs>
      </Card>

    </div>
  );
};

export default Reservation;
