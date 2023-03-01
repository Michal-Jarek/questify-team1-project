import { AppBar } from 'components/AppBar/AppBar';
import NewTaskBtn from 'components/NewTaskBtn/NewTaskBtn';
// import { QuestList } from '../../components/QuestList/QuestList';
import { CardGroupContainer } from 'components/CardGroup/CardGroupContainer';

const Dashboard = () => {
    return (
    <>
        <AppBar />
        <CardGroupContainer />
        {/* <QuestList /> */}
        <NewTaskBtn />
    </>
    );
};

export default Dashboard;