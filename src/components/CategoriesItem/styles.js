import styled from "styled-components";

export const SubHeader = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
`;
export const Container = styled.div`
  position: relative;
  height: 50vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  ${SubHeader} {
    display: none;
  }
  &:hover ${SubHeader} {
    display: flex;
    position: absolute;
    flex-direction: column;
  }
`;
export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: fill;
  overflow: hidden;
`;
export const Button = styled.button`
  padding: 10px;
  border: 0;
  font-size: large;
  color: gray;
`;

export const Title = styled.h2`
  color: white;
  font-weight: 800;
  font-size: x-large;
`;
