import React, { useState, useEffect } from 'react';
import { Popover, Button, Card, OverlayTrigger, Col, Modal, Form, Row, Alert, ResponsiveEmbed } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Axios from 'axios';
import { AiOutlineDelete, AiOutlineSearch } from "react-icons/ai";
import { FaRegEdit } from "react-icons/fa";
import DataTable from "react-data-table-component";
import TopVetTable from './TopVetTable';
import MostDemandProduct from './MostDemandProduct';
import ViewVetVerifiedProfile from './ViewVetVerifiedProfile';
import { MdClear } from 'react-icons/md';
import UpdateVetVerifiedData from './UpdateVetVerifiedData';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastDelete, ToastUpdate } from '../../Components/Toast';
import ModalScheduleViewer from './ModalScheduleViewer';
import { hostUrl } from '../../Components/Host';


function VetClinicVerifiedTable() {

    const [vetclinic, setVetClinic] = useState([]);
    const [profileAndGraphChecker, setprofileAndGraphChecker] = useState(false);
    const [updateAndTablesChecker, setupdateAndTablesChecker] = useState(false);
    const [viewProfileVetData, setviewProfileVetData] = useState([]);
    useEffect(() => {
        Axios.get(`${hostUrl}/vetclinic/verified`).then((response) => {
            setVetClinic(response.data);
        });
    }, [profileAndGraphChecker]);

    const acceptClinic = (vetClinicId) => {
        Axios.put(`${hostUrl}/vetclinic/confirm/${vetClinicId}`);
    };


    function vetTableRefresher() {
        Axios.get("${hostUrl}/vetclinic/verified").then((response) => {
            setVetClinic(response.data);
        });
    }



    //modal for delete
    const [showDelete, setShowDelete] = useState(false);
    const handleCloseDelete = () => setShowDelete(false);
    const handleShowDelete = () => setShowDelete(true);
    const [deleteId, setdeleteId] = useState();

    function deleteVetClinic() {
        Axios.delete(`${hostUrl}/vetclinic/remove/${deleteId}`)
            .then((response) => {
                if (response.status === 200) {
                    ToastDelete();
                    vetTableRefresher();
                    handleCloseDelete();
                }
            }).catch((err) => console.log(err));
    }




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
            name: "Name",
            selector: "vet_name",
            sortable: true,
        },
        {
            name: "Email",
            selector: "email",
            sortable: true,

        },
        {
            name: "Address",
            selector: "vet_address",
            sortable: true,

        },
        {
            name: "Contact Number",
            selector: "vet_contact_number",
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
                        onClick={() => { cancelChanges(); setprofileAndGraphChecker(true); setviewProfileVetData(row); }}>
                        <AiOutlineSearch style={{ fontSize: 25, }} />
                    </Button>
                </OverlayTrigger>

                <OverlayTrigger

                    placement="top-start"
                    delay={{ show: 250, }}
                    overlay={renderTooltip({ msg: 'Edit Details' })}
                >
                    <Button variant='primary' className='mr-3'
                        onClick={() => { setupdateAndTablesChecker(true); setviewProfileVetData(row); }}>
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
                            handleShowDelete();
                            setdeleteId(row.vet_admin_id);
                        }}>
                        <AiOutlineDelete style={{ fontSize: 25 }} />
                    </Button>
                </OverlayTrigger>
            </div>,
            sortable: false,


        },
    ];


    function cancelChanges() {
        setupdateAndTablesChecker(false); setprofileAndGraphChecker(false);
    }





    return (
        <div>
            <ToastContainer />



            <Modal show={showDelete} onHide={handleCloseDelete}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to delete?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseDelete}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => { deleteVetClinic() }}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>


            {!updateAndTablesChecker
                ?
                <Row >
                    <Col className='pb-2' sm={18} style={{ display: 'flex', }}>
                        <Card className='ml-3' style={{ boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', display: 'inline-flex', }}>
                            <Card.Body>
                                <TopVetTable />
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col sm={8} style={{ position: 'relative' }}>
                        <Card style={{ boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', display: 'flex', }}>
                            {profileAndGraphChecker ?
                                <Row className='mb-3 mt-2 pb-3' style={{ display: 'flex' }}>
                                    <Col sm={10} >
                                        <ViewVetVerifiedProfile viewProfileVetData={viewProfileVetData} />
                                    </Col>
                                    <Col style={{ display: 'flex', alignItems: 'end', justifyContent: 'flex-end', marginRight: 50 }}>
                                        <MdClear className='mt-4' style={{ fontSize: 25, cursor: 'pointer' }} onClick={() => { setprofileAndGraphChecker(false); }} />
                                    </Col>
                                </Row>
                                : <MostDemandProduct />}

                        </Card>
                    </Col>
                </Row>
                :
                <Row >
                    <Col>
                        <Card style={{ boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', display: 'flex', }}>

                            <Row className='mb-3 mt-2 ' style={{ display: 'flex' }}>
                                <Col >
                                    <UpdateVetVerifiedData ToastUpdate={ToastUpdate} vetTableRefresher={vetTableRefresher} viewProfileVetData={viewProfileVetData} cancelChanges={cancelChanges} />
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>
            }


            {/* Data Table */}
            {!updateAndTablesChecker &&

                < Row className='mt-1 '>
                    <Col>
                        <Card>
                            <Card style={{ boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', }}>
                                <Card.Body>
                                    <DataTable
                                        actions={<Form.Group><Form.Control type="text" value={q} placeholder={'Search'} onChange={(e) => setq(e.target.value)} /> </Form.Group>}
                                        title={'Verified Vet Clinic'}
                                        pagination
                                        paginationRowsPerPageOptions={[5, 10, 20]}
                                        paginationPerPage={5}
                                        columns={columns}
                                        data={search(vetclinic)}
                                        responsive={true}
                                        defaultSortField="vet_name"
                                    />
                                </Card.Body>
                            </Card>
                        </Card>
                    </Col>
                </Row>
            }





        </div >
    )
}

export default VetClinicVerifiedTable
