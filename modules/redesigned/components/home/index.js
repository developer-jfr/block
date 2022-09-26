import classes from './index.module.css';

import useMediaQuery from "../../../../hooks/useMediaQuery";


import Image from "next/image";
import NavBarMobile from '../navbar-mobile';

const blockchainLine = "/assets/images/svg/blockchain-line.svg";
const mobileBlockchainLine = "/assets/images/svg/mobile-blockchain.svg";
const chatImg = "/assets/images/svg/chat-icon.svg";
const play = "/assets/images/svg/play.svg";
const share = "/assets/images/svg/share.svg";
const email = "/assets/images/svg/email.svg";

const Home = () => {
  const isMobileScreen = useMediaQuery("(max-width: 650px)");
  return (
    <div className={classes.home}>
        <div className={classes.homeSomething}>
        <span>Something</span> 
        <span>Something</span> 
        <span>Something</span> 
        <span>Blockchain</span>
        </div>
        <div className={classes.blockChainLine} >
          {isMobileScreen ?  <Image src={mobileBlockchainLine} layout='fill' /> :  <Image src={blockchainLine} layout='fill' />}
        </div>
        <div className={classes.social}>
          <div className={classes.socialGroup}>
            <div className={classes.socialCard}>
               <div>
                 <Image src={play} width='35' height='35'  />
               </div>
               <span>Building on Blockchain</span>
            </div>
            <div className={classes.socialCard}>
               <div>
               <Image src={share} width='35' height='35'  />
               </div>
               <span>BLOCK6 Publication</span>
            </div>
            <div className={classes.socialCard}>
               <div>
               <Image src={email} width='35' height='35'  />
               </div>
               <span>Submit Press Release</span>
            </div>
            <div className={classes.socialCard}>
               <div>
               <Image src={share} width='35' height='35'  />
               </div>
               <span>Join the community</span>
            </div>
          </div>
          <a className={classes.chatBtn} href="/">
          <div className={classes.chatBtnIcon}>
          <Image  layout='fill' src={chatImg} />
          </div>
          Let’s Chat
        </a>
        </div>
    </div>
  )
}

export default Home