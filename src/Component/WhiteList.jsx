import React from 'react';
import { Col, Container, Row, Button} from "react-bootstrap";
import imge from '../Images/img3.png';
import AOS from 'aos';
import 'aos/dist/aos.css';





const WhiteList = () => {


   React.useEffect(()=>{
      AOS.init();
   })








   return (
         <>
            <div className='white-container psychic'>
               <Container>
                  <Row className='whitelist-row'
                     data-aos="fade-up"
                     data-aos-delay="300"	
                     data-aos-offset="130"
                     data-aos-duration="1000"

                   >
                     <Col lg={6} sm={12} md={6}>
                              <div className='white-content'>
                                 <h5 className='white-heading'>DISCOUNTS</h5>
                                 <p className='white-para'>WHITELIST</p>
                                 <p className='white-paraa'>
                                 By joining the Whitelist, you will get access to the Undead Pastel Club Pre-Sale, which will be held prior to the Public Sale. This exclusive Pre-Sale will allow lucky Whitelisted members the chance to mint an Undead Pastel NFT at a cheaper price.
                                 </p>
                                 <p className='white-paraa'>
                                 You can join the Whitelist by engaging actively in our Discord chat or by inviting new members to the Discord server!
                                 </p>
                            
                                 <div className="nav-button">
                                       <div className='nav-btn'>
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
                                                      <span className='circle top-left' style={{transform: "matrix(0, 0, 0, 0, -20.1087, -40.2193)", opacity: "0"}}>
                                                      </span>
                                                      <span className='circle top-left' style={{transform: "matrix(0.28284, -0.28284, 0.28284, 0.28284, -45.33, -41.5385)", opacity:"0"}}>
                                                      </span>
                                                      <span className='circle top-left' style={{transform: "matrix(0, 0, 0, 0, -56.6492, -10.1087)", opacity: "0"}}>
                                                      </span>
                                                      <span className='button effect-button' style={{transform: "matrix(1, 0, 0, 1, 0, -33)"}}>
                                                      </span>
                                                      <span className='circle bottom-right' style={{transform: "matrix(0, 0, 0, 0, 39.4456, 58.3367)", opacity: "0"}}>
                                                      </span>
                                                      <span className='circle bottom-right' style={{transform: "matrix(0.28284, 0.28284, -0.28284, 0.28284, 43.2238, 43.2238)", opacity: "0"}}>
                                                      </span>
                                                      <span className='circle bottom-right' style={{transform: "matrix(0, 0, 0, 0, 68.4974, 4.1746)", opacity: "0"}}>
                                                      </span>
                                                   </span>
                                                </span>
                                             </div>
                                          </div>
                                    </div>
                              </div>
                         </Col>
                           <Col lg={6} sm={12} md={6}>
                              <div>
                              <img src={imge} alt="abc" className='img-white fade-bottom psychic'/>
                             </div>
                           </Col>
                  </Row>
               </Container>
            </div>
         </>
   );
}

export default WhiteList;
