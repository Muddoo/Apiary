import Head from "next/head";
import Nav from "../components/Nav/Nav.js";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Apiary</title>
      </Head>
      <Nav>
        <h1 style={{ fontFamily: "Suisse Intl" }}>
          Your task. Done by data and web development students. For free!
        </h1>
      </Nav>
    </div>
  );
}
