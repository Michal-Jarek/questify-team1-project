import "./App.css";
import Dashboard from "pages/Dashboard/Dashboard";
import { returnAllCards } from "redux/auth/cardsSelectors";
import { useSelector } from "react-redux";

const App = () => {
  console.log("W app");
 // console.log(useSelector(returnAllCards));
  console.log("Po app");

  return (
    <div className="App">
      <Dashboard />
    </div>
  );
};

export default App;
