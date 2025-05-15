import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { HiPlus } from "react-icons/hi2";
import circle from '../assests/images/circle.png'

export default function TopPurchasesPlans() {
    return (
        <>
            <Container fluid className='py-3 px-4'>
                <h3 className='heading mb-3'>Top Purchased Plans</h3>
                <Row className='py-2'>
                    <Col lg={7} md={12} sm={12}>
                        <div className='purchased-plans1 p-3'>
                            <div className='circles-container'>
                                <img src={circle}></img>
                            </div>
                            <div className='text-container'>
                                <div>
                                    <div className='mb-3 text1'>Free World</div>
                                    <div className='mb-3 text2'>Efficient</div>
                                    <div className='mb-3 text3'>Super Efficient (Demigod Mode)</div>
                                    <div className='mb-3 text4'>Super Customized (God Mode)</div>
                                </div>
                                <button className='this-week-btn text-container-btn'>This week</button>
                            </div>
                        </div>
                    </Col>

                    <Col lg={5} md={12} sm={12}>
                        <div className='purchased-plans2'>
                            <div className='box-container-common box-container1 p-2'>
                                <div className='hi-plus-icon-container'>
                                    <HiPlus className='hi-plus-icon' />
                                </div>
                                <div className='heading-para-container'>
                                    <div className='template-heading mb-2'>Add Store Template</div>
                                    <div className='box-para'>Some basic info about adding a store template</div>
                                </div>
                            </div>
                            <div className='box-container-common box-container2 p-2'>
                                <div className='hi-plus-icon-container'>
                                    <HiPlus className='hi-plus-icon' />
                                </div>
                                <div className='heading-para-container'>
                                    <div className='template-heading mb-2'>Add Email Template</div>
                                    <div className='box-para'>Some basic info about adding an email template</div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container >
        </>
    )
}
