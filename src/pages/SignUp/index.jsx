import React from "react";
import { Container, Wrapper, Form, Agreement, Button } from "./styles";
import { Input } from "../../components";
function SignUp() {
  return (
    <Container>
      <Wrapper>
        <h1>Sign Up</h1>
        <Form>
          <Input placeholder="name" />
          <Input placeholder="last name" />
          <Input placeholder="username" />
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Input placeholder="confirm password" />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
}

export default SignUp;
