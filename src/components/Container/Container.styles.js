import styled from "styled-components";

export const Container = styled.section`
  position: relative;
  padding: 0 min(5.6vw, 80px);

  @media screen and (max-width: 1024px) {
    padding: 0 3.90625vw;
  }

  @media screen and (max-width: 868px) {
      padding: 0 5vw;
  }
`;
