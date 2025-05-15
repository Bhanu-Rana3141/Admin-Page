import React from 'react'
import { MdOutlineArrowDropDown } from 'react-icons/md';

export default function RecentCards({ heading }) {
    return (
        <>
            <div className="recent-card-container p-3">
                <div className='recent-card-child mb-2'>
                    <div className='card-heading'>{heading}</div>
                    <button className='this-week-btn btn-color'>
                        <span>This week</span>
                        <MdOutlineArrowDropDown size={20} className='this-week-arrow' />
                    </button>
                </div>
                <div className='recent-card-child'>
                    <div>James bond</div>
                    <div className='recent-card-email'>james.bond@gmail.com</div>
                </div>
                <div className='recent-card-child'>
                    <div>Vin Diesel</div>
                    <div className='recent-card-email'>vin.diesel@gmail.com</div>
                </div>
                <div className='recent-card-child'>
                    <div>James bond</div>
                    <div className='recent-card-email'>james.bond@gmail.com</div>
                </div>
                <div className='recent-card-child'>
                    <div>Vin Diesel</div>
                    <div className='recent-card-email'>vin.diesel@gmail.com</div>
                </div>
                <div className='recent-card-child'>
                    <div>James bond</div>
                    <div className='recent-card-email'>james.bond@gmail.com</div>
                </div>
            </div>

        </>
    )
}
