import { AppBar } from 'components/AppBar/AppBar';
import NewTaskBtn from 'components/NewTaskBtn/NewTaskBtn';
// import { QuestList } from '../../components/QuestList/QuestList';
import { CardGroupContainer } from 'components/CardGroup/CardGroupContainer';
import { useSelector } from 'react-redux';
import { appState } from 'redux/auth/cardsSelectors';

const Dashboard = () => {

    console.log(useSelector(appState));
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