import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import Avatar from 'react-avatar';
import { BsStar } from 'react-icons/bs';

function RatingsAndFeedback() {
    return (
        <div>
            <Card
                style={{ width: '100%', padding: 10 }}
            >
                <Row>
                    <Col sm={4}>
                        <Avatar round={50} src='https://scontent.fmnl17-1.fna.fbcdn.net/v/t1.6435-9/213162776_5704600282948100_2643818377165500237_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeHvbwcdbrLTXm8qGUfeOxIKYSp0g5klG8VhKnSDmSUbxUTUw9rJBo-3yUkIETodVQ1RAJEetkBjugNsXHRbED2y&_nc_ohc=dAkVaB3vGHEAX95Knzu&_nc_ht=scontent.fmnl17-1.fna&oh=cd516a81c05a190097b810618a057cac&oe=60FF2737' name="Jhaycee Llaneta" />
                    </Col>

                    <Col sm={4}>
                        <Row className='mt-2'>
                            <h6 style={{ fontWeight: 'bold' }}>Jhaycee Llaneta</h6>
                        </Row>
                        <Row>
                            <p style={{ fontSize: 12 }}>Great Service</p>
                        </Row>

                        <Row >
                            <p style={{ fontWeight: 'bold', fontSize: 12 }}>Date: July 19, 2021 </p>
                        </Row>
                    </Col>

                    <Col sm={4}>
                        <Row className='mt-2' style={{ textAlign: 'center', display: 'flex', justifyContent: 'center' }}>
                            <h6 style={{ fontWeight: 'bold', }}>Ratings</h6>
                        </Row>
                        <Row style={{ textAlign: 'center', display: 'flex', justifyContent: 'center' }}>
                            <p style={{ fontSize: 12, }}>4/5 stars <BsStar /></p>
                        </Row>

                        <Row >
                            <p style={{ fontWeight: 'bold', fontSize: 12 }}>Time: 10:00 AM </p>
                        </Row>
                    </Col>
                </Row>
            </Card>
        </div >
    )
}

export default RatingsAndFeedback
