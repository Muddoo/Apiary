import styled from "styled-components";

export const Main = styled.div`
  background-color: inherit;
  padding-top: 60px;
  padding-bottom: 80px;

  @media screen and (max-width: 1024px) {
    padding-bottom: 40px;
  }

  @media screen and (max-width: 768px) {
    padding-top: 20px;
    padding-bottom: 60px;
  }
`;

export const Banner = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: min-content;
    gap: 20px;
  }
`;

export const Wrapper = styled.div`
  display: grid;
  gap: 40px;
  flex: 1;
  max-width: 620px;
  min-width: 560px;
  align-content: center;
  grid-auto-rows: min-content;

  &.text {
    gap: 20px;
    max-width: 100%;
    width: auto;
    min-width: auto;
  }

  @media screen and (max-width: 1024px) {
    max-width: 452px;
    min-width: 330px;
  }

  @media screen and (max-width: 768px) {
    order: 1;
    gap: 32px;
    max-width: 470px;
    min-width: auto;
    justify-self: center;
  }
`;

export const Title = styled.p`
  font-family: "Suisse Intl";
  font-style: normal;
  font-weight: normal;
  font-size: 48px;
  line-height: 56px;
  color: #000000;

  &.medium {
    font-size: 30px;
    line-height: 35px;
  }

  @media screen and (max-width: 868px) {
    &.medium {
      font-size: 24px;
    }
  }

  @media screen and (max-width: 768px) {
    font-size: 36px;
    line-height: 37px;

    &.medium {
      font-size: 24px;
      line-height: 28px;
    }
  }
`;

export const Text = styled.p`
  font-family: "Suisse Intl";
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 32px;
  color: #616161;

  &.medium {
    font-size: 20px;
    line-height: 30px;
  }

  &.sm {
    font-size: 16px;
    line-height: 19px;
  }

  &.xsm {
    font-size: 14px;
    line-height: 20px;
  }

  &.member {
    display: -webkit-box;
    -webkit-line-clamp: 6;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-word;
  }

  &.orange {
    color: #ff9900;
  }

  &.right {
    text-align: right;
  }

  @media screen and (max-width: 868px) {
    &.sm {
      font-size: 13px;
    }
  }

  @media screen and (max-width: 768px) {
    font-size: 20px;
    line-height: 30px;

    &.member {
      -webkit-line-clamp: 9;
    }

    &.medium {
      font-size: 16px;
      line-height: 20px;
    }

    &.sm {
      font-size: 16px;
      line-height: 19px;
    }
  }
`;

export const Img = styled.div`
  position: relative;
  max-width: 519px;
  height: min(39vw, 519px);
  flex: 1;

  @media screen and (max-width: 1024px) {
    max-width: 452px;
    height: min(46vw, 452px);
  }

  @media screen and (max-width: 768px) {
    justify-self: center;
    width: 100%;
    height: min(60vw, 452px);
    min-height: 320px;
    transform: scale(1.11, 1);
  }
`;

export const BtnWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 60px;
  margin-bottom: 80px;
  gap: 40px;

  &.bottom {
    justify-content: center;
    gap: 40px;
    margin: 0;

    & > * {
      max-width: 293px;
    }

    & > *:hover {
      background: #ff9900;
      color: white;
    }
  }

  @media screen and (max-width: 1024px) {
    gap: 3vw;
    &.bottom {
      margin-top: 20px;
    }

    & > *,
    &.bottom > * {
      max-width: 288px;
    }
  }

  @media screen and (max-width: 768px) {
    margin: 40px 0;
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
    justify-items: center;
  }
`;

export const Button = styled.button`
  max-width: 400px;
  width: 100%;
  height: 70px;
  display: grid;
  place-items: center;
  background: #ffffff;
  border: 2px solid #ff9900;
  border-radius: 40px;
  font-family: "Suisse Intl";
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 32px;
  color: #ff9900;
  transition: all 0.3s;
  box-sizing: border-box;

  &.selected {
    background: #ff9900;
    color: white;
  }

  @media screen and (max-width: 868px) {
    font-size: 19px;
  }

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
`;

export const ProjectsContainer = styled.div`
  display: block;
  width: 100%;
  overflow-x: hidden;
`;

export const ProjectsSlider = styled.div`
  position: relative;
  display: grid;
  grid-auto-columns: 100%;
  grid-auto-flow: column;
  width: 100%;
  overflow: visible;
  transform: ${(props) => `translateX(${props.index * -100}%)`};
  transition: all 0.5s;
`;

export const List = styled.div`
  position: ${(props) => (props.selected ? "relative" : "absolute")};
  left: ${(props) => `${100 * props.index}%`};
  display: grid;
  grid-auto-rows: min-content;
  height: 100%;
  overflow: hidden;
  gap: 80px;
  width: 100%;
  height: 100%;
  opacity: ${(props) => (props.selected ? "1" : "0.4")};
  transition: all 0.4s;

  @media screen and (max-width: 1024px) {
    gap: 60px;
  }
`;

export const Project = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: min-content;
  width: 100%;

  & > :first-child {
    grid-column: span 2;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 10px;

    & > :first-child {
      grid-column: span 1;
    }
  }
`;

export const ProjectBanner = styled.div`
  display: grid;
  min-height: 365px;
  max-width: 100%;
  border-radius: 14px;
  overflow: hidden;
  grid-template-columns: calc(50% - 10px) 1fr;
  background-color: white;
`;

export const Poster = styled.div`
  position: relative;
  border-radius: 14px;
  overflow: hidden;
  width: 100%;
  height: 100%;
`;

export const Details = styled.div`
  width: 100%;
  height: 100%;
  padding: 32px 32px 32px 52px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: min-content min-content;
  gap: 20px;
  align-items: end;

  &.member {
    border-radius: 14px;
    overflow: hidden;
    padding: 32px;
    background-color: white;
    gap: 33px;
  }

  & > :first-child,
  & > :nth-child(2) {
    grid-column: span 2;
  }

  @media screen and (max-width: 1024px) {
    padding: 20px;
    &.member {
      gap: 20px;
      padding: 20px;
    }
  }

  @media screen and (max-width: 768px) {
    &.member {
      padding: 20px 12px;
    }

    :nth-of-type(3) {
        & > :first-child {
            display: grid;
            gap: 16px;
            grid-template-columns: 1fr;
            justify-items: start;
        }
    }
  }
`;

export const MemberWraper = styled.div`
  display: flex;
  gap: 24px;
  width: 100%;

  @media screen and (max-width: 1024px) {
    gap: 16px;
  }

  @media screen and (max-width: 768px) {
    gap: 12px;
  }
`;

export const MemberImgWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;

export const MemberInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 8px;

  @media screen and (max-width: 768px) {
    gap: 4px;
  }
`;

export const MemberImg = styled.div`
  position: relative;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;
  background-color: #c4c4c4;
  :not(:last-of-type) {
    margin-left: -11px;
  }

  @media screen and (max-width: 1024px) {
    width: 50px;
    height: 50px;
  }

  @media screen and (max-width: 868px) {
    width: 45px;
    height: 45px;
  }

  @media screen and (max-width: 768px) {
    width: 40px;
    height: 40px;
    align-self: center;
  }
`;
