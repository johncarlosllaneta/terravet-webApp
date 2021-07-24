import React, { useState, useEffect } from 'react';
import { Row, Col, Button, Form, Card, Modal, Tooltip, OverlayTrigger, Popover } from "react-bootstrap";
import Axios from 'axios';
import { FormatDate } from "../../Components/FormatDateTime";
import { AiOutlineDelete, AiOutlineSearch } from "react-icons/ai";
import { FaRegEdit } from "react-icons/fa";
import MaterialTable from 'material-table';
import { hostUrl } from '../../Components/Host';

function PetsTable(props) {



    const [pet, setPet] = useState([]);
    const [checker, setchecker] = useState(false);


    useEffect(() => {

        Axios.get(`${hostUrl}/pets/records/${props.data.vet_admin_id}`).then((response) => {
            setPet(response.data);
        }).catch((err) => console.log(err));

        // console.log(pet);
    }, [pet]);


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

    const renderTooltip = (props) => (
        <Popover >
            {props.msg}
        </Popover>
    );

    const columns = [
        {
            title: "Pet Name",
            field: "pet_name",
            defaultSort: 'asc',
        },
        {
            title: "Type of Pet",
            field: "type_of_pet",
            sorting: true,

        },
        {
            title: "Breed",
            field: "breed_of_pet",
            sorting: true,

        },
        {
            title: "Gender",
            field: "gender",
            sorting: true,

        },
        {
            title: "Birth Date",
            render: row => <p>{FormatDate({ datetime: row.birth_day })}</p>

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

            <Row>
                <Col>
                    <MaterialTable
                        style={{ boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', }}
                        columns={columns}
                        data={pet}
                        title={'Pets Table'}
                        cellEditable={false}
                        options={{
                            sorting: true
                        }}
                    />
                </Col>
            </Row>

        </div>
    )
}

export default PetsTable
