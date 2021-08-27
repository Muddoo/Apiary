import {
  FooterContainer,
  Main,
  Wrapper,
  Text,
  TextBlack,
} from "./Footer.styles.js";

function Footer() {
  return (
    <FooterContainer id="contact">
      <Main>
        <Text order="-2" as="a" href="#about">
          About us
        </Text>
        <Wrapper>
          <Text as="a" href="mailto:msgordienko@yandex-team.com">
            msgordienko@yandex-team.com
          </Text>
          <Text
            as="a"
            href="https://www.linkedin.com/in/ahmed-eldemerdash-8237aa1a6/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </Text>
          <Text as="a" href="tel:+1-510-646-62-5">
            +1-510-646-62-5
          </Text>
        </Wrapper>
        <TextBlack>
          This website is developed by Practicum by Yandex’ students
        </TextBlack>
        <Text as="a" href="#" order="-1" justify="end">
          Back to top ↑
        </Text>
        <Text order="1" align="end" justify="end">
          © 2020 Practicum by Yandex
        </Text>
      </Main>
    </FooterContainer>
  );
}

export default Footer;
