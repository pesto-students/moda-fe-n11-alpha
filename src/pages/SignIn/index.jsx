import React, { useEffect } from "react";
import { Input, ErrorMessage, Button } from "../../components";
import { Container, Wrapper, Link as StyledLink, Form } from "./styles";
import useSignInHook from "./useSignInHook";
import { useNavigate, Link } from "react-router-dom";
import { useSelector } from "react-redux";

function SignIn() {
  const { formData, SetFormData, HandleFormData, Error } = useSignInHook();
  const navigate = useNavigate();

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
          <StyledLink>
            <Link to="/forgotPassword">DO NOT YOU REMEMBER THE PASSWORD?</Link>
          </StyledLink>
          <StyledLink>
            <Link to="/signup">CREATE A NEW ACCOUNT</Link>
          </StyledLink>
        </Form>
      </Wrapper>
    </Container>
  );
}

export default SignIn;
