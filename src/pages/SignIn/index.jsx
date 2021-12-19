import React, { useEffect } from "react";
import { Input, ErrorMessage, Button } from "../../components";
import { Container, Wrapper, Link, Form } from "./styles";
import useSignInHook from "./useSignInHook";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
function SignIn() {
  const { formData, SetFormData, HandleFormData, Error } = useSignInHook();
  const navigate = useNavigate();
  const email = useSelector((state) => state?.user?.email);

  useEffect(() => {
    if (email) {
      navigate("/");
    }
  }, []);

  return (
    <Container>
      <Wrapper>
        <h1>SIGN IN</h1>
        <Form
          onSubmit={(e) => {
            console.log("the form data is called", e);
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
          <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
          <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  );
}

export default SignIn;
