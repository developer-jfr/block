import Image from "next/image";
import React from "react";

import Container from "../UI/Container/Container";

import useMediaQuery from "../../hooks/useMediaQuery";
import classes from "./PastProjects.module.css";

import { Projects } from "../../data/projects";

const radialImg = "/assets/images/svg/radial.svg";
const circleImg = "/assets/images/svg/circles.svg";
const centerLineImg = "/assets/images/svg/centerLine.svg";
const ellipseImg = "/assets/images/icons/Ellipse.png";

export default function PastProjects() {
  const isMobileScreen = useMediaQuery("(max-width: 650px)");

  return (
    <div className={classes.pastProjects} id="pastProjects">
      <div className={classes.radialImgDecoration}>
        {!isMobileScreen && <Image src={radialImg} width="257" height="257" alt="" />}
        {isMobileScreen && <Image src={radialImg} width="72" height="72" alt="" />}
      </div>
      <div className={classes.circleImgDecoration}>
        {!isMobileScreen && <Image src={circleImg} width="455" height="455" alt="" />}
        {isMobileScreen && <Image src={circleImg} width="140" height="140" alt="" />}
      </div>
      <div className={classes.centerLineImgDecoration}>
        <Image src={centerLineImg} width="241" height="1129" alt="" />
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
          Past <span>Projects</span>
        </h2>
        <div className={classes.projectsInnerContainer}>
          <div>
            {Projects.length &&
              Projects.map((project, index) => (
                <div key={index} className={classes.projectRow}>
                  <div className={classes.featuredPartGradientBorder}>
                    <div className={classes.featuredPart}>
                      <div className={classes.imageContainer}>
                        <Image src={project.featured.img} width="198px" height="170px" alt="" />
                      </div>
                      <div className={classes.featuredPartText}>
                        <h3>{project.featured.title}</h3>
                        {project.featured.text}
                      </div>
                    </div>
                  </div>
                  <div className={classes.actionPart}>
                    <h3>{project.action.title}</h3>
                    {project.action.text}
                    <div className={classes.actions}>
                      <a href={project.action.link} target="_blank" rel="noreferrer">
                        <button className={classes.accentBtn}>Know more</button>
                      </a>
                      {/* <button className={classes.darkBtn}>Contact Sales</button> */}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
