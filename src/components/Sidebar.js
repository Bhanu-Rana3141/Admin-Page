import React from 'react'
import { Link } from 'react-router-dom'
import vosmosLogo from '../assests/images/vosmos-logo.png'
import { GoPlus } from "react-icons/go";
import { AiOutlineClose } from 'react-icons/ai';

export default function Sidebar({ isOpen, onLinkClick }) {

    const handleLinkClick = () => {
        if (window.innerWidth <= 991.98) {
            onLinkClick();
        }
    };

    return (
        <>
            <div className={`sidebar-container ${isOpen ? 'show-sidebar' : ''}`}>
                <div className='sidebar-logo'>
                    <Link to=''><img src={vosmosLogo} className='logo-img' /></Link>
                    <AiOutlineClose className='close-icon d-lg-none' onClick={onLinkClick} />
                </div>

                <ul className='sidebar-links'>
                    <li className='border-right'><Link to='' className='dashboard-link' onClick={handleLinkClick}>Dashboard</Link></li>
                    <li><Link to='' className='links' onClick={handleLinkClick}>Stores</Link></li>
                    <li><Link to='' className='links' onClick={handleLinkClick}>Store Owners</Link></li>
                    <li><Link to='' className='links' onClick={handleLinkClick}>Store Visitors</Link></li>
                    <div className='template links' onClick={handleLinkClick}>
                        <Link to=''>Store Template</Link>
                        <GoPlus className='plus-icon' />
                    </div>
                    <div className='template links' onClick={handleLinkClick}>
                        <Link to=''>Email Template</Link>
                        <GoPlus className='plus-icon' />
                    </div>
                    <li><Link to='' className='links' onClick={handleLinkClick}>Plans</Link></li>
                    <li><Link to='' className='links' onClick={handleLinkClick}>Reports</Link></li>
                </ul>
            </div>
        </>
    )
}