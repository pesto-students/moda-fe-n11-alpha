import {
  FiFacebook,
  FiInstagram,
  FiTwitter,
  FiPhoneCall,
} from "react-icons/fi";
import { MdMarkEmailUnread } from "react-icons/md";
import { GoLocation } from "react-icons/go";
import {
  Container,
  Left,
  Logo,
  Desc,
  SocialIconContainer,
  Center,
  Title,
  List,
  ListItem,
  Right,
  ContactItem,
} from "./styles";

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>MODA.</Logo>
        <Desc>
          <i>"A fixed price fashion store."</i>
        </Desc>
        <SocialIconContainer>
          <FiFacebook size={30} />
          <FiTwitter size={30} />
          <FiInstagram size={30} />
        </SocialIconContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Orders</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <GoLocation style={{ marginRight: "10px" }} />
          672, Avanue Street,New york,10091
        </ContactItem>
        <ContactItem>
          <FiPhoneCall style={{ marginRight: "10px" }} />
          +1 988076452
        </ContactItem>
        <ContactItem>
          <MdMarkEmailUnread style={{ marginRight: "10px" }} />
          sgpr@itc.com
        </ContactItem>
      </Right>
    </Container>
  );
};

export default Footer;
