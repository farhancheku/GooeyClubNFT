import React from "react";
import { Col, Container, Row, Card, Button } from "react-bootstrap";
import imgt1 from "../Images/t1.png";
import imgt2 from "../Images/t2.png";
import imgt3 from "../Images/t3.png";
import imgt4 from "../Images/t4.png";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Team = () => {
 
 
   React.useEffect(()=>{
      AOS.init();
   })

 
 
   return (
    <>
    <div className="team-container psychic" id="team">
      <Container className="" data-aos="fade-up" data-aos-delay="400">
        <h2 className="text-center team-heading1 mb-5">Team</h2>
        <Row className="justify-content-center main-grid">
          <Col lg={3} md={6} sm={12} className="team-grid">
            <img src={imgt1} alt={"img1"} className="team-img"
            style={{verticalAlign:"middle"}} />
            <div className="team-div text-center">
              <h3 className="team-heading">GooeyClub | Kingpin#6557</h3>
              <p>Founder</p>
            </div>
          </Col>
          <Col lg={3} md={6} sm={12} className="team-grid">
            <img src={imgt2} alt={"img2"} className="team-img" style={{verticalAlign:"middle"}}/>
            <div className="team-div text-center">
              <h3 className="team-heading">GooeyClub | MonsterMan#1541</h3>
              <p>Founder</p>
            </div>
          </Col>
          <Col lg={3} md={6} sm={12} className="team-grid">
            <img src={imgt3} alt={"img3"} className="team-img" style={{verticalAlign:"middle"}} />
            <div className="team-div text-center">
              <h3 className="team-heading">VendettaDao.eth.sol#5968</h3>
              <p>Project Manager</p>
            </div>
          </Col>
          <Col lg={3} md={6} sm={12} className="team-grid">
            <img src={imgt4} alt={"img4"} className="team-img" style={{verticalAlign:"middle"}} />
            <div className="team-div">
              <h3 className="team-heading">AlphaNFT - Dev#8266</h3>
              <p>Dev Head</p>
            </div>
          </Col>
        </Row>
      </Container>

   
   
   
   
   
   
   {/* <Container>
       <h2 className="text-center team-heading1">Team</h2>
      <Col Container>
        <Col item lg={3} sm={12} md={6} className="team-Col">
          <img src={img2} alt={"img2"} className="team-img" />
            <div className="team-div text-center">
              <h3 className="team-heading">@Undead Pastel</h3>
              <p>Senior Programmer</p>
            </div>
        </Col>
        <Grid item lg={3} sm={12} md={6} className="team-grid">
        <img src={img1} alt={"img1"} className="team-img" />
            <div className="team-div text-center">
              <h3 className="team-heading">@Belle Pastel</h3>
              <p>Marketing Genius</p>
            </div>
        </Grid>
        <Grid item lg={3} sm={12} md={6} className="team-grid">
        <img src={img1} alt={"img1"} className="team-img" />
            <div className="team-div text-center">
              <h3 className="team-heading">@Captain Pastel</h3>
              <p>Chief of Communications</p>
            </div>
        </Grid>
        <Grid item lg={3} sm={12} md={6} className="team-grid">
          <img src={img1} alt={"img1"} className="team-img" />
            <div className="team-div text-center">
              <h3 className="team-heading">@Edgar Pastel</h3>
              <p>Art Director</p>
            </div>
        </Grid>
      </Col>
      </Container> */}
      
      
      
      
      </div>
    </>
  );
};

export default Team;
