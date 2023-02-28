import { CardGroup } from 'components/CardGroup/CardGroup';
import { useState } from 'react';
import icons from '../../../assests/icons/sprite.svg';
import { BtnDone, SvgDone, LineDone, DoneContainer } from './Done.styled';

export const Done = ({ card }) => {
	const [showDone, setShowDone] = useState(false);
	const onShowDone = () => {
		setShowDone(!showDone);
	};

	return (
		<div>
			<DoneContainer>
				<BtnDone onClick={onShowDone}>
					DONE
					<SvgDone width='12' height='12'>
						<use xlinkHref={showDone ? `${icons}#arrow-down` : `${icons}#arrow-up`} />
					</SvgDone>
				</BtnDone>
				<LineDone />
			</DoneContainer>
			{showDone ? <CardGroup cards={card} groupName='done' hideLabel={true} /> : null}
		</div>
	);
};
