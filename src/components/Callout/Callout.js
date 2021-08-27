import { Main, Container, Text, Button } from "./Callout.styles.js";

function Callout({ open, setCallout }) {
  return (
    <Main open={open}>
      <Container>
        <Text>
          Thank you for contacting us, Tim Cook from Apple Inc.! We’ll reach out
          to you in email as soon as possible. Looking forward to work together!
        </Text>
        <Button onClick={() => setCallout(false)}>Done</Button>
      </Container>
    </Main>
  );
}

export default Callout;
