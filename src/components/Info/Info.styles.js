import styled from "styled-components";

export const Main = styled.section`
  padding-top: 100px;
  padding-bottom: 100px;
  background-color: ${(props) => props.background || "white"};
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
  color: white;
  text-align: center;

  @media screen and (max-width: 768px) {
    position: relative;
    font-size: 34px;
    line-height: 39px;
    text-align: left;
    max-width: 527px;
    margin: auto;
  }
`;

export const Subtitle = styled.p`
  font-family: "Suisse Intl";
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 40px;
  text-align: center;
  color: #dddddd;
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

  @media screen and (max-width: 1024px) {
    max-width: 452px;
    max-width: min(44.5vw, 452px);
    grid-column: ${(props) => props.selected && "span 2"};
    justify-self: ${(props) => props.selected && "center"};
  }

  @media screen and (max-width: 768px) {
    gap: 30px;
    width: 100%;
    max-width: 452px;
    grid-column: span 1;
    justify-self: center;
  }
`;

export const CardImg = styled.div`
  position: relative;
  width: max(70%, 248px);
  height: 185px;
  margin: auto;
`;

export const CardBody = styled.div`
  display: grid;
  gap: 24px;
`;

export const CardTitle = styled.p`
  font-family: "Suisse Intl";
  font-style: normal;
  font-weight: normal;
  font-size: 32px;
  line-height: 37px;
  text-align: center;
  color: #ff9900;
`;

export const CardText = styled.p`
  font-family: "Suisse Intl";
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 30px;
  text-align: center;
  color: #dddddd;
`;
