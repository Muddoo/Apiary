import styled, { css } from "styled-components";

export const Main = styled.section`
  padding-top: 100px;
  padding-bottom: 100px;
  background-color: ${(props) => (props.mode ? "white" : "#1A1B22")};
  color: ${(props) => props.color || "white"};

  @media screen and (max-width: 768px) {
    padding: 60px 0;
  }
`;

export const Title = styled.h2`
  font-family: "Suisse Intl";
  font-style: normal;
  font-weight: normal;
  font-size: 48px;
  line-height: 56px;
  color: ${(props) => (props.mode ? "black" : "white")};
  text-align: center;

  @media screen and (max-width: 768px) {
    position: relative;
    font-size: 34px;
    line-height: 39px;
    text-align: left;
    max-width: 527px;
    margin: auto;

    ${(props) =>
      props.mode &&
      css`
        font-size: 32px;
        line-height: 37px;
      `}
  }
`;

export const Subtitle = styled.p`
  font-family: "Suisse Intl";
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 40px;
  text-align: center;
  color: ${(props) => (props.mode ? "#616161" : "#dddddd")};
  max-width: 840px;
  margin: 40px auto 80px;

  @media screen and (max-width: 768px) {
    font-size: 20px;
    line-height: 30px;
    margin: 32px auto 118px;
    text-align: left;
    max-width: 527px;
  }
`;

export const CardsList = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;

  @media screen and (max-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: min-content;
    row-gap: 80px;
    column-gap: 40px;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.div`
  position: relative;
  max-width: 400px;
  display: grid;
  gap: 40px;
  grid-auto-rows: min-content;
  flex: 1;
  ${(props) =>
    props.mode &&
    css`
      height: 400px;
      align-content: space-between;
      grid-auto-rows: 1fr;
      gap: 0;
      background: #ffffff;
      box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
      border-radius: 10px;
      cursor: pointer;
      transition: all 0.4s;
      :hover {
        transform: scale(1.08);
        transform-style: preserve-3d;
        box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.5);
        z-index: 1;
      }
    `}

  @media screen and (max-width: 1024px) {
    max-width: min(44.5vw, 452px);
    width: 100%;
    grid-column: ${(props) => props.selected && "span 2"};
    justify-self: ${(props) => props.selected && "center"};

    ${(props) =>
      props.mode &&
      css`
        :hover {
          transform: scale(1.05);
        }
      `}
  }

  @media screen and (max-width: 768px) {
    gap: 30px;
    width: 100%;
    max-width: 452px;
    grid-column: span 1;
    justify-self: center;

    ${(props) =>
      props.mode &&
      css`
        gap: 0;
        max-width: 425px;
        height: 266px;
        transform: scale(1.045, 1);
        :hover {
          transform: scale(1.045, 1);
          box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
        }
      `}
  }
`;

export const CardImg = styled.div`
  position: relative;
  width: max(70%, 248px);
  height: 185px;
  margin: auto;
  ${(props) =>
    props.mode &&
    css`
      order: 1;
      height: 281px;
      width: 100%;
    `}

  @media screen and (max-width: 768px) {
    ${(props) =>
      props.mode &&
      css`
        height: 166px;
        width: min(100%, 320px);
      `}
  }
`;

export const CardBody = styled.div`
  display: grid;
  gap: 24px;

  ${(props) =>
    props.mode &&
    css`
      gap: 10px;
      align-content: center;
      grid-auto-rows: min-content;
    `}

  @media screen and (max-width: 768px) {
    ${(props) =>
      props.mode &&
      css`
        gap: 5px;
      `}
  }
`;

export const CardTitle = styled.p`
  font-family: "Suisse Intl";
  font-style: normal;
  font-weight: normal;
  font-size: 32px;
  line-height: 37px;
  text-align: center;
  color: #ff9900;

  ${(props) =>
    props.mode &&
    css`
      order: 1;
      font-size: 30px;
      line-height: 40px;
      color: black;
    `}

  @media screen and (max-width: 768px) {
    ${(props) =>
      props.mode &&
      css`
        font-size: 24px;
        line-height: 30px;
      `}
  }
`;

export const CardText = styled.p`
  font-family: "Suisse Intl";
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 30px;
  text-align: center;
  color: #dddddd;

  ${(props) =>
    props.mode &&
    css`
      font-size: 16px;
      line-height: 20px;
      color: #ff9900;
    `}

  @media screen and (max-width: 768px) {
    ${(props) =>
      props.mode &&
      css`
        font-size: 16px;
        line-height: 20px;
      `}
  }
`;
