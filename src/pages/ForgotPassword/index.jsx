import React from "react";
import { Input, ErrorMessage, Button } from "../../components";
import { Container, Wrapper, Form } from "./styles";
import useForgotPasswordHook from "./useForgotPasswordHook";
function ForgotPassword() {
  const [HandleFormData, formData, SetFormData, Error] =
    useForgotPasswordHook();
  return (
    <Container>
      <Wrapper>
        <h1>Enter Email</h1>
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

          <ErrorMessage
            message={Error["Please enter your email"]}
          ></ErrorMessage>
          <Button>Send OTP</Button>
        </Form>
      </Wrapper>
    </Container>
  );
}

export default ForgotPassword;
