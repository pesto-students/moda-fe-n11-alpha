import React, { useEffect } from "react";
import { Input, ErrorMessage, Button } from "../../components";
import { Container, Wrapper, Form } from "./styles";
import useEnterNewPassword from "./useEnterNewPassword";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function EnterNewPassword() {
  const { formData, SetFormData, HandleFormData, Error } =
    useEnterNewPassword();
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
        <h1>Please enter otp and new Password</h1>
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            HandleFormData(e);
          }}
        >
          <Input
            placeholder="otp"
            dispatch={SetFormData}
            value={formData["otp"]}
          />
          <Input
            placeholder="password"
            dispatch={SetFormData}
            value={formData["password"]}
            type="password"
          />
          <ErrorMessage message={Error["incompleteForm"]}></ErrorMessage>
          <Button>Confirm</Button>
        </Form>
      </Wrapper>
    </Container>
  );
}

export default EnterNewPassword;
