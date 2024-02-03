import React from 'react'
import About from './About'
import Interest from './Interest'
export default function Info() {
    return (
        <div className='info--section'>
            <img src='./image/profile.png' />
            <h1 className='profile--name'>Laura Smith</h1>
            <h4 className='profile--job'>Frontend Developer</h4>
            <h5 className='profile--website'>laurasmith.website</h5>
            <button className='btn--email'>
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                <path d="M2.10241 4.7072L8.50001 7.9056L14.8976 4.7072C14.8739 4.29955 14.6953 3.91639 14.3983 3.63618C14.1012 3.35597 13.7083 3.19992 13.3 3.2H3.70001C3.29167 3.19992 2.89876 3.35597 2.60175 3.63618C2.30473 3.91639 2.12609 4.29955 2.10241 4.7072Z" fill="#1E1F26"/>
                <path d="M14.9 6.4944L8.50001 9.6944L2.10001 6.4944V11.2C2.10001 11.6243 2.26858 12.0313 2.56864 12.3314C2.86869 12.6314 3.27566 12.8 3.70001 12.8H13.3C13.7244 12.8 14.1313 12.6314 14.4314 12.3314C14.7314 12.0313 14.9 11.6243 14.9 11.2V6.4944Z" fill="#1E1F26"/>
                </svg>
                Email
            </button>
            <About />
            <Interest />
        </div>
    )
}