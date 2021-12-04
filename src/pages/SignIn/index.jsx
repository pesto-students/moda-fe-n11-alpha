import React from "react";
import { Input, ErrorMessage, Button } from "../../components";
import { Container, Wrapper, Link, Form } from "./styles";
import useSignInHook from "./useSignInHook";

function SignIn() {
  const { formData, SetFormData, HandleFormData, Error } = useSignInHook();

  return (
    <Container>
      <Wrapper>
        <h1>SIGN IN</h1>
        <Form onSubmit={HandleFormData}>
          <Input
            placeholder="username"
            dispatch={SetFormData}
            value={formData["username"]}
          />
          <Input
            placeholder="password"
            dispatch={SetFormData}
            value={formData["password"]}
          />
          <ErrorMessage message={Error["incompleteForm"]}></ErrorMessage>
          <Button>LOGIN</Button>
          <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
          <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  );
}

export default SignIn;
