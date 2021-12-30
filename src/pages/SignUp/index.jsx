import { Link } from "react-router-dom";
import { Button, CheckBox, ErrorMessage, Input } from "../../components";
import { Container, Form, LoginLink, Wrapper } from "./styles";
import useSignUpHook from "./useSignUpHook";
function SignUp() {
  const { formData, SetFormData, HandleFormData, Error } = useSignUpHook();
  return (
    <Container>
      <Wrapper>
        <h1>Sign Up</h1>
        <Form onSubmit={HandleFormData}>
          <Input
            placeholder="username"
            dispatch={SetFormData}
            value={formData["username"]}
          />
          <Input
            placeholder="address"
            dispatch={SetFormData}
            value={formData["address"]}
          />

          <Input
            placeholder="phoneNumber"
            dispatch={SetFormData}
            value={formData["phoneNumber"]}
          />
          <ErrorMessage message={Error && Error["phoneNumber"]}></ErrorMessage>

          <Input
            placeholder="email"
            dispatch={SetFormData}
            value={formData["email"]}
          />
          <br />
          <ErrorMessage message={Error && Error["email"]}></ErrorMessage>
          <Input
            placeholder="password"
            dispatch={SetFormData}
            value={formData["password"]}
            type="password"
          />
          <Input
            placeholder="confirm password"
            dispatch={SetFormData}
            value={formData["confirm password"]}
            type="password"
          />
          <ErrorMessage message={Error && Error["password"]}></ErrorMessage>
          <br />
          <ErrorMessage
            message={Error && Error["incompleteForm"]}
          ></ErrorMessage>
          <CheckBox
            name="agreement"
            dispatch={SetFormData}
            data={formData["agreement"]}
          >
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </CheckBox>

          <LoginLink>
            <Link to="/signin">Already have an account! Login </Link>
          </LoginLink>
          <Button>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
}

export default SignUp;
