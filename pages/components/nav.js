import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import logo from '../../public/images/Hidden-Key-West.png'

const Nav = ({ darkMode, setDarkMode }) => {



    const modeControl = (event) => {
        event.preventDefault();
        setDarkMode(!darkMode)
    }
    return (
        <div >
            <div className='bg-primary justify-content-between  border-bottom navbar navbar-expand '>
                <ul className='navbar-nav '>
                    <li className='nav-item '>
                        <a className='nav-link text-light' > <i class="uil uil-phone-alt"></i> 01761174393</a>
                    </li>


                    <li className='nav-item '>
                        <a className='nav-link text-light' ><i class="uil uil-clock"></i> 10 AM to 8 PM </a>
                    </li>

                </ul>
                <ul className='navbar-nav '>

                    <li className='nav-item '>
                        <div onClick={modeControl}>
                            <a className='nav-link text-light' href=""> {darkMode ? <i class="uil uil-brightness"></i> : <i class="uil uil-moon "></i>} </a>
                        </div>
                    </li>
                    <li className='nav-item '>
                        <a className='nav-link text-light' href=""> <i class="uil uil-facebook-f"></i></a>
                    </li>

                    <li className='nav-item '>
                        <a className='nav-link text-light' href=""><i class="uil uil-instagram"></i></a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link text-light' href=""><i class="uil uil-dashboard"></i></a>
                    </li>
                </ul>
            </div>
            <div >

                <nav class="navbar navbar-expand-lg bg-primary">

                    <div class="container-fluid  ">
                        <a class="navbar-brand" href="#">
                            <Image
                                src={logo}
                                alt="Pic"
                                width={120}
                                height={88.44}
                            >
                            </Image>
                        </a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0   ">
                                <li class="nav-item">
                                    <a class="nav-link  text-light fw-bold " aria-current="page" href="#">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link  text-light fw-bold" href="#">About Bangladesh</a>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link  text-light dropdown-toggle fw-bold" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Tour packages
                                    </a>
                                    <ul class="dropdown-menu bg-primary">
                                        <li><a class="dropdown-item  text-warning" href="#">Inbound Tour</a></li>
                                        <li><hr class="dropdown-divider" /></li>
                                        <li><a class="dropdown-item  text-warning" href="#">River Cruise</a></li>
                                        <li><hr class="dropdown-divider" /></li>
                                        <li><a class="dropdown-item  text-warning" href="#">Safari Park Tour</a></li>
                                        <li><hr class="dropdown-divider" /></li>
                                        <li><a class="dropdown-item  text-warning" href="#">Sajek Valley Tour</a></li>
                                        <li><hr class="dropdown-divider" /></li>
                                        <li><a class="dropdown-item  text-warning" href="#">Keokradong Tour</a></li>
                                        <li><hr class="dropdown-divider" /></li>
                                        <li><a class="dropdown-item  text-warning" href="#">Tangoar Haor Tour</a></li>
                                        <li><hr class="dropdown-divider" /></li>
                                        <li><a class="dropdown-item  text-warning" href="#">Buy Ship Ticket</a></li>
                                        <li><hr class="dropdown-divider" /></li>
                                        <li><a class="dropdown-item  text-warning" href="#">Group Tour Request</a></li>
                                        <li><hr class="dropdown-divider" /></li>
                                    </ul>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link  text-light dropdown-toggle fw-bold" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Services
                                    </a>
                                    <ul class="dropdown-menu bg-primary">
                                        <li><a class="dropdown-item  text-warning" href="#">Visa Assistance</a></li>
                                        <li><hr class="dropdown-divider" /></li>
                                        <li><a class="dropdown-item  text-warning" href="#">Air Ticket</a></li>
                                        <li><hr class="dropdown-divider" /></li>
                                        <li><a class="dropdown-item  text-warning" href="#">Hotel Reservation</a></li>
                                        <li><hr class="dropdown-divider" /></li>

                                        <li><a class="dropdown-item  text-warning" href="#">Tourist Transport</a></li>
                                        <li><hr class="dropdown-divider" /></li>
                                    </ul>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link  text-light dropdown-toggle fw-bold" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Event Booking
                                    </a>
                                    <ul class="dropdown-menu bg-primary">
                                        <li><a class="dropdown-item  text-warning" href="#">Book An Event</a></li>
                                        <li><hr class="dropdown-divider" /></li>
                                        <li><a class="dropdown-item  text-warning" href="#">Your Event</a></li>
                                        <li><hr class="dropdown-divider" /></li>

                                        <li><a class="dropdown-item  text-warning" href="#">Sale Your Event</a></li>
                                        <li><hr class="dropdown-divider" /></li>
                                        <li><a class="dropdown-item  text-warning" href="#">Upcoming Events</a></li>
                                    </ul>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link  text-light dropdown-toggle fw-bold" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Company
                                    </a>
                                    <ul class="dropdown-menu bg-primary">
                                        <li><a class="dropdown-item  text-warning" href="#">About Travel Gear</a></li>
                                        <li><hr class="dropdown-divider" /></li>

                                        <li><a class="dropdown-item  text-warning" href="#">Contact Us</a></li>
                                        <li><hr class="dropdown-divider" /></li>
                                        <li><a class="dropdown-item  text-warning" href="#">About Us</a></li>
                                        <li><hr class="dropdown-divider" /></li>
                                        <li><a class="dropdown-item  text-warning" href="#">Join with us</a></li>
                                    </ul>
                                </li>



                            </ul>
                            <ul className='navbar-nav'>
                                <li className='nav-item d-lg-flex'>
                                    <Link className='nav-link fw-bold  text-light ' href="components/login">Login</Link>                                    <Link className='nav-link fw-bold  text-light ' href="components/signUp">Registar</Link>

                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Nav;



/* 

const mongoose = require('mongoose');
const connectDatabase = () => {
    const mongodb_uri = `mongodb+srv://mobilePhone:eNBcl4J9QbMbfpLL@cluster0.1any0hy.mongodb.net/?retryWrites=true&`
    try {
        mongoose.connect(mongodb_uri)
        mongoose.connection.on('connected', () => {
            console.log('connected to DB')
        })
    } catch (error) {
        console.log(error.message)
    }
}

export default connectDatabase;



 */