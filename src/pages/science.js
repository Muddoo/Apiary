import Head from "next/head";
import Nav from "../components/Nav/Nav.js";
import Form from "../components/Form/Form.js";
import Callout from "../components/Callout/Callout.js";
import Projects from "../components/Projects/Projects.js";
import Banner from "../components/Banner/Banner.js";

import Store from "../context";
import { useContext, useEffect } from "react";

function Analysis() {
  const { menu, setMenu } = useContext(Store);
  const { formVisible, setForm } = useContext(Store);
  const { calloutVisible, setCallout } = useContext(Store);
  const { projects, setProjects } = useContext(Store);

  useEffect(() => setMenu(false), []);

  return (
    <div>
      <Head>
        <title>Apiary | Science</title>
      </Head>
      <Nav isMenu={setMenu} menu={menu} setForm={setForm} showButton={true} />
      <Banner
        title="What data science requests can we help with?"
        text="Practicum by Yandex students are ready to undertake analytics of the data provided by the company or if necessary, are ready to conduct market research to obtain the necessary data for analysis."
        src="/images/science.png"
        cards={[
          {
            number: 1,
            title: "Text recognition",
            text: "We handle photo recognition of texts of different languages ranging from English to Arabic.",
          },
          {
            number: 2,
            title: "Checking and improving existing algorithms",
            text: "We test the algorithms available to your company, check them using your data or open data, and suggest hypotheses for improvement.",
          },
          {
            number: 3,
            title: "Recognition of audio and video files",
            text: "We can recognize files of different types, create algorithms for finding errors in them, and generating reports.",
          },
        ]}
      />
      <Projects
        i={2}
        projects={projects}
        setProjects={setProjects}
        setForm={setForm}
        title="Check out the data science  projects our students have done so far"
      />
      <Form open={formVisible} setForm={setForm} setCallout={setCallout} />
      <Callout open={calloutVisible} setCallout={setCallout} />
    </div>
  );
}

export default Analysis;
