import React from 'react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { BsEnvelope } from 'react-icons/bs'

const Footer = () => {
    return (
        <div id='footer'>
            <p>
                <a href='https://github.com/jwade4207' target='_blank' rel='noopener noreferrer' alt='GitHub profile link'>
                    <FaGithub/>
                </a>
                <a href='https://www.linkedin.com/in/jerod-wade-5b7880112/' target='_blank' rel='noopener noreferrer' alt='LinkedIn profile link'>
                    <FaLinkedinIn/>
                </a>
                <a href='mailto:jwade4207@yahoo.com' target='_blank' rel='noopener noreferrer' alt='email link'>
                    <BsEnvelope/>
                    'jwade4207@yahoo.com'
                </a>
                
            </p>
        </div>
    )
}

export default Footer