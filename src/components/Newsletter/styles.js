import styled from "styled-components";

export const Container = styled.div`
  height: 40vh;
  background-color: #faf8f8;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  box-shadow: 0 7px 30px -10px rgb(10 10 10 / 89%);
`;

export const Title = styled.h1`
  font-size: 30px;
  font-weight: bolder;
`;

export const Desc = styled.div`
  text-align: center;
  font-size: 18px;
`;

export const InputContainer = styled.form`
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
  border: none;
  width: 100%;
  height: 100%;
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
