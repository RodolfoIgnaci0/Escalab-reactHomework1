import React from 'react';
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Image from '../assets/img/img1.JPG';
import { Container } from "@material-ui/core";
import '../assets/css/styles.css';

const indexBody = () => {
    return (
        <div className='main'>
            <Container>
                <Box display="flex">
                    <Box display="flex" flexWrap="wrap" alignItems="center" >
                        <div>
                            <h1 style={{ padding: `10px` }}>Images Blog</h1>
                            <p style={{ padding: `10px` }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit nulla facilis voluptatem nihil distinctio, a soluta, quod recusandae illo quisquam totam eos praesentium quis ipsum. Soluta suscipit distinctio quis placeat.</p>
                            <Button variant="contained" style={{ padding: `10px` }}>
                                <Link color="inherit" to='/gallery' style={{ textDecoration: `none` }}>
                                    Gallery
                                </Link>
                            </Button>
                        </div>
                    </Box>
                    <Box>
                        <img src={Image} alt="imagen blog" />
                    </Box>
                </Box>
            </Container>
        </div>

    )
}

export default indexBody;