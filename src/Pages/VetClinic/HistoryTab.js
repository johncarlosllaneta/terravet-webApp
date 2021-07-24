import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Axios from "axios";
import { Col, Button, Modal, Row, Form, OverlayTrigger, Popover } from "react-bootstrap";
import { AiOutlineDelete, AiOutlineSearch } from "react-icons/ai";
import { FaRegEdit } from "react-icons/fa";
import MaterialTable from 'material-table';
import { hostUrl } from "../../Components/Host";


const HistoryTab = (props) => {
  const [history, setHistory] = useState([]);
  useEffect(() => {
    Axios.get(`${hostUrl}/history/vetclinic/${props.data.vet_admin_id}`).then((response) => {
      setHistory(response.data);
    });
  }, [history]);

  const renderTooltip = (props) => (
    <Popover >
      {props.msg}
    </Popover>
  );
  const columns = [
    {
      title: "Pet Owner Name",
      field: "pet_owner_id",
      defaultSort: 'asc',
    },
    {
      title: "Appointment ID",
      field: "appointment_id",
      sorting: true,

    },
    {
      title: "Type of Transaction",
      field: "type_of_transaction",
      sorting: true,

    },
    {
      title: "Date & Time",
      field: "date_and_time",
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
            <AiOutlineSearch style={{ fontSize: 25, }} />View Information
          </Button>
        </OverlayTrigger>
      </div>,
    },
  ];
  return (
    <div>
      {/* Data Table */}
      <MaterialTable
        columns={columns}
        data={history}
        title={'Transaction Table'}
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

export default HistoryTab;
