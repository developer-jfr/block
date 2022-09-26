import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import useMediaQuery from "../../../../hooks/useMediaQuery";

import classes from "./index.module.css";
import NavBarMobile from "../navbar-mobile";

const logoImg = "/assets/images/icons/Logo.svg";
const twitterImg = "/assets/images/icons/Twitter.svg";
const facebookImg = "/assets/images/icons/Facebook.svg";
const mediumImg = "/assets/images/icons/Medium.svg";
const youtubeImg = "/assets/images/icons/Youtube.svg";
const instagramImg = "/assets/images/icons/Instagram.svg";
const hamburger = "/assets/images/svg/new-hamburger.svg";

export default function Footer() {
  let isMobileScreen = useMediaQuery("(max-width: 750px)");
  const router = useRouter();
  const [navIsOpen, setNavIsOpen] = useState(false);

  return (
    <>
       {navIsOpen && <NavBarMobile setNavIsOpen={setNavIsOpen} />}
      <footer className={classes.footer}>
        <Link href="/">
          <a className={classes.logoLink}>
            <Image
              src={logoImg}
              width="133.64"
              height="30"
              alt="Application's Logo"
            />
          </a>
        </Link>
        <div className={classes.footerLinks}>
          <span>Overview</span>
          <span>Publication</span>
        </div>
        <div className={classes.footerSocialMedia}>
             <Image src={twitterImg} width={35} height={35} />
             <Image src={facebookImg} width={35} height={35} />
             <Image src={mediumImg} width={35} height={35} />
             <Image src={youtubeImg} width={35} height={35} />
             <Image src={instagramImg} width={35} height={35} />
        </div>
        <div
          onClick={() => setNavIsOpen(true)}
          className={classes.mobileHamburger}
        >
          <Image
            src={hamburger}
            onClick={() => setNavIsOpen(true)}
            height={30}
            width={30}
          />
        </div>
      </footer>
    </>
  );
}
