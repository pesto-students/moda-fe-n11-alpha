import React from "react";
import { Input, ErrorMessage, Button } from "../../components";
import { Container, Wrapper, Form } from "./styles";
import useSignInHook from "./useSignInHook";
import { Link } from "react-router-dom";
import withNavbarHOC from "../../hoc/withNavbarHOC";
function SignIn() {
  const { formData, SetFormData, HandleFormData, Error } = useSignInHook();

  return (
    <Container>
      <Wrapper>
        <h1>SIGN IN</h1>
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            HandleFormData(e);
          }}
        >
          <Input
            placeholder="email"
            dispatch={SetFormData}
            value={formData["email"]}
          />
          <Input
            placeholder="password"
            dispatch={SetFormData}
            value={formData["password"]}
            type="password"
          />
          <ErrorMessage message={Error["incompleteForm"]}></ErrorMessage>
          <Button>LOGIN</Button>
          <Link to="/forgotPassword">DO NOT YOU REMEMBER THE PASSWORD?</Link>
          <Link to="/signup">CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  );
}

export default withNavbarHOC(SignIn);
