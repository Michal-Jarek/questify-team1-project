import LandingWelcome from "./LandingWelcome/LandingWelcome";
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
			</Wrapper>
	
		</>
	);
};

export default Landing;