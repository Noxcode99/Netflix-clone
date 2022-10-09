import Featured from "../../components/featured/Featured";
import List from "../../components/lists/List";
import Navbar from "../../components/navbar/navbar";
import "./home.scss";
import { useEffect, useState } from "react";
import axios from "axios";

const Home = ({type}) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);

  useEffect(() => {
    const getRandomLists = async ()=>{
      try{
        const res = await axios.get(
          `lists${type ? "?type=" + type : ""}${genre ? "&genre=" + genre : ""}`,{
            headers:{
              token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzM2E0MDhhMjBhYTc5MDU4NzZjOGJmOSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2NTI5MjY2NSwiZXhwIjoxNjY1NzI0NjY1fQ.Kc1ZqeAGoSULVtiwI3m-TE67oTjmzu-Ez0cg5pQ9b_s"
            },
          }
          );
      setLists(res.data);
      }catch(err){
        console.log(err)
      }
    }
    getRandomLists();
  },[type, genre]);
  return (
    <div className="home">
        <Navbar/>
        <Featured type={type}/>
        {lists.map(list =>(
        <List list={list}/>
        ))}
    </div>
  );
};

export default Home;
