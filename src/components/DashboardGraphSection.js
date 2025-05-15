import React from 'react';
import {Link} from 'react-router-dom'
import { FaArrowUp } from "react-icons/fa";
import { MdOutlineArrowDropDown } from "react-icons/md";
import graphImage from '../assests/images/graph.png';

export default function DashboardGraphSection() {
    return (
        <div className='dashboard-graph-section mb-3'>
            <div className='graph-section1 px-4 mb-5'>
                <FaArrowUp className='progress-circle-arrow' />
                <span className='dollars'>$1000</span>
                <button className='this-year-btn'>
                    <span>This year</span>
                    <MdOutlineArrowDropDown size={20} className='this-year-arrow' />
                </button>
            </div>

            <div className="graph-image-container mb-3">
                <Link to=''><img className='graph-img' src={graphImage} alt="Graph"/></Link>
            </div>

            <div className='months px-4'>
                {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map(month => (
                    <div key={month}>{month}</div>
                ))}
            </div>
        </div>
    );
}
