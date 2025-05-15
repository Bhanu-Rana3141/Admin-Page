import React from 'react'
import { Link } from 'react-router-dom'
import vosmosLogo from '../assests/images/vosmos-logo.png'
import { GoPlus } from "react-icons/go";

export default function Sidebar() {
    return (
        <>
            <div className='sidebar-container'>
                <div className='sidebar-logo'>
                    <Link to=''><img src={vosmosLogo} className='logo-img'></img></Link>
                </div>

                <ul className='sidebar-links'>
                    <li className='border-right'><Link to='' className='dashboard-link'>Dashboard</Link></li>
                    <li><Link to='' className='links'>Stores</Link></li>
                    <li><Link to='' className='links'>Store Owners</Link></li>
                    <li><Link to='' className='links'>Store Visitors</Link></li>
                    <div className='template links'>
                        <Link to=''>Store Template</Link>
                        <GoPlus className='plus-icon' />
                    </div>
                    <div className='template links'>
                        <Link to=''>Email Template</Link>
                        <GoPlus className='plus-icon' />
                    </div>
                    <li><Link to='' className='links'>Plans</Link></li>
                    <li><Link to='' className='links'>Reports</Link></li>
                </ul>
            </div>
        </>
    )
}
