import LandingWelcome from "./LandingWelcome/LandingWelcome";
import LandingBg from "./LandingBg/LandingBg";
import { Container, Wrapper } from "./Landing.styled";
import { useEffect } from "react";
import LandingForm from "./LandingForm/LandingForm";
import Cookie from "../Cookie/Cookie";

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
                <LandingBg/>
			</Wrapper>
			<Cookie />
	
		</>
	);
};

export default Landing;