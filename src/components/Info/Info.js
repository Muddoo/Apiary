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
import Link from "next/link";

function Info({ title, subtitle, cards = [], mode, id }) {
  function createMarkup(markup) {
    return { __html: markup };
  }

  return (
    <Container mode={mode} id={id}>
      <Main>
        <Title mode={mode} dangerouslySetInnerHTML={createMarkup(title)} />
        <Subtitle mode={mode}> {subtitle} </Subtitle>
        <CardsList mode={mode}>
          {mode
            ? cards.map((card, i) => (
                <Link key={i} href={card.link}>
                  <Card mode={mode} selected={card.selected}>
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
                </Link>
              ))
            : cards.map((card, i) => (
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
        </CardsList>
      </Main>
    </Container>
  );
}

export default Info;
