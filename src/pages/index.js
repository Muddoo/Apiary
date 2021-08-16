import Head from "next/head";
import Nav from "../components/Nav/Nav.js";
import Footer from "../components/Footer/Footer.js";
import Hero from "../components/Hero/Hero.js";
import { useState } from "react";
// import dynamic from "next/dynamic";
// const Hero = dynamic(import("../components/Hero/Hero.js"))

export default function Home() {
  const [menu, setMenu] = useState(false);

  return (
    <div>
      <Head>
        <title>Apiary</title>
      </Head>
      <Nav isMenu={setMenu} menu={menu} />
      <Hero menu={menu} />
      <Footer />
    </div>
  );
}
