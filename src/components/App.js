import "./App.css";
import Dashboard from "pages/Dashboard/Dashboard";
import { returnAllCards } from "redux/auth/cardsSelectors";
import { useSelector } from "react-redux";

const App = () => {

  return (
    <div className="App">
      <Dashboard />
    </div>
  );
};

export default App;
