
import React from 'react'
import { Col, Container, Row, Button} from "react-bootstrap";
import imge from '../Images/img1.gif';
import AOS from 'aos';
import 'aos/dist/aos.css';


const About = () => {


   React.useEffect(()=>{
      AOS.init();
  })




   return(
      <>
         <div className='about-container' id="about">
            {/* <Container> */}
               <Row className='about-row'
                data-aos="fade-up"
                data-aos-delay="300"	
                 data-aos-offset="130"
                 data-aos-duration="1000"
               //  data-aos-once= "true"	
               //  data-aos-anchor-placement="center-center" 
            >
                  <Col lg={6} sm={12} md={6}>
                     <div className='about-img-div'>
                      <img src={imge} alt="abc" className='about-img'/>
                      </div>
                  </Col>
                  <Col lg={6} sm={12} md={6} className="about-content">
                           <div className='about-content'>
                              <h5 className='about-heading'>THE PROJECT</h5>
                              <h2 className='about-para1'>GOOEY CLUB NFT</h2>
                              <p className='about-paraa'>The Gooey Club is a unique collection of 2,222 Gooey Club NFTs.
                              We are launching on the Solana blockchain, aiming to grow the wealth in our community by bringing a passive income to all holders. We strive for longevity working closely with our community continuing to add value to our club.
                              Join our club community in discord for a chance to earn a Whitelist spot and get some discount!</p>
                           
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
               </Row>
            {/* </Container> */}

         </div>
      </>
   )
}
export default About;