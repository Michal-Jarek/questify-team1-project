import LandingWelcome from "./LandingWelcome/LandingWelcome.jsx";
import LandingBg from "./LandingBg/LandingBg.jsx";
import { Container, Wrapper } from "./Landing.styled.js";
import { useEffect } from "react";
import LandingForm from "./LandingForm/LandingForm.jsx";
import Cookie from "../Cookie/Cookie.jsx";

const Landing = () => {
  useEffect(() => {
    document.body.style.backgroundColor = "white";
  }, []);
  return (
    <>
      <Wrapper>
        <Container>
          <LandingWelcome />
          <LandingForm />
        </Container>
        <LandingBg />
      </Wrapper>
      <Cookie />
    </>
  );
};

export default Landing;
