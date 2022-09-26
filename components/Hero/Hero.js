import { useRouter } from "next/router";
import Image from "next/image";

import Container from "../UI/Container/Container";
import ScrollButton from "../UI/ScrollButton/ScrollButton";
import useMediaQuery from "../../hooks/useMediaQuery";
import classes from "./Hero.module.css";
import Link from "next/link";

const heroHomeImage = "/assets/images/svg/heroTeam.svg";
const heroTokenizationsImage = "/assets/images/icons/nftmonkey.png";

export default function Hero() {
  const router = useRouter();
  const isMobileScreen = useMediaQuery("(max-width: 650px");

  if (router.pathname == "/") {
    return (
      <div className={classes.hero}>
        <Container>
          <div className={classes.flex}>
            <div className={classes.contentContainer}>
              <p className={classes.prevSubTitle}>Design smarter not harder</p>
              <h1 className={classes.title}>
                CHANGING THE
                {!isMobileScreen && <br />} WORLD {isMobileScreen && <br />}
                WITH
                {!isMobileScreen && <br />} <span>BLOCKCHAIN</span>
              </h1>
              <p className={classes.subtitle}>
                We&apos;re <span>Block6</span>! Your partner when you need&nbsp;
                {isMobileScreen && <br />}
                to break the
                {!isMobileScreen && <br />} barriers and limitations of {isMobileScreen && <br />} Blockchain technology
              </p>
              <div className={classes.actions}>
                <div className={classes.btnWithBorderGradient}>
                  <Link href="/consulting">
                    <button className={classes.btnDark}>Speak to BLOCK6</button>
                  </Link>
                </div>
                <a href="https://learn.block6.tech" target="_blank" rel="noreferrer">
                  <button className={classes.btnLight}>Learn more</button>
                </a>
              </div>
            </div>
            <div className={classes.imageContainer}>
              <Image src={heroHomeImage} width="762" height="641" alt="" />
            </div>
          </div>
        </Container>
        <div className={classes.scrollBtn}>
          <Link href={`${router.pathname}#pastProjects`}>
            <a>
              <ScrollButton>Scroll down</ScrollButton>
            </a>
          </Link>
        </div>
      </div>
    );
  }

  if (router.pathname == "/tokenizations") {
    return (
      <div className={classes.hero}>
        <Container>
          <div className={classes.flex}>
            <div className={classes.contentContainer}>
              <p className={classes.prevSubTitle}>Design smarter not harder</p>
              <h1 className={classes.title}>
                <span>DEPLOYING</span>
                <br /> Decentralized {!isMobileScreen && <br />}
                Apps on {isMobileScreen && <br />} the
                {!isMobileScreen && <br />} <span>Blockchain</span>
              </h1>
              <p className={classes.subtitle}>
                Discover <span>Solidity</span>. The JavaScript inspired {isMobileScreen && <br />} EVM{" "}
                {!isMobileScreen && <br />}
                language, that&apos;s used to write smart {isMobileScreen && <br />} contracts
              </p>
              <div className={classes.actions}>
                <div className={classes.btnWithBorderGradient}>
                  <button className={classes.btnDark}>Schedule a Demo</button>
                </div>
                <button className={classes.btnLight}>Contact Sales</button>
              </div>
            </div>
            <div className={classes.imageContainer}>
              <Image src={heroTokenizationsImage} width="745" height="526" alt="" />
            </div>
          </div>
        </Container>
        <div className={classes.scrollBtn}>
          <Link href={`${router.pathname}#tokenizationProjects`}>
            <a>
              <ScrollButton>Scroll down</ScrollButton>
            </a>
          </Link>
        </div>
      </div>
    );
  }

  if (router.pathname == "/learn") {
    return (
      <div className={`${classes.hero} ${classes.heroLearn} `}>
        <Container>
          <div className={classes.contentContainer}>
            <p className={classes.prevSubTitle}>Design smarter not harder</p>
            <h1 className={classes.title}>
              Step-by-step <span>tutorials</span>
            </h1>
            <p className={classes.subtitle}>
              We&apos;ve compiled a series of tutorials designed to teach the basics of smart contracts and blockchain
              technology and how to use them.
            </p>
          </div>
        </Container>
      </div>
    );
  }

  if (router.pathname == "/consulting") {
    return (
      <div className={`${classes.hero} ${classes.heroLearn} `}>
        <Container>
          <div className={classes.contentContainer}>
            <p className={classes.prevSubTitle}>Design smarter not harder</p>
            <h1 className={classes.title}>
              Blockchain consulting <br /> services
            </h1>
            <p className={classes.subtitle}>
              Blockchain is a decentralized ledger of each transaction that occurs across a network, which enables the
              decentralized exchange of trusted data - a “shared record book.”
            </p>
          </div>
        </Container>
      </div>
    );
  }
}
