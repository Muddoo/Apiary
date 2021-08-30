import { Container } from "../Container/Container.styles.js";
import { Main, Wrapper, Text, Img, List, Card } from "./Banner.styles.js";
import Image from "next/image";

function Banner({ title, text }) {
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
              src="/images/web.png"
              alt="web"
              layout="fill"
              priority="true"
              quality={25}
              objectFit="cover"
            />
          </Img>
        </Wrapper>
        <List>
          <Card>
            <Text className="large orange">1</Text>
            <Text className="sm center">
              Create a one page website from scratch
            </Text>
            <Text className="xsm center">
              We can create a landing page for a new project or refresh an
              existing one
            </Text>
          </Card>
          <Card>
            <Text className="large orange">2</Text>
            <Text className="sm center">We make up your website design</Text>
            <Text className="xsm center">
              If you already have a website design, we will gladly prepare an
              adaptive layout.
            </Text>
          </Card>
          <Card>
            <Text className="large orange">3</Text>
            <Text className="sm center">
              Let's create a complex multi-page website for the project
            </Text>
            <Text className="xsm center">
              We are able to work on highly complex websites with deeply nested
              pages.
            </Text>
          </Card>
        </List>
      </Main>
    </Container>
  );
}

export default Banner;
