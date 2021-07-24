import React, { useState, useEffect } from "react";
import { Col, Nav, Tab, Row, NavDropdown } from "react-bootstrap";
import ProductTable from "./ProductTable";
import { BsHouseDoorFill } from "react-icons/bs";
import { MdPets } from "react-icons/md";
import PharmacyTab from "./PharmacyTab";
import ServiceTab from "./ServiceTab";
import Reservation from "./Reservation";
import VisitorTab from "./VisitorTab";
import HistoryTab from "./HistoryTab";
import HomeTab from "./HomeTab";
import Axios from 'axios';

import VetProfileTab from "./VetProfileTab";
import background from "../../Images/bg.png";
import { MdLocalPharmacy } from "react-icons/md";
import { FaClinicMedical } from 'react-icons/fa';
import { AiFillSchedule, AiFillSecurityScan, AiOutlineAudit } from 'react-icons/ai';
import { IoPersonCircleSharp } from 'react-icons/io5';
import { RiServiceFill } from 'react-icons/ri';
import { GiDogBowl } from 'react-icons/gi';
import { VscChevronDown, VscChevronRight } from 'react-icons/vsc';
import PetsTable from "./PetsTable";
import { hostUrl } from "../../Components/Host";

const VetVerticalTab = () => {

  const [user, setuser] = useState([]);

  useEffect(() => {
    if (user.length === 0) {
      var token = localStorage.getItem('ajwt');
      Axios.get(`${hostUrl}/home`,
        { headers: { Authorization: `Bearer ${token}` } }
      ).then((response) => {
        setuser(response.data.result[0]);
        // console.log(user);
      });
    }

  }, [user]);


  function getUser() {
    var user = [];
    var token = localStorage.getItem('ajwt');
    Axios.get(`${hostUrl}/home`,
      { headers: { Authorization: `Bearer ${token}` } }
    ).then((response) => {
      user = response.data.result[0];
      console.log(user);
    });

    return user.vet_admin_id;
  }

  var screenh = window.screen.availHeight - 21;

  var cssLinkDisable = {

    marginLeft: '5%',
    marginBottom: '5%',
    height: 'auto',
    display: 'inline-block',
  }

  var cssLink = {
    borderLeft: '1px solid white',
    marginLeft: '5%',
    marginBottom: '5%',
    height: 'auto',
    display: 'inline-block',
  }

  var animation = {
    marginLeft: '5%',
    marginBottom: '5%',
    display: 'inline-block'
  }

  var cssLinkTabOne = {
    height: '6vh', backgroundColor: 'transparent', borderTop: '0px solid black',
    borderRight: '0px solid black', borderBottom: '0px solid black', color: '#57D4FF'
  }



  var cssLinkTabTwo = {
    height: '6vh', backgroundColor: 'transparent', borderTop: '0px solid black',
    borderRight: '0px solid black', borderBottom: '0px solid black', color: 'gray'
  }

  var cssLinkTabDisable = {
    height: '6vh', backgroundColor: 'transparent', borderTop: '0px solid black',
    borderRight: '0px solid black', borderBottom: '0px solid black', borderLeft: '0px solid black', color: 'gray'
  }

  const [linkStyleOne, setlinkStyleOne] = useState(cssLink);
  const [linkStyleTwo, setlinkStyleTwo] = useState(animation);
  const [linkStyleThree, setlinkStyleThree] = useState(animation);
  const [linkStyleFourth, setlinkStyleFourth] = useState(animation);
  const [linkStyleFifth, setlinkStyleFifth] = useState(animation);
  const [linkStyleSixth, setlinkStyleSixth] = useState(animation);
  const [linkStyleSeventh, setlinkStyleSeventh] = useState(animation);
  const [linkStyleEight, setlinkStyleEight] = useState(animation);
  const [linkStyleNinth, setlinkStyleNinth] = useState(animation);
  const [linkStyleTenth, setlinkStyleTenth] = useState(animation);

  const [linkStyleOneTab, setlinkStyleOneTab] = useState(cssLinkTabOne);
  const [linkStyleTwoTab, setlinkStyleTwoTab] = useState(cssLinkTabTwo);
  const [linkStyleThreeTab, setlinkStyleThreeTab] = useState(cssLinkTabTwo);
  const [linkStyleFourthTab, setlinkStyleFourthTab] = useState(cssLinkTabTwo);
  const [linkStyleFifthTab, setlinkStyleFifthTab] = useState(cssLinkTabTwo);
  const [linkStyleSixthTab, setlinkStyleSixthTab] = useState(cssLinkTabTwo);
  const [linkStyleSeventhTab, setlinkStyleSeventhTab] = useState(cssLinkTabTwo);
  const [linkStyleEightTab, setlinkStyleEightTab] = useState(cssLinkTabTwo);
  const [linkStyleNinthTab, setlinkStyleNinthTab] = useState(cssLinkTabTwo);
  const [linkStyleTenthTab, setlinkStyleTenthTab] = useState(cssLinkTabTwo);


  const [visible, setVisible] = useState(true);

  return (
    <div >

      <Tab.Container id="left-tabs-example" defaultActiveKey="dashCnt">
        <Row>
          <Col sm='2' className='mt-4' style={{ position: 'fixed', }}>
            <div style={{ position: 'fixed', backgroundColor: 'white', borderRadius: 50, marginTop: 25, marginBottom: 20, marginLeft: 60, marginRight: 60, boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }} >
              <h5 className='mt-5 ml-4' style={{ textAlign: 'left', color: 'gray' }}><strong>Dashboard Pane</strong></h5>
              <Nav fill variant="tabs" className="flex-column mt-3 ml-2" style={{ width: '15vw', backgroundColor: 'transparent', marginBottom: 120 }} >
                <Nav.Item style={linkStyleOne}>
                  <Nav.Link eventKey="dashCnt" style={linkStyleOneTab} onClick={() => {

                    setlinkStyleOne(cssLink);
                    setlinkStyleTwo(animation);
                    setlinkStyleThree(animation);
                    setlinkStyleFourth(animation);
                    setlinkStyleFifth(animation);
                    setlinkStyleSixth(animation);
                    setlinkStyleSeventh(animation);
                    setlinkStyleEight(animation);
                    setlinkStyleNinth(animation);
                    setlinkStyleTenth(animation);

                    setlinkStyleOneTab(cssLinkTabOne);
                    setlinkStyleTwoTab(cssLinkTabTwo);
                    setlinkStyleThreeTab(cssLinkTabTwo);
                    setlinkStyleFourthTab(cssLinkTabTwo);
                    setlinkStyleFifthTab(cssLinkTabTwo);
                    setlinkStyleSixthTab(cssLinkTabTwo);
                    setlinkStyleSeventhTab(cssLinkTabTwo);
                    setlinkStyleEightTab(cssLinkTabTwo);
                    setlinkStyleNinthTab(cssLinkTabTwo);
                    setlinkStyleTenthTab(cssLinkTabTwo);
                    setVisible(true)

                  }}>
                    <BsHouseDoorFill className='mr-3 ' style={{ fontSize: '200%', float: 'left' }} />
                    <h3 className='mt-2' style={{ fontSize: '120%', float: 'left', fontWeight: 'bold' }}>Dashboard</h3>
                  </Nav.Link>
                </Nav.Item>


                <Nav.Item style={linkStyleTwo}>
                  <Nav.Link eventKey="vetProfCnt" style={linkStyleTwoTab} onClick={
                    () => {
                      setlinkStyleOne(animation);
                      setlinkStyleTwo(cssLink);
                      setlinkStyleThree(animation);
                      setlinkStyleFourth(animation);
                      setlinkStyleFifth(animation);
                      setlinkStyleSixth(animation);
                      setlinkStyleSeventh(animation);
                      setlinkStyleEight(animation);
                      setlinkStyleNinth(animation);
                      setlinkStyleTenth(animation);

                      setlinkStyleOneTab(cssLinkTabTwo);
                      setlinkStyleTwoTab(cssLinkTabOne);
                      setlinkStyleThreeTab(cssLinkTabTwo);
                      setlinkStyleFourthTab(cssLinkTabTwo);
                      setlinkStyleFifthTab(cssLinkTabTwo);
                      setlinkStyleSixthTab(cssLinkTabTwo);
                      setlinkStyleSeventhTab(cssLinkTabTwo);
                      setlinkStyleEightTab(cssLinkTabTwo);
                      setlinkStyleNinthTab(cssLinkTabTwo);
                      setlinkStyleTenthTab(cssLinkTabTwo);
                      setVisible(true)

                    }

                  }>

                    <IoPersonCircleSharp className='mr-3 mt-1 ' style={{ fontSize: '200%', float: 'left' }} />
                    <h3 className='mt-1' style={{ fontSize: '120%', float: 'left', fontWeight: 'bold' }}>Profile</h3>

                  </Nav.Link>
                </Nav.Item>



                <h5 className='mt-2 ml-3' style={{ textAlign: 'left', color: 'gray' }}><strong>Activities</strong></h5>
                <Nav.Item style={linkStyleThree}>
                  <Nav.Link eventKey="petsCnt" style={linkStyleThreeTab} onClick={
                    () => {

                      setlinkStyleOne(animation);
                      setlinkStyleTwo(animation);
                      setlinkStyleThree(cssLink);
                      setlinkStyleFourth(animation);
                      setlinkStyleFifth(animation);
                      setlinkStyleSixth(animation);
                      setlinkStyleSeventh(animation);
                      setlinkStyleEight(animation);
                      setlinkStyleNinth(animation);
                      setlinkStyleTenth(animation);

                      setlinkStyleOneTab(cssLinkTabTwo);
                      setlinkStyleTwoTab(cssLinkTabTwo);
                      setlinkStyleThreeTab(cssLinkTabOne);
                      setlinkStyleFourthTab(cssLinkTabTwo);
                      setlinkStyleFifthTab(cssLinkTabTwo);
                      setlinkStyleSixthTab(cssLinkTabTwo);
                      setlinkStyleSeventhTab(cssLinkTabTwo);
                      setlinkStyleEightTab(cssLinkTabTwo);
                      setlinkStyleNinthTab(cssLinkTabTwo);
                      setlinkStyleTenthTab(cssLinkTabTwo);
                      setVisible(true)

                    }

                  }>
                    <MdPets className='mr-3 ' style={{ fontSize: '200%', float: 'left' }} />
                    <h3 className='mt-2' style={{ fontSize: '120%', float: 'left', fontWeight: 'bold' }}>Pets</h3>
                  </Nav.Link>
                </Nav.Item>


                <Nav.Item style={linkStyleFourth}>
                  <Nav.Link style={linkStyleFourthTab} onClick={
                    () => {
                      setVisible(!visible);

                    }

                  }>
                    <FaClinicMedical className='mr-3' style={{ fontSize: '200%', float: 'left' }} />
                    <h3 className='mt-2' style={{ fontSize: '120%', float: 'left', fontWeight: 'bold' }}>Vet Clinic</h3>
                    {visible === true ? <VscChevronDown className='mt-1' style={{ fontSize: '200%', marginTop: -5 }} /> : <VscChevronRight className='mt-1' style={{ fontSize: '200%', marginTop: -5 }} />}
                  </Nav.Link>


                  <Nav fill hidden={visible} variant="tabs" className="flex-column mt-3 ml-2" style={{ width: '15vw', backgroundColor: 'transparent' }} >
                    <Nav.Item style={linkStyleFifth}>
                      <Nav.Link eventKey="productCnt" style={linkStyleFifthTab} onClick={
                        () => {
                          setlinkStyleOne(animation);
                          setlinkStyleTwo(animation);
                          setlinkStyleThree(animation);
                          setlinkStyleFourth(cssLink);
                          setlinkStyleFifth(cssLink);
                          setlinkStyleSixth(animation);
                          setlinkStyleSeventh(animation);
                          setlinkStyleEight(animation);
                          setlinkStyleNinth(animation);
                          setlinkStyleTenth(animation);

                          setlinkStyleOneTab(cssLinkTabTwo);
                          setlinkStyleTwoTab(cssLinkTabTwo);
                          setlinkStyleThreeTab(cssLinkTabTwo);
                          setlinkStyleFourthTab(cssLinkTabOne);
                          setlinkStyleFifthTab(cssLinkTabOne);
                          setlinkStyleSixthTab(cssLinkTabTwo);
                          setlinkStyleSeventhTab(cssLinkTabTwo);
                          setlinkStyleEightTab(cssLinkTabTwo);
                          setlinkStyleNinthTab(cssLinkTabTwo);
                          setlinkStyleTenthTab(cssLinkTabTwo);
                        }

                      }>
                        <GiDogBowl className='mr-3 ' style={{ fontSize: '200%', float: 'left' }} />
                        <h3 className='mt-2' style={{ fontSize: '120%', float: 'left', fontWeight: 'bold' }}>Product</h3>

                      </Nav.Link>
                    </Nav.Item>

                    <Nav.Item style={linkStyleSixth}>
                      <Nav.Link eventKey="pharmacyCnt" style={linkStyleSixthTab} onClick={
                        () => {
                          setlinkStyleOne(animation);
                          setlinkStyleTwo(animation);
                          setlinkStyleThree(animation);
                          setlinkStyleFourth(cssLink);
                          setlinkStyleFifth(animation);
                          setlinkStyleSixth(cssLink);
                          setlinkStyleSeventh(animation);
                          setlinkStyleEight(animation);
                          setlinkStyleNinth(animation);
                          setlinkStyleTenth(animation);

                          setlinkStyleOneTab(cssLinkTabTwo);
                          setlinkStyleTwoTab(cssLinkTabTwo);
                          setlinkStyleThreeTab(cssLinkTabTwo);
                          setlinkStyleFourthTab(cssLinkTabOne);
                          setlinkStyleFifthTab(cssLinkTabTwo);
                          setlinkStyleSixthTab(cssLinkTabOne);
                          setlinkStyleSeventhTab(cssLinkTabTwo);
                          setlinkStyleEightTab(cssLinkTabTwo);
                          setlinkStyleNinthTab(cssLinkTabTwo);
                          setlinkStyleTenthTab(cssLinkTabTwo);
                        }

                      }>
                        <MdLocalPharmacy className='mr-3 ' style={{ fontSize: '200%', float: 'left' }} />
                        <h3 className='mt-2' style={{ fontSize: '120%', float: 'left', fontWeight: 'bold' }}>Pharmacy</h3>
                      </Nav.Link>
                    </Nav.Item>

                    <Nav.Item style={linkStyleSeventh}>
                      <Nav.Link eventKey="serviceCnt" style={linkStyleSeventhTab} onClick={
                        () => {
                          setlinkStyleOne(animation);
                          setlinkStyleTwo(animation);
                          setlinkStyleThree(animation);
                          setlinkStyleFourth(cssLink);
                          setlinkStyleFifth(animation);
                          setlinkStyleSixth(animation);
                          setlinkStyleSeventh(cssLink);
                          setlinkStyleEight(animation);
                          setlinkStyleNinth(animation);
                          setlinkStyleTenth(animation);

                          setlinkStyleOneTab(cssLinkTabTwo);
                          setlinkStyleTwoTab(cssLinkTabTwo);
                          setlinkStyleThreeTab(cssLinkTabTwo);
                          setlinkStyleFourthTab(cssLinkTabOne);
                          setlinkStyleFifthTab(cssLinkTabTwo);
                          setlinkStyleSixthTab(cssLinkTabTwo);
                          setlinkStyleSeventhTab(cssLinkTabOne);
                          setlinkStyleEightTab(cssLinkTabTwo);
                          setlinkStyleNinthTab(cssLinkTabTwo);
                          setlinkStyleTenthTab(cssLinkTabTwo);
                        }

                      }>
                        <RiServiceFill className='mr-3 ' style={{ fontSize: '200%', float: 'left' }} />
                        <h3 className='mt-2' style={{ fontSize: '120%', float: 'left', fontWeight: 'bold' }}>Services</h3>
                      </Nav.Link>
                    </Nav.Item>

                  </Nav>
                </Nav.Item>


                <Nav.Item style={linkStyleEight}>
                  <Nav.Link eventKey="reservationCnt" style={linkStyleEightTab} onClick={
                    () => {
                      setlinkStyleOne(animation);
                      setlinkStyleTwo(animation);
                      setlinkStyleThree(animation);
                      setlinkStyleFourth(animation);
                      setlinkStyleFifth(animation);
                      setlinkStyleSixth(animation);
                      setlinkStyleSeventh(animation);
                      setlinkStyleEight(cssLink);
                      setlinkStyleNinth(animation);
                      setlinkStyleTenth(animation);

                      setlinkStyleOneTab(cssLinkTabTwo);
                      setlinkStyleTwoTab(cssLinkTabTwo);
                      setlinkStyleThreeTab(cssLinkTabTwo);
                      setlinkStyleFourthTab(cssLinkTabTwo);
                      setlinkStyleFifthTab(cssLinkTabTwo);
                      setlinkStyleSixthTab(cssLinkTabTwo);
                      setlinkStyleSeventhTab(cssLinkTabTwo);
                      setlinkStyleEightTab(cssLinkTabOne);
                      setlinkStyleNinthTab(cssLinkTabTwo);
                      setlinkStyleTenthTab(cssLinkTabTwo);
                      setVisible(true);
                    }

                  }>
                    <AiFillSchedule className='mr-3 ' style={{ fontSize: '200%', float: 'left' }} />
                    <h3 className='mt-2' style={{ fontSize: '120%', float: 'left', fontWeight: 'bold' }}>Appointments</h3>
                  </Nav.Link>
                </Nav.Item>



                <Nav.Item style={linkStyleNinth}>
                  <Nav.Link eventKey="transactionCnt" style={linkStyleNinthTab} onClick={
                    () => {
                      setlinkStyleOne(animation);
                      setlinkStyleTwo(animation);
                      setlinkStyleThree(animation);
                      setlinkStyleFourth(animation);
                      setlinkStyleFifth(animation);
                      setlinkStyleSixth(animation);
                      setlinkStyleSeventh(animation);
                      setlinkStyleEight(animation);
                      setlinkStyleNinth(cssLink);
                      setlinkStyleTenth(animation);

                      setlinkStyleOneTab(cssLinkTabTwo);
                      setlinkStyleTwoTab(cssLinkTabTwo);
                      setlinkStyleThreeTab(cssLinkTabTwo);
                      setlinkStyleFourthTab(cssLinkTabTwo);
                      setlinkStyleFifthTab(cssLinkTabTwo);
                      setlinkStyleSixthTab(cssLinkTabTwo);
                      setlinkStyleSeventhTab(cssLinkTabTwo);
                      setlinkStyleEightTab(cssLinkTabTwo);
                      setlinkStyleNinthTab(cssLinkTabOne);
                      setlinkStyleTenthTab(cssLinkTabTwo);
                      setVisible(true);
                    }

                  }>
                    <AiOutlineAudit className='mr-3 ' style={{ fontSize: '200%', float: 'left' }} />
                    <h3 className='mt-2' style={{ fontSize: '120%', float: 'left', fontWeight: 'bold' }}>Transaction Logs</h3>
                  </Nav.Link>
                </Nav.Item>



                <Nav.Item style={linkStyleTenth}>
                  <Nav.Link eventKey="visitorCnt" style={linkStyleTenthTab} onClick={
                    () => {
                      setlinkStyleOne(animation);
                      setlinkStyleTwo(animation);
                      setlinkStyleThree(animation);
                      setlinkStyleFourth(animation);
                      setlinkStyleFifth(animation);
                      setlinkStyleSixth(animation);
                      setlinkStyleSeventh(animation);
                      setlinkStyleEight(animation);
                      setlinkStyleNinth(animation);
                      setlinkStyleTenth(cssLink);

                      setlinkStyleOneTab(cssLinkTabTwo);
                      setlinkStyleTwoTab(cssLinkTabTwo);
                      setlinkStyleThreeTab(cssLinkTabTwo);
                      setlinkStyleFourthTab(cssLinkTabTwo);
                      setlinkStyleFifthTab(cssLinkTabTwo);
                      setlinkStyleSixthTab(cssLinkTabTwo);
                      setlinkStyleSeventhTab(cssLinkTabTwo);
                      setlinkStyleEightTab(cssLinkTabTwo);
                      setlinkStyleNinthTab(cssLinkTabTwo);
                      setlinkStyleTenthTab(cssLinkTabOne);
                      setVisible(true)
                    }

                  }>
                    <AiFillSecurityScan className='mr-3 ' style={{ fontSize: '200%', float: 'left' }} />
                    <h3 className='mt-2' style={{ fontSize: '110%', float: 'left', fontWeight: 'bold' }}>Visitor Monitoring</h3>
                  </Nav.Link>
                </Nav.Item>

              </Nav>

            </div>
          </Col>
          <Col sm={9} className='mt-5' style={{ borderRadius: 10, marginLeft: 400, height: screenh }} >
            <Tab.Content>
              <Tab.Pane eventKey="dashCnt">
                <HomeTab data={user.vet_admin_id} />
              </Tab.Pane>
              <Tab.Pane eventKey="vetProfCnt">
                <VetProfileTab />
              </Tab.Pane>
              <Tab.Pane eventKey="petsCnt">
                <PetsTable data={user} />
              </Tab.Pane>
              <Tab.Pane eventKey="productCnt">
                <ProductTable data={user} />
              </Tab.Pane>
              <Tab.Pane eventKey="pharmacyCnt">
                <PharmacyTab data={user} />
              </Tab.Pane>
              <Tab.Pane eventKey="serviceCnt">
                <ServiceTab data={user} />
              </Tab.Pane>
              <Tab.Pane eventKey="reservationCnt">
                <Reservation data={user} />
              </Tab.Pane>
              <Tab.Pane eventKey="visitorCnt">
                <VisitorTab data={user} />
              </Tab.Pane>
              <Tab.Pane eventKey="transactionCnt">
                <HistoryTab data={user} />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>

    </div >
  );
};

export default VetVerticalTab;
