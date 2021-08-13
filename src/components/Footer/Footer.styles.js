import styled from "styled-components";
import { Container } from "../Container/Container.styles.js";

export const FooterContainer = styled(Container)`
  background: #1a1b22;
`;

export const Main = styled.div`
  position: relative;
  padding-top: 80px;
  padding-bottom: 60px;
  display: grid;
  grid-template-columns: max-content 1fr max-content;
  grid-template-rows: auto auto;
  gap: 20px 25px;
  @media screen and (max-width: 868px) {
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: max-content;
    gap: 60px 0;
    padding: 40px 0;
    max-width: 600px;
    margin: auto;
  }
`;

export const Wrapper = styled.div`
  display: grid;
  gap: 0;
  grid-column: 1;
  @media screen and (max-width: 868px) {
    gap: 10px;
    justify-items: center;
    width: 100%;
    grid-column: span 2;
  }
`;

export const Text = styled.p`
  font-family: "Suisse Intl";
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 30px;
  color: #dddddd;
  align-self: ${(props) => props.align || ""};
  justify-self: ${(props) => props.justify || ""};
  order: ${(props) => props.order || ""};

  @media screen and (max-width: 1135px) {
    font-size: 18px;
  }
  @media screen and (max-width: 868px) {
    grid-column: ${(props) => props.order === "1" && "span 2"};
    justify-self: ${(props) => props.order === "1" && "center"};
  }
`;

export const TextBlack = styled(Text)`
  position: relative;
  color: #000;
  background: white;
  border-radius: 14px;
  max-width: 348px;
  min-height: 92px;
  height: max-content;
  padding: 16px 32px;
  justify-self: center;
  margin-top: 14px;
  grid-column: 2;
  grid-row: 1 / span 2;
  cursor: pointer;


  ::after {
    content: "Student Name, Student Name, Student Name, Student Name";
    padding: 20px 16px;
    font-family: "Suisse Intl";
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    color: #ffffff;
    background: #ff9900;
    border-radius: 14px 14px 14px 0px;
    position: absolute;
    left: calc(100% - 32px);
    bottom: calc(100% - 15px);
    width: 329px;
    box-sizing: border-box;
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transition: all .3s;
  }

  :hover::after {
    opacity: 1;
    visibility: visible;
  }

  @media screen and (max-width: 1135px) {
    font-size: 20px;
    ::after {
        left: 70%;
    }
  }
  @media screen and (max-width: 990px) {
    height: 100%;
    margin: 0;
    display: grid;
    place-items: center;
    text-align: center;
    padding: 8px 32px;
  }
  @media screen and (max-width: 868px) {
    grid-column: 1 / span 2;
    grid-row: 3;
    font-size: 18px;
    padding: 16px;
    min-width: 300px;
    ::after {
        left: 30%;
        width: 50%;
    }
  }
`;
