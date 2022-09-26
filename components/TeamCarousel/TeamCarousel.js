import React, { useState } from "react";
import Image from "next/image";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

import classes from "./TeamCarousel.module.css";
import Link from "next/link";
import useMediaQuery from "../../hooks/useMediaQuery";

const Team = [
  {
    name: "Tita Vicente",
    role: "Out reach Manager",
    description: "Out reach and Communication Manager. Tita manages all back office related issues.",
    link: "BLOCK6.TECH",
    img: "/assets/images/team/Person1.jpg",
    linkedIn: "https://www.linkedin.com/in/titavicente/",
    featured: true,
  },
  {
    name: "Wisdom O.",
    role: "Founder",
    description:
      "Web3 and Ethereum Virtual Machine, low-level engineer and founder of VABVA",
    link: "BLOCK6.TECH",
    img: "/assets/images/team/Person2.png",
    linkedIn: "https://www.linkedin.com/in/wisdom-oparaocha/",
    featured: true,
  },
  {
    name: "Adam Ruiz",
    role: "Media Production Manager",
    description: "Graphic Designer Entrepreneur. Adam is an expert in multimedia production",
    link: "BLOCK6.TECH",
    featured: true, 
    linkedIn: "https://www.linkedin.com/in/adam-the-designer/",
    img: "/assets/images/team/Person3.png",
  },
];



const fullLinkedInImg = "/assets/images/svg/fullLinkedIn.svg";

export default function TeamCarousel() {
  const isMobileScreen = useMediaQuery("(max-width: 650px)");
  const teamLength = Team.length;

  return (
    <div className={classes.carousel}>
      {Team.map((member, index) => {
        let personStyles = classes.person;
        if (member.featured) personStyles += ` ${classes.featured}`;
        return (
          <div className={personStyles} key={index}>
            <div>
              <div>
                <Image
                  src={member.img}
                  width="330"
                  height="350"
                  alt={member.name}
                />
              </div>
              <div>
                {member.featured && (
                  <div className={classes.flex}>
                    <h4 className={classes.name}>{member.name}</h4>
                    <div>
                      {member.linkedIn && (
                        <Link
                          href={member.linkedIn} target="_blank" rel="noreferrer"
                        >
                          <a>
                            {!isMobileScreen && (
                              <Image
                                src={fullLinkedInImg}
                                width="80"
                                height="20"
                                alt="LinkedIn"
                              />
                            )}
                            {isMobileScreen && (
                              <Image
                                src={fullLinkedInImg}
                                width="40"
                                height="10"
                                alt="LinkedIn"
                              />
                            )}
                          </a>
                        </Link>
                      )}
                    </div>
                  </div>
                )}
                {!member.featured && (
                  <h4 className={classes.name}>{member.name}</h4>
                )}
                <p className={classes.role}>{member.role}</p>
                <p className={classes.description}>{member.description}</p>
                <p className={classes.link}>{member.link}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );

  // return (
  //   <div className={classes.carousel}>
  //     <CarouselProvider naturalSlideWidth={370} naturalSlideHeight={1000} totalSlides={teamLength} visibleSlides={2}>
  //       <Slider>
  //         {Team.map((member, index) => {
  //           let personStyles = classes.person;
  //           if (member.featured) personStyles += ` ${classes.featured}`;
  //           return (
  //             <Slide key={index} className={classes.slide} index={index}>
  //               <div className={personStyles}>
  //                 <div>
  //                   <div>
  //                     <Image src={member.img} width="330" height="350" alt={member.name} />
  //                   </div>
  //                   <div>
  //                     {member.featured && (
  //                       <div className={classes.flex}>
  //                         <h4 className={classes.name}>{member.name}</h4>
  //                         <div>
  //                           <Link href={"https://www.linkedin.com/in/wisdom-oparaocha/"}>
  //                             <a>
  //                               {!isMobileScreen && (
  //                                 <Image src={fullLinkedInImg} width="80" height="20" alt="LinkedIn" />
  //                               )}
  //                               {isMobileScreen && (
  //                                 <Image src={fullLinkedInImg} width="40" height="10" alt="LinkedIn" />
  //                               )}
  //                             </a>
  //                           </Link>
  //                         </div>
  //                       </div>
  //                     )}
  //                     {!member.featured && <h4 className={classes.name}>{member.name}</h4>}
  //                     <p className={classes.role}>{member.role}</p>
  //                     <p className={classes.description}>{member.description}</p>
  //                     <p className={classes.link}>{member.link}</p>
  //                   </div>
  //                 </div>
  //               </div>
  //             </Slide>
  //           );
  //         })}
  //       </Slider>
  //     </CarouselProvider>
  //   </div>
  // );
}
