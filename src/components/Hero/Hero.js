import { Container } from "../Container/Container.styles";
import { Main, Wrapper, Text, Span, Button, Img } from "./Hero.styles.js";
import Image from "next/image";

function Hero({ menu }) {
  return (
    <Container mode="light">
      <Main>
        <Wrapper>
          <Text>
            Your task. Done&#160;by&#160;data&#160;and web development students.
            <br />
            <Span>For free!</Span>
          </Text>
          <Button menu={menu}>Delegate a task</Button>
        </Wrapper>
        <Img>
          <Image
            src="/images/hero.png"
            alt="Hero Image"
            layout="fill"
            priority="true"
            quality={25}
            placeholder="blur"
            blurDataURL="/images/hero.png"
          />
        </Img>
      </Main>
    </Container>
  );
}

export default Hero;
