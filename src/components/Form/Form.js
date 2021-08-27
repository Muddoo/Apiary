import {
  Main,
  Section,
  Container,
  Text,
  FormContainer,
  Icon,
  Wrapper,
  Input,
  TextArea,
  Button,
} from "./Form.styles.js";

function Form({ open, setForm }) {
  return (
    <Main open={open}>
      <Section onClick={(e) => e.target === e.currentTarget && setForm(false)}>
        <Container>
          <Icon
            type="button"
            aria-label="close-form"
            onClick={() => setForm(false)}
          />
          <Text>Delegate us your task! Fill in this form!</Text>
          <FormContainer
            onSubmit={(e) => {
              e.preventDefault();
              setForm(false);
            }}
          >
            <Wrapper>
              <Text as="label" htmlFor="name" className="label">
                Your company name *
              </Text>
              <Input
                placeholder="Company Name"
                type="text"
                id="name"
                name="name"
                required
              />
            </Wrapper>
            <Wrapper>
              <Text as="label" className="label" htmlFor="email">
                Your email *
              </Text>
              <Input
                placeholder="email@email.com"
                type="email"
                id="email"
                name="email"
                required
              />
            </Wrapper>
            <Wrapper>
              <Text as="label" className="label" htmlFor="task">
                Describe your task
              </Text>
              <TextArea placeholder="We want to..." name="task" id="task" />
            </Wrapper>
            <Wrapper>
              <Text as="label" className="label" htmlFor="client">
                How can we call you?
              </Text>
              <Input
                placeholder="My name is"
                type="text"
                name="client"
                id="client"
              />
            </Wrapper>
            <Button typeof="Submit">Submit</Button>
          </FormContainer>
        </Container>
      </Section>
    </Main>
  );
}

export default Form;
