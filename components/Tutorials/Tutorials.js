import Image from "next/image";
import Container from "../UI/Container/Container";
import classes from "./Tutorials.module.css";

const personImg = "/assets/images/icons/Person.png";
const stocksImg = "/assets/images/icons/Stocks.svg";
const computerImg = "/assets/images/icons/computer.svg";
const playBtnImg = "/assets/images/icons/play.png";

export default function Tutorials() {
  return (
    <div className={classes.tutorials}>
      <Container>
        <h2 className={classes.title}>
          #CRYP<span>TOCURRENCY</span>
        </h2>
        <div className={classes.row}>
          <div className={classes.itemWithBorder}>
            <div className={classes.item}>
              <div className={classes.imgContainer}>
                <div className={classes.playBtn}>
                  <Image src={playBtnImg} width="60" height="60" alt="" />
                </div>
                <Image src={personImg} width="330" height="350" alt="" />
              </div>
              <div className={classes.contentContainer}>
                <h3>What is a HTML Snippet?</h3>
                <p className={classes.creator}>Creator</p>
                <p>Pawel Czerwinski</p>
              </div>
            </div>
          </div>
          <div className={classes.itemWithBorder}>
            <div className={classes.item}>
              <div className={classes.imgContainer}>
                <div className={classes.playBtn}>
                  <Image src={playBtnImg} width="60" height="60" alt="" />
                </div>
                <Image src={stocksImg} width="330" height="350" alt="" />
              </div>
              <div className={classes.contentContainer}>
                <h3>What is a HTML Snippet?</h3>
                <p className={classes.creator}>Creator</p>
                <p>Pawel Czerwinski</p>
              </div>
            </div>
          </div>
          <div className={classes.itemWithBorder}>
            <div className={classes.item}>
              <div className={classes.imgContainer}>
                <div className={classes.playBtn}>
                  <Image src={playBtnImg} width="60" height="60" alt="" />
                </div>
                <Image src={computerImg} width="330" height="350" alt="" />
              </div>
              <div className={classes.contentContainer}>
                <h3>What is a HTML Snippet?</h3>
                <p className={classes.creator}>Creator</p>
                <p>Pawel Czerwinski</p>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.row}>
          <div className={classes.itemWithBorder}>
            <div className={classes.item}>
              <div className={classes.imgContainer}>
                <div className={classes.playBtn}>
                  <Image src={playBtnImg} width="60" height="60" alt="" />
                </div>
                <Image src={personImg} width="330" height="350" alt="" />
              </div>
              <div className={classes.contentContainer}>
                <h3>What is a HTML Snippet?</h3>
                <p className={classes.creator}>Creator</p>
                <p>Pawel Czerwinski</p>
              </div>
            </div>
          </div>
          <div className={classes.itemWithBorder}>
            <div className={classes.item}>
              <div className={classes.imgContainer}>
                <div className={classes.playBtn}>
                  <Image src={playBtnImg} width="60" height="60" alt="" />
                </div>
                <Image src={stocksImg} width="330" height="350" alt="" />
              </div>
              <div className={classes.contentContainer}>
                <h3>What is a HTML Snippet?</h3>
                <p className={classes.creator}>Creator</p>
                <p>Pawel Czerwinski</p>
              </div>
            </div>
          </div>
          <div className={classes.itemWithBorder}>
            <div className={classes.item}>
              <div className={classes.imgContainer}>
                <div className={classes.playBtn}>
                  <Image src={playBtnImg} width="60" height="60" alt="" />
                </div>
                <Image src={computerImg} width="330" height="350" alt="" />
              </div>
              <div className={classes.contentContainer}>
                <h3>What is a HTML Snippet?</h3>
                <p className={classes.creator}>Creator</p>
                <p>Pawel Czerwinski</p>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.row}>
          <div className={classes.itemWithBorder}>
            <div className={classes.item}>
              <div className={classes.imgContainer}>
                <div className={classes.playBtn}>
                  <Image src={playBtnImg} width="60" height="60" alt="" />
                </div>
                <Image src={personImg} width="330" height="350" alt="" />
              </div>
              <div className={classes.contentContainer}>
                <h3>What is a HTML Snippet?</h3>
                <p className={classes.creator}>Creator</p>
                <p>Pawel Czerwinski</p>
              </div>
            </div>
          </div>
          <div className={classes.itemWithBorder}>
            <div className={classes.item}>
              <div className={classes.imgContainer}>
                <div className={classes.playBtn}>
                  <Image src={playBtnImg} width="60" height="60" alt="" />
                </div>
                <Image src={stocksImg} width="330" height="350" alt="" />
              </div>
              <div className={classes.contentContainer}>
                <h3>What is a HTML Snippet?</h3>
                <p className={classes.creator}>Creator</p>
                <p>Pawel Czerwinski</p>
              </div>
            </div>
          </div>
          <div className={classes.itemWithBorder}>
            <div className={classes.item}>
              <div className={classes.imgContainer}>
                <div className={classes.playBtn}>
                  <Image src={playBtnImg} width="60" height="60" alt="" />
                </div>
                <Image src={computerImg} width="330" height="350" alt="" />
              </div>
              <div className={classes.contentContainer}>
                <h3>What is a HTML Snippet?</h3>
                <p className={classes.creator}>Creator</p>
                <p>Pawel Czerwinski</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
