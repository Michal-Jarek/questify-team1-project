import { Card } from '../Card/Card';
import style from './QuestList.module.css';

export const QuestList = () => {
    return (
        <div>
            <ul className={style.cardList}>
                <li className={style.cardsListItem}>
                    <Card
                        title={'Test Name'}
                        difficulty={'Easy'}
                        group={'Work'}
                    />
                </li>
            </ul>
        </div>
    )
};