import { AppBar } from 'components/AppBar/AppBar';
import NewTaskBtn from 'components/NewTaskBtn/NewTaskBtn';
import { QuestList } from '../../components/QuestList/QuestList';

const Dashboard = () => {
    return (
    <>
        <AppBar/>
        <QuestList />
        <NewTaskBtn />
    </>
    );
};

export default Dashboard;