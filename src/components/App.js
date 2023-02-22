import './App.css';
import { AppBar } from './AppBar/AppBar';
// import { CardGroup } from './CardGroup/CardGroup';
import NewTaskBtn from './NewTaskBtn/NewTaskBtn';
import { QuestList } from './QuestList/QuestList';

// import { Router } from "../utils/router/Router";

const App = () => (
	<div className='App'>
		<AppBar />
		<QuestList />
		<NewTaskBtn />
	</div>
);

export default App;
