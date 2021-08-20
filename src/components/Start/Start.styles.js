import styled from "styled-components";
import { Title as GTitle } from "../Info/Info.styles.js";

export const Title = styled(GTitle)`
  margin-bottom: 20px;
  @media screen and (max-width: 1024px) {
    margin-bottom: 70px;
  }
  @media screen and (max-width: 868px) {
    text-align: center;
    margin-bottom: 0;
  }
`;

export const CardsList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  align-items: start;
  row-gap: 50px;
  column-gap: 70px;

  @media screen and (max-width: 868px) {
    grid-template-columns: 1fr;
    justify-items: center;
  }
`;

export const Card = styled.div`
  display: grid;
  gap: 20px;
  width: 100%;
  grid-row: ${(props) => props.selected && "span 2"};
  grid-auto-rows: max-content;
  :nth-of-type(1n) {
    --left: calc(100% + 35px);
    --translate: translateX(-50%);
  }
  :nth-of-type(2n) {
    --left: auto;
    --right: calc(100% + 35px);
    --translate: translateX(50%);
    align-self: center;

    & .number::before {
      content: "";
      position: absolute;
      width: 2px;
      height: 100px;
      background-color: #616161;
      bottom: calc(100% + 10px);
      left: 50%;
      transform: translateX(-50%);
    }
    & .number::after {
      content: "";
      position: absolute;
      width: 2px;
      height: 100px;
      background-color: #616161;
      top: calc(100% + 10px);
      left: 50%;
      transform: translateX(-50%);
    }
  }
  :nth-of-type(1) {
    & .text {
      max-width: 470px;
    }
    & .number::after {
      content: "";
      position: absolute;
      width: 2px;
      height: 100px;
      background-color: #616161;
      top: calc(100% + 10px);
      left: 50%;
      transform: translateX(-50%);
    }
  }
  :nth-of-type(3) {
    & .number::after {
      content: "";
      position: absolute;
      width: 2px;
      height: 100px;
      background-color: #616161;
      bottom: calc(100% + 10px);
      left: 50%;
      transform: translateX(-50%);
    }
  }

  @media screen and (max-width: 868px) {
    gap: 66px;
    max-width: 320px;

    :nth-of-type(n) {
      --left: 50%;
      --translate: translateX(-50%);
      & .number {
        top: auto;
        bottom: calc(100% + 16px);
      }
      & .number::after,
      & .number::before {
        display: none;
      }
    }
  }
`;

export const CardImg = styled.div`
  position: relative;
  max-width: 260px;
  width: 100%;
  height: 186px;
  justify-self: center;
`;

export const CardBody = styled.div`
  position: relative;
  display: grid;
  grid-auto-rows: min-content;
  gap: 30px;

  @media screen and (max-width: 768px) {
    gap: 12px;
  }
`;

export const CardTitle = styled.p`
  font-family: "Suisse Intl";
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 40px;
  text-align: center;
  color: #000000;

  @media screen and (max-width: 768px) {
    font-size: 24px;
    line-height: 30px;
  }
`;

export const CardText = styled.div.attrs({ className: "text" })`
  font-family: "Suisse Intl";
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 30px;
  text-align: center;
  color: #616161;
  margin: 0 auto;
  max-width: 560px;

  @media screen and (max-width: 768px) {
    font-size: 16px;
    line-height: 20px;
  }
`;

export const Number = styled.p.attrs({ className: "number" })`
  width: 40px;
  height: 40px;
  background: #ff9900;
  border-radius: 50%;
  display: grid;
  place-items: center;
  font-family: "Suisse Intl";
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 30px;
  color: #ffffff;
  position: absolute;
  top: 0;
  left: var(--left);
  right: var(--right);
  transform: var(--translate);

  @media screen and (max-width: 1024px) {
  }
`;

export const Button = styled.button`
  position: relative;
  max-width: 293px;
  width: 100%;
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
  display: grid;
  place-items: center;
  margin: 100px auto 0;
  transition: all 0.3s;

  @media screen and (max-width: 868px) {
    margin-top: 60px;
  }
`;
