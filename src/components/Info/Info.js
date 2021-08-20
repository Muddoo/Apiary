import { Container } from "../Container/Container.styles.js";
import {
  Main,
  Title,
  Subtitle,
  CardsList,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
} from "./Info.styles";
import Image from "next/image";

function Info({ title, subtitle, cards = [], mode }) {
  function createMarkup(markup) {
    return { __html: markup };
  }

  return (
    <Container mode={mode}>
      <Main>
        <Title mode={mode} dangerouslySetInnerHTML={createMarkup(title)} />
        <Subtitle mode={mode}> {subtitle} </Subtitle>
        <CardsList>
          {cards.map((card, i) => (
            <Card key={i} mode={mode} selected={card.selected}>
              <CardImg mode={mode}>
                <Image
                  src={card.img}
                  alt={card.title}
                  layout="fill"
                  objectFit={mode ? "cover" : "contain"}
                  quality={25}
                  //   priority="true"
                  placeholder="blur"
                  blurDataURL={card.img}
                />
              </CardImg>
              <CardBody mode={mode}>
                <CardTitle mode={mode}>{card.title}</CardTitle>
                <CardText
                  mode={mode}
                  dangerouslySetInnerHTML={createMarkup(card.text)}
                />
              </CardBody>
            </Card>
          ))}
          {/* <Card selected={true} mode={mode}>
            <CardImg mode={mode}>
              <Image
                src="/images/web.png"
                alt="Hero Image"
                layout="fill"
                objectFit={mode ? "cover" : "contain"}
                priority="true"
                quality={25}
              />
            </CardImg>
            <CardBody mode={mode}>
              <CardTitle mode={mode}>Web development</CardTitle>
              <CardText mode={mode}>#programing</CardText>
            </CardBody>
          </Card>
          <Card mode={mode}>
            <CardImg mode={mode}>
              <Image
                src="/images/analysis.png"
                alt="Hero Image"
                layout="fill"
                objectFit={mode ? "cover" : "contain"}
                priority="true"
                quality={25}
              />
            </CardImg>
            <CardBody mode={mode}>
              <CardTitle mode={mode}>Data analysis</CardTitle>
              <CardText mode={mode}>#analysis</CardText>
            </CardBody>
          </Card>
          <Card mode={mode}>
            <CardImg mode={mode}>
              <Image
                src="/images/science.png"
                alt="Hero Image"
                layout="fill"
                objectFit={mode ? "cover" : "contain"}
                priority="true"
                quality={25}
              />
            </CardImg>
            <CardBody mode={mode}>
              <CardTitle mode={mode}>Data science</CardTitle>
              <CardText mode={mode}>#analysis</CardText>
            </CardBody>
          </Card> */}
        </CardsList>
      </Main>
    </Container>
  );
}

export default Info;
