import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import RecentCards from './RecentCards'

export default function TopPurchasedCards() {

    return (
        <Container fluid className='mt-5'>
            <Row>
                <Col lg={4} md={6} sm={12}>
                    <RecentCards heading="Recent store owners" />
                </Col>
                <Col lg={4} md={6} sm={12}>
                    <RecentCards heading='Recent visitors' />
                </Col>
                <Col lg={4} md={6} sm={12}>
                    <RecentCards heading='Top 5 Products Purchased' />
                </Col>
            </Row>
        </Container>
    )
}