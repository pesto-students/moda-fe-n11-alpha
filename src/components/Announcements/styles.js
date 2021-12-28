import styled from "styled-components";

export const Container = styled.div`
  height: 30px;
  background-color: ${(props) => props.theme.color.modaPurple};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 14px;
`;
