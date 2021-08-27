import { Container } from "../Container/Container.styles.js";
import { Main } from "../Info/Info.styles.js";
import {
  Title,
  CardsList,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  Number,
  Button,
} from "./Start.styles";
import Image from "next/image";

function Start({ mode = "light", setForm }) {
  return (
    <Container mode={mode} id="start">
      <Main>
        <Title mode={mode}>How to start?</Title>
        <CardsList>
          <Card>
            <CardImg>
              <Image
                src="/images/checklist.png"
                alt="Hero Image"
                layout="fill"
                objectFit="cover"
                quality={25}
                // priority="true"
                placeholder="blur"
                blurDataURL="/images/checklist.png"
              />
            </CardImg>
            <CardBody>
              <CardTitle>Fill in the checklist</CardTitle>
              <CardText>
                So that we can understand your request and how we can help you
              </CardText>
              <Number>1</Number>
            </CardBody>
          </Card>
          <Card selected={true}>
            <CardImg>
              <Image
                src="/images/detail.png"
                alt="Hero Image"
                layout="fill"
                objectFit="cover"
                quality={25}
                // priority="true"
                placeholder="blur"
                blurDataURL="/images/detail.png"
              />
            </CardImg>
            <CardBody>
              <CardTitle>
                We will clarify the details and connect the necessary experts
              </CardTitle>
              <CardText>
                We will help you formulate the request so that it's
                understandable to our students, and you will receive a
                high&#8209;quality solution in a timely manner
              </CardText>
              <Number>2</Number>
            </CardBody>
          </Card>
          <Card>
            <CardImg>
              <Image
                src="/images/work.png"
                alt="Hero Image"
                layout="fill"
                objectFit="cover"
                quality={25}
                // priority="true"
                placeholder="blur"
                blurDataURL="/images/work.png"
              />
            </CardImg>
            <CardBody>
              <CardTitle>We will start solving your tasks</CardTitle>
              <CardText>
                Practicum by Yandex students will solve the task, then our
                curators check and correct their solutions. We'll send you the
                work. Additionally, if you wish, you may talk to the authors of
                the best solutions and invite them to join you
              </CardText>
              <Number>3</Number>
            </CardBody>
          </Card>
        </CardsList>
        <Button onClick={() => setForm(true)}>Delegate a task</Button>
      </Main>
    </Container>
  );
}

export default Start;
