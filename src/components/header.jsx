import React from 'react'
import { BrowserRouter as Router, Link } from "react-router-dom";

import Breadcrumbs from '@mui/material/Breadcrumbs';

import HomeIcon from '@mui/icons-material/Home';
import CollectionsIcon from '@mui/icons-material/Collections';

import Logo from '../assets/img/logo.png';

const header = () => (
    <div className='header'>

        <Link to="/" className='logo-container'>
            <img src={Logo} alt='logo' />
        </Link>

        <Breadcrumbs aria-label="breadcrumb" className='nav-options' >

            <Link underline="hover" sx={{ display: 'flex', alignItems: 'center' }} color="inherit" to='/' >
                <HomeIcon sx={{ fontSize: 20 }} />
                Home
            </Link>
            <Link underline="hover" sx={{ display: 'flex', alignItems: 'center' }} color="inherit" to='/gallery'>
                <CollectionsIcon sx={{ fontSize: 20 }} />
                Gallery
            </Link>
        </Breadcrumbs>
    </div>
);

export default header