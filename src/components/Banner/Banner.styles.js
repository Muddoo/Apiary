import styled from "styled-components";

export const Main = styled.div`
  display: grid;
  gap: 100px;
  padding-top: 182px;
  padding-bottom: 100px;

  @media screen and (max-width: 768px) {
    padding-top: 92px;
    padding-bottom: 42px;
    gap: 50px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;

  &.text {
    flex-direction: column;
    gap: 40px;
    justify-content: flex-end;
    flex: 1 0 480px;
    margin-top: 75px;
  }

  @media screen and (max-width: 768px) {
    gap: 32px;
    flex-direction: column-reverse;

    &.text {
      gap: 32px;
      margin: 0;
      flex: 1;
      max-width: 550px;
      margin: auto;
    }
  }
`;

export const Text = styled.p`
  font-family: "Suisse Intl";
  font-style: normal;
  font-weight: normal;
  font-size: 48px;
  line-height: 56px;
  color: #000000;
  max-width: 620px;

  &.large {
    font-weight: bold;
    font-size: 68px;
    line-height: 79px;
  }

  &.medium {
    font-size: 30px;
    line-height: 35px;
    max-width: 840px;
  }

  &.sm {
    font-size: 24px;
    line-height: 28px;
    padding: 0 9px;
  }

  &.xsm {
    font-size: 20px;
    line-height: 23px;
  }

  &.orange {
    color: #ff9900;
  }

  &.center {
    text-align: center;
  }

  @media screen and (max-width: 1024px) {
    font-size: 44px;

    &.medium {
      font-size: 24px;
    }
  }

  @media screen and (max-width: 768px) {
    font-size: 34px;
    line-height: 39px;

    &.large {
      font-size: 48px;
      line-height: 56px;
    }

    &.medium {
      font-size: 20px;
      line-height: 30px;
    }

    &.xsm {
      font-size: 16px;
      line-height: 20px;
    }
  }
`;

export const Img = styled.div`
  position: relative;
  width: 300px;
  height: 250px;
  min-width: 230px;

  @media screen and (max-width: 768px) {
    width: calc(100vw * (200 / 320));
    min-width: auto;
    height: 162px;
    height: calc(100vw * (162 / 320));
    align-self: center;
  }
`;

export const List = styled.div`
  display: flex;
  gap: 40px;
  justify-content: space-between;

  @media screen and (max-width: 1125px) {
    display: grid;
    grid-template-columns: auto auto;
    grid-auto-rows: 1fr;
    gap: 25px;
    justify-items: center;
    justify-content: center;

    & > :first-child {
      grid-column: span 2;
    }
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-auto-rows: min-content;
    gap: 20px;
    transform: scale(1.045);

    & > :first-child {
      grid-column: span 1;
    }
  }
`;

export const Card = styled.div`
  max-width: 400px;
  min-height: 348px;
  background: #ffffff;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  flex: 1;
  padding: 30px 20px;
  display: grid;
  gap: 16px;
  grid-template-rows: min-content 1fr 1.75fr;
  justify-items: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    gap: 10px;
    min-height: 265px;
    padding: 30px 16px;
    grid-auto-rows: min-content;
    grid-template-rows: min-content;

    & > :not(:first-child) {
      padding: 15px 0 0;
    }
  }
`;
