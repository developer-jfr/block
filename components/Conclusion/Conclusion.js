import { useRouter } from "next/router";
import Image from "next/image";

import Container from "../UI/Container/Container";

import useMediaQuery from "../../hooks/useMediaQuery";

import classes from "./Conclusion.module.css";

const block6Img = "/assets/images/svg/BLOCK6.svg";
const optimismImg = "/assets/images/svg/Optimism.svg";
const arbitrumImg = "/assets/images/svg/Arbitrum.svg";
const loopringImg = "/assets/images/svg/Loopring.svg";
const circleImg = "/assets/images/svg/circles2.svg";
const tokenizationsImg = "/assets/images/svg/FURTHER.svg";

export default function Conclusion() {
  const router = useRouter();
  const isMobileScreen = useMediaQuery("(max-width: 750px)");

  if (router.pathname == "/") {
    return (
      <div className={classes.conclusion}>
        <div className={classes.circleImgDecoration}>
          {!isMobileScreen && <Image src={circleImg} width="455" height="455" alt="" />}
          {isMobileScreen && <Image src={circleImg} width="140" height="140" alt="" />}
        </div>
        <Container>
          <div className={classes.imgTitle}>
            <Image src={block6Img} width="1141" height="257" alt="Logo" />
          </div>
          <div className={classes.flex}>
            <div className={classes.contentSide}>
              <h2>
                Discover the Power of <span>L2 solutions</span>
              </h2>
              <p>This section should list 3 main advantages of Ethereum L2 solutions</p>
              <ul>
                <li>Experience near instant transactions</li>
                <li>More than 90% cheaper than Ethereum L1 Transactions</li>
                <li>Wide integration support</li>
              </ul>
            </div>
            <div className={classes.imgSide}>
              <div>
                <Image src={optimismImg} width="170" height="159" alt="Optimism" />
                <p>Optimism</p>
              </div>
              <div>
                <Image src={arbitrumImg} width="170" height="159" alt="Arbitrum" />
                <p>Arbitrum</p>
              </div>
              <div>
                <Image src={loopringImg} width="170" height="159" alt="Loopring" />
                <p>Loopring</p>
              </div>
            </div>
          </div>
        </Container>
      </div>
    );
  }

  if (router.pathname == "/tokenizations") {
    return (
      <div className={classes.conclusion}>
        <div className={classes.circleImgDecoration}>
          {!isMobileScreen && <Image src={circleImg} width="455" height="455" alt="" />}
          {isMobileScreen && <Image src={circleImg} width="140" height="140" alt="" />}
        </div>
        <Container>
          <div className={classes.imgTitle}>
            <Image src={block6Img} width="1141" height="257" alt="Logo" />
          </div>
          <div className={classes.flex}>
            <div className={classes.contentSide}>
              <h2>
                1 - STEP <span>FURTHER</span>
              </h2>
              <p className={classes.paragraph}>
                How Decentraland, is going above and beyond, to sale virtual properties using the NFT standard
              </p>
            </div>
            <div className={classes.imgSide}>
              <Image src={tokenizationsImg} width="670" height="347" alt="" />
            </div>
          </div>
        </Container>
      </div>
    );
  }
}
