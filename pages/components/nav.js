import React from 'react';

const Nav = () => {
    return (
        <div>
            <div className='bg-warning justify-content-between  border-bottom navbar navbar-expand'>
                <ul className='navbar-nav '>
                    <li className='nav-item '>
                        <a className='nav-link text-light' > <i class="uil uil-phone-alt"></i> 01761174393 || 01516708479</a>
                    </li>
                    <li className='nav-item '>
                        <a className='nav-link text-light' href=""> </a>
                    </li>
                    <li className='nav-item '>
                        <a className='nav-link text-light' href=""> </a>
                    </li>
                    <li className='nav-item '>
                        <a className='nav-link text-light' href=""> </a>
                    </li>
                    <li className='nav-item '>
                        <a className='nav-link text-light' ><i class="uil uil-clock"></i> 10 AM to 8 PM </a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link text-light' href=""></a>
                    </li>
                </ul>
                <ul className='navbar-nav '>
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
            <nav class="navbar navbar-expand-lg bg-warning">

                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Navbar</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
                            <li class="nav-item">
                                <a class="nav-link fw-bold" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link fw-bold" href="#">About Bangladesh</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle fw-bold" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><hr class="dropdown-divider" /></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link fw-bold" href="#">Tours Packages</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link fw-bold" href="#">Services</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link fw-bold" href="#">Event Booking</a>
                            </li>
                        </ul>
                        <ul className='navbar-nav'>
                            <li className='nav-item d-lg-flex'>
                                <a className='nav-link fw-bold ' href="">login</a>
                                <a className='nav-link fw-bold ' href="">register</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Nav;