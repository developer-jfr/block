import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import useMediaQuery from "../../../../hooks/useMediaQuery";

import classes from "./index.module.css";
import NavBarMobile from "../navbar-mobile";

const logoImg = "/assets/images/icons/Logo.svg";
const chatImg = "/assets/images/svg/chat-icon.svg";
const hamburger = "/assets/images/svg/new-hamburger.svg";

export default function Header() {
  const [navIsOpen, setNavIsOpen] = useState(false);

  return (
    <>
      {navIsOpen && <NavBarMobile setNavIsOpen={setNavIsOpen} />}
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
        <div className={classes.headerLinks}>
          <span className={classes.active}>Overview</span>
          <span>Publication</span>
        </div>
        <a className={classes.chatBtn} href="/">
          <Image width="30" height="30" src={chatImg} />
          Let’s Chat
        </a>
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
      </header>
    </>
  );
}
