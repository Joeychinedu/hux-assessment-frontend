import styled from "styled-components";
import Heading from "../ui/Heading";
import Button from "../ui/Button";
import { Link } from "react-router-dom";
import Logo from "../ui/Logo";

const StyledHomePage = styled.div`
  height: 100%;
  background-color: var(-color-grey-50);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin-top: 4rem;
`;

const Row = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

const Header = styled.header`
  background-color: var(--color-brand-500);
  padding: 2rem 4rem;
  color: #e0e7ff;
  font-size: 1.8rem;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  border-radius: var(--border-radius-md);

  svg {
    height: 3.2rem;
    width: 3.2rem;
  }

  & div:first-child {
    display: flex;
    align-items: center;
    gap: 1.6rem;
    font-weight: 600;
    font-size: 1.8rem;
  }

  & span {
    font-family: "Sono";
    font-size: 2rem;
    margin-left: 4px;
  }
`;

function HomePage() {
  return (
    <>
      <StyledHomePage>
        <Logo />
        <Heading as="h1">Welcome to Connectify</Heading>
        <Header>
          <Heading as="h1">Stay Connected, Build Your Network</Heading>
          <Heading as="p">
            Easily save and organize new contacts from friends, professionals,
            and communities worldwide.
          </Heading>
        </Header>
        <Row>
          <Button>
            <Link to="/login">Login</Link>
          </Button>
          <Button>
            <Link to="/signup">Signup</Link>
          </Button>
        </Row>
      </StyledHomePage>
    </>
  );
}

export default HomePage;
