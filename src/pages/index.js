import Head from "next/head";
import Nav from "../components/Nav/Nav.js";
// import Footer from "../components/Footer/Footer.js";
import Hero from "../components/Hero/Hero.js";
import Info from "../components/Info/Info.js";
import Start from "../components/Start/Start.js";
import About from "../components/About/About.js";
import Projects from "../components/Projects/Projects.js";
import Form from "../components/Form/Form.js";
import Callout from "../components/Callout/Callout.js";

import Store from "../context";
import { useContext, useEffect } from "react";

import { createClient } from "contentful";
// import dynamic from "next/dynamic";
// const Hero = dynamic(import("../components/Hero/Hero.js"))

export default function Home({ projectsMap }) {
  const { menu, setMenu } = useContext(Store);
  const { formVisible, setForm } = useContext(Store);
  const { calloutVisible, setCallout } = useContext(Store);
  const { projects, setProjects } = useContext(Store);

  useEffect(() => setMenu(false), []);
  useEffect(() => setProjects(projectsMap), []);

  return (
    <div>
      <Head>
        <title>Apiary</title>
      </Head>
      <Nav isMenu={setMenu} menu={menu} setForm={setForm} />
      <Hero menu={menu} setForm={setForm} />
      <Info
        title="Why is it useful for your company?"
        subtitle="By handing over assignments to students for work, you free experienced employees from routine tasks, as well as increase brand awareness."
        cards={[
          {
            selected: true,
            img: "/images/resource.png",
            title: "Resource saving",
            text: "Delegate tasks for free and get results that can be used in your future work.",
          },
          {
            selected: false,
            img: "/images/publicize.png",
            title: "Publicize",
            text: "We take pride in the real-world value of the tasks that our students perform and we share them in all available channels.",
          },
          {
            selected: false,
            img: "/images/boost.png",
            title: "PR boost",
            text: "This will increase the visibility of the&#160;company&#160;among&#160;job seekers and attract those who share the values of&#160;your&#160;company.",
          },
        ]}
      />
      <Info
        id="help"
        mode="light"
        title="What requests can we help with?"
        subtitle="We carry out important, non&#x2011;urgent tasks, with results that you can use in your work."
        cards={[
          {
            selected: true,
            img: "/images/web.png",
            title: "Web development",
            text: "#programing",
            link: "/web",
          },
          {
            selected: false,
            img: "/images/analysis.png",
            title: "Data analysis",
            text: "#analysis",
            link: "/analysis",
          },
          {
            selected: false,
            img: "/images/science.png",
            title: "Data science",
            text: "#analysis",
            link: "/science",
          },
        ]}
      />
      <About setForm={setForm} />
      <Start setForm={setForm} />
      <Info
        title="Why choose us?"
        subtitle="We have built the largest IT company in Russia. We know how to develop cool employees, and we work hard to make our clients' lives better and happier."
        cards={[
          {
            selected: false,
            img: "/images/quality.png",
            title: "Quality",
            text: "The Yandex search engine is the fourth ranked search engine in the world in terms of number of requests processed.",
          },
          {
            selected: false,
            img: "/images/professionalism.png",
            title: "Professionalism",
            text: "Practicum by Yandex is one of the most popular online education services in Russia, allowing students to get a new profession or master a new skill.",
          },
          {
            selected: true,
            img: "/images/experience.png",
            title: "Experience",
            text: "Our students are already working at Accenture, Tesla, Invitae. Our specialty is practical training for the real world.",
          },
        ]}
      />
      <Projects
        setForm={setForm}
        projects={projects}
        setProjects={setProjects}
      />

      <Form open={formVisible} setForm={setForm} setCallout={setCallout} />
      <Callout open={calloutVisible} setCallout={setCallout} />
    </div>
  );
}

export async function getStaticProps() {
  const client = createClient({
    space: "zu5ddjasx2dw",
    accessToken: "kBKxaKw3aowDBaCjhU2N9FcKrPGwEUBAVlsM1T4hRLI",
  });

  const items = (await client.getEntries()).items;
  const projectsMap = items.reduce((a, { fields, sys }) => {
    return {
      ...a,
      [fields.type]: a[fields.type]
        ? [...a[fields.type], { ...fields, id: sys.id }]
        : [{ ...fields, id: sys.id }],
    };
  }, {});

  return {
    props: {
      projectsMap,
    },
  };
}
