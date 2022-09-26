import Image from "next/image";
import React, { useEffect, useState } from "react";

import useMediaQuery from "../../hooks/useMediaQuery";
import TeamCarousel from "../TeamCarousel/TeamCarousel";
import Container from "../UI/Container/Container";
import classes from "./GetInTouch.module.css";
import Link from "next/link";

const emailImg = "/assets/images/svg/mailIcon.svg";
const hoverEmailImg = "/assets/images/svg/blueEmail.svg";
const linkedInImg = "/assets/images/svg/linkedInIcon.svg";
const hoverLinkedInImg = "/assets/images/svg/blueLinkedIn.svg";
const telephoneImg = "/assets/images/svg/telephoneIcon.svg";
const hoverTelephoneImg = "/assets/images/svg/blueTelephone.svg";
const locationImg = "/assets/images/svg/locationIcon.svg";
const hoverLocationImg = "/assets/images/svg/blueLocation.svg";
const radialImg = "/assets/images/svg/radial.svg";
const circleImg = "/assets/images/svg/circles.svg";
const ellipseImg = "/assets/images/icons/Ellipse.png";

export default function GetInTouch() {
  const isMobileScreen = useMediaQuery("(max-width: 650px)");
  const [linkedInIcon, setLinkedInIcon] = useState(linkedInImg);
  const [emailIcon, setEmailIcon] = useState(emailImg);
  const [telephoneIcon, setTelephoneIcon] = useState(telephoneImg);
  const [locationIcon, setLocationIcon] = useState(locationImg);

  return (
    <div className={classes.consulting}>
      <div className={classes.radialImgDecoration}>
        {!isMobileScreen && <Image src={radialImg} width="257" height="257" alt="" />}
        {isMobileScreen && <Image src={radialImg} width="72" height="72" alt="" />}
      </div>
      <div className={classes.circleImgDecoration}>
        {!isMobileScreen && <Image src={circleImg} width="455" height="455" alt="" />}
        {isMobileScreen && <Image src={circleImg} width="140" height="140" alt="" />}
      </div>
      <div className={classes.ellipseImgDecoration1}>
        <Image src={ellipseImg} width="554" height="554" alt="" />
      </div>
      <div className={classes.ellipseImgDecoration2}>
        <Image src={ellipseImg} width="554" height="554" alt="" />
      </div>
      <div className={classes.ellipseImgDecoration3}>
        <Image src={ellipseImg} width="554" height="554" alt="" />
      </div>
      <Container>
        <h2 className={classes.title}>
          Book <span>Meeting</span>
        </h2>
        <div className={classes.row}>
          <div className={classes.form} id="form"></div>
          <div className={classes.gradientBorderGetInTouch}>
            <div className={classes.getInTouch}>
              <div>
                <h3>Get In Touch</h3>
                <p className={classes.subtitle}>
                We make all your dreams come true in a successful project.{" "}
                </p>
                <div
                  className={classes.info}
                  onMouseEnter={() => {
                    setEmailIcon(hoverEmailImg);
                  }}
                  onMouseLeave={() => {
                    setEmailIcon(emailImg);
                  }}
                >
                  <div className={classes.imgContainer}>
                    <div className={classes.imgDecoration}></div>
                    <Image src={emailIcon} width="32" height="32" alt="email" />
                  </div>
                  <div className={classes.infoText}>
                    <h4>Mail Us:</h4>
                    <p>info@block6.tech</p>
                  </div>
                </div>
                <div
                  className={`${classes.info} ${classes.linkedIn}`}
                  onMouseEnter={() => {
                    setLinkedInIcon(hoverLinkedInImg);
                  }}
                  onMouseLeave={() => {
                    setLinkedInIcon(linkedInImg);
                  }}
                >
                  <div className={classes.imgContainer}>
                    <div className={classes.imgDecoration}></div>
                    <Image src={linkedInIcon} width="32" height="32" alt="linkedin" />
                  </div>
                  <Link href="https://www.linkedin.com/in/wisdom-oparaocha/" target="_blank" rel="noreferrer">
                    <div className={classes.infoText}>
                      <h4>Linkedin:</h4>
                      <p>linkedin.com/Wisdom-Oparaocha</p>
                    </div>
                  </Link>
                </div>
                {/* <div
                  className={classes.info}
                  onMouseEnter={() => {
                    setTelephoneIcon(hoverTelephoneImg);
                  }}
                  onMouseLeave={() => {
                    setTelephoneIcon(telephoneImg);
                  }}
                >
                  <div className={classes.imgContainer}>
                    <div className={classes.imgDecoration}></div>
                    <Image src={telephoneIcon} width="32" height="32" alt="telephone" />
                  </div>
                  <div className={classes.infoText}>
                    <h4>Phone:</h4>
                    <p>+44 20 7097 1663</p>
                  </div>
                </div> */}
                <div
                  className={classes.info}
                  onMouseEnter={() => {
                    setLocationIcon(hoverLocationImg);
                  }}
                  onMouseLeave={() => {
                    setLocationIcon(locationImg);
                  }}
                >
                  <div className={classes.imgContainer}>
                    <div className={classes.imgDecoration}></div>
                    <Image src={locationIcon} width="32" height="32" alt="location" />
                  </div>
                  <div className={classes.infoText}>
                    <h4>Address:</h4>
                    <p>
                      28 Bruton Street London <br />
                      W1J6QW
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.team}>
          <h2 className={classes.title}>
            You&apos;re in <span>good hands</span>
          </h2>
          <TeamCarousel />
        </div>
      </Container>
    </div>
  );
}
