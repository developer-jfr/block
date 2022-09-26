import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import Container from "../UI/Container/Container";

import classes from "./Footer.module.css";

const block6Img = "/assets/images/svg/BLOCK6.svg";
const twitterImg = "/assets/images/icons/Twitter.svg";
const facebookImg = "/assets/images/icons/Facebook.svg";
const mediumImg = "/assets/images/icons/Medium.svg";
const youtubeImg = "/assets/images/icons/Youtube.svg";
const instagramImg = "/assets/images/icons/Instagram.svg";

export default function Footer() {
  const router = useRouter();

  return (
    <footer className={classes.footer}>
      <Container>
        <div className={classes.flex}>
          <div className={classes.navContainer}>
            <div className={classes.logoImgContainer}>
              <Link href="/">
                <a>
                  <Image
                    src={block6Img}
                    width="133.64"
                    height="30"
                    alt="Logo"
                  />
                </a>
              </Link>
            </div>
            <nav className={classes.navigation}>
              <ul className={classes.navigationList}>
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
                        router.pathname == "/tokenizations"
                          ? classes.active
                          : ""
                      }
                    >
                      Tokenizations
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="https://learn.block6.tech">
                    <a>Learn</a>
                  </Link>
                </li>
                <li>
                  <Link href="/consulting">
                    <a
                      className={
                        router.pathname == "/consulting" ? classes.active : ""
                      }
                    >
                      Consulting
                    </a>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div>
            <ul className={classes.social}>
              <li>
                <Link href="https://twitter.com/block6_tech">
                  <a>
                    <Image
                      src={twitterImg}
                      width="34.07"
                      height="34.07"
                      alt="Twitter"
                    />
                  </a>
                </Link>
              </li>
              {/* <li>
                <Link href="/">
                  <a>
                    <Image
                      src={facebookImg}
                      width="34.07"
                      height="34.07"
                      alt="Facebook"
                    />
                  </a>
                </Link>
              </li> */}
              <li>
                <Link href="https://learn.block6.tech/">
                  <a>
                    <Image
                      src={mediumImg}
                      width="34.07"
                      height="34.07"
                      alt="Medium"
                    />
                  </a>
                </Link>
              </li>
              {/* <li>
                <Link href="/">
                  <a>
                    <Image
                      src={youtubeImg}
                      width="34.07"
                      height="34.07"
                      alt="Youtubue"
                    />
                  </a>
                </Link>
              </li> */}
              {/* <li>
                <Link href="/">
                  <a>
                    <Image
                      src={instagramImg}
                      width="34.07"
                      height="34.07"
                      alt="Instagram"
                    />
                  </a>
                </Link>
              </li> */}
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  );
}
