import styled from "styled-components";

export const Container = styled.div`
  height: 40vh;
  background-color: #faf8f8;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: 30px;
  font-weight: bolder;
`;

export const Desc = styled.div``;

export const InputContainer = styled.div`
  width: 40vw;
  height: 7vh;
  border: 1px solid lightgrey;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 2px;
`;
export const Input = styled.input`
  border: 0;
  flex: 8;
  padding: 5px;
`;
export const Button = styled.button`
  border: 0;
  flex: 1;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: teal;
`;
