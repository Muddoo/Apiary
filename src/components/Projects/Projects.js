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
} from "./Projects.styles.js";
import Image from "next/image";
import { useState } from "react";
// import Store from "../../context";

function Projects({ setForm, title, i, projects, setProjects }) {
  const [index, setIndex] = useState(i || 0);
  const [showAll, setShow] = useState(false);
  // const { Allprojects, setProjects } = useContext(Store);
  // console.log(projects["science"]?.[0].studentReview.length)

  function formatDate(date) {
    const year = date.substring(0, 4);
    const month = date.substring(5, 7) - 1;

    return new Date(year, month).toLocaleDateString("en-US", {
      month: "long",
      year: "numeric",
    });
  }

  return (
    <Container mode="grey" id="projects">
      <Main>
        <Banner>
          <Wrapper>
            {title ? (
              <Title>{title}</Title>
            ) : (
              <>
                <Title>Delegate tasks to those who enjoy&#160;them</Title>
                <Text>
                  Check out the projects our students have done for companies in
                  the USA and beyond
                </Text>
              </>
            )}
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
        {!i && (
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
        )}
        <ProjectsContainer i={i}>
          <ProjectsSlider index={index}>
            <List index={0} selected={index == 0}>
              <Wrapper className="projects">
                {projects["web"] &&
                  projects["web"].map((project, i) => (
                    <Project
                      key={project.id}
                      index={i === 0 || i === 1 ? 0 : i}
                      show={showAll}
                    >
                      <ProjectBanner>
                        <Poster>
                          <Image
                            src={`https:${project.thumbnail.fields.file.url}`}
                            alt="banner"
                            layout="fill"
                            priority="true"
                            placeholder="blur"
                            blurDataURL={`https:${project.thumbnail.fields.file.url}`}
                          />
                        </Poster>
                        <Details>
                          <Title>{project.title}</Title>
                          <Wrapper className="text">
                            {project.description.content.map(
                              ({ content }, i) => (
                                <Text key={i} className="medium">
                                  {content[0].value}
                                </Text>
                              )
                            )}
                          </Wrapper>
                          <Text className="xsm">
                            {formatDate(project["date"])}
                          </Text>
                          <Text
                            as="a"
                            className="xsm orange right"
                            href={`https:${project.link?.fields.file.url}`}
                            target="_blank"
                            rel="noreferrer"
                          >
                            Visit wbesite →
                          </Text>
                        </Details>
                      </ProjectBanner>
                      <Details
                        className="member"
                        show={project.showClientReview}
                      >
                        <MemberWraper>
                          <MemberImgWrapper>
                            <MemberImg>
                              <Image
                                src={`https:${project.clientImage.fields.file.url}`}
                                alt="banner"
                                layout="fill"
                                placeholder="blur"
                                blurDataURL={`https:${project.clientImage.fields.file.url}`}
                              />
                            </MemberImg>
                          </MemberImgWrapper>
                          <MemberInfoWrapper>
                            <Title className="medium">
                              {project.clientInfo.name}
                            </Title>
                            <Text className="sm">
                              {project.clientInfo.info}
                            </Text>
                          </MemberInfoWrapper>
                        </MemberWraper>
                        <Text
                          className="medium member"
                          show={project.showClientReview}
                        >
                          {project.showClientReview
                            ? project.clientReview
                            : `${project.clientReview.substring(0, 194)}..."`}
                        </Text>
                        <Text
                          className="orange xsm"
                          as="button"
                          onClick={() => {
                            setProjects({
                              ...projects,
                              science: projects["science"].map((p) =>
                                p.id === project.id
                                  ? {
                                      ...p,
                                      showClientReview: !p.showClientReview,
                                    }
                                  : p
                              ),
                            });
                          }}
                        >
                          {project.showClientReview
                            ? "Read less"
                            : "Read full review"}
                        </Text>
                      </Details>
                      <Details
                        className="member"
                        show={project.showStudentReview}
                      >
                        <MemberWraper>
                          <MemberImgWrapper>
                            {project.studentsPics.map((p, i) => (
                              <MemberImg key={i}>
                                <Image
                                  src={`https:${p.fields.file.url}`}
                                  alt="ant"
                                  layout="fill"
                                  placeholder="blur"
                                  blurDataURL={`https:${p.fields.file.url}`}
                                  objectFit="cover"
                                  objectPosition="center"
                                />
                              </MemberImg>
                            ))}
                          </MemberImgWrapper>
                          <MemberInfoWrapper>
                            <Title className="medium">Students&#160;team</Title>
                            <Text className="sm">
                              {project.studentsInfo.join(", ")}
                            </Text>
                          </MemberInfoWrapper>
                        </MemberWraper>
                        <Text
                          className="medium member"
                          show={project.showStudentReview}
                        >
                          {project.showStudentReview
                            ? project.studentReview
                            : `${project.studentReview.substring(0, 194)}..."`}
                        </Text>
                        <Text
                          className="orange xsm"
                          as="button"
                          onClick={() => {
                            setProjects({
                              ...projects,
                              science: projects["science"].map((p) =>
                                p.id === project.id
                                  ? {
                                      ...p,
                                      showStudentReview: !p.showStudentReview,
                                    }
                                  : p
                              ),
                            });
                          }}
                        >
                          {project.studentReview.length > 194 &&
                            (project.showStudentReview
                              ? "Read less"
                              : "Read full review")}
                        </Text>
                      </Details>
                    </Project>
                  ))}
              </Wrapper>
              <BtnWrapper className="bottom">
                <Button>More projects...</Button>
                <Button className="selected" onClick={() => setForm(true)}>
                  Delegate a task
                </Button>
              </BtnWrapper>
            </List>

            <List index={1} selected={index === 1}>
              <Wrapper className="projects">
                {projects["analysis"] &&
                  projects["analysis"].map((project, i) => (
                    <Project
                      key={project.id}
                      index={i === 0 || i === 1 ? 0 : i}
                      show={showAll}
                    >
                      <ProjectBanner>
                        <Poster>
                          <Image
                            src={`https:${project.thumbnail.fields.file.url}`}
                            alt="banner"
                            layout="fill"
                            priority="true"
                            placeholder="blur"
                            blurDataURL={`https:${project.thumbnail.fields.file.url}`}
                          />
                        </Poster>
                        <Details>
                          <Title>{project.title}</Title>
                          <Wrapper className="text">
                            {project.description.content.map(
                              ({ content }, i) => (
                                <Text key={i} className="medium">
                                  {content[0].value}
                                </Text>
                              )
                            )}
                          </Wrapper>
                          <Text className="xsm">
                            {formatDate(project["date"])}
                          </Text>
                          <Text
                            as="a"
                            className="xsm orange right"
                            href={`https:${project.link?.fields.file.url}`}
                            target="_blank"
                            rel="noreferrer"
                            download
                          >
                            Download presentation →
                          </Text>
                        </Details>
                      </ProjectBanner>
                      <Details
                        className="member"
                        show={project.showClientReview}
                      >
                        <MemberWraper>
                          <MemberImgWrapper>
                            <MemberImg>
                              <Image
                                src={`https:${project.clientImage.fields.file.url}`}
                                alt="banner"
                                layout="fill"
                                placeholder="blur"
                                blurDataURL={`https:${project.clientImage.fields.file.url}`}
                              />
                            </MemberImg>
                          </MemberImgWrapper>
                          <MemberInfoWrapper>
                            <Title className="medium">
                              {project.clientInfo.name}
                            </Title>
                            <Text className="sm">
                              {project.clientInfo.info}
                            </Text>
                          </MemberInfoWrapper>
                        </MemberWraper>
                        <Text
                          className="medium member"
                          show={project.showClientReview}
                        >
                          {project.showClientReview
                            ? project.clientReview
                            : `${project.clientReview.substring(0, 194)}..."`}
                        </Text>
                        <Text
                          className="orange xsm"
                          as="button"
                          onClick={() => {
                            setProjects({
                              ...projects,
                              science: projects["science"].map((p) =>
                                p.id === project.id
                                  ? {
                                      ...p,
                                      showClientReview: !p.showClientReview,
                                    }
                                  : p
                              ),
                            });
                          }}
                        >
                          {project.showClientReview
                            ? "Read less"
                            : "Read full review"}
                        </Text>
                      </Details>
                      <Details
                        className="member"
                        show={project.showStudentReview}
                      >
                        <MemberWraper>
                          <MemberImgWrapper>
                            {project.studentsPics.map((p, i) => (
                              <MemberImg key={i}>
                                <Image
                                  src={`https:${p.fields.file.url}`}
                                  alt="ant"
                                  layout="fill"
                                  placeholder="blur"
                                  blurDataURL={`https:${p.fields.file.url}`}
                                  objectFit="cover"
                                  objectPosition="center"
                                />
                              </MemberImg>
                            ))}
                          </MemberImgWrapper>
                          <MemberInfoWrapper>
                            <Title className="medium">Students&#160;team</Title>
                            <Text className="sm">
                              {project.studentsInfo.join(", ")}
                            </Text>
                          </MemberInfoWrapper>
                        </MemberWraper>
                        <Text
                          className="medium member"
                          show={project.showStudentReview}
                        >
                          {project.showStudentReview
                            ? project.studentReview
                            : `${project.studentReview.substring(0, 194)}..."`}
                        </Text>
                        <Text
                          className="orange xsm"
                          as="button"
                          onClick={() => {
                            setProjects({
                              ...projects,
                              science: projects["science"].map((p) =>
                                p.id === project.id
                                  ? {
                                      ...p,
                                      showStudentReview: !p.showStudentReview,
                                    }
                                  : p
                              ),
                            });
                          }}
                        >
                          {project.studentReview.length > 194 &&
                            (project.showStudentReview
                              ? "Read less"
                              : "Read full review")}
                        </Text>
                      </Details>
                    </Project>
                  ))}
              </Wrapper>
              <BtnWrapper className="bottom">
                <Button>More projects...</Button>
                <Button className="selected" onClick={() => setForm(true)}>
                  Delegate a task
                </Button>
              </BtnWrapper>
            </List>

            <List index={2} selected={index === 2}>
              <Wrapper className="projects">
                {projects["science"] &&
                  projects["science"].map((project, i) => (
                    <Project
                      key={project.id}
                      index={i === 0 || i === 1 ? 0 : i}
                      show={showAll}
                    >
                      <ProjectBanner>
                        <Poster>
                          <Image
                            src={`https:${project.thumbnail.fields.file.url}`}
                            alt="banner"
                            layout="fill"
                            priority="true"
                            placeholder="blur"
                            blurDataURL={`https:${project.thumbnail.fields.file.url}`}
                          />
                        </Poster>
                        <Details>
                          <Title>{project.title}</Title>
                          <Wrapper className="text">
                            {project.description.content.map(
                              ({ content }, i) => (
                                <Text key={i} className="medium">
                                  {content[0].value}
                                </Text>
                              )
                            )}
                          </Wrapper>
                          <Text className="xsm">
                            {formatDate(project["date"])}
                          </Text>
                          <Text
                            as="a"
                            className="xsm orange right"
                            href={`https:${project.link?.fields.file.url}`}
                            target="_blank"
                            rel="noreferrer"
                            download
                          >
                            Download presentation →
                          </Text>
                        </Details>
                      </ProjectBanner>
                      <Details
                        className="member"
                        show={project.showClientReview}
                      >
                        <MemberWraper>
                          <MemberImgWrapper>
                            <MemberImg>
                              <Image
                                src={`https:${project.clientImage.fields.file.url}`}
                                alt="banner"
                                layout="fill"
                                placeholder="blur"
                                blurDataURL={`https:${project.clientImage.fields.file.url}`}
                              />
                            </MemberImg>
                          </MemberImgWrapper>
                          <MemberInfoWrapper>
                            <Title className="medium">
                              {project.clientInfo.name}
                            </Title>
                            <Text className="sm">
                              {project.clientInfo.info}
                            </Text>
                          </MemberInfoWrapper>
                        </MemberWraper>
                        <Text
                          className="medium member"
                          show={project.showClientReview}
                        >
                          {project.showClientReview
                            ? project.clientReview
                            : `${project.clientReview.substring(0, 194)}..."`}
                        </Text>
                        <Text
                          className="orange xsm"
                          as="button"
                          onClick={() => {
                            setProjects({
                              ...projects,
                              science: projects["science"].map((p) =>
                                p.id === project.id
                                  ? {
                                      ...p,
                                      showClientReview: !p.showClientReview,
                                    }
                                  : p
                              ),
                            });
                          }}
                        >
                          {project.showClientReview
                            ? "Read less"
                            : "Read full review"}
                        </Text>
                      </Details>
                      <Details
                        className="member"
                        show={project.showStudentReview}
                      >
                        <MemberWraper>
                          <MemberImgWrapper>
                            {project.studentsPics.map((p, i) => (
                              <MemberImg key={i}>
                                <Image
                                  src={`https:${p.fields.file.url}`}
                                  alt="ant"
                                  layout="fill"
                                  placeholder="blur"
                                  blurDataURL="/images/ant.png"
                                  objectFit="cover"
                                  objectPosition="center"
                                />
                              </MemberImg>
                            ))}
                          </MemberImgWrapper>
                          <MemberInfoWrapper>
                            <Title className="medium">Students&#160;team</Title>
                            <Text className="sm">
                              {project.studentsInfo.join(", ")}
                            </Text>
                          </MemberInfoWrapper>
                        </MemberWraper>
                        <Text
                          className="medium member"
                          show={project.showStudentReview}
                        >
                          {project.showStudentReview
                            ? project.studentReview
                            : `${project.studentReview.substring(0, 194)}..."`}
                        </Text>
                        <Text
                          className="orange xsm"
                          as="button"
                          onClick={() => {
                            setProjects({
                              ...projects,
                              science: projects["science"].map((p) =>
                                p.id === project.id
                                  ? {
                                      ...p,
                                      showStudentReview: !p.showStudentReview,
                                    }
                                  : p
                              ),
                            });
                          }}
                        >
                          {project.studentReview.length > 194 &&
                            (project.showStudentReview
                              ? "Read less"
                              : "Read full review")}
                        </Text>
                      </Details>
                    </Project>
                  ))}
              </Wrapper>
              <BtnWrapper className="bottom">
                <Button onClick={() => setShow(!showAll)}>
                  {showAll ? "Less projects" : "More projects..."}
                </Button>
                <Button className="selected" onClick={() => setForm(true)}>
                  Delegate a task
                </Button>
              </BtnWrapper>
            </List>
          </ProjectsSlider>
        </ProjectsContainer>
      </Main>
    </Container>
  );
}

export default Projects;
