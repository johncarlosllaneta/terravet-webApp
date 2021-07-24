import React, { useState } from "react";
import { Col, Nav, Tab, Row } from "react-bootstrap";
import { BsHouseDoorFill, BsFillPersonFill } from "react-icons/bs";
import { MdPets } from "react-icons/md";
import { GiPostStamp } from "react-icons/gi";
import { FaClinicMedical } from "react-icons/fa";
import { AiOutlineAudit } from "react-icons/ai";
import "bootstrap/dist/css/bootstrap.min.css";
import PetOwnerTable from "./PetOwnerTable";
// import Search from "../../Components/Search";
import PostTable from "./PostTable";
import PetsTable from "./PetsTable";

import History from "./History";
import Home from "./Home";
import VetClinicVerifiedTable from "./VetClinicVerifiedTable";
import VetClinicPendintTable from "./VetClinicPendintTable";

import { GoVerified } from 'react-icons/go';
import { VscChevronDown, VscChevronRight, VscUnverified } from 'react-icons/vsc';

const VerticalTab = () => {


  var cssLink = {
    borderLeft: '3px solid white',
    marginLeft: '5%',
    marginBottom: '5%',
    height: 'auto',
    display: 'inline-block',
  }

  var animation = {
    marginLeft: '5%',
    marginBottom: '5%',
    display: 'inline-block',
  }

  var cssLinkTabOne = {
    height: '6vh', backgroundColor: 'transparent', borderTop: '0px solid black',
    borderRight: '0px solid black', borderBottom: '0px solid black', color: '#57D4FF', borderLeft: '3px solid #57D4FF',


  }



  var cssLinkTabTwo = {
    height: '6vh', backgroundColor: 'transparent', borderTop: '0px solid black',
    borderRight: '0px solid black', borderBottom: '0px solid black', color: 'gray'
  }


  const [linkStyleOne, setlinkStyleOne] = useState(cssLink);
  const [linkStyleTwo, setlinkStyleTwo] = useState(animation);
  const [linkStyleThree, setlinkStyleThree] = useState(animation);
  const [linkStyleFourth, setlinkStyleFourth] = useState(animation);
  const [linkStyleFifth, setlinkStyleFifth] = useState(animation);
  const [linkStyleSixth, setlinkStyleSixth] = useState(animation);
  const [linkStyleSeventh, setlinkStyleSeventh] = useState(animation);
  const [linkStyleEight, setlinkStyleEight] = useState(animation);

  const [linkStyleOneTab, setlinkStyleOneTab] = useState(cssLinkTabOne);
  const [linkStyleTwoTab, setlinkStyleTwoTab] = useState(cssLinkTabTwo);
  const [linkStyleThreeTab, setlinkStyleThreeTab] = useState(cssLinkTabTwo);
  const [linkStyleFourthTab, setlinkStyleFourthTab] = useState(cssLinkTabTwo);
  const [linkStyleFifthTab, setlinkStyleFifthTab] = useState(cssLinkTabTwo);
  const [linkStyleSixthTab, setlinkStyleSixthTab] = useState(cssLinkTabTwo);
  const [linkStyleSeventhTab, setlinkStyleSeventhTab] = useState(cssLinkTabTwo);
  const [linkStyleEightTab, setlinkStyleEightTab] = useState(cssLinkTabTwo);

  const [visible, setVisible] = useState(true);


  var subNavTitle = {
    fontSize: '150%',
    float: 'left'
  }
  var screenh = window.screen.height - 225;
  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="dashCnt">
      <Row >
        <Col sm='2' style={{ position: 'fixed', backgroundColor: 'white', borderRadius: 50, marginTop: 50, marginBottom: 20, marginLeft: 90, marginRight: 60, boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }} >
          <div style={{}}>
            <h5 className='mt-5 ml-3' style={{ textAlign: 'left', color: 'gray' }}><strong>Dashboard Pane</strong></h5>
            <Nav fill variant="tabs" className="flex-column mt-2" style={{ width: '15vw', backgroundColor: 'transparent', marginBottom: 170 }} >
              <Nav.Item style={linkStyleOne}>
                <Nav.Link eventKey="dashCnt"
                  style={linkStyleOneTab} onClick={() => {

                    setlinkStyleOne(cssLink);
                    setlinkStyleTwo(animation);
                    setlinkStyleThree(animation);
                    setlinkStyleFourth(animation);
                    setlinkStyleFifth(animation);
                    setlinkStyleSixth(animation);
                    setlinkStyleSeventh(animation);
                    setlinkStyleEight(animation);

                    setlinkStyleOneTab(cssLinkTabOne);
                    setlinkStyleTwoTab(cssLinkTabTwo);
                    setlinkStyleThreeTab(cssLinkTabTwo);
                    setlinkStyleFourthTab(cssLinkTabTwo);
                    setlinkStyleFifthTab(cssLinkTabTwo);
                    setlinkStyleSixthTab(cssLinkTabTwo);
                    setlinkStyleSeventhTab(cssLinkTabTwo);
                    setlinkStyleEightTab(cssLinkTabTwo);


                  }
                  }>
                  <BsHouseDoorFill className='mr-3 mt-1' style={{ fontSize: '200%', float: 'left' }} />
                  <strong style={subNavTitle}>
                    Dashboard
                  </strong>
                </Nav.Link>
              </Nav.Item>


              <Nav.Item style={linkStyleTwo}>
                <Nav.Link eventKey="petOwnCnt"
                  style={linkStyleTwoTab} onClick={
                    () => {
                      setlinkStyleOne(cssLink);
                      setlinkStyleTwo(animation);
                      setlinkStyleThree(cssLink);
                      setlinkStyleFourth(cssLink);
                      setlinkStyleFifth(cssLink);
                      setlinkStyleSixth(cssLink);
                      setlinkStyleSeventh(cssLink);
                      setlinkStyleEight(cssLink);


                      setlinkStyleOneTab(cssLinkTabTwo);
                      setlinkStyleTwoTab(cssLinkTabOne);
                      setlinkStyleThreeTab(cssLinkTabTwo);
                      setlinkStyleFourthTab(cssLinkTabTwo);
                      setlinkStyleFifthTab(cssLinkTabTwo);
                      setlinkStyleSixthTab(cssLinkTabTwo);
                      setlinkStyleSeventhTab(cssLinkTabTwo);
                      setlinkStyleEightTab(cssLinkTabTwo);
                    }

                  }>
                  <BsFillPersonFill className='mr-3 mt-1' style={{ fontSize: '200%', float: 'left' }} />
                  <strong style={subNavTitle}>
                    Pet Owner
                  </strong>
                </Nav.Link>
              </Nav.Item>

              <Nav.Item style={linkStyleThree}>
                <Nav.Link eventKey="petsCnt"
                  style={linkStyleThreeTab} onClick={
                    () => {
                      setlinkStyleOne(animation);
                      setlinkStyleTwo(animation);
                      setlinkStyleThree(cssLink);
                      setlinkStyleFourth(animation);
                      setlinkStyleFifth(animation);
                      setlinkStyleSixth(animation);
                      setlinkStyleSeventh(animation);
                      setlinkStyleEight(animation);

                      setlinkStyleOneTab(cssLinkTabTwo);
                      setlinkStyleTwoTab(cssLinkTabTwo);
                      setlinkStyleThreeTab(cssLinkTabOne);
                      setlinkStyleFourthTab(cssLinkTabTwo);
                      setlinkStyleFifthTab(cssLinkTabTwo);
                      setlinkStyleSixthTab(cssLinkTabTwo);
                      setlinkStyleSeventhTab(cssLinkTabTwo);
                      setlinkStyleEightTab(cssLinkTabTwo);
                    }

                  }>


                  <MdPets className='mr-3 mt-1' style={{ fontSize: '200%', float: 'left' }} />
                  <strong style={subNavTitle}>
                    Pets
                  </strong>

                </Nav.Link>
              </Nav.Item>




              <Nav.Item style={linkStyleFourth}>
                <Nav.Link style={linkStyleFourthTab} onClick={
                  () => {
                    setVisible(!visible);

                  }

                }>
                  <FaClinicMedical className='mr-3' style={{ fontSize: '200%', float: 'left' }} />
                  <strong style={subNavTitle}>Vet Clinic</strong>
                  {visible === true ? <VscChevronDown style={{ fontSize: '200%', marginTop: -5 }} /> : <VscChevronRight style={{ fontSize: '200%', marginTop: -5 }} />}
                </Nav.Link>


                <Nav fill hidden={visible} variant="tabs" className="flex-column mt-3 ml-2" style={{ width: '15vw', backgroundColor: 'transparent' }} >
                  <Nav.Item style={linkStyleSeventh}>
                    <Nav.Link eventKey="verifiedCnt" style={linkStyleSeventhTab} onClick={
                      () => {
                        setlinkStyleOne(animation);
                        setlinkStyleTwo(animation);
                        setlinkStyleThree(animation);
                        setlinkStyleFourth(cssLink);
                        setlinkStyleFifth(animation);
                        setlinkStyleSixth(animation);
                        setlinkStyleSeventh(cssLink);
                        setlinkStyleEight(animation);


                        setlinkStyleOneTab(cssLinkTabTwo);
                        setlinkStyleTwoTab(cssLinkTabTwo);
                        setlinkStyleThreeTab(cssLinkTabTwo);
                        setlinkStyleFourthTab(cssLinkTabOne);
                        setlinkStyleFifthTab(cssLinkTabTwo);
                        setlinkStyleSixthTab(cssLinkTabTwo);
                        setlinkStyleSeventhTab(cssLinkTabOne);
                        setlinkStyleEightTab(cssLinkTabTwo);


                      }

                    }>
                      <GoVerified className='mr-3 ' style={{ fontSize: '200%', float: 'left' }} />
                      <strong style={subNavTitle}>Verified</strong>

                    </Nav.Link>
                  </Nav.Item>

                  <Nav.Item style={linkStyleEight}>
                    <Nav.Link eventKey="pendingCnt" style={linkStyleEightTab} onClick={
                      () => {
                        setlinkStyleOne(animation);
                        setlinkStyleTwo(animation);
                        setlinkStyleThree(animation);
                        setlinkStyleFourth(cssLink);
                        setlinkStyleFifth(animation);
                        setlinkStyleSixth(animation);
                        setlinkStyleSeventh(animation);
                        setlinkStyleEight(cssLink);



                        setlinkStyleOneTab(cssLinkTabTwo);
                        setlinkStyleTwoTab(cssLinkTabTwo);
                        setlinkStyleThreeTab(cssLinkTabTwo);
                        setlinkStyleFourthTab(cssLinkTabOne);
                        setlinkStyleFifthTab(cssLinkTabTwo);
                        setlinkStyleSixthTab(cssLinkTabTwo);
                        setlinkStyleSeventhTab(cssLinkTabTwo);
                        setlinkStyleEightTab(cssLinkTabOne);

                      }

                    }>
                      <VscUnverified className='mr-3 ' style={{ fontSize: '200%', float: 'left' }} />
                      <strong style={subNavTitle}>Pending</strong>
                    </Nav.Link>
                  </Nav.Item>


                </Nav>
              </Nav.Item>





              <Nav.Item style={linkStyleFifth}>
                <Nav.Link eventKey="postCnt"
                  style={linkStyleFifthTab} onClick={
                    () => {
                      setlinkStyleOne(animation);
                      setlinkStyleTwo(animation);
                      setlinkStyleThree(animation);
                      setlinkStyleFourth(animation);
                      setlinkStyleFifth(cssLink);
                      setlinkStyleSixth(animation);
                      setlinkStyleSeventh(animation);
                      setlinkStyleEight(animation);

                      setlinkStyleOneTab(cssLinkTabTwo);
                      setlinkStyleTwoTab(cssLinkTabTwo);
                      setlinkStyleThreeTab(cssLinkTabTwo);
                      setlinkStyleFourthTab(cssLinkTabTwo);
                      setlinkStyleFifthTab(cssLinkTabOne);
                      setlinkStyleSixthTab(cssLinkTabTwo);
                      setlinkStyleSeventhTab(cssLinkTabTwo);
                      setlinkStyleEightTab(cssLinkTabTwo);
                    }

                  }>


                  <GiPostStamp className='mr-3 mt-1' style={{ fontSize: '200%', float: 'left' }} />
                  <strong style={subNavTitle}>
                    Posts
                  </strong>
                </Nav.Link>
              </Nav.Item>


              <Nav.Item style={linkStyleSixth}>
                <Nav.Link eventKey="auditCnt"
                  style={linkStyleSixthTab} onClick={
                    () => {
                      setlinkStyleOne(animation);
                      setlinkStyleTwo(animation);
                      setlinkStyleThree(animation);
                      setlinkStyleFourth(animation);
                      setlinkStyleFifth(animation);
                      setlinkStyleSixth(cssLink);
                      setlinkStyleSeventh(animation);
                      setlinkStyleEight(animation);

                      setlinkStyleOneTab(cssLinkTabTwo);
                      setlinkStyleTwoTab(cssLinkTabTwo);
                      setlinkStyleThreeTab(cssLinkTabTwo);
                      setlinkStyleFourthTab(cssLinkTabTwo);
                      setlinkStyleFifthTab(cssLinkTabTwo);
                      setlinkStyleSixthTab(cssLinkTabOne);
                      setlinkStyleSeventhTab(cssLinkTabTwo);
                      setlinkStyleEightTab(cssLinkTabTwo);


                    }

                  }>


                  <AiOutlineAudit className='mr-3 mt-1' style={{ fontSize: '200%', float: 'left' }} />
                  <strong style={subNavTitle}>
                    Audit logs
                  </strong>
                </Nav.Link>
              </Nav.Item>


            </Nav>
          </div>
        </Col>
        <Col sm={9} style={{ height: screenh, padding: 30, marginLeft: 400, marginTop: 20 }}>
          <Tab.Content>
            <Tab.Pane eventKey="dashCnt">
              {/* <Search /> */}
              <Home />
            </Tab.Pane>
            <Tab.Pane eventKey="petOwnCnt">
              {/* <Search /> */}
              <PetOwnerTable />
            </Tab.Pane>
            <Tab.Pane eventKey="petsCnt">
              {/* <Search /> */}
              <PetsTable />
            </Tab.Pane>
            <Tab.Pane eventKey="verifiedCnt">
              <VetClinicVerifiedTable />
            </Tab.Pane>
            <Tab.Pane eventKey="pendingCnt">
              <VetClinicPendintTable />
            </Tab.Pane>
            <Tab.Pane eventKey="postCnt">
              {/* <Search /> */}
              <PostTable />
            </Tab.Pane>
            <Tab.Pane eventKey="auditCnt">
              {/* <Search /> */}
              <History />
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container >
  );
};

export default VerticalTab;
