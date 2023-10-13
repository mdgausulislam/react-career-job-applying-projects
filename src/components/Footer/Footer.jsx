import React from 'react';
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
    return (
        <div className='all-footer'>
            <footer className="footer">
                <div className='applied-job-footer'>
                    <header className='applied-job-footer-title'>Career Applied Job</header>
                    <p className='applied-job-footer-description'>There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>
                    <div className='contact-info'>
                        <FontAwesomeIcon className='facebook' icon={faFacebookF} />
                        <FontAwesomeIcon className='twitter' icon={faTwitter} />
                        <FontAwesomeIcon className='instagram' icon={faInstagram} />
                    </div>
                </div>
                <div className='service'>
                    <header>Services</header>
                    <a href=''>Branding</a>
                    <a href=''>Design</a>
                    <a href=''>Marketing</a>
                    <a href=''>Advertisement</a>
                </div>
                <div className='company'>
                    <header>Company</header>
                    <a href=''>About us</a>
                    <a href=''>Contact</a>
                    <a href=''>Jobs</a>
                    <a href=''>Press kit</a>
                </div>
                <div className='legal'>
                    <header>Legal</header>
                    <a href=''>Terms of use</a>
                    <a href=''>Privacy policy</a>
                    <a href=''>Cookie policy</a>
                </div>
                <div className='contact'>
                    <header>Contact</header>
                    <a href=''>524 Broadway , NYC</a>
                    <a href=''>+1 777 - 978 - 5570</a>
                </div>

            </footer>
            <hr className='line-break' />
            <div className='all-rights-container'>
                <p>@2023 CareerAppliedJob. All Rights Reserved</p>
                <p>Powered by Md Gousul Islam Hemonto</p>
            </div>


        </div>

    );
};

export default Footer;