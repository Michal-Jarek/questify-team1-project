import './App.css';
import { AppBar } from './AppBar/AppBar';
import { QuestList } from './QuestList/QuestList';
// import { Router } from "../utils/router/Router";

const App = () => (
	<div className='App'>
		<AppBar />
		<QuestList />
	</div>
);

export default App;
