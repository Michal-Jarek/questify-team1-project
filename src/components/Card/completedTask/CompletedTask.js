import { ReactComponent as Shield } from '../../../assests/completedTask/shield.svg';
import { ReactComponent as Platform } from '../../../assests/completedTask/platform.svg';
import { ReactComponent as Arrow } from '../../../assests/completedTask/arrow.svg';
import { ReactComponent as Clouds } from '../../../assests/completedTask/clouds.svg';
import css from './CompletedTask.module.css';

export const CompletedTask = () => {
	return (
		<div className={css.completedTaskWrapper}>
			<Shield className={css.shield}></Shield>
			<Platform className={css.platform}></Platform>
			<Arrow className={css.arrow}></Arrow>
			<Clouds className={css.clouds}></Clouds>
		</div>
	);
};