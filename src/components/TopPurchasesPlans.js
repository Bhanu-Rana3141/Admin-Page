import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { HiPlus } from "react-icons/hi2";
import circle from '../assests/images/circle.png'
import { MdOutlineArrowDropDown } from 'react-icons/md';

export default function TopPurchasesPlans() {
    return (
        <Container fluid className='mt-4'>
            <h3 className='heading mb-3'>Top Purchased Plans</h3>
            <Row className='py-2'>
                <Col lg={7} >
                    <div className='purchased-plans1 p-3'>
                        <div className='circles-container'>
                            <img src={circle} alt='circle'></img>
                        </div>
                        <div className='text-container'>
                            <div>
                                <div className='text1 common-text'>Free World</div>
                                <div className='text2 common-text'>Efficient</div>
                                <div className='text3 common-text'>Super Efficient (Demigod Mode)</div>
                                <div className='text4 common-text'>Super Customized (God Mode)</div>
                            </div>
                            <button className='this-week-btn text-container-btn'>
                                <span>This week</span>
                                <MdOutlineArrowDropDown size={20} className='this-week-arrow' />
                            </button>
                        </div>
                    </div>
                </Col>

                <Col lg={5} >
                    <div className='purchased-plans2'>
                        <div className='box-container-common box-container1'>
                            <HiPlus className='hi-plus-icon' />
                            <div className='heading-para-container'>
                                <div className='template-heading mb-2'>Add Store Template</div>
                                <div className='box-para'>Some basic info about adding a store template</div>
                            </div>
                        </div>
                        <div className='box-container-common box-container2'>
                            <HiPlus className='hi-plus-icon' />
                            <div className='heading-para-container'>
                                <div className='template-heading mb-2'>Add Email Template</div>
                                <div className='box-para'>Some basic info about adding an email template</div>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}