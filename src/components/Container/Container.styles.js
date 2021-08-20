import styled from "styled-components";

export const Container = styled.section`
  position: relative;
  padding: 0 min(5.6vw, 80px);
  max-width: 1440px;
  margin: auto;
  background-color: ${(props) => {
    if(props.mode === "light") return "white";
    if(props.mode === "grey") return "grey";
    return "#1A1B22"
  }};
  /* background-color: ${(props) => (props.mode ? "white" : "#1A1B22")}; */

  @media screen and (max-width: 1024px) {
    padding: 0 3.90625vw;
  }

  @media screen and (max-width: 868px) {
    padding: 0 5vw;
  }
`;
