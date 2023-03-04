import "./App.css";
import Dashboard from "pages/Dashboard/Dashboard";
import { useGetAllCardsQuery } from "redux/auth/questifyApi";




const App = () => {
	useGetAllCardsQuery();
	return (
<div className="App">
	<Dashboard />
</div>
)};

export default App;
