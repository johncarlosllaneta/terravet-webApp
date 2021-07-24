import React, { useState, useEffect } from 'react';
import { Col, Row, Button, Form } from "react-bootstrap";
import { AiOutlineDelete, AiOutlineSearch } from "react-icons/ai";
import { FaRegEdit } from "react-icons/fa";
import axios from 'axios';
import { Alert } from 'bootstrap';
import { hostUrl } from '../../Components/Host';

function UpdateVetVerifiedData(props) {

    const [Vet_Id, setVet_Id] = useState();
    const [Vet_Name, setVet_Name] = useState();
    const [email, setEmail] = useState();
    const [Address, setAddress] = useState();
    const [ContactNumber, setContactNumber] = useState();
    const [OpeningMonday, setOpeningMonday] = useState();
    const [OpeningTuesday, setOpeningTuesday] = useState();
    const [OpeningWednesday, setOpeningWednesday] = useState();
    const [OpeningThursday, setOpeningThursday] = useState();
    const [OpeningFriday, setOpeningFriday] = useState();
    const [OpeningSaturday, setOpeningSaturday] = useState();
    const [OpeningSunday, setOpeningSunday] = useState();
    const [ClosingMonday, setClosingMonday] = useState();
    const [ClosingTuesday, setClosingTuesday] = useState();
    const [ClosingWednesday, setClosingWednesday] = useState();
    const [ClosingThursday, setClosingThursday] = useState();
    const [ClosingFriday, setClosingFriday] = useState();
    const [ClosingSaturday, setClosingSaturday] = useState();
    const [ClosingSunday, setClosingSunday] = useState();
    const [CheckerMonday, setCheckerMonday] = useState();
    const [CheckerTuesday, setCheckerTuesday] = useState();
    const [CheckerWednesday, setCheckerWednesday] = useState();
    const [CheckerThursday, setCheckerThursday] = useState();
    const [CheckerFriday, setCheckerFriday] = useState();
    const [CheckerSaturday, setCheckerSaturday] = useState();
    const [CheckerSunday, setCheckerSunday] = useState();
    const [CheckerSwitchMonday, setCheckerSwitchMonday] = useState();
    const [CheckerSwitchTuesday, setCheckerSwitchTuesday] = useState();
    const [CheckerSwitchWednesday, setCheckerSwitchWednesday] = useState();
    const [CheckerSwitchThursday, setCheckerSwitchThursday] = useState();
    const [CheckerSwitchFriday, setCheckerSwitchFriday] = useState();
    const [CheckerSwitchSaturday, setCheckerSwitchSaturday] = useState();
    const [CheckerSwitchSunday, setCheckerSwitchSunday] = useState();
    const [variant, setvariant] = useState();
    const [message, setmessage] = useState();
    const [showAlert, setshowAlert] = useState(false);


    function getData() {
        setVet_Id(props.viewProfileVetData.vet_admin_id);
        setVet_Name(props.viewProfileVetData.vet_name);
        setEmail(props.viewProfileVetData.email);
        setAddress(props.viewProfileVetData.vet_address);
        setContactNumber(props.viewProfileVetData.vet_contact_number);

        var Monday = props.viewProfileVetData.scheduleMonday;
        if (Monday.length > 1) {
            setOpeningMonday(Monday.split(" - ")[0]);
            setClosingMonday(Monday.split(" - ")[1]);
            setCheckerMonday(false);
            setCheckerSwitchMonday(false);
        } else {
            setCheckerMonday(true);
            setCheckerSwitchMonday(true);
        }

        // alert(ClosingMonday);

        var Tuesday = props.viewProfileVetData.scheduleTuesday;
        if (Tuesday.length > 1) {
            setOpeningTuesday(Tuesday.split(" - ")[0]);
            setClosingTuesday(Tuesday.split(" - ")[1]);
            setCheckerTuesday(false);
            setCheckerSwitchTuesday(false);
        } else {
            setCheckerTuesday(true);
            setCheckerSwitchTuesday(true);
        }
        // alert(ClosingMonday);

        var Wednesday = props.viewProfileVetData.scheduleWednesday;
        if (Wednesday.length > 1) {
            setOpeningWednesday(Wednesday.split(" - ")[0]);
            setClosingWednesday(Wednesday.split(" - ")[1]);
            setCheckerWednesday(false);
            setCheckerSwitchWednesday(false);
        } else {
            setCheckerWednesday(true);
            setCheckerSwitchWednesday(true);
        }

        // alert(ClosingMonday);


        var Thursday = props.viewProfileVetData.scheduleThursday;
        if (Thursday.length > 1) {
            setOpeningThursday(Thursday.split(" - ")[0]);
            setClosingThursday(Thursday.split(" - ")[1]);
            setCheckerThursday(false);
            setCheckerSwitchThursday(false);
        } else {
            setCheckerThursday(true);
            setCheckerSwitchThursday(true);
        }

        // alert(ClosingMonday);

        var Friday = props.viewProfileVetData.scheduleFriday;
        if (Friday.length > 1) {
            setOpeningFriday(Friday.split(" - ")[0]);
            setClosingFriday(Friday.split(" - ")[1]);
            setCheckerFriday(false);
            setCheckerSwitchFriday(false);
        } else {
            setCheckerFriday(true);
            setCheckerSwitchFriday(true);
        }

        // alert(ClosingMonday);

        var Saturday = props.viewProfileVetData.scheduleSaturday;
        if (Saturday.length > 1) {
            setOpeningSaturday(Saturday.split(" - ")[0]);
            setClosingSaturday(Saturday.split(" - ")[1]);
            setCheckerSaturday(false);
            setCheckerSwitchSaturday(false);
        } else {
            setCheckerSaturday(true);
            setCheckerSwitchSaturday(true);
        }

        // alert(ClosingMonday);

        var Sunday = props.viewProfileVetData.scheduleSunday;
        if (Sunday.length > 1) {
            setOpeningSunday(Sunday.split(" - ")[0]);
            setClosingSunday(Sunday.split(" - ")[1]);
            setCheckerSunday(false);
            setCheckerSwitchSunday(false);
        } else {
            setCheckerSunday(true);
            setCheckerSwitchSunday(true);
        }

        // alert(ClosingMonday);

    }
    useEffect(() => {
        getData();
    }, [props])



    function handleClick(event) {
        var monday;
        var tuesday;
        var wednesday;
        var thursday;
        var friday;
        var saturday;
        var sunday;




        if (CheckerSwitchMonday) {
            monday = null;
        } else {
            monday = OpeningMonday + ' - ' + ClosingMonday;
        }

        if (CheckerSwitchTuesday) {
            tuesday = null;
        } else {
            tuesday = OpeningTuesday + ' - ' + ClosingTuesday;
        }

        if (CheckerSwitchWednesday) {
            wednesday = null;
        } else {
            wednesday = OpeningWednesday + ' - ' + ClosingWednesday;
        }

        if (CheckerThursday) {
            thursday = null;
        } else {
            thursday = OpeningThursday + ' - ' + ClosingThursday;
        }

        if (CheckerSwitchFriday) {
            friday = null;
        } else {
            friday = OpeningFriday + ' - ' + ClosingFriday;
        }

        if (CheckerSwitchSaturday) {
            saturday = null;
        } else {
            saturday = OpeningSaturday + ' - ' + ClosingSaturday;
        }

        if (CheckerSwitchSunday) {
            sunday = null;
        } else {
            sunday = OpeningSunday + ' - ' + ClosingSunday;
        }

        axios.put(`${hostUrl}/vetclinic/update/${Vet_Id}`,
            {
                email: email,
                vet_name: Vet_Name,
                vet_address: Address,
                vet_contact_number: ContactNumber,
                scheduleMonday: monday,
                scheduleTuesday: tuesday,
                scheduleWednesday: wednesday,
                scheduleThursday: thursday,
                scheduleFriday: friday,
                scheduleSaturday: saturday,
                scheduleSunday: sunday,
            }).then((response) => {
                if (response.status === 200) {
                    props.cancelChanges();
                    props.vetTableRefresher();
                    props.ToastUpdate();
                }
            }
            ).catch((err) => {
                console.log(err);
            });

        event.preventDefault();
    }


    return (
        <div>
            <Form onSubmit={handleClick}>
                {/* <Alert idx={1} variant={variant} message={message} show={showAlert} /> */}
                <Row style={{ display: 'flex' }}>


                    <Col sm={8} className='ml-3 mt-3'>
                        <Row>
                            <Col >
                                <Row className='mt-3 ml-5' style={{ fontSize: 25 }}>
                                    <strong>Vet Clinic Details</strong>
                                </Row>
                            </Col>
                            <Col>
                                <Row className='mt-3' style={{ fontSize: 30, marginLeft: 60 }}>
                                    <strong>Schedule</strong>
                                </Row>
                            </Col>

                        </Row>

                        <Row className='mb-4' style={{ display: 'flex' }}>
                            <Col sm={5} className='mr-3'>
                                <Row>
                                    <Col>
                                        <Row className='' style={{ display: 'flex', alignContent: 'center', justifyContent: 'center' }}>
                                            <img
                                                src={props.viewProfileVetData.vet_picture}

                                                style={{
                                                    height: 150,
                                                    width: 150,
                                                    borderRadius: 100,
                                                    border: "7px",
                                                    borderStyle: "solid",
                                                    borderColor: "transparent",

                                                }}></img>
                                        </Row>
                                    </Col>
                                    <Col>
                                        <Row className='ml-5' style={{ fontSize: 12, color: 'grey' }}>
                                            <strong>Name </strong>
                                        </Row>
                                        <Row className='ml-5' style={{ fontSize: 15, color: 'black' }}>
                                            <Form.Group controlId="exampleForm.ControlInput1" style={{ width: 500 }}>
                                                <Form.Control type="text" value={Vet_Name} onChange={(e) => { setVet_Name(e.target.value) }} />
                                            </Form.Group>
                                        </Row>
                                        <Row className='ml-5' style={{ fontSize: 12, color: 'grey' }}>
                                            <strong>Email </strong>
                                        </Row>
                                        <Row className='ml-5' style={{ fontSize: 15, color: 'black' }}>
                                            <Form.Group controlId="exampleForm.ControlInput1" style={{ width: 500 }}>
                                                <Form.Control type="email" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                                            </Form.Group>
                                        </Row>

                                        <Row className='ml-5' style={{ fontSize: 12, color: 'grey' }}>
                                            <strong>Address </strong>
                                        </Row>
                                        <Row className='ml-5' style={{ fontSize: 15, color: 'black' }}>
                                            <Form.Group controlId="exampleForm.ControlInput1" style={{ width: 500 }}>
                                                <Form.Control type="text" value={Address} onChange={(e) => { setAddress(e.target.value) }} />
                                            </Form.Group>
                                        </Row>

                                        <Row className='ml-5' style={{ fontSize: 12, color: 'grey' }}>
                                            <strong>Contact Number </strong>
                                        </Row>
                                        <Row className='ml-5' style={{ fontSize: 15, color: 'black' }}>
                                            <Form.Group controlId="exampleForm.ControlInput1" style={{ width: 500 }}>
                                                <Form.Control type="number" value={ContactNumber} onChange={(e) => { setContactNumber(e.target.value) }} />
                                            </Form.Group>

                                        </Row>
                                    </Col>

                                </Row>

                            </Col>

                            <Col sm={6}>
                                <Row style={{ fontSize: 15, }}>
                                    <Col className='ml-3'>
                                        <Row className='mt-4 pt-3 pb-2'>
                                            Monday
                                        </Row>
                                        <Row className='mt-4 pb-2'>
                                            Tuesday
                                        </Row>
                                        <Row className='mt-4 pb-2'>
                                            Wednesday
                                        </Row>
                                        <Row className='mt-4 pb-2'>
                                            Thursday
                                        </Row>
                                        <Row className='mt-4 pb-2'>
                                            Friday
                                        </Row>
                                        <Row className='mt-4 pb-2'>
                                            Saturday
                                        </Row>
                                        <Row className='mt-4 pb-2'>
                                            Sunday
                                        </Row>
                                    </Col>
                                    <Col className='mr-2'>
                                        <Row >
                                            <Form.Group controlId="exampleForm.ControlInput1" style={{ textAlign: 'left' }}>
                                                <Form.Label >Opening Hour</Form.Label>
                                                <Form.Control type="time" required value={OpeningMonday} disabled={CheckerMonday} onChange={(e) => { setOpeningMonday(e.target.value) }} />
                                            </Form.Group>
                                        </Row>
                                        <Row >
                                            <Form.Group controlId="exampleForm.ControlInput1">
                                                <Form.Control type="time" required value={OpeningTuesday} disabled={CheckerTuesday} onChange={(e) => { setOpeningTuesday(e.target.value) }} />
                                            </Form.Group>
                                        </Row>
                                        <Row >
                                            <Form.Group controlId="exampleForm.ControlInput1">
                                                <Form.Control type="time" required value={OpeningWednesday} disabled={CheckerWednesday} onChange={(e) => { setOpeningWednesday(e.target.value) }} />
                                            </Form.Group>
                                        </Row>
                                        <Row >
                                            <Form.Group controlId="exampleForm.ControlInput1">
                                                <Form.Control type="time" required value={OpeningThursday} disabled={CheckerThursday} onChange={(e) => { setOpeningThursday(e.target.value) }} />
                                            </Form.Group>
                                        </Row>
                                        <Row >
                                            <Form.Group controlId="exampleForm.ControlInput1">
                                                <Form.Control type="time" required value={OpeningFriday} disabled={CheckerFriday} onChange={(e) => { setOpeningFriday(e.target.value) }} />
                                            </Form.Group>
                                        </Row>
                                        <Row >
                                            <Form.Group controlId="exampleForm.ControlInput1">
                                                <Form.Control type="time" required value={OpeningSaturday} disabled={CheckerSaturday} onChange={(e) => { setOpeningSaturday(e.target.value) }} />
                                            </Form.Group>
                                        </Row>
                                        <Row >
                                            <Form.Group controlId="exampleForm.ControlInput1">
                                                <Form.Control type="time" required value={OpeningSunday} disabled={CheckerSunday} onChange={(e) => { setOpeningSunday(e.target.value) }} />
                                            </Form.Group>
                                        </Row>

                                    </Col>
                                    <Col>
                                        <Row >
                                            <Form.Group controlId="exampleForm.ControlInput1" style={{ textAlign: 'left' }}>
                                                <Form.Label>Closing Hour</Form.Label>
                                                <Form.Control type="time" required value={ClosingMonday} disabled={CheckerMonday} onChange={(e) => { setClosingMonday(e.target.value); }} />
                                            </Form.Group>
                                        </Row>
                                        <Row >
                                            <Form.Group controlId="exampleForm.ControlInput1">
                                                <Form.Control type="time" required value={ClosingTuesday} disabled={CheckerTuesday} onChange={(e) => { setClosingTuesday(e.target.value); }} />
                                            </Form.Group>
                                        </Row>
                                        <Row >
                                            <Form.Group controlId="exampleForm.ControlInput1">
                                                <Form.Control type="time" required value={ClosingWednesday} disabled={CheckerWednesday} onChange={(e) => { setClosingWednesday(e.target.value); }} />
                                            </Form.Group>
                                        </Row>
                                        <Row >
                                            <Form.Group controlId="exampleForm.ControlInput1">
                                                <Form.Control type="time" required value={ClosingThursday} disabled={CheckerThursday} onChange={(e) => { setClosingThursday(e.target.value); }} />
                                            </Form.Group>
                                        </Row>
                                        <Row >
                                            <Form.Group controlId="exampleForm.ControlInput1">
                                                <Form.Control type="time" required value={ClosingFriday} disabled={CheckerFriday} onChange={(e) => { setClosingFriday(e.target.value); }} />
                                            </Form.Group>
                                        </Row>
                                        <Row >
                                            <Form.Group controlId="exampleForm.ControlInput1">
                                                <Form.Control type="time" required value={ClosingSaturday} disabled={CheckerSaturday} onChange={(e) => { setClosingSaturday(e.target.value); }} />
                                            </Form.Group>
                                        </Row>
                                        <Row >
                                            <Form.Group controlId="exampleForm.ControlInput1">
                                                <Form.Control type="time" required value={ClosingSunday} disabled={CheckerSunday} onChange={(e) => { setClosingSunday(e.target.value); }} />
                                            </Form.Group>
                                        </Row>
                                    </Col>

                                    <Col >
                                        <Row className='mt-3 pt-3 ml-3 pb-2'>
                                            <Form.Group controlId="formBasicCheckbox1">
                                                <Form.Check type="switch" label="Close" checked={CheckerSwitchMonday}
                                                    onChange={(e) => {
                                                        // alert(e.target.checked);
                                                        if (e.target.checked !== true) {
                                                            setCheckerSwitchMonday(false);
                                                            setCheckerMonday(false);
                                                        } else {
                                                            setCheckerSwitchMonday(true);
                                                            setCheckerMonday(true);
                                                            setOpeningMonday('');
                                                            setClosingMonday('');
                                                        }
                                                    }}
                                                />
                                            </Form.Group>
                                        </Row>
                                        <Row className='mt-2 ml-3'>
                                            <Form.Group controlId="formBasicCheckbox2">
                                                <Form.Check type="switch" label="Close" checked={CheckerSwitchTuesday}
                                                    onChange={(e) => {
                                                        // alert(e.target.checked);
                                                        if (e.target.checked !== true) {
                                                            setCheckerSwitchTuesday(false);
                                                            setCheckerTuesday(false);
                                                        } else {
                                                            setCheckerSwitchTuesday(true);
                                                            setCheckerTuesday(true);
                                                            setOpeningTuesday('');
                                                            setClosingTuesday('');
                                                        }
                                                    }} />
                                            </Form.Group>
                                        </Row>
                                        <Row className='mt-2 ml-3 '>
                                            <Form.Group controlId="formBasicCheckbox3">
                                                <Form.Check type="switch" label="Close" checked={CheckerSwitchWednesday}
                                                    onChange={(e) => {
                                                        // alert(e.target.checked);
                                                        if (e.target.checked !== true) {
                                                            setCheckerSwitchWednesday(false);
                                                            setCheckerWednesday(false);
                                                        } else {
                                                            setCheckerSwitchWednesday(true);
                                                            setCheckerWednesday(true);
                                                            setOpeningWednesday('');
                                                            setClosingWednesday('');
                                                        }
                                                    }} />
                                            </Form.Group>
                                        </Row>
                                        <Row className='mt-3 ml-3'>
                                            <Form.Group controlId="formBasicCheckbox4">
                                                <Form.Check type="switch" label="Close" checked={CheckerSwitchThursday}
                                                    onChange={(e) => {
                                                        // alert(e.target.checked);
                                                        if (e.target.checked !== true) {
                                                            setCheckerSwitchThursday(false);
                                                            setCheckerThursday(false);
                                                        } else {
                                                            setCheckerSwitchThursday(true);
                                                            setCheckerThursday(true);
                                                            setOpeningThursday('');
                                                            setClosingThursday('');
                                                        }
                                                    }} />
                                            </Form.Group>
                                        </Row>
                                        <Row className='mt-3 ml-3'>
                                            <Form.Group controlId="formBasicCheckbox5">
                                                <Form.Check type="switch" label="Close" checked={CheckerSwitchFriday}
                                                    onChange={(e) => {
                                                        // alert(e.target.checked);
                                                        if (e.target.checked !== true) {
                                                            setCheckerSwitchFriday(false);
                                                            setCheckerFriday(false);
                                                        } else {
                                                            setCheckerSwitchFriday(true);
                                                            setCheckerFriday(true);
                                                            setOpeningFriday('');
                                                            setClosingFriday('');
                                                        }
                                                    }} />
                                            </Form.Group>
                                        </Row>
                                        <Row className='mt-3 ml-3'>
                                            <Form.Group controlId="formBasicCheckbox6">
                                                <Form.Check type="switch" label="Close" checked={CheckerSwitchSaturday}
                                                    onChange={(e) => {
                                                        // alert(e.target.checked);
                                                        if (e.target.checked !== true) {
                                                            setCheckerSwitchSaturday(false);
                                                            setCheckerSaturday(false);
                                                        } else {
                                                            setCheckerSwitchSaturday(true);
                                                            setCheckerSaturday(true);
                                                            setOpeningSaturday('');
                                                            setClosingSaturday('');
                                                        }
                                                    }} />
                                            </Form.Group>
                                        </Row>
                                        <Row className='mt-3 ml-3'>
                                            <Form.Group controlId="formBasicCheckbox7">
                                                <Form.Check type="switch" label="Close" checked={CheckerSwitchSunday}
                                                    onChange={(e) => {
                                                        // alert(e.target.checked);
                                                        if (e.target.checked !== true) {
                                                            setCheckerSwitchSunday(false);
                                                            setCheckerSunday(false);
                                                        } else {
                                                            setCheckerSwitchSunday(true);
                                                            setCheckerSunday(true);
                                                            setOpeningSunday('');
                                                            setClosingSunday('');
                                                        }
                                                    }} />
                                            </Form.Group>
                                        </Row>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>





                    </Col>
                    <Col sm={2} className='mt-4 ml-5'>

                        <Row className='' style={{ fontSize: 25 }}>
                            <strong>Action</strong>
                        </Row>

                        <Row className='mt-2' style={{ fontSize: 20, }}>
                            <Button variant='info' type='submit' ><FaRegEdit /> Update Changes</Button>
                        </Row>
                        <Row className='mt-2' style={{ fontSize: 20, }}>
                            <Button variant='danger' onClick={props.cancelChanges}><AiOutlineDelete /> Cancel Changes</Button>
                        </Row>

                    </Col>
                </Row>
            </Form>
        </div>
    )
}

export default UpdateVetVerifiedData

