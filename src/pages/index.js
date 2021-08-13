import Head from "next/head";
import Nav from "../components/Nav/Nav.js";
import Footer from "../components/Footer/Footer.js";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Apiary</title>
      </Head>
      <Nav />
      <Footer />
    </div>
  );
}
