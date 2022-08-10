import React from 'react';
import { Container, Nav, Navbar,Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../app.css';
import logo from '../Images/logo.gif';
// import matrix from 'martix';
import { Link, NavLink } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { IconButton, List } from '@mui/material';
import { useState } from 'react';

const  NavBar = () => {


   return(
      <>
         
           <Navbar expand="lg" className="nav-bar"
               style={{ position: "fixed",
               width:"100%",
               zIndex:"5",
               backgroundColor:"transparent"}}>
               <Container className='navbar-containerr'>
                  <Navbar.Brand href="#" className="nav-brand">
                     <img 
                     alt=""
                     src={logo}
                     style={{height:"70px"}}
                     className="d-inline-block align-items-center logo-img"
                     />{' '}
                     <a className='logo-link'>GOOEY CLUB NFT</a>
                     </Navbar.Brand>
                     <Navbar.Toggle aria-controls="navbarScroll"/>
                     <Navbar.Collapse id="navbarScroll">
                     <Nav
                     className="me-auto my-2 my-lg-0 nav-item ms-3"
                     >
                     <Nav.Link href="#about" className="navbar-link">About</Nav.Link>
                     <Nav.Link href="#roadmap" className="navbar-link">Roadmap</Nav.Link>
                     <Nav.Link href="#team" className="navbar-link">Team</Nav.Link>
                     {/* <Nav.Link href="#">My Collection</Nav.Link>
                     <Nav.Link href="#">Merch</Nav.Link>
                     <Nav.Link href="#">Lookup</Nav.Link> */}
                     </Nav>
                     
                    
                        <div className='d-flex justify-content-center nav-icons'>
                              <div className='icon me-5'>
                              <a
                              href="https://twitter.com/TheGooeyClub" target="_blank">
                                 <Icon icon="akar-icons:twitter-fill" />
                              </a>
                              </div>
                              <div className='icon me-5'>
                              <a
                              href="https://www.instagram.com/thegooeyclub/" target="_blank">
                                 <Icon icon="brandico:instagram-filled" />
                              </a>
                              </div>
                              <div className='icon'>
                              <a 
                              href="https://discord.com/invite/tPgYHb2ZEn" target="_blank">
                                 <Icon icon="logos:discord-icon" />
                              </a>
                              </div>
                           </div>

                           <div className="nav-button">
                              <div className='nav-btn btnnnn'>
                                 <div className='psychic button-container'>
                                    <svg className='goo'>
                                       <defs>
                                          <filter id='goo'>
                                             <feGaussianBlur in="SourceGraphic" stdDeviation = "10" result = "blur">
                                             </feGaussianBlur>
                                             <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo"> 
                                             </feColorMatrix>
                                             <feComposite in = "SourceGraphic" in2="goo"></feComposite>
                                          </filter>
                                       </defs>
                                    </svg>   
                                    <span className='button--bubble__container'>
                                       <span className='button button--bubble'>
                                          <a href="https://discord.com/invite/tPgYHb2ZEn" target="_blank">Join Discord</a>
                                       </span>
                                       <span className='button--bubble__effect-container'>
                                          <span className='circle top-left mtr' style={{transform: "matrix(0, 0, 0, 0, -20.1087, -40.2193)", opacity: "0"}}>
                                          </span>
                                          <span className='circle top-left mtr' style={{transform: "matrix(0.28284, -0.28284, 0.28284, 0.28284, -45.33, -41.5385)", opacity:"0"}}>
                                          </span>
                                          <span className='circle top-left mtr' style={{transform: "matrix(0, 0, 0, 0, -56.6492, -10.1087)", opacity: "0"}}>
                                          </span>
                                          <span className='button effect-button mtr' style={{transform: "matrix(1, 0, 0, 1, 0, -33)"}}>
                                          </span>
                                          <span className='circle bottom-right mtr' style={{transform: "matrix(0, 0, 0, 0, 39.4456, 58.3367)", opacity: "0"}}>
                                          </span>
                                          <span className='circle bottom-right mtr' style={{transform: "matrix(0.28284, 0.28284, -0.28284, 0.28284, 43.2238, 43.2238)", opacity: "0"}}>
                                          </span>
                                          <span className='circle bottom-right mtr' style={{transform: "matrix(0, 0, 0, 0, 68.4974, 4.1746)", opacity: "0"}}>
                                          </span>
                                       </span>
                                    </span>
                                 </div>
                              </div>
                           </div>
                      </Navbar.Collapse>
                  </Container>
              </Navbar>
          </>
    );
}

export default NavBar;