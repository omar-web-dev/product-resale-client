import React from 'react';
import { FaGofore, FaInstagram, FaInstagramSquare, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className=' dark:bg-gray-800 dark:text-gray-100 mt-32'>
            <footer className="px-4 divide-y max-w-[1440px] mx-auto ">
                <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
                    <div className="lg:w-1/3">
                        <Link to='/' className="flex normal-case text-2xl font-bold items-center">
                            <img className='w-12' src="https://i.ibb.co/94BJMdM/logo.png" alt="" />
                            <p className='w-96 flex-initial'>Aspen Home</p>
                        </Link>
                        <p className='py-5'>Edwin Diaz is a software and web <br /> technologies engineer, a life coach <br /> trainer who is also a serial .</p>
                        <div className="flex gap-3">
                            <p><FaGofore className='bg-gray-600 p-2 w-8 h-8 text-white rounded-full' /></p>
                            <p><FaTwitter className='bg-gray-600 p-2 w-8 h-8 text-white rounded-full' /></p>
                            <p><FaInstagram className='bg-gray-600 p-2 w-8 h-8 text-white rounded-full' /></p>
                            <p><FaInstagramSquare className='bg-gray-600 p-2 w-8 h-8 text-white rounded-full' /></p>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-3">
                        <div className="space-y-3">
                            <h3 className="tracking-wide uppercase dark:text-gray-50">Product</h3>
                            <ul className="space-y-1">
                                <li>
                                    <a rel="noopener noreferrer" href="#">Features</a>
                                </li>
                                <li>
                                    <a rel="noopener noreferrer" href="#">Integrations</a>
                                </li>
                                <li>
                                    <a rel="noopener noreferrer" href="#">Pricing</a>
                                </li>
                                <li>
                                    <a rel="noopener noreferrer" href="#">FAQ</a>
                                </li>
                            </ul>
                        </div>
                        <div className="space-y-3">
                            <h3 className="tracking-wide uppercase dark:text-gray-50">Company</h3>
                            <ul className="space-y-1">
                                <li>
                                    <a rel="noopener noreferrer" href="#">Privacy</a>
                                </li>
                                <li>
                                    <a rel="noopener noreferrer" href="#">Terms of Service</a>
                                </li>
                            </ul>
                        </div>
                        <div className="space-y-3">
                            <h3 className="uppercase dark:text-gray-50">Developers</h3>
                            <ul className="space-y-1">
                                <li>
                                    <a rel="noopener noreferrer" href="#">Public API</a>
                                </li>
                                <li>
                                    <a rel="noopener noreferrer" href="#">Documentation</a>
                                </li>
                                <li>
                                    <a rel="noopener noreferrer" href="#">Guides</a>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;