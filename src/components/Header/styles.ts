import styled from "styled-components";
import { Color } from "ui";

const StyledHeader = styled.header`
  display: grid;
  grid-template-columns: 200px auto 270px;
  place-items: center center;
  padding-top: 1rem;
  padding-left: 0.5rem;
  height: 60px;
  width: 100%;

  @media screen and (max-width: 767.98px) {
    justify-items: start;
    height: auto;
    grid: 1fr 1fr / 1fr 1fr;
    grid-template-areas:
      "block1 block1"
      "block2 block3";

    & a {
      grid-area: block2;
    }
  }

  @media screen and (max-width: 568.98px) {
    justify-items: start;
    grid: 1fr 1fr 1fr/ 1fr;
    grid-template-areas:
      "block1"
      "block2"
      "block3";
    padding-left: 0.5rem;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 50px;
  border-radius: 5px;
  background-color: ${Color.PRIMARY};
  font-weight: 700;
  font-size: 1.5rem;
  font-style: italic;
  color: white;

  @media screen and (max-width: 568.98px) {
    font-size: 1.3rem;
    height: 40px;
  }
`;

const HeaderTitle = styled.h1`
  display: block;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;

  @media screen and (max-width: 767.98px) {
    grid-area: block1;
    margin: 0 auto;
    width: 90%;
  }

  & span {
    display: inline-block;
    padding-left: 100%;
    -webkit-animation: scroll 7s infinite linear;
    -moz-animation: scroll 7s infinite linear;
    animation: scroll 7s infinite linear;
  }

  @-webkit-keyframes scroll {
    0% {
      -webkit-transform: translate(0, 0);
      transform: translate(0, 0);
    }
    100% {
      -webkit-transform: translate(-100%, 0);
      transform: translate(-100%, 0);
    }
  }

  @-moz-keyframes scroll {
    0% {
      -moz-transform: translate(0, 0);
      transform: translate(0, 0);
    }
    100% {
      -moz-transform: translate(-100%, 0);
      transform: translate(-100%, 0);
    }
  }

  @keyframes scroll {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(-100%, 0);
    }
  }
`;

const TitleText = styled.span`
  font-size: 1.7rem;
  color: ${Color.TITLE};
  font-weight: 600;

  @media screen and (max-width: 568.98px) {
    font-size: 1.4rem;
    font-weight: 500;
  }
`;

export { StyledHeader, Logo, HeaderTitle, TitleText };
