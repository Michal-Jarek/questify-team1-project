import { AppBar } from 'components/AppBar/AppBar';
import NewTaskBtn from 'components/NewTaskBtn/NewTaskBtn';
// import { QuestList } from '../../components/QuestList/QuestList';
import { CardGroupContainer } from 'components/CardGroup/CardGroupContainer';
import DevelopersListModal from 'components/DevelopersList/DevelopersList';

const Dashboard = () => {
    return (
    <>
        <AppBar />
        <CardGroupContainer />
        <DevelopersListModal />
        {/* <QuestList /> */}
        <NewTaskBtn />
    </>
    );
};

export default Dashboard;