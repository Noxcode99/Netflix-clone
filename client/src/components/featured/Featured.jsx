import { InfoOutlined, PlayArrow } from "@material-ui/icons"
import { useEffect, useState } from "react";
import "./featured.scss"
import axios from "axios";

export default function Featured({ type }) {
    const [content,setContent] = useState({});

    useEffect(()=>{
      const getRandomContent = async () =>{
        try{
            const res = await axios.get(`/movies/random?type=${type}`, {
                headers:{
                  token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzM2E0MDhhMjBhYTc5MDU4NzZjOGJmOSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2NTI5MjY2NSwiZXhwIjoxNjY1NzI0NjY1fQ.Kc1ZqeAGoSULVtiwI3m-TE67oTjmzu-Ez0cg5pQ9b_s"
                },
              });
            setContent(res.data[0]);
        }catch(err){
            console.log(err);
        }
      };
      getRandomContent();
    },[type]);

    console.log(content)
  return (
    <div className="featured">
        {type && (
            <div className="category">
                <span>{type === "movies" ? "Movies" : "Series"}</span>
                <select name="genre" id="genre">
                    <option>Genre</option>
                    <option value="adventure">Adventure</option>
                    <option value="comedy">Comedy</option>
                    <option value="crime">Crime</option>
                    <option value="fantasy">Fantasy</option>
                    <option value="historical">Historical</option>
                    <option value="horror">Horror</option>
                    <option value="romance">Romance</option>
                    <option value="sci-fi">Sci-fi</option>
                    <option value="thriller">Thriller</option>
                    <option value="western">Western</option>
                    <option value="animation">Animation</option>
                    <option value="drama">Drama</option>
                    <option value="documentary">Documentary</option>
                </select>
            </div>
        )}
        <img src={content.img}
        alt="" 
        />
        <div className="info">
            <img src={content.imgTitle}
            alt="" 
            />
            <span className="desc">
                {content.desc}
            </span>
            <div className="buttons">
                <button className="play">
                    <PlayArrow />
                    <span>Play</span>
                </button>
                <button className="more">
                    <InfoOutlined/>
                    <span>Info</span>
                </button>
            </div>
        </div>
    </div>
  )
}
