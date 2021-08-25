import { Container } from "../Container/Container.styles.js";
import {
  Main,
  Banner,
  Wrapper,
  Title,
  Text,
  Img,
  BtnWrapper,
  Button,
  ProjectsContainer,
  ProjectsSlider,
  List,
  Project,
  ProjectBanner,
  Poster,
  Details,
  MemberWraper,
  MemberImgWrapper,
  MemberInfoWrapper,
  MemberImg,
  Date,
  Web,
} from "./Projects.styles.js";
import Image from "next/image";
import { useState } from "react";

function Projects() {
  const [index, setIndex] = useState(0);

  return (
    <Container mode="grey">
      <Main>
        <Banner>
          <Wrapper>
            <Title>Delegate tasks to those who enjoy&#160;them</Title>
            <Text>
              Check out the projects our students have done for companies in the
              USA and beyond
            </Text>
          </Wrapper>
          <Img>
            <Image
              src="/images/banner.png"
              alt="banner"
              layout="fill"
              placeholder="blur"
              blurDataURL="/images/banner.png"
            />
          </Img>
        </Banner>
        <BtnWrapper>
          <Button
            className={`${index === 0 && "selected"}`}
            onClick={() => setIndex(0)}
          >
            Web development
          </Button>
          <Button
            className={`${index === 1 && "selected"}`}
            onClick={() => setIndex(1)}
          >
            Data analysis
          </Button>
          <Button
            className={`${index === 2 && "selected"}`}
            onClick={() => setIndex(2)}
          >
            Data science
          </Button>
        </BtnWrapper>
        <ProjectsContainer>
          <ProjectsSlider index={index}>
            <List index={0} selected={index === 0}>
              <Project>
                <ProjectBanner>
                  <Poster>
                    <Image
                      src="/images/ant.png"
                      alt="banner"
                      layout="fill"
                      priority="true"
                      placeholder="blur"
                      blurDataURL="/images/ant.png"
                    //   objectFit="cover"
                    //   objectPosition="center"
                    />
                  </Poster>
                  <Details>
                    <Title>Ant Robotics</Title>
                    <Wrapper className="text">
                      <Text className="medium">
                        Landing page website for the company that cakes
                        automated logistics robots from Oakland,&#160;CA
                      </Text>
                    </Wrapper>
                    <Text className="xsm">May 2021</Text>
                    <Text as="a" className="xsm orange right">
                      Visit wbesite →
                    </Text>
                  </Details>
                </ProjectBanner>
                <Details className="member">
                  <MemberWraper>
                    <MemberImgWrapper>
                      <MemberImg>
                        <Image
                          src="/images/client.png"
                          alt="banner"
                          layout="fill"
                          placeholder="blur"
                          blurDataURL="/images/client.png"
                          priority="true"
                        />
                      </MemberImg>
                    </MemberImgWrapper>
                    <MemberInfoWrapper>
                      <Title className="medium">Maxim Antonenko</Title>
                      <Text className="sm">Ant Robotics CEO</Text>
                    </MemberInfoWrapper>
                  </MemberWraper>
                  <Text className="medium member">
                    “The Data Analytics students have highlighted a few
                    languages which show a growing demand for translation and
                    expanded our list of keywords to detect more
                    translation-related user reviews,” Demid said. “The Data
                    Science students tested a wide range of natural language
                    processing algorithms, including deep machine learning...
                  </Text>
                  <Text className="orange xsm" as="button">
                    Read full review
                  </Text>
                </Details>
                <Details className="member">
                  <MemberWraper>
                    <MemberImgWrapper>
                      <MemberImg>
                        <Image
                          priority="true"
                          src="/images/client.png"
                          alt="ant"
                          layout="fill"
                          placeholder="blur"
                          blurDataURL="/images/ant.png"
                        />
                      </MemberImg>
                      <MemberImg>
                        <Image
                          priority="true"
                          src="/images/prim.png"
                          alt="ant"
                          layout="fill"
                          placeholder="blur"
                          blurDataURL="/images/ant.png"
                        />
                      </MemberImg>
                      <MemberImg>
                        <Image
                          priority="true"
                          src="/images/client.png"
                          alt="ant"
                          layout="fill"
                          placeholder="blur"
                          blurDataURL="/images/ant.png"
                        />
                      </MemberImg>
                    </MemberImgWrapper>
                    <MemberInfoWrapper>
                      <Title className="medium">Students team</Title>
                      <Text className="sm">
                        Maria Wright, Maria Wright, Enyel Sequeira
                      </Text>
                    </MemberInfoWrapper>
                  </MemberWraper>
                  <Text className="medium member">
                    “I learned so much from it,” Xia said. “Not just about new
                    packages and methods of analysis and reporting, but also
                    workflow management, how to clarify task requirements,
                    collaborate with others, and more. Those are the kind of
                    experiences I can put on my resume, and that’s awesome too.”
                  </Text>
                  <Text className="orange xsm" as="button">
                    Read full review
                  </Text>
                </Details>
              </Project>

              <Project>
                <ProjectBanner>
                  <Poster>
                    <Image
                      src="/images/prim.png"
                      alt="banner"
                      layout="fill"
                      priority="true"
                      placeholder="blur"
                      blurDataURL="/images/prim.png"
                    //   objectFit="cover"
                    //   objectPosition="center"
                    />
                  </Poster>
                  <Details>
                    <Title>Ant Robotics</Title>
                    <Wrapper className="text">
                      <Text className="medium">
                        Landing page website for the company that cakes
                        automated logistics robots from Oakland,&#160;CA
                      </Text>
                    </Wrapper>
                    <Text className="xsm">May 2021</Text>
                    <Text as="a" className="xsm orange right">
                      Visit wbesite →
                    </Text>
                  </Details>
                </ProjectBanner>
                <Details className="member">
                  <MemberWraper>
                    <MemberImgWrapper>
                      <MemberImg>
                        <Image
                          src="/images/client.png"
                          alt="banner"
                          layout="fill"
                          placeholder="blur"
                          blurDataURL="/images/client.png"
                          priority="true"
                        />
                      </MemberImg>
                    </MemberImgWrapper>
                    <MemberInfoWrapper>
                      <Title className="medium">Maxim Antonenko</Title>
                      <Text className="sm">Ant Robotics CEO</Text>
                    </MemberInfoWrapper>
                  </MemberWraper>
                  <Text className="medium member">
                    “The Data Analytics students have highlighted a few
                    languages which show a growing demand for translation and
                    expanded our list of keywords to detect more
                    translation-related user reviews,” Demid said. “The Data
                    Science students tested a wide range of natural language
                    processing algorithms, including deep machine learning...
                  </Text>
                  <Text className="orange xsm" as="button">
                    Read full review
                  </Text>
                </Details>
                <Details className="member">
                  <MemberWraper>
                    <MemberImgWrapper>
                      <MemberImg>
                        <Image
                          priority="true"
                          src="/images/client.png"
                          alt="ant"
                          layout="fill"
                          placeholder="blur"
                          blurDataURL="/images/ant.png"
                        />
                      </MemberImg>
                      <MemberImg>
                        <Image
                          priority="true"
                          src="/images/prim.png"
                          alt="ant"
                          layout="fill"
                          placeholder="blur"
                          blurDataURL="/images/ant.png"
                        />
                      </MemberImg>
                      <MemberImg>
                        <Image
                          priority="true"
                          src="/images/client.png"
                          alt="ant"
                          layout="fill"
                          placeholder="blur"
                          blurDataURL="/images/ant.png"
                        />
                      </MemberImg>
                    </MemberImgWrapper>
                    <MemberInfoWrapper>
                      <Title className="medium">Students team</Title>
                      <Text className="sm">
                        Maria Wright, Maria Wright, Enyel Sequeira
                      </Text>
                    </MemberInfoWrapper>
                  </MemberWraper>
                  <Text className="medium member">
                    “I learned so much from it,” Xia said. “Not just about new
                    packages and methods of analysis and reporting, but also
                    workflow management, how to clarify task requirements,
                    collaborate with others, and more. Those are the kind of
                    experiences I can put on my resume, and that’s awesome too.”
                  </Text>
                  <Text className="orange xsm" as="button">
                    Read full review
                  </Text>
                </Details>
              </Project>
              <BtnWrapper className="bottom">
                <Button>More projects...</Button>
                <Button className="selected">Delegate a task</Button>
              </BtnWrapper>
            </List>

            <List index={1} selected={index === 1}>
              <Project>
                <ProjectBanner>
                  <Poster>
                    <Image
                      src="/images/norbu.png"
                      alt="norbu"
                      layout="fill"
                      priority="true"
                      placeholder="blur"
                      blurDataURL="/images/prim.png"
                    //   objectFit="cover"
                    //   objectPosition="center"
                    />
                  </Poster>
                  <Details>
                    <Title>Norbu, DA</Title>
                    <Wrapper className="text">
                      <Text className="medium">
                        Norbu Stress Control is the first anti-stress app that
                        teaches to manage stress and emotions on the physical
                        level.
                      </Text>
                      <Text className="medium">
                        Task: to calculate main product metrics, research
                        possible reasons for users behaviour such as retention,
                        payments, app removal, etc. and analyze User journey
                        behaviour.
                      </Text>
                    </Wrapper>
                    <Text className="xsm">May 2021</Text>
                    <Text as="a" className="xsm orange right">
                      Visit wbesite →
                    </Text>
                  </Details>
                </ProjectBanner>
                <Details className="member">
                  <MemberWraper>
                    <MemberImgWrapper>
                      <MemberImg>
                        <Image
                          src="/images/client.png"
                          alt="banner"
                          layout="fill"
                          placeholder="blur"
                          blurDataURL="/images/client.png"
                          priority="true"
                        />
                      </MemberImg>
                    </MemberImgWrapper>
                    <MemberInfoWrapper>
                      <Title className="medium">Maxim Antonenko</Title>
                      <Text className="sm">Ant Robotics CEO</Text>
                    </MemberInfoWrapper>
                  </MemberWraper>
                  <Text className="medium member">
                    “The Data Analytics students have highlighted a few
                    languages which show a growing demand for translation and
                    expanded our list of keywords to detect more
                    translation-related user reviews,” Demid said. “The Data
                    Science students tested a wide range of natural language
                    processing algorithms, including deep machine learning...
                  </Text>
                  <Text className="orange xsm" as="button">
                    Read full review
                  </Text>
                </Details>
                <Details className="member">
                  <MemberWraper>
                    <MemberImgWrapper>
                      <MemberImg>
                        <Image
                          priority="true"
                          src="/images/client.png"
                          alt="ant"
                          layout="fill"
                          placeholder="blur"
                          blurDataURL="/images/ant.png"
                        />
                      </MemberImg>
                      <MemberImg>
                        <Image
                          priority="true"
                          src="/images/prim.png"
                          alt="ant"
                          layout="fill"
                          placeholder="blur"
                          blurDataURL="/images/ant.png"
                        />
                      </MemberImg>
                      <MemberImg>
                        <Image
                          priority="true"
                          src="/images/client.png"
                          alt="ant"
                          layout="fill"
                          placeholder="blur"
                          blurDataURL="/images/ant.png"
                        />
                      </MemberImg>
                    </MemberImgWrapper>
                    <MemberInfoWrapper>
                      <Title className="medium">Students team</Title>
                      <Text className="sm">
                        Maria Wright, Maria Wright, Enyel Sequeira
                      </Text>
                    </MemberInfoWrapper>
                  </MemberWraper>
                  <Text className="medium member">
                    “I learned so much from it,” Xia said. “Not just about new
                    packages and methods of analysis and reporting, but also
                    workflow management, how to clarify task requirements,
                    collaborate with others, and more. Those are the kind of
                    experiences I can put on my resume, and that’s awesome too.”
                  </Text>
                  <Text className="orange xsm" as="button">
                    Read full review
                  </Text>
                </Details>
              </Project>

              <Project>
                <ProjectBanner>
                  <Poster>
                    <Image
                      src="/images/norbu.png"
                      alt="norbu"
                      layout="fill"
                      priority="true"
                      placeholder="blur"
                      blurDataURL="/images/prim.png"
                    //   objectFit="cover"
                    //   objectPosition="center"
                    />
                  </Poster>
                  <Details>
                    <Title>Norbu, DA</Title>
                    <Wrapper className="text">
                      <Text className="medium">
                        Norbu Stress Control is the first anti-stress app that
                        teaches to manage stress and emotions on the physical
                        level.
                      </Text>
                      <Text className="medium">
                        Task: to calculate main product metrics, research
                        possible reasons for users behaviour such as retention,
                        payments, app removal, etc. and analyze User journey
                        behaviour.
                      </Text>
                    </Wrapper>
                    <Text className="xsm">May 2021</Text>
                    <Text as="a" className="xsm orange right">
                      Visit wbesite →
                    </Text>
                  </Details>
                </ProjectBanner>
                <Details className="member">
                  <MemberWraper>
                    <MemberImgWrapper>
                      <MemberImg>
                        <Image
                          src="/images/client.png"
                          alt="banner"
                          layout="fill"
                          placeholder="blur"
                          blurDataURL="/images/client.png"
                          priority="true"
                        />
                      </MemberImg>
                    </MemberImgWrapper>
                    <MemberInfoWrapper>
                      <Title className="medium">Maxim Antonenko</Title>
                      <Text className="sm">Ant Robotics CEO</Text>
                    </MemberInfoWrapper>
                  </MemberWraper>
                  <Text className="medium member">
                    “The Data Analytics students have highlighted a few
                    languages which show a growing demand for translation and
                    expanded our list of keywords to detect more
                    translation-related user reviews,” Demid said. “The Data
                    Science students tested a wide range of natural language
                    processing algorithms, including deep machine learning...
                  </Text>
                  <Text className="orange xsm" as="button">
                    Read full review
                  </Text>
                </Details>
                <Details className="member">
                  <MemberWraper>
                    <MemberImgWrapper>
                      <MemberImg>
                        <Image
                          priority="true"
                          src="/images/client.png"
                          alt="ant"
                          layout="fill"
                          placeholder="blur"
                          blurDataURL="/images/ant.png"
                        />
                      </MemberImg>
                      <MemberImg>
                        <Image
                          priority="true"
                          src="/images/prim.png"
                          alt="ant"
                          layout="fill"
                          placeholder="blur"
                          blurDataURL="/images/ant.png"
                        />
                      </MemberImg>
                      <MemberImg>
                        <Image
                          priority="true"
                          src="/images/client.png"
                          alt="ant"
                          layout="fill"
                          placeholder="blur"
                          blurDataURL="/images/ant.png"
                        />
                      </MemberImg>
                    </MemberImgWrapper>
                    <MemberInfoWrapper>
                      <Title className="medium">Students team</Title>
                      <Text className="sm">
                        Maria Wright, Maria Wright, Enyel Sequeira
                      </Text>
                    </MemberInfoWrapper>
                  </MemberWraper>
                  <Text className="medium member">
                    “I learned so much from it,” Xia said. “Not just about new
                    packages and methods of analysis and reporting, but also
                    workflow management, how to clarify task requirements,
                    collaborate with others, and more. Those are the kind of
                    experiences I can put on my resume, and that’s awesome too.”
                  </Text>
                  <Text className="orange xsm" as="button">
                    Read full review
                  </Text>
                </Details>
              </Project>

              <Project>
                <ProjectBanner>
                  <Poster>
                    <Image
                      src="/images/correct.png"
                      alt="correct"
                      layout="fill"
                      priority="true"
                      placeholder="blur"
                      blurDataURL="/images/ant.png"
                    //   objectFit="cover"
                    //   objectPosition="center"
                    />
                  </Poster>
                  <Details>
                    <Title>Allcorrect, DS</Title>
                    <Wrapper className="text">
                      <Text className="medium">
                        Allcorrect Games provides video game localization,
                        localization testing, voiceovers, game art, and playable
                        ads.
                      </Text>
                      <Text className="medium">
                        Task: to analyze apps reviews about localization quality
                        on marketplaces like App Store / Google Play / Steam.
                      </Text>
                    </Wrapper>
                    <Text className="xsm">May 2021</Text>
                    <Text as="a" className="xsm orange right">
                      Visit wbesite →
                    </Text>
                  </Details>
                </ProjectBanner>
                <Details className="member">
                  <MemberWraper>
                    <MemberImgWrapper>
                      <MemberImg>
                        <Image
                          src="/images/client.png"
                          alt="banner"
                          layout="fill"
                          placeholder="blur"
                          blurDataURL="/images/client.png"
                          priority="true"
                        />
                      </MemberImg>
                    </MemberImgWrapper>
                    <MemberInfoWrapper>
                      <Title className="medium">Maxim Antonenko</Title>
                      <Text className="sm">Ant Robotics CEO</Text>
                    </MemberInfoWrapper>
                  </MemberWraper>
                  <Text className="medium member">
                    “The Data Analytics students have highlighted a few
                    languages which show a growing demand for translation and
                    expanded our list of keywords to detect more
                    translation-related user reviews,” Demid said. “The Data
                    Science students tested a wide range of natural language
                    processing algorithms, including deep machine learning...
                  </Text>
                  <Text className="orange xsm" as="button">
                    Read full review
                  </Text>
                </Details>
                <Details className="member">
                  <MemberWraper>
                    <MemberImgWrapper>
                      <MemberImg>
                        <Image
                          priority="true"
                          src="/images/client.png"
                          alt="ant"
                          layout="fill"
                          placeholder="blur"
                          blurDataURL="/images/ant.png"
                        />
                      </MemberImg>
                      <MemberImg>
                        <Image
                          priority="true"
                          src="/images/prim.png"
                          alt="ant"
                          layout="fill"
                          placeholder="blur"
                          blurDataURL="/images/ant.png"
                        />
                      </MemberImg>
                      <MemberImg>
                        <Image
                          priority="true"
                          src="/images/client.png"
                          alt="ant"
                          layout="fill"
                          placeholder="blur"
                          blurDataURL="/images/ant.png"
                        />
                      </MemberImg>
                    </MemberImgWrapper>
                    <MemberInfoWrapper>
                      <Title className="medium">Students team</Title>
                      <Text className="sm">
                        Maria Wright, Maria Wright, Enyel Sequeira
                      </Text>
                    </MemberInfoWrapper>
                  </MemberWraper>
                  <Text className="medium member">
                    “I learned so much from it,” Xia said. “Not just about new
                    packages and methods of analysis and reporting, but also
                    workflow management, how to clarify task requirements,
                    collaborate with others, and more. Those are the kind of
                    experiences I can put on my resume, and that’s awesome too.”
                  </Text>
                  <Text className="orange xsm" as="button">
                    Read full review
                  </Text>
                </Details>
              </Project>
              <BtnWrapper className="bottom">
                <Button>More projects...</Button>
                <Button className="selected">Delegate a task</Button>
              </BtnWrapper>
            </List>

            <List index={2} selected={index === 2}>
              {/* <Project>
                <ProjectBanner>
                  <Poster>
                    <Image
                      src="/images/ant.png"
                      alt="banner"
                      layout="fill"
                      priority="true"
                      placeholder="blur"
                      blurDataURL="/images/ant.png"
                    //   objectFit="cover"
                    //   objectPosition="center"
                    />
                  </Poster>
                  <Details>
                    <Title>Ant Robotics</Title>
                    <Wrapper className="text">
                      <Text className="medium">
                        Landing page website for the company that cakes
                        automated logistics robots from Oakland,&#160;CA
                      </Text>
                    </Wrapper>
                    <Text className="xsm">May 2021</Text>
                    <Text as="a" className="xsm orange right">
                      Visit wbesite →
                    </Text>
                  </Details>
                </ProjectBanner>
                <Details className="member">
                  <MemberWraper>
                    <MemberImgWrapper>
                      <MemberImg>
                        <Image
                          src="/images/client.png"
                          alt="banner"
                          layout="fill"
                          placeholder="blur"
                          blurDataURL="/images/client.png"
                          priority="true"
                        />
                      </MemberImg>
                    </MemberImgWrapper>
                    <MemberInfoWrapper>
                      <Title className="medium">Maxim Antonenko</Title>
                      <Text className="sm">Ant Robotics CEO</Text>
                    </MemberInfoWrapper>
                  </MemberWraper>
                  <Text className="medium member">
                    “The Data Analytics students have highlighted a few
                    languages which show a growing demand for translation and
                    expanded our list of keywords to detect more
                    translation-related user reviews,” Demid said. “The Data
                    Science students tested a wide range of natural language
                    processing algorithms, including deep machine learning...
                  </Text>
                  <Text className="orange xsm" as="button">
                    Read full review
                  </Text>
                </Details>
                <Details className="member">
                  <MemberWraper>
                    <MemberImgWrapper>
                      <MemberImg>
                        <Image
                          priority="true"
                          src="/images/client.png"
                          alt="ant"
                          layout="fill"
                          placeholder="blur"
                          blurDataURL="/images/ant.png"
                        />
                      </MemberImg>
                      <MemberImg>
                        <Image
                          priority="true"
                          src="/images/prim.png"
                          alt="ant"
                          layout="fill"
                          placeholder="blur"
                          blurDataURL="/images/ant.png"
                        />
                      </MemberImg>
                      <MemberImg>
                        <Image
                          priority="true"
                          src="/images/client.png"
                          alt="ant"
                          layout="fill"
                          placeholder="blur"
                          blurDataURL="/images/ant.png"
                        />
                      </MemberImg>
                    </MemberImgWrapper>
                    <MemberInfoWrapper>
                      <Title className="medium">Students team</Title>
                      <Text className="sm">
                        Maria Wright, Maria Wright, Enyel Sequeira
                      </Text>
                    </MemberInfoWrapper>
                  </MemberWraper>
                  <Text className="medium member">
                    “I learned so much from it,” Xia said. “Not just about new
                    packages and methods of analysis and reporting, but also
                    workflow management, how to clarify task requirements,
                    collaborate with others, and more. Those are the kind of
                    experiences I can put on my resume, and that’s awesome too.”
                  </Text>
                  <Text className="orange xsm" as="button">
                    Read full review
                  </Text>
                </Details>
              </Project> */}

              <Project>
                <ProjectBanner>
                  <Poster>
                    <Image
                      src="/images/prim.png"
                      alt="banner"
                      layout="fill"
                      priority="true"
                      placeholder="blur"
                      blurDataURL="/images/prim.png"
                    //   objectFit="cover"
                    //   objectPosition="center"
                    />
                  </Poster>
                  <Details>
                    <Title>Ant Robotics</Title>
                    <Wrapper className="text">
                      <Text className="medium">
                        Landing page website for the company that cakes
                        automated logistics robots from Oakland,&#160;CA
                      </Text>
                    </Wrapper>
                    <Text className="xsm">May 2021</Text>
                    <Text as="a" className="xsm orange right">
                      Visit wbesite →
                    </Text>
                  </Details>
                </ProjectBanner>
                <Details className="member">
                  <MemberWraper>
                    <MemberImgWrapper>
                      <MemberImg>
                        <Image
                          src="/images/client.png"
                          alt="banner"
                          layout="fill"
                          placeholder="blur"
                          blurDataURL="/images/client.png"
                          priority="true"
                        />
                      </MemberImg>
                    </MemberImgWrapper>
                    <MemberInfoWrapper>
                      <Title className="medium">Maxim Antonenko</Title>
                      <Text className="sm">Ant Robotics CEO</Text>
                    </MemberInfoWrapper>
                  </MemberWraper>
                  <Text className="medium member">
                    “The Data Analytics students have highlighted a few
                    languages which show a growing demand for translation and
                    expanded our list of keywords to detect more
                    translation-related user reviews,” Demid said. “The Data
                    Science students tested a wide range of natural language
                    processing algorithms, including deep machine learning...
                  </Text>
                  <Text className="orange xsm" as="button">
                    Read full review
                  </Text>
                </Details>
                <Details className="member">
                  <MemberWraper>
                    <MemberImgWrapper>
                      <MemberImg>
                        <Image
                          priority="true"
                          src="/images/client.png"
                          alt="ant"
                          layout="fill"
                          placeholder="blur"
                          blurDataURL="/images/ant.png"
                        />
                      </MemberImg>
                      <MemberImg>
                        <Image
                          priority="true"
                          src="/images/prim.png"
                          alt="ant"
                          layout="fill"
                          placeholder="blur"
                          blurDataURL="/images/ant.png"
                        />
                      </MemberImg>
                      <MemberImg>
                        <Image
                          priority="true"
                          src="/images/client.png"
                          alt="ant"
                          layout="fill"
                          placeholder="blur"
                          blurDataURL="/images/ant.png"
                        />
                      </MemberImg>
                    </MemberImgWrapper>
                    <MemberInfoWrapper>
                      <Title className="medium">Students team</Title>
                      <Text className="sm">
                        Maria Wright, Maria Wright, Enyel Sequeira
                      </Text>
                    </MemberInfoWrapper>
                  </MemberWraper>
                  <Text className="medium member">
                    “I learned so much from it,” Xia said. “Not just about new
                    packages and methods of analysis and reporting, but also
                    workflow management, how to clarify task requirements,
                    collaborate with others, and more. Those are the kind of
                    experiences I can put on my resume, and that’s awesome too.”
                  </Text>
                  <Text className="orange xsm" as="button">
                    Read full review
                  </Text>
                </Details>
              </Project>
              <BtnWrapper className="bottom">
                <Button>More projects...</Button>
                <Button className="selected">Delegate a task</Button>
              </BtnWrapper>
            </List>
          </ProjectsSlider>
        </ProjectsContainer>
        {/* <BtnWrapper className="bottom">
          <Button>More projects...</Button>
          <Button className="selected">Delegate a task</Button>
        </BtnWrapper> */}
      </Main>
    </Container>
  );
}

export default Projects;
