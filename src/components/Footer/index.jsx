import styled from "styled-components";
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
  SocialIcon,
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
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque
          maxime beatae ut similique eligendi animi repellat corrupti labore
          omnis est, nisi obcaecati totam id laudantium. Ad aliquam incidunt
          impedit praesentium.
        </Desc>
        <SocialIconContainer>
          <SocialIcon color="blue">
            <FiFacebook />
          </SocialIcon>
          <SocialIcon color="lightblue">
            <FiTwitter />
          </SocialIcon>
          <SocialIcon color="pink">
            <FiInstagram />
          </SocialIcon>
        </SocialIconContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>WomanFashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
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
