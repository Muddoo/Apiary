import { Container } from "../Container/Container.styles";
import { Main } from "../Info/Info.styles.js";
import { Button } from "../Start/Start.styles.js";
import { Title, List, Snippet, Img, Text } from "./About.styles.js";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function About({ setForm }) {
  useEffect(() => {
    AOS.init({
      easing: "ease-in-cubic",
      offset: 200,
      once: true,
    });
  }, []);

  return (
    <Container mode="grey" id="about">
      <Main>
        <Title data-aos="fade-up" data-aos-offset="50" mode="light">
          What is Practicum by Yandex?
        </Title>
        <List>
          <Snippet data-aos="fade-right">
            <Img />
            <Text>
              Practicum by Yandex is a kind of boot camp. Our goal is to help
              ambitious and passionate people to master it and find their first
              job. At the same time, the level of our training allows graduates
              to carry out high-quality real projects of companies under the
              review of experienced mentors.
            </Text>
          </Snippet>
          <Snippet data-aos="fade-up-left" data-aos-anchor=".a2">
            <Text>Who will solve the problems? How much does it cost?</Text>
          </Snippet>
          <Snippet data-aos="fade-right" data-aos-delay="500" className="a2">
            <Img />
            <Text>
              It is a win-win situation: we take real tasks from real companies
              and give them to graduates of Data Science and Data Analytics
              courses. The results of these tasks will be repeatedly checked by
              curators and returned to the customer as ordered for free.
            </Text>
          </Snippet>
          <Snippet data-aos="fade-up-left" data-aos-anchor=".a3">
            <Text>Why is it free?</Text>
          </Snippet>
          <Snippet data-aos="fade-right" data-aos-delay="500" className="a3">
            <Img />
            <Text>
              Because Practicum has students who are eager to gain real life
              experience, find them interesting and useful, and are ready to
              take on your tasks
            </Text>
          </Snippet>
          <Snippet data-aos="flip-down" data-aos-anchor=".start">
            <Text>Wow! I'm ready to start!</Text>
          </Snippet>
        </List>
        <Button
          data-aos="zoom-in-up"
          data-aos-delay="500"
          className="start"
          onClick={() => setForm(true)}
        >
          Delegate a task
        </Button>
      </Main>
    </Container>
  );
}

export default About;
