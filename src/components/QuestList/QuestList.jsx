import { Card } from '../Card/Card';
import { List } from './QuestList.styled';

export const QuestList = () => {
    return (
        <List>
                <Card
                    title={'Test Name'}
                    difficulty={'Easy'}
                    category={'work'}
                    type={'Task'}
                    date={'2023-02-22'}
                    time={'14:30'}
                />
                <Card
                    title={'Test Name'}
                    difficulty={'Easy'}
                    category={'stuff'}
                    type={'Task'}
                    date={'2023-02-24'}
                    time={'14:30'}
                />
                <Card
                    title={'Test Name'}
                    difficulty={'Easy'}
                    category={'health'}
                    type={'Challenge'}
                    date={'2023-02-24'}
                    time={'14:30'}
                />
            </List>
    );
};