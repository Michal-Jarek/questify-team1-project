import { AppBar } from "components/AppBar/AppBar";
import NewTaskBtn from "components/NewTaskBtn/NewTaskBtn";
import { CardGroupContainer } from "components/CardGroup/CardGroupContainer";

const Dashboard = () => {
  return (
    <>
      <AppBar />
      <CardGroupContainer />
      <NewTaskBtn />
    </>
  );
};

export default Dashboard;
