import React from 'react'
import {Link} from 'react-router-dom'
import { MdArrowOutward } from "react-icons/md";

export default function TemplateCard({image, heading}) {
    return (
        <>
            <div className='used-templates-card'>
                <Link to=''><img src={image}></img></Link>
                <div className='template-card-text p-3'>
                    <div className='card-text-color'>{heading}</div>
                    <div className='card-text-color'>22 Stores Using</div>
                    <div className='card-view'>
                        <span>View</span>
                        <MdArrowOutward size={15} />
                    </div>
                </div>
            </div>
        </>
  )
}
