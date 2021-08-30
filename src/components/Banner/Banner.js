import { Container } from "../Container/Container.styles.js";
import { Main, Wrapper, Text, Img, List, Card } from "./Banner.styles.js";
import Image from "next/image";

function Banner({ title, text, src, cards }) {
  function createMarkup(markup) {
    return { __html: markup };
  }

  return (
    <Container mode="light">
      <Main>
        <Wrapper>
          <Wrapper className="text">
            <Text dangerouslySetInnerHTML={createMarkup(title)} />
            <Text
              className="medium"
              dangerouslySetInnerHTML={createMarkup(text)}
            />
          </Wrapper>
          <Img>
            <Image
              src={src}
              alt="hero img"
              layout="fill"
              priority="true"
              quality={25}
              objectFit="cover"
            />
          </Img>
        </Wrapper>
        <List>
          {cards.map((c, i) => (
            <Card>
              <Text className="large orange">{c.number}</Text>
              <Text className="sm center">{c.title}</Text>
              <Text className="xsm center">{c.text}</Text>
            </Card>
          ))}
        </List>
      </Main>
    </Container>
  );
}

export default Banner;
