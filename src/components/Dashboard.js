import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import DashboardCard from './DashboardCard';
import DashboardGraphSection from './DashboardGraphSection';

export default function Dashboard() {
    return (
        <Container fluid>
            <h3 className='heading mb-3'>Dashboard</h3>
            <div className='dashboard-container'>
                <Row>
                    <Col lg={4} md={4} sm={12}>
                        <DashboardCard
                            amount="$10000"
                            label="Total Revenue"
                            percentage="80%"
                            arrow="up"
                            borderClass="green-border"
                        />
                    </Col>
                    <Col lg={4} md={4} sm={12}>
                        <DashboardCard
                            amount="100"
                            label="Total Stores"
                            percentage="35%"
                            arrow="down"
                            borderClass="dark-nav-border"
                        />
                    </Col>
                    <Col lg={4} md={4} sm={12}>
                        <DashboardCard
                            amount="1564"
                            label="Total Visitors"
                            percentage="35%"
                            arrow="up"
                            borderClass="dark-nav-border"
                        />
                    </Col>
                </Row>

                <Row>
                    <Col xs={12}>
                        <DashboardGraphSection />
                    </Col>
                </Row>
            </div>
        </Container>
    )
}