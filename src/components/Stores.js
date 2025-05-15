import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { LuArrowUpDown } from "react-icons/lu";
import { MdOutlineArrowDropDown } from 'react-icons/md';
import StoreTable from './StoreTable';

export default function Stores() {
    return (
        <>
            <Container fluid className='p-4'>
                <h3 className='heading mb-3'>Stores</h3>
                <Row>
                    <div className='store-container'>
                        <Col md={9}>
                            <div className='stores-container1'>
                                <div className='top-visited-stores first-div'>
                                    <span>Top Visited Stores</span>
                                    <LuArrowUpDown className='up-down-arrow' />
                                </div>
                                <div className='top-visited-stores second-div'>
                                    <span>Top performing Stores</span>
                                    <LuArrowUpDown className='up-down-arrow' />
                                </div>
                                <div className='top-visited-stores second-div'>
                                    <span>Recently added Stores</span>
                                    <LuArrowUpDown className='up-down-arrow' />
                                </div>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className='stores-container2'>
                                <div className='view-all'>View All</div>
                                <button className='this-week-btn'>
                                    <span>This week</span>
                                    <MdOutlineArrowDropDown size={20} className='this-week-arrow' />
                                </button>
                            </div>
                        </Col>
                    </div>
                </Row>

                <Row className='mt-4'>
                    <Col md={12}>
                        <StoreTable />
                    </Col>
                </Row>
            </Container>
        </>
    );
}