import React from 'react';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';

export default function DashboardCard({ amount, label, percentage, arrow = 'up', borderClass = '' }) {
    const ArrowIcon = arrow === 'up' ? FaArrowUp : FaArrowDown;

    return (
        <div className={`p-4 dashboard-card ${borderClass} ${borderClass === 'green-border' ? 'dark-text' : ''}`}>
            <div className='total-revenue'>
                <div className='total-revenue-price'>{amount}</div>
                <div className='total-revenue-text'>{label}</div>
            </div>
            <div className='progress-circle-container'>
                <div className='progress-circle '>{percentage}</div>
                <ArrowIcon className={`progress-circle-arrow ${arrow === 'down' ? 'red-circle' : ''}`} />
            </div>
        </div>
    );
}
