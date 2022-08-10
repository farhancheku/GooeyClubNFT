import { Grid } from "@mui/material";
import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import bg1 from "../Images/bg1.png";
import About from "./About";
// import NavBar from './NavBar';
import img1 from "../Images/body/bd1.png";
import img2 from "../Images/body/bd2.png";
import img3 from "../Images/body/bd3.png";
import img4 from "../Images/body/bd4.png";

import d1 from "../Images/dress/d1.png";
import d2 from "../Images/dress/d2.png";
import d3 from "../Images/dress/d3.png";
import d4 from "../Images/dress/d4.png";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import BodySwiper from "../Pages/BodySwiper";

const Index = () => {
  return (
    <>
      <div
        id="index"
        className="bg-img fade-bottom"
        style={{
          backgroundImage: `url(${bg1})`,
          height: "100vh",
          position: "relative",
          overflow: "hidden",
          width: "100%",
        }}
      >
        <BodySwiper className="bd-swiper" />
        {/* 
          <div className="btn-grid">
         <Button variant="" className="btn-nav btn index-btnn psychic">GOOEY CLUB NFT</Button>
         </div> */}

        <div className="hero-text-container">
          <svg viewBox="0 0 500 500">
            <path
              className="hero-path"
              id="curve"
              d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97"
            />
            <text width="500">
              <textPath xlinkHref="#curve" className="hero-text pshychic">GOOEY CLUB</textPath>
            </text>
          </svg>
        </div>

        <div className="index-btnn">
          <div className="nav-btn">
            <div className="psychic button-container">
              <svg className="goo">
                <defs>
                  <filter id="goo">
                    <feGaussianBlur
                      in="SourceGraphic"
                      stdDeviation="10"
                      result="blur"
                    ></feGaussianBlur>
                    <feColorMatrix
                      in="blur"
                      mode="matrix"
                      values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                      result="goo"
                    ></feColorMatrix>
                    <feComposite in="SourceGraphic" in2="goo"></feComposite>
                  </filter>
                </defs>
              </svg>
              <span className="button--bubble__container">
                <span className="button button--bubble">
                  <a
                    href="https://discord.com/invite/tPgYHb2ZEn"
                    target="_blank"
                  >
                    JOIN DISCORD
                  </a>
                </span>
                <span className="button--bubble__effect-container">
                  <span
                    className="circle top-left mtr"
                    style={{
                      transform: "matrix(0, 0, 0, 0, -20.1087, -40.2193)",
                      opacity: "0",
                    }}
                  ></span>
                  <span
                    className="circle top-left mtr"
                    style={{
                      transform:
                        "matrix(0.28284, -0.28284, 0.28284, 0.28284, -45.33, -41.5385)",
                      opacity: "0",
                    }}
                  ></span>
                  <span
                    className="circle top-left mtr"
                    style={{
                      transform: "matrix(0, 0, 0, 0, -56.6492, -10.1087)",
                      opacity: "0",
                    }}
                  ></span>
                  <span
                    className="button effect-button mtr"
                    style={{ transform: "matrix(1, 0, 0, 1, 0, -33)" }}
                  ></span>
                  <span
                    className="circle bottom-right mtr"
                    style={{
                      transform: "matrix(0, 0, 0, 0, 39.4456, 58.3367)",
                      opacity: "0",
                    }}
                  ></span>
                  <span
                    className="circle bottom-right mtr"
                    style={{
                      transform:
                        "matrix(0.28284, 0.28284, -0.28284, 0.28284, 43.2238, 43.2238)",
                      opacity: "0",
                    }}
                  ></span>
                  <span
                    className="circle bottom-right mtr"
                    style={{
                      transform: "matrix(0, 0, 0, 0, 68.4974, 4.1746)",
                      opacity: "0",
                    }}
                  ></span>
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Index;
