import styled from "styled-components";

export const Main = styled.div`
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 0 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.6);
  opacity: ${(props) => (props.open ? 1 : 0)};
  visibility: ${(props) => (props.open ? "visible" : "hidden")};
  transition: all 0.3s;

  @media screen and (max-width: 768px) {
    padding: 10px;
  }
`;

export const Container = styled.div`
  max-width: 827px;
  min-height: 363px;
  background: #ffffff;
  border-radius: 14px;
  padding: 60px;
  display: grid;
  justify-items: center;
  gap: 53px;

  @media screen and (max-width: 768px) {
    max-width: 550px;
    padding: 40px 20px;
    gap: 40px;
    align-content: center;
  }
`;

export const Text = styled.p`
  font-family: "Suisse Intl";
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 40px;
  text-align: center;
  color: #000000;

  @media screen and (max-width: 768px) {
    font-size: 20px;
    line-height: 30px;
  }
`;

export const Button = styled.button`
  width: 200px;
  height: 70px;
  background: #ff9900;
  border: 2px solid #ff9900;
  box-sizing: border-box;
  border-radius: 40px;
  display: grid;
  place-items: center;
  font-family: "Suisse Intl";
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 32px;
  color: #ffffff;

  @media screen and (max-width: 768px) {
    max-width: 450px;
    width: 100%;
    height: 60px;
    transform: scale(1.08, 1);
  }
`;
