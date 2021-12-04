import { Container, Wrapper, Form } from "./styles";
import { Input, CheckBox, ErrorMessage, Button } from "../../components";
import useSignUpHook from "./useSignupHook";

function SignUp() {
  const { formData, SetFormData, HandleFormData, Error } = useSignUpHook();
  return (
    <Container>
      <Wrapper>
        <h1>Sign Up</h1>
        <Form onSubmit={HandleFormData}>
          <Input
            placeholder="name"
            dispatch={SetFormData}
            value={formData["name"]}
          />
          <Input
            placeholder="last name"
            dispatch={SetFormData}
            value={formData["last name"]}
          />
          <Input
            placeholder="username"
            dispatch={SetFormData}
            value={formData["username"]}
          />
          <Input
            placeholder="email"
            dispatch={SetFormData}
            value={formData["email"]}
          />
          <Input
            placeholder="password"
            dispatch={SetFormData}
            value={formData["password"]}
          />
          <Input
            placeholder="confirm password"
            dispatch={SetFormData}
            value={formData["confirm password"]}
          />
          <ErrorMessage message={Error["password"]}></ErrorMessage>
          <ErrorMessage message={Error["incompleteForm"]}></ErrorMessage>
          <CheckBox
            name="agreement"
            dispatch={SetFormData}
            data={formData["agreement"]}
          >
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </CheckBox>

          <Button>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
}

export default SignUp;
