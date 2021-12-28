import { BiSend } from "react-icons/bi";
import {
  Container,
  Title,
  Desc,
  InputContainer,
  Input,
  Button,
} from "./styles";
const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>Get Timely Update from your favourite products.</Desc>
      <InputContainer>
        <Input
          aria-label="Newsletter email"
          aria-required="true"
          placeholder="your email"
        />
        <Button>
          <BiSend />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
