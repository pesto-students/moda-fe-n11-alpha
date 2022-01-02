import { BiSend } from "react-icons/bi";
import {
  Container,
  Title,
  Desc,
  InputContainer,
  Input,
  Button,
} from "./styles";
import { useState } from "react";
import { get } from "../../api/NewsletterApi";
import { toast } from "react-toastify";
const Newsletter = () => {
  const [email, setEmail] = useState("");
  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>Get Timely Update from your favourite products.</Desc>
      <InputContainer
        onSubmit={async (e) => {
          try {
            e.preventDefault();
            await get(email);
            toast.success(
              "You will be notified with our latest offers and discounts on this email."
            );
            setEmail("");
          } catch (e) {
            toast.error(e.message);
            console.log(e.message);
          }
        }}
      >
        <Input
          aria-label="Newsletter email"
          aria-required="true"
          placeholder="your email"
          onChange={(e) => setEmail(e.target.value)}
          email={email}
        />
        <Button>
          <BiSend />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
