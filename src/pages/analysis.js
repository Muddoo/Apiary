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
        <title>Apiary | Analysis</title>
      </Head>
      <Nav isMenu={setMenu} menu={menu} setForm={setForm} showButton={true} />
      <Banner
        title="What data analysis requests can we help with?"
        text="Practicum by Yandex students are ready to undertake analytics of the data provided by the company or if necessary, are ready to conduct market research to obtain the necessary data for analysis."
        src="/images/analysis.png"
        cards={[
          {
            number: 1,
            title: "We analyze pricing",
            text: "We will analyze your data, competitors' open data, market conditions, and current trends. We will share our conclusions and recommendations regarding the pricing policy of your company.",
          },
          {
            number: 2,
            title: "We can build a recommendation model",
            text: "We will customize issued recommendations. We will analyze data on the behavior of your clients. You will be able to quickly understand what to offer so that they take the suggested action.",
          },
          {
            number: 3,
            title: "We can segment your customer base",
            text: "We will divide users into segments, select a core, segment them by interests, and give recommendations regarding the most popular content for each group to increase their retention or formulate a discount policy.",
          },
        ]}
      />
      <Projects
        i={1}
        projects={projects}
        setProjects={setProjects}
        setForm={setForm}
        title="Check out the data analysis projects our students have done so far"
      />
      <Form open={formVisible} setForm={setForm} setCallout={setCallout} />
      <Callout open={calloutVisible} setCallout={setCallout} />
    </div>
  );
}

export default Analysis;
