import { IconButton, ListItem } from '@mui/material';
import React from 'react';
import { Col, Container, Row} from "react-bootstrap";
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';


const Footer = () => {
   return(
      <>
         <div className='footer-container'>
            <Container fluid className='mt-0 py-3'>
               <Row>
                  <Col className="container-col" lg={6} sm={12} md={12}>
                     <Row>
                        <Col lg={2} sm={12} md={12}></Col>
                        <Col lg={10} sm={12} md={12}>
                           <div>
                              <h5 className='footer-heading'>GOOEY CLUB NFT</h5>
                              <p className='footer-para'>The Gooey Club is a unique collection of 2,222 Gooey Club NFTs.
                              We are launching on the Solana blockchain, aiming to grow the wealth in our community by bringing a passive income to all holders. We strive for longevity working closely with our community continuing to add value to our club.
                              Join our club community in discord for a chance to earn a Whitelist spot and get some discount!</p>
                           </div>
                        </Col>
                     </Row>
                  </Col>
                  <Col lg={6} sm={12} md={12}>
                     <Row>
                        <Col lg={4} sm={12} md={12}></Col>
                        <Col lg={4} sm={12} md={12} className="d-flex align-items-center justify-content-center">
                           <div className=''>
                              <h5 className='footer-heading ps-4'>NAVIGATION</h5>
                              <ul className="footer-list"
                              style={{listStyle:"none", textDecoration:"none"}}>
                               <li>
                                    {" "}
                                    <a
                                       href="#about"
                                       className="footer-li"
                                       style={{}}
                                    >
                                       About
                                    </a>
                                 </li>
                                 {/* <li>
                                    {" "}
                                    <Link
                                       to="/"
                                       className="footer-li"
                                       style={{}}
                                    >
                                       My Collection
                                    </Link>
                                 </li> */}
                                 <li>
                                    {" "}
                                    <a
                                       href="#roadmap"
                                       className="footer-li"
                                       style={{}}
                                    >
                                       Roadmap
                                    </a>
                                 </li>
                                 <li>
                                    {" "}
                                    <a
                                       href="#team"
                                       className="footer-li"
                                       style={{}}
                                    >
                                       Team
                                    </a>
                                 </li>
                                 {/* <li>
                                    {" "}
                                    <Link
                                       to="/"
                                       className="footer-li"
                                       style={{}}
                                    >
                                       Terms
                                    </Link>
                                 </li> */}
                              </ul>
                           </div>
                        </Col>
                        <Col lg={4} sm={12} md={12}></Col>
                     </Row>
                  </Col>
               </Row> 
               <Row>
                  <Col lg={12} sm={12} md={12}>
                     <Row>
                        <div className='d-flex justify-content-center footer-icons'>
                           <div className='icon me-3'>
                              <a
                              href="https://twitter.com/TheGooeyClub" target="_blank">
                                 <Icon icon="akar-icons:twitter-fill" />
                              </a>
                           </div>
                           <div className='icon me-3'>
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
                     </Row>
                  </Col>
               </Row>
               <Row>
                  <Col lg={12} sm={12}>
                     <Row>
                        <Col lg={4} sm={12}></Col>
                        <Col lg={4} sm={12} className="d-flex align-items-center justify-content-center text-center">
                           <div className='footer-last-part'
                           style={{paddingTop:"20px"}}>
                              <div>
                              <p className="text-center para1" style={{}}>
                              Gooey Club NFT &copy; 2021 {" "}</p>
                              </div>
                              
                              {/* <div>
                                 <Link
                                 to=""
                                 className="footer-links">
                                    UPC Contract
                                 </Link>
                              </div>
                              <div>
                                 <Link
                                 to=""
                                 className="footer-links">
                                    Staking Contract
                                 </Link>
                              </div>
                              <div>
                                 <Link
                                 to=""
                                 className="footer-links">
                                    Elixirs Contract
                                 </Link>
                              </div>
                              <div>
                                 <Link
                                 to=""
                                 className="footer-links">
                                    Mutants Contract
                                 </Link>
                              </div> */}
                           </div>
                        </Col>
                        {/* <Col lg={4} sm={12}></Col> */}
                     </Row>
                  </Col>
               </Row>
            </Container>
         </div>
      </>
   )
}
export default Footer;