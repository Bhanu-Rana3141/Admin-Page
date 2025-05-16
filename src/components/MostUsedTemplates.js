import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { LuArrowUpDown } from "react-icons/lu";
import TemplateCard from './TemplateCard';
import template1 from '../assests/images/template1.png'
import template2 from '../assests/images/template2.png'
import template3 from '../assests/images/template3.png'
import template4 from '../assests/images/template4.png'
import template5 from '../assests/images/template5.png'

export default function MostUsedTemplates() {
    return (
        <Container fluid className='mt-5'>
            <div className='most-used-template-container mb-4'>
                <div className='most-used-template-heading'>Most Used Templates</div>
                <LuArrowUpDown className='up-down-arrow' />
            </div>
            <div className='template-card-container'>
                <Row className='boot-row mb-3'>
                    <Col lg={3} md={4} sm={6} xs={8}>
                        <TemplateCard image={template1} heading='Design Store' />
                    </Col>
                    <Col lg={3} md={4} sm={6} xs={8}>
                        <TemplateCard image={template2} heading='Aisle' />
                    </Col>
                    <Col lg={3} md={4} sm={6} xs={8}>
                        <TemplateCard image={template3} heading='Quirky Close' />
                    </Col>
                    <Col lg={3} md={4} sm={6} xs={8}>
                        <TemplateCard image={template4} heading='Urban Square' />
                    </Col>
                    <Col lg={3} md={4} sm={6} xs={8}>
                        <TemplateCard image={template5} heading='Design Store' />
                    </Col>
                </Row>
            </div>
        </Container>
    )
}