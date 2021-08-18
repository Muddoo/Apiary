import styled from "styled-components";

export const Main = styled.div`
  position: relative;
  min-height: 725px;
  display: flex;
  justify-content: space-between;
  padding-top: 147px;
  padding-bottom: 48px;

  @media screen and (max-width: 1024px) {
    padding-top: 167px;
    padding-bottom: 32px;
  }

  @media screen and (max-width: 868px) {
    padding-top: 92px;
    padding-bottom: 160px;
    display: grid;
    grid-template-columns: 1fr;
    gap: 30px;
    justify-items: center;
  }
`;

export const Wrapper = styled.div`
  display: grid;
  gap: 60px;
  flex: 1;
  align-content: center;
  max-width: 620px;
  min-width: 612px;

  @media screen and (max-width: 1024px) {
    height: max-content;
  }
  @media screen and (max-width: 868px) {
    min-width: calc(612 / 868 * 1vw);
    max-width: 444px;
    min-width: auto;
  }
`;

export const Text = styled.h1`
  font-family: "Suisse Intl";
  font-style: normal;
  font-weight: normal;
  font-size: 48px;
  line-height: 56px;
  color: #000000;

  @media screen and (max-width: 868px) {
    font-size: 34px;
    line-height: 39px;
  }
`;

export const Span = styled.span`
  color: #ff9900;
`;

export const Button = styled.button`
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
  width: 293px;
  height: 70px;

  @media screen and (max-width: 868px) {
    position: absolute;
    top: ${props => props.menu ? "500px" : "calc(100% - 60px)"};
    transform: translate(-50%, -100%);
    left: 50%;
    width: 100%;
    max-width: 600px;
    transition: ${props => props.menu ? "all .7s .1s" : "all 0s"};
    z-index: 1;
  }
`;

export const Img = styled.div`
  position: relative;
  max-width: 542px;
  height: min(45vw, 530px);
  align-self: center;
  flex: 1;

  @media screen and (max-width: 1024px) {
    position: absolute;
    right: 0;
    bottom: 32px;
    width: 366px;
    height: 358px;
  }
  @media screen and (max-width: 868px) {
    position: relative;
    width: 100%;
    max-width: 320px;
    height: 312px;
    bottom: 0;
  }
`;
