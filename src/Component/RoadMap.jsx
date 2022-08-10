import { Container, Grid } from '@mui/material';
import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const RoadMap =  () => {




   React.useEffect(()=>{
      AOS.init();
   })





   return  (
         <>
         <div className="roadmap-container" id='roadmap'>
            <Container className='road-container'>
            <Grid className='road-grid' sm={12} lg={12} sx={12} md={12} xl={12}>
               <h2 className='road-heading1 text-center'
               data-aos="fade-zoom-in"
               // data-aos-easing="ease-in-back"
               data-aos-delay="200"
               data-aos-offset="0"
               style={{marginBottom:"20px"}}>ROADMAP</h2>
            </Grid>

            <Grid className='' sm={12} lg={12} sx={12} md={12} xl={12}
            style={{borderBottom: "1px solid #9d9797"}}>
               <p className='road-para text-center'
               style={{marginTop: "0px",
                  marginBottom: "1rem"}}
                  >Our goal is to make sure that the Undead Pastel Club community remains strong and united for a long time. To do so, we will implement several strategies after the launch using the community fund.</p>
            </Grid>

            <Grid sm={12} lg={12} sx={12} md={12} xl={12} className="d-flex justify-content-between py-3 roadmap-grid"
            style={{borderBottom: "1px solid #9d9797"}}>
               <h3 className='road-heading2'
               style={{fontWeight:"bold"}}
               data-aos="zoom-in-right">Phase 1</h3>
               <p className='road-para'data-aos="zoom-in-left">Design and create the 2,222 Gooey Club NFTs.</p>
            </Grid>
            <Grid sm={12} lg={12} sx={12} md={12} xl={12} className="d-flex justify-content-end py-3 roadmap-grid1"
            style={{borderBottom: "1px solid #9d9797"}}>
               <p className='road-para' data-aos="zoom-in-left">Launch discord, website & social media accounts.</p>
            </Grid>

            <Grid sm={12} lg={12} sx={12} md={12} xl={12}  className=" d-flex justify-content-end py-3 roadmap-grid1"
            style={{borderBottom: "1px solid #9d9797"}}>
               <p className='road-para'data-aos="zoom-in-left">Launch giveaways & advertising.</p>
            </Grid>
            <Grid sm={12} lg={12} sx={12} md={12} xl={12} className="d-flex justify-content-between py-3 roadmap-grid"
            style={{borderBottom: "1px solid #9d9797"}}>
               <h3 className='road-heading2'
               style={{fontWeight:"bold"}}
               data-aos="zoom-in-right">Phase 2</h3>
               <p className='road-para'data-aos="zoom-in-left"> Launch Mint (1 sol per Gooey Club NFT).</p>
            </Grid>
            <Grid sm={12} lg={12} sx={12} md={12} xl={12} className=" d-flex justify-content-end py-3 roadmap-grid1"
            style={{borderBottom: "1px solid #9d9797"}}>
               <p className='road-para'data-aos="zoom-in-left"> List on secondary market place.</p>
            </Grid>
            <Grid sm={12} lg={12} sx={12} md={12} xl={12} className=" d-flex justify-content-end py-3 roadmap-grid1"
            style={{borderBottom: "1px solid #9d9797"}}>
               <p className='road-para'data-aos="zoom-in-left"> Rarity Ranks are released.</p>
            </Grid>
            <Grid sm={12} lg={12} sx={12} md={12} xl={12} className="d-flex justify-content-between py-3 roadmap-grid"
            style={{borderBottom: "1px solid #9d9797"}}>
               <h3 className='road-heading2'
               style={{fontWeight:"bold"}}
               data-aos="zoom-in-right">Phase 3</h3>
               <p className='road-para'data-aos="zoom-in-left">50% of all trading royalties will be distributed to Gooey Club NFT holders once a month.</p>
            </Grid>
            <Grid sm={12} lg={12} sx={12} md={12} xl={12} className=" d-flex justify-content-end py-3 roadmap-grid1"
            style={{borderBottom: "1px solid #9d9797"}}>
               <p className='road-para'data-aos="zoom-in-left">Acquire a place in a Metaverse decided by the community.</p>
            </Grid>
            <Grid sm={12} lg={12} sx={12} md={12} xl={12} className="d-flex justify-content-between py-3 roadmap-grid"
            style={{borderBottom: "1px solid #9d9797"}}>
               <h3 className='road-heading2'
               style={{fontWeight:"bold"}}
               data-aos="zoom-in-right">Phase 4</h3>
               <p className='road-para'data-aos="zoom-in-left">Staking is live. Stake Gooeys to earn $Goo for future releases.</p>
            </Grid>
            <Grid sm={12} lg={12} sx={12} md={12} xl={12} className=" d-flex justify-content-end py-3 roadmap-grid1"
            style={{borderBottom: "1px solid #9d9797"}}>
               <p className='road-para'data-aos="zoom-in-left">Collaborate with the community, providing exclusive opportunities for fellow Gooeys.</p>
            </Grid>
            <Grid sm={12} lg={12} sx={12} md={12} xl={12} className="d-flex justify-content-between py-3 roadmap-grid"
            style={{borderBottom: "1px solid #9d9797"}}>
               <h3 className='road-heading2'
               style={{fontWeight:"bold"}}
               data-aos="zoom-in-right">Phase 5</h3>
               <p className='road-para'data-aos="zoom-in-left">Reveal the Gen 2 Roadmap.</p>
            </Grid>
            </Container>
         </div>
         </>
   );
}

export default RoadMap;