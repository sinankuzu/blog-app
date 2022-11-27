import React, { useContext } from "react";
import "./Card.css";
import { useContent } from "../utils/Function";
import { userInfo } from "../App";
const Card = () => {
  useContent();
  const { contentList, isLoading, setIsLoading } = useContent();
  const {myUser} = useContext(userInfo)


  return (
    <div className="card-container">
       {isLoading ? <div>Loading</div>:contentList.map((element) => {

        return (
          <div key={element.id} className="card">
            <img src={element.image} alt="" />
            <div className="text-content">
              <h3>{element.title}</h3>

              <p>{element.content}</p>
            </div>
            <div className="user-info">
              <p>naber</p>
              <p>sdaasdasd</p>
            </div>
            
          </div>
        );
      })} 
    </div>
  );
};

export default Card;
