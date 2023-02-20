import './App.css';
import { AppBar } from './AppBar/AppBar';
import NewTaskBtn from './NewTaskBtn/NewTaskBtn';
// import { Router } from "../utils/router/Router";

const App = () => (
	<div className='App'>
		<AppBar />
		<NewTaskBtn />
	</div>
);

export default App;
