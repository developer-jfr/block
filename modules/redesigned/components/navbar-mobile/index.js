import Image from 'next/image';
import classes from './index.module.css';

const closeBtn = "/assets/images/svg/hix.svg";
const chatImg = "/assets/images/svg/chat-icon.svg";

const NavBarMobile = ({setNavIsOpen}) => {
  return (
    <div className={classes.navbar}>
        <div>
        <div onClick={() => setNavIsOpen(false)} className={classes.closeBtn}>
         <Image src={closeBtn} height={15} width={15} />
        </div>
        <a className={classes.chatBtn} href="/">
          <Image width="30" height="30" src={chatImg} />
          Let’s Chat
        </a>
        <div className={classes.line}>
         
        </div>
        <div className={classes.navbarLinks}>
            <span>Overview</span>
            <span>Publication</span>
        </div>
        </div>
    </div>
  )
}

export default NavBarMobile