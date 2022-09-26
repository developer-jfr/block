import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import useMediaQuery from "../../hooks/useMediaQuery";

import classes from "./Header.module.css";

const logoImg = "/assets/images/icons/Logo.svg";
const hamburgerImg = "/assets/images/svg/hamburger.svg";
const crossImg = "/assets/images/svg/cross.svg";

const navigationImg = "/assets/images/svg/Navigation.svg";

export default function Header() {
  let isMobileScreen = useMediaQuery("(max-width: 750px)");
  const router = useRouter();
  const [navIsOpen, setNavIsOpen] = useState(false);

  const openNavHandler = () => {
    document.body.style.overflow = "hidden";
    setNavIsOpen(true);
  };

  const closeNavHandler = () => {
    document.body.style.overflow = "auto";
    setNavIsOpen(false);
  };

  const navigationMobile = classes.navigationMobile;
  if (navIsOpen) {
    navigationMobile += ` ${classes.visible}`;
  }

  const Navigation = (
    <nav className={isMobileScreen ? navigationMobile : classes.navigation}>
      {!isMobileScreen && (
        <div className={classes.navigationImg}>
          <Image src={navigationImg} width="577" height="100%" alt="" />
        </div>
      )}
      <ul
        className={
          isMobileScreen ? classes.navigationListMobile : classes.navigationList
        }
        onClick={closeNavHandler}
      >
        <li>
          <Link href="/">
            <a className={router.pathname == "/" ? classes.active : ""}>
              Overview
            </a>
          </Link>
        </li>
        <li>
          <Link href="/tokenizations">
            <a
              className={
                router.pathname == "/tokenizations" ? classes.active : ""
              }
            >
              Tokenizations
            </a>
          </Link>
        </li>
        <li>
          <Link href="https://learn.block6.tech">
            <a className={router.pathname == "/learn" ? classes.active : ""}>
              Learn
            </a>
          </Link>
        </li>
        <li>
          <Link href="/consulting">
            <a
              className={router.pathname == "/consulting" ? classes.active : ""}
            >
              Consulting
            </a>
          </Link>
        </li>
      </ul>
      {isMobileScreen && (
        <div className={classes.closeNavBtn} onClick={closeNavHandler}>
          <Image
            src={crossImg}
            width="24.92"
            height="24.92"
            alt="Close Navigation"
          />
        </div>
      )}
    </nav>
  );

  return (
    <>
      <header className={classes.header}>
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
        {!isMobileScreen && isMobileScreen !== null && Navigation}
        {isMobileScreen && (
          <div className={classes.openNavBtn} onClick={openNavHandler}>
            <Image
              src={hamburgerImg}
              width="32"
              height="32"
              alt="Open Navigation"
            />
          </div>
        )}
      </header>
      {isMobileScreen && navIsOpen && (
        <div className={classes.navOverlayMobile}></div>
      )}
      {isMobileScreen && Navigation}
    </>
  );
}
