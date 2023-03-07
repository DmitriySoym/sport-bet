import styled from "styled-components";

const StyledArticles = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 30px;
`;

const ErrorMessage = styled.h2`
  padding-bottom: 4rem;
  text-align: center;
  font-size: 2rem;
`;

export { StyledArticles, ErrorMessage };
