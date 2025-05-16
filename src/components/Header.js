import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { PiBellSimpleBold } from "react-icons/pi";
import { RiUser6Line } from "react-icons/ri";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { GiHamburgerMenu } from 'react-icons/gi';

export default function Header({ isSidebarOpen, toggleSidebar }) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenu, setIsMobileMenu] = useState(window.innerWidth < 991.98);

    useEffect(() => {
        const handleResize = () => {
            setIsMobileMenu(window.innerWidth < 991.98);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);


    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <Container fluid className={`header-container ${isScrolled ? 'scrolled' : ''}`}>
            <Row className={`align-items-center header-row justify-content-end ${isMobileMenu ? 'justify-content-between' : ''} `}>
                <Col xs='auto' className='d-lg-none'>
                    <div onClick={toggleSidebar} className='hamburger-icon'>
                        <GiHamburgerMenu size={24} />
                    </div>
                </Col>

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