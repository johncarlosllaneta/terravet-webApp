import React, { useState, useEffect } from "react";
import { Popover, Button, Card, OverlayTrigger, Col, Modal, Form, Row, Alert, ResponsiveEmbed } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Axios from "axios";
import DataTable from "react-data-table-component";
import { AiOutlineDelete, AiOutlineSearch } from "react-icons/ai";
import { hostUrl } from "../../Components/Host";
function History() {
  const [history, setHistory] = useState([]);
  useEffect(() => {
    Axios.get(`${hostUrl}/history`).then((response) => {
      setHistory(response.data);
    });
  }, []);



  const [q, setq] = useState('');
  // alert(swidth);


  function search(rows) {
    const columns = rows[0] && Object.keys(rows[0]);

    return rows.filter(
      (row) =>
        columns.some(
          (column) => row[column].toString().toLowerCase().indexOf(q) > -1
        )
    );
  }

  const renderTooltip = (props) => (
    <Popover >
      {props.msg}
    </Popover>
  );


  var data = [
    {
      key: 1,
      pet_owner_name: 'Richard Sasis',
      vet_name: 'Tri City Veterinary Clinic',
      service: 'Anti Flea Control',
      dateS: 'June 25,2021',
      timeS: '01:00 PM - 02:00 PM',
      dateC: 'June 03,2021 04:18 PM',
    },
    {
      key: 2,
      pet_owner_name: 'Jimuel Mercado',
      vet_name: 'We Are Veterinary Clinic',
      service: 'Heart Worm Prevention',
      dateS: 'June 18,2021',
      timeS: '09:00 AM - 10:00 AM',
      dateC: 'June 01,2021 11:16 AM',
    },
    {
      key: 3,
      pet_owner_name: 'Carmella Joy Guelas',
      vet_name: 'Doc Ferds Veterinary Clinic',
      service: 'Check-Up / Consulation',
      dateS: 'June 13,2021',
      timeS: '08:00 AM - 09:00 AM',
      dateC: 'April 25,2021 06:58 PM',
    }, {
      key: 4,
      pet_owner_name: 'Richard Sasis',
      vet_name: 'Tri City Veterinary Clinic',
      service: 'Anti Flea Control',
      dateS: 'June 25,2021',
      timeS: '01:00 PM - 02:00 PM',
      dateC: 'June 03,2021 04:18 PM',
    },
    {
      key: 5,
      pet_owner_name: 'Jimuel Mercado',
      vet_name: 'We Are Veterinary Clinic',
      service: 'Heart Worm Prevention',
      dateS: 'June 18,2021',
      timeS: '09:00 AM - 10:00 AM',
      dateC: 'June 01,2021 11:16 AM',
    },
  ];


  const columns = [
    {
      name: "Pet Owner Name",
      selector: "pet_owner_name",
      sortable: true,
    },
    {
      name: "Vet Clinic",
      selector: "vet_name",
      sortable: true,

    },
    {
      name: "Service Type",
      selector: "service",
      sortable: true,

    },
    {
      name: "Date Scheduled",
      selector: "dateS",
      sortable: true,

    },
    {
      name: "Time Scheduled",
      selector: "timeS",
      sortable: true,

    },
    {
      name: "Date and Time Created",
      selector: "dateC",
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
            onClick={() => { }}>
            <AiOutlineSearch style={{ fontSize: 25, }} /> View Details
          </Button>
        </OverlayTrigger>

      </div>,
      sortable: false,


    },
  ];



  return (
    <div>
      {/* Data Table */}
      < Row className='mt-1 '>
        <Col>
          <Card>
            <Card style={{ boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', }}>
              <Card.Body>
                <DataTable
                  actions={<Form.Group><Form.Control type="text" value={q} placeholder={'Search'} onChange={(e) => setq(e.target.value)} /> </Form.Group>}
                  title={'Transaction Logs'}
                  pagination
                  paginationRowsPerPageOptions={[5, 10, 20]}
                  paginationPerPage={5}
                  columns={columns}
                  data={search(data)}
                  responsive={true}
                  defaultSortField="pet_owner_name"
                />
              </Card.Body>
            </Card>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default History;
