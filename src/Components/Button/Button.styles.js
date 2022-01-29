import styled from "styled-components";

export const StyledButton = styled.button`
  border: 2px solid #4caf50;
  background-color: ${(props) => (props.varient ? "#fff" : "#4caf50")};
  color: ${(props) => (props.varient ? "#4caf50" : "#fff")};
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  transition: 0.5 all ease-out;
`;
