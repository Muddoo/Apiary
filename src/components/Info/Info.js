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

function Info({ title, subtitle, background, cards = [], children }) {
  function createMarkup(markup) {
    return { __html: markup };
  }

  return (
    <Container background={background}>
      <Main background={background}>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
        <CardsList>
          {cards.map((card, i) => (
            <Card key={i} selected={card.selected}>
              <CardImg>
                <Image
                  src={card.img}
                  alt={card.title}
                  layout="fill"
                  objectFit="contain"
                  priority="true"
                  quality={25}
                />
              </CardImg>
              <CardBody>
                <CardTitle>{card.title}</CardTitle>
                <CardText dangerouslySetInnerHTML={createMarkup(card.text)} />
              </CardBody>
            </Card>
          ))}
          {/* <Card selected={true}>
            <CardImg>
              <Image
                src="/images/resource.png"
                alt="Hero Image"
                layout="fill"
                objectFit="contain"
                priority="true"
                quality={25}
              />
            </CardImg>
            <CardBody>
              <CardTitle>Resource saving</CardTitle>
              <CardText>
                Delegate tasks for free and get results that can be used in your
                future work.
              </CardText>
            </CardBody>
          </Card>
          <Card>
            <CardImg>
              <Image
                src="/images/publicize.png"
                alt="Hero Image"
                layout="fill"
                objectFit="contain"
                priority="true"
                quality={25}
              />
            </CardImg>
            <CardBody>
              <CardTitle>Publicize</CardTitle>
              <CardText>
                We take pride in the real-world value of the tasks that our
                students perform and we share them in all available channels.
              </CardText>
            </CardBody>
          </Card>
          <Card>
            <CardImg>
              <Image
                src="/images/boost.png"
                alt="Hero Image"
                layout="fill"
                objectFit="contain"
                priority="true"
                quality={25}
              />
            </CardImg>
            <CardBody>
              <CardTitle>PR boost</CardTitle>
              <CardText>
                This will increase the visibility of the&#160;company&#160;among&#160;job
                seekers and attract those who share the values<br />of&#160;your&#160;company.
              </CardText>
            </CardBody>
          </Card> */}
        </CardsList>
      </Main>
    </Container>
  );
}

export default Info;
