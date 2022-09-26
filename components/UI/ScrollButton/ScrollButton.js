import Image from "next/image";

import classes from "./ScrollButton.module.css";

const scrollImage = "/assets/images/svg/scroll.svg";
const arrowImage = "/assets/images/svg/downarrow.svg";

export default function ScrollButton({ children }) {
  return (
    <div className={classes.container}>
      <Image src={scrollImage} width="28.55" height="42.83" alt="" />
      <p className={classes.text}>{children}</p>
      <Image src={arrowImage} width="14" height="28" alt="" />
    </div>
  );
}
