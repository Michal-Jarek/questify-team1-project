import styles from './CompletedTask.module.css';
import { ReactComponent as Arrow } from '../../../assests/completedTask/arrow.svg';
import { ReactComponent as Platform } from '../../../assests/completedTask/platform.svg';
import { ReactComponent as Shield } from '../../../assests/completedTask/shield.svg';
import { ReactComponent as Dart } from '../../../assests/completedTask/dart.svg';
import { ReactComponent as Clouds } from '../../../assests/completedTask/clouds.svg';

export const CompletedTask = () => {
	return (
		<div className={styles.completeWrap}>
			<div className={styles.award}>
				<Shield className={styles.shield}></Shield>
				<Platform className={styles.platform}></Platform>
				<Dart className={styles.dart}></Dart>
				<Clouds className={styles.clouds}></Clouds>
			</div>
		</div>
	);
};