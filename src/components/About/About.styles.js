import styled from "styled-components";
import { Title as GTitle } from "../Info/Info.styles.js";

export const Title = styled(GTitle)`
  margin-bottom: 80px;
  color: black;

  @media screen and (max-width: 768px) {
    margin-bottom: 32px;
  }
`;

export const List = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;

  @media screen and (max-width: 768px) {
    gap: 14px;
  }
`;

export const Snippet = styled.div`
  display: flex;
  gap: 34.5px;
  transform-style: preserve-3d;
  :nth-of-type(1n) {
    justify-self: start;
    & p {
      max-width: 840px;
      width: 100%;
      background: #ff9900;
      border-radius: 14px 14px 14px 0px;
      color: white;
    }
  }
  :nth-of-type(2n) {
    justify-self: end;
    & p {
      background: #ffffff;
      border-radius: 14px 14px 0px 14px;
      color: #1a1b22;
    }
  }
`;

export const Img = styled.div`
  min-width: 55px;
  height: 55px;
  transform: translateY(50%);
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
  background-color: black;
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg width='48' height='30' viewBox='0 0 48 30' fill='none' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Crect x='-2.11768' y='0.176514' width='52.2353' height='29.6471' fill='url(%23pattern0)'/%3E%3Cdefs%3E%3Cpattern id='pattern0' patternContentUnits='objectBoundingBox' width='1' height='1'%3E%3Cuse xlink:href='%23image0' transform='translate(0 -0.380953) scale(0.005 0.00880953)'/%3E%3C/pattern%3E%3Cimage id='image0' width='200' height='200' xlink:href='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAGnklEQVR4Ae3a4YorNxBEYb//S29g75+mZ6bIYhos9xcISKN7N1L5nJJnyev1ev34VwYYeGTgcYE4ygMDmkNBYCAyEBc1iFtkOwME0aAYCAwIJ4SzvT2dHxwKAgORgbioQbyDbGeAIBoUA4EB4YRwtren84NDQWAgMhAXNYh3kO0MEESDYiAwIJwQzvb2dH5wKAgMRAbiogbxDrKdAYJoUAwEBoQTwtnens4PDgWBgchAXNQg3kG2M0AQDYqBwIBwQjjb29P5waEgMBAZiIsaxDvIdgYIokExEBgQTghne3s6PzgUBAYiA3FRg3gH2c4AQTQoBgIDwgnhbG9P5weHgsBAZCAuahDvINsZIIgGxUBgQDghnO3t6fzgUBAYiAzERQ3iHWQ7AwTRoBgIDAgnhLO9PZ0fHAoCA5GBuKhBvINsZ4AgGhQDgQHhhHC2t6fzg0NBYCAyEBc1iHeQ7QwQRINiIDAgnBDO9vZ0fnAoCAxEBuKiBvEOsp0BgmhQDAQGhBPC2d6ezg8OBYGByEBc1CDeQbYzQBANioHAgHBCONvb0/nBoSAwEBmIixrEO8h2BgiiQTEQGBBOCOfSnj+H//OXs/qzv24Q5C8gHO7HRfi/nH3pnyXIXz54gqzjZd2B32pRgqzjZd2BCeI3c39hgCC+YmEgMCCcEM6laXzFWsfLugNfoCcIBgIDwgnhXGRyg6zjZd2BL9ATBAOBAeGEcN6Syc/9Cra+4hBA9qvbKQYIoukxEBgQTghnqpX83HNuPIIQBAOBAeGEcDT9OU0/9VkRhCAYCAwIJ4Qz1Up+7jk3E0EIgoHAwK5w/u//KhIC+8r2l8ujB48LQDjna8DbnxVBHj14XHg79E9sYSDcf95yuc/l9YkQT+4JCPcgyOU+F4I8kDEp6Sf+7IcYLo8/ce/De3o0x1cs7yAEGbbv4yS7fOIPD+RyH8y2XHzFuufg48SeBvMhhsvj6X184M/3FetCwc8PQe5CWZiLGwQIv2XwEMPl8Qc2/HSZuUEuFCxsyrsM7p4R5Mt/c3P3od892wbCXQZ3z7bl4ivWHQVukIdU9r2bEeQBhW1N+RDD5fG2XAhyQeDfg20gPMRwebwtF4JcECDIQyS/jwniJX0lCEmKukYQghCkGtHGBCEIQZoUdUoQghCkGtHGBCEIQZoUdUoQghCkGtHGBCEIQZoUdUoQghCkGtHGBCEIQZoUdUoQghCkGtHGBCEIQZoUdUoQghCkGtHGBCEIQZoUdUoQghCkGtHGBCEIQZoUdUoQghCkGtHGBCEIQZoUdUoQghCkGtHGBCEIQZoUdUoQghCkGtHGBCEIQZoUdUoQghCkGtHGBCEIQZoUdUoQghCkGtHGBCEIQZoUdUoQghCkGtHGBCEIQZoUdUoQghCkGtHGBCEIQZoUdUoQghCkGtHGBCEIQZoUdUoQghCkGtHGBCEIQZoUdUoQghCkGtHGBCEIQZoUdUoQghCkGtHGBCEIQZoUdUoQghCkGtHGBCEIQZoUdUoQghCkGtHGBCEIQZoUdUoQghCkGtHGBCEIQZoUdUoQghCkGtHGBCEIQZoUdUqQLxdk4Qf848yvdzJ46y+/8x/2d5XRCQwQRMNiIDAgnBDOCQ1nj7M3MUEIgoHAgHBCONp5tp1PyJcgBMFAYEA4IZwTGs4eZ285ghAEA4EB4YRwtPNsO5+QL0EIgoHAgHBCOCc0nD3O3nIEIQgGAgPCCeFo59l2PiFfghAEA4EB4YRwTmg4e5y95QhCEAwEBoQTwtHOs+18Qr4EIQgGAgPCCeGc0HD2OHvLEYQgGAgMCCeEo51n2/mEfAlCEAwEBoQTwjmh4exx9pYjCEEwEBgQTghHO8+28wn5EoQgGAgMCCeEc0LD2ePsLUcQgmAgMCCcEI52nm3nE/IlCEEwEBgQTgjnhIazx9lbjiAEwUBgQDghHO08284n5EsQgmAgMCCcEM4JDWePs7ccQQiCgcCAcEI42nm2nU/IlyAEwUBgQDghnBMazh5nbzmCEAQDgQHhhHC082w7n5AvQQiCgcCAcEI4JzScPc7ecgQhCAYCA8IJ4Wjn2XY+IV+CEAQDgQHhhHBOaDh7nL3lCEIQDAQGhBPC0c6z7XxCvgQhCAYCA8IJ4ZzQcPY4e8sRhCAYCAwIJ4SjnWfb+YR8CUIQDAQGhBPCOaHh7HH2liMIQTAQGBBOCEc7z7bzCfkShCAYCAwIJ4RzQsPZ4+wtRxCCYCAwIJwQjnaebecT8iUIQTDwxMB/k0KGFnVTlGYAAAAASUVORK5CYII='/%3E%3C/defs%3E%3C/svg%3E");
  border-radius: 50%;
  align-self: flex-end;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Text = styled.p`
  font-family: "Suisse Intl";
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 30px;
  padding: 30px;

  @media screen and (max-width: 768px) {
    padding: 14px;
    font-size: 16px;
    line-height: 20px;
  }
`;
