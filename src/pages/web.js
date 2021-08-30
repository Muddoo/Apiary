import Head from "next/head";
import Nav from "../components/Nav/Nav.js";
import Form from "../components/Form/Form.js";
import Callout from "../components/Callout/Callout.js";
import Projects from "../components/Projects/Projects.js";
import Banner from "../components/Banner/Banner.js";

import Store from "../context";
import { useContext, useEffect } from "react";

function Web() {
  const { menu, setMenu } = useContext(Store);
  const { formVisible, setForm } = useContext(Store);
  const { calloutVisible, setCallout } = useContext(Store);

  useEffect(() => setMenu(false), []);

  return (
    <div>
      <Head>
        <title>Apiary | Web</title>
      </Head>
      <Nav isMenu={setMenu} menu={menu} setForm={setForm} showButton={true} />
      <Banner
        title="What web&#160;development requests can we help with?"
        text="Practicum by Yandex students are ready to build your website from
              your design or if necessary, we can ask our colleagues from the
              design team to create a unique design for your company and a
              website based on this design."
      />
      <Projects
        i={0}
        setForm={setForm}
        title="Check out the web development projects our students have done so far"
      />
      <Form open={formVisible} setForm={setForm} setCallout={setCallout} />
      <Callout open={calloutVisible} setCallout={setCallout} />
    </div>
  );
}

// export async function getStaticProps() {
//   return {
//     props: {
//       name: "Web",
//     },
//   };
// }

export default Web;
