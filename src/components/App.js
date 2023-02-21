import "./App.css";
import { AppBar } from "./AppBar/AppBar.js";
import { QuestList } from "./QuestList/QuestList.jsx";
import NewTaskBtn from "./NewTaskBtn/NewTaskBtn.js";

// import { Router } from "../utils/router/Router";

const App = () => (
  <div className="App">
    <AppBar />
    <QuestList />
    <NewTaskBtn />
  </div>
);

export default App;
