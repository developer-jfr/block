import Head from "next/head";
import { createWidget } from "@typeform/embed";
import "@typeform/embed/build/css/widget.css";
import Hero from "../components/Hero/Hero";
import GetInTouch from "../components/GetInTouch/GetInTouch";
import { useEffect } from "react";

export default function Consulting() {
  useEffect(() => {
    createWidget("YNbx1blZ", {
      container: document.querySelector("#form"),
    });
  });

  return (
    <div>
      <Head>
        <title>
          Block6 | Blockchain Consulting, Design, Brand and Development for Web3
          Creators
        </title>

        <meta
          name="description"
          content="Block6 is a Blockchain consulting agency that designs, builds and markets Blockchain products for businesses across the globe."
        />
        <meta rel="canonical" href="https://block6.tech/" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="https://block6.tech/" />
        <meta name="twitter:creator" content="@block6_tech" />
        <meta name="twitter:image" content="https://block6.tech/logo1.png/" />

        <meta
          property="og:title"
          content="Block6 | Blockchain Consulting, Design, Brand and Development for Web3 Creators"
        />

        <meta
          property="og:description"
          content="Block6 is a Blockchain consulting agency that designs, builds and markets Blockchain products for businesses across the globe."
        />

        <meta property="og:url" content="https://block6.tech/" />
        <meta property="og:site_name" content="Block6" />
        <meta property="og:image" content="https://block6.tech/logo1.png/" />
      </Head>
      <Hero />
      <GetInTouch />
    </div>
  );
}
