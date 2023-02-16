import LandingWelcome from "./LandingWelcome/LandingWelcome";
import LandingBg from "./LandingBg/LandingBg";
import { Container, Wrapper } from "./Landing.styled";
import { useEffect } from "react";

const Landing = () => {
	useEffect(() => {
		document.body.style.backgroundColor = "white";
	}, []);
	return (
		<>
			<Wrapper>
				<Container>
					<LandingWelcome />
                </Container>
                <LandingBg/>
			</Wrapper>
	
		</>
	);
};

export default Landing;