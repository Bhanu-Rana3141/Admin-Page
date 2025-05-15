import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { PiBellSimpleBold } from "react-icons/pi";
import { RiUser6Line } from "react-icons/ri";
import { MdOutlineArrowDropDown } from "react-icons/md";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <Container fluid className={`header-container ${isScrolled ? 'scrolled' : ''}`}>
            <Row className="justify-content-end align-items-center header-row">
                <Col xs='auto' className='header-col-container'>
                    <div className='bell-icon-container'>
                        <PiBellSimpleBold className='bell-icon' />
                        <span className='bell-icon-alert'></span>
                    </div>
                    <RiUser6Line className='admin-icon' />
                    <div className='admin-info-container'>
                        <div className='admin-info'>
                            <div className='admin-name'>Bhanu</div>
                            <div className='admin-role'>Admin</div>
                        </div>
                        <MdOutlineArrowDropDown size={25} className='dropdown-arrow' />
                    </div>
                </Col>
            </Row>
        </Container>
    );
}