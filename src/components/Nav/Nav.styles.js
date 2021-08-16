import styled from "styled-components";
import { Container } from "../Container/Container.styles.js";

export const NavContainer = styled(Container)`
  position: absolute;
  top: 0;
  left: 50%;
  width: 100%;
  background-color: white;
  transform: translateX(-50%);
  z-index: 1;
`;

export const Navbar = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  padding-top: 32px;
  align-items: center;
  flex-wrap: wrap;
  background-color: white;
  z-index: 1;

  @media screen and (max-width: 868px) {
    padding-top: 16px;
  }
`;

export const Logo = styled.div`
  width: 190px;
  height: 35px;
  align-self: start;
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg width='190' height='35' viewBox='0 0 190 35' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0)'%3E%3Cpath d='M0 17.5C0 7.83501 7.83501 0 17.5 0C27.165 0 35 7.83501 35 17.5C35 27.165 27.165 35 17.5 35C7.83501 35 0 27.165 0 17.5Z' fill='black'/%3E%3Cpath d='M17.9747 19.308C18.9974 21.548 19.3382 22.3271 19.3382 25.0175V28.5845H15.6861V22.5706L8.79565 7.58447H12.6061L17.9747 19.308ZM22.4791 7.58447L18.0114 17.7375H21.7244L26.2044 7.58447H22.4791Z' fill='white'/%3E%3Cpath d='M44.375 3.9375V30H48.9125V20.7H51.125C57.05 20.7 60.8375 17.9625 60.8375 12.1875C60.8375 6.9375 57.3125 3.9375 51.1625 3.9375H44.375ZM51.1625 17.175H48.9125V7.4625H51.3125C54.5 7.4625 56.225 8.925 56.225 12.1875C56.225 15.6 54.3125 17.175 51.1625 17.175ZM68.2832 18.225C69.5207 15.9375 71.3582 14.775 74.0957 14.925V10.725C71.5457 10.875 69.4457 12.4125 68.3957 14.8875H68.2832L68.1707 11.1375H63.8207V30H68.2832V18.225ZM90.079 17.1375C90.079 12.5625 87.754 10.8375 83.029 10.8375C80.0665 10.8375 77.7415 11.775 76.3915 12.5625V16.275C77.5915 15.375 80.2165 14.4 82.504 14.4C84.6415 14.4 85.6165 15.15 85.6165 17.175V18.225H84.904C78.079 18.225 75.0415 20.475 75.0415 24.3C75.0415 28.125 77.3665 30.2625 80.8165 30.2625C83.4415 30.2625 84.5665 29.4 85.429 28.5H85.6165C85.654 28.9875 85.804 29.625 85.954 30H90.304C90.154 28.4625 90.079 26.925 90.079 25.3875V17.1375ZM85.6165 25.5C85.054 26.325 84.004 27 82.429 27C80.554 27 79.6165 25.875 79.6165 24.1875C79.6165 21.975 81.154 21.1875 84.979 21.1875H85.6165V25.5ZM101.767 30.375C103.829 30.375 105.292 30 106.38 29.2125V25.575C105.255 26.3625 103.904 26.85 102.029 26.85C98.842 26.85 97.5295 24.375 97.5295 20.475C97.5295 16.3875 99.142 14.2875 102.067 14.2875C103.792 14.2875 105.479 14.8875 106.38 15.45V11.6625C105.442 11.1375 103.792 10.7625 101.58 10.7625C95.8795 10.7625 92.917 14.85 92.917 20.5875C92.917 26.8875 95.8045 30.375 101.767 30.375ZM107.878 11.1375V14.6625H110.24V24.3375C110.24 27.8625 112.228 30.375 116.353 30.375C118.528 30.375 119.765 29.8875 119.765 29.8875V26.25C119.765 26.25 118.94 26.85 117.44 26.85C115.565 26.85 114.702 25.7625 114.702 24.375V14.6625H119.39V11.1375H114.702V7.0125H110.24V11.1375H107.878ZM124.224 8.8125C125.686 8.8125 126.849 7.8 126.849 6.1875C126.849 4.6125 125.686 3.5625 124.224 3.5625C122.762 3.5625 121.637 4.6125 121.637 6.1875C121.637 7.8 122.762 8.8125 124.224 8.8125ZM122.012 11.1375V30H126.474V11.1375H122.012ZM138.315 30.375C140.378 30.375 141.84 30 142.928 29.2125V25.575C141.803 26.3625 140.452 26.85 138.577 26.85C135.39 26.85 134.077 24.375 134.077 20.475C134.077 16.3875 135.69 14.2875 138.615 14.2875C140.34 14.2875 142.028 14.8875 142.928 15.45V11.6625C141.99 11.1375 140.34 10.7625 138.128 10.7625C132.427 10.7625 129.465 14.85 129.465 20.5875C129.465 26.8875 132.353 30.375 138.315 30.375ZM156.237 24.675C155.412 25.6875 154.1 26.55 152.487 26.55C150.912 26.55 150.2 25.875 150.2 24.45V11.1375H145.737V24.9C145.737 28.65 147.237 30.3 150.875 30.3C153.537 30.3 155.112 29.325 156.012 28.425H156.237L156.35 30H160.7V11.1375H156.237V24.675ZM168.918 16.4625C169.743 15.45 170.867 14.5875 172.48 14.5875C174.055 14.5875 174.58 15.2625 174.58 16.6875V30H179.042V16.4625C179.867 15.45 180.992 14.5875 182.605 14.5875C184.18 14.5875 184.705 15.2625 184.705 16.6875V30H189.167V16.2375C189.167 12.4875 187.855 10.8375 184.217 10.8375C181.33 10.8375 179.605 11.9625 178.555 13.2375C177.842 11.5875 176.342 10.8375 173.905 10.8375C171.242 10.8375 170.042 11.8125 169.142 12.7125H168.918L168.805 11.1375H164.455V30H168.918V16.4625Z' fill='black'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0'%3E%3Crect width='189.167' height='35' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media screen and (max-width: 1024px) {
    width: 137px;
    height: 25px;
    margin-top: 10px;
  }

  @media screen and (max-width: 868px) {
    margin: 0;
  }
