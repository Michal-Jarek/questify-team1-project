import './App.css';
import { AppBar } from './AppBar/AppBar';
import { QuestList } from './QuestList/QuestList';
import NewTaskBtn from './NewTaskBtn/NewTaskBtn';

// import { Router } from "../utils/router/Router";

const App = () => (
	<div className='App'>
		<AppBar />
		<QuestList />
		<NewTaskBtn />
	</div>
);

export default App;
