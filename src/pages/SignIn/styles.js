import styled from 'styled-components';
import { mobile } from '../../responsive';

export const Container = styled.main`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url('https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.section`
  width: 25%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: '80%' })}
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  a {
    margin: 5px 0px;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
  }
`;
export const LoginButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
`;
