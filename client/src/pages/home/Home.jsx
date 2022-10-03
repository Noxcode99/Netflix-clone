import Featured from "../../components/featured/Featured";
import List from "../../components/lists/List";
import Navbar from "../../components/navbar/navbar";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
        <Navbar/>
        <Featured/>
        <List/>
        <List/>
        <List/>
        <List/>
    </div>
  );
};

export default Home;