`;

export const Icon = styled.button`
  position: relative;
  width: 32px;
  align-self: stretch;
  transform: ${(props) => props.menu && "rotate(135deg)"};
  transition: all 0.4s;
  display: none;
  ::before {
    content: "";
    display: block;
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg width='32' height='2' viewBox='0 0 32 2' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='32' height='2' rx='1' fill='black'/%3E%3C/svg%3E");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 2px;
    transform-origin: center;
    transition: inherit;
  }
  ::after {
    content: "";
    display: block;
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg width='32' height='2' viewBox='0 0 32 2' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='32' height='2' rx='1' fill='black'/%3E%3C/svg%3E");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    top: ${(props) => (props.menu ? "-2px" : "6px")};
    width: 100%;
    height: 2px;
    transform: ${(props) => props.menu && "rotate(90deg)"};
    transform-origin: center;
    transition: all 0.4s;
  }

  @media screen and (max-width: 868px) {
    display: block;
  }
`;

export const Wrapper = styled.div`
  display: contents;
  @media screen and (max-width: 868px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-height: ${(props) => (props.menu ? "100%" : 0)};
    overflow: hidden;
    padding-bottom: ${(props) => (props.menu ? "106px" : 0)};
    transition: padding 0.1s;
  }
`;

export const NavList = styled.div`
  display: flex;
  gap: 32px;
  align-self: start;
  padding-top: 15px;

  @media screen and (max-width: 1024px) {
    gap: 20px;
    padding-top: 16px;
  }

  @media screen and (max-width: 868px) {
    width: 100%;
    max-height: ${(props) => (props.menu ? "100%" : 0)};
    overflow: hidden;
    flex-direction: column;
    padding-top: ${(props) => (props.menu ? "75px" : 0)};
    padding-bottom: ${(props) => (props.menu ? "70px" : 0)};
    transform: ${(props) => (props.menu ? "scale(1)" : "scale(0)")};
    transform-origin: center;
    align-items: center;
    transition: ${(props) =>
      props.menu
        ? "padding 0.2s, transform .5s"
        : "padding .2s, transform 0.15s, max-height 0.1s"};
  }
`;

export const NavLink = styled.a`
  font-family: "Suisse Intl";
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  color: #616161;
  :hover {
    color: #000;
    transform: scale(1.09);
    -webkit-text-stroke-width: 0.5px;
    -webkit-text-stroke-color: black;
    filter: contrast(2);
  }
  transition: all 0.15s;

  @media screen and (max-width: 868px) {
    font-size: 34px;
    line-height: 39px;
    color: #000000;
  }
`;

export const Button = styled.button`
  position: relative;
  top: -5px;
  width: 180px;
  height: 60px;
  border: 2px solid #ff9900;
  border-radius: 30px;
  display: grid;
  place-items: center;
  color: #ff9900;
  background-color: white;
  transition: all 0.3s;
  font-family: "Suisse Intl";
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  :hover {
    color: white;
    background-color: #ff9900;
  }

  @media screen and (max-width: 868px) {
    border-radius: 40px;
    color: white;
    background-color: #ff9900;
    top: 0;
    width: min(100%, 600px);
    height: 70px;
    font-size: 24px;
    line-height: 32px;
    transform: ${(props) =>
      props.menu ? "translateY(0)" : "translateY(700%)"};
    transition: ${(props) => (props.menu ? "transform .8s" : "transform 0s")};
    display: none;
  }
`;
