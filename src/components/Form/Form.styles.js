import styled from "styled-components";

export const Main = styled.div`
  position: fixed;
  z-index: 1;
  background: rgba(0, 0, 0, 0.6);
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: grid;
  overflow: auto;
  height: 100vh;
  opacity: ${(props) => (props.open ? 1 : 0)};
  visibility: ${(props) => (props.open ? "visible" : "hidden")};
  transition: all 0.3s;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Section = styled.div`
  display: grid;
  padding: 80px 10px;
  grid-template-columns: 1fr;
  justify-items: center;

  @media screen and (max-width: 768px) {
      padding: 20px 10px;
  }
`;

export const Container = styled.div`
  position: relative;
  max-width: 827px;
  width: 100%;
  background: #ffffff;
  border-radius: 14px;
  overflow: hidden;
  padding: 60px 100px;
  display: grid;
  gap: 60px;
  height: min-content;

  @media screen and (max-width: 768px) {
    padding: 20px 10px 40px;
    max-width: 640px;
    gap: 40px;
  }
`;

export const Text = styled.p`
  font-family: "Suisse Intl";
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 40px;
  color: #000000;

  &.label {
    font-size: 20px;
    line-height: 30px;
  }

  @media screen and (max-width: 768px) {
    max-width: max(75%, 230px);
    font-size: 24px;
    line-height: 36px;

    &.label {
      font-size: 16px;
      line-height: 30px;
    }
  }
`;

export const FormContainer = styled.form`
  display: grid;
  gap: 40px;

  @media screen and (max-width: 768px) {
      gap: 24px;
  }
`;

export const Wrapper = styled.fieldset`
  display: grid;
  gap: 12px;

  @media screen and (max-width: 768px) {
    gap: 10px;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 16px 20px;
  font-family: "Suisse Intl";
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 30px;
  border: 1px solid #000000;
  box-sizing: border-box;
  border-radius: 8px;
  color: #0a0a0a;

  :focus {
    box-shadow: 0 0 0 1.5px black inset;
  }
  &::placeholder {
    color: #616161;
  }

  @media screen and (max-width: 768px) {
    padding: 10px;
    font-size: 16px;
  }
`;

export const TextArea = styled.textarea`
  resize: none;
  max-width: 627px;
  height: 152px;
  border: 1px solid #000000;
  box-sizing: border-box;
  border-radius: 8px;
  padding: 16px 20px;
  font-family: "Suisse Intl";
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 30px;
  color: #0a0a0a;

  :focus {
    box-shadow: 0 0 0 1.5px black inset;
  }
  &::placeholder {
    color: #616161;
  }

  @media screen and (max-width: 768px) {
    padding: 10px;
    font-size: 16px;
    line-height: 20px;
    height: 100px;
  }
`;

export const Button = styled.button`
  width: 200px;
  height: 70px;
  background: #ff9900;
  border: 2px solid #ff9900;
  box-sizing: border-box;
  border-radius: 40px;
  font-family: "Suisse Intl";
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 32px;
  color: #ffffff;
  margin-left: auto;
  margin-top: 20px;
  display: grid;
  place-items: center;

  @media screen and (max-width: 768px) {
      margin: 16px auto 0;
      font-size: 20px;
      height: 60px;
      max-width: 480px;
      width: 100%;
  }
`;

export const Icon = styled.button`
  position: absolute;
  width: 32px;
  height: 32px;
  top: 25px;
  right: 25px;
  ::before {
    content: "";
    position: absolute;
    display: block;
    background-color: black;
    width: 100%;
    height: 2px;
    top: calc(50% - 1px);
    left: 0;
    transform: rotate(45deg);
    transform-origin: center;
  }
  ::after {
    content: "";
    position: absolute;
    display: block;
    background-color: black;
    width: 100%;
    height: 2px;
    top: calc(50% - 1px);
    left: 0;
    transform: rotate(-45deg);
    transform-origin: center;
  }

  @media screen and (max-width: 768px) {
    right: 10px;
  }
`;
