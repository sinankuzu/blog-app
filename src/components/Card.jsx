import React from "react";
import "./Card.css";
import { useContent } from "../utils/Function";
const Card = () => {
  useContent();
  const { contentList, isLoading, setIsLoading } = useContent();
  console.log(contentList);


  return (
    <div className="card-container">
       {isLoading ? <div>Loading</div>:contentList.map((element) => {

        return (
        <div className="card">
          <img
            width={300}
            src={element.image}
            alt=""
          />
          
            <h3>{element.title}</h3>
          
          
            <p>{element.content}</p>
          
        </div>);
      })} 
    </div>
  );
};

export default Card;
