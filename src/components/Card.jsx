import React from "react";
import "./Card.css";
import { useContent } from "../utils/Function";
const Card = () => {
  useContent();
  const { contentList, isLoading, setIsLoading } = useContent();
  


  return (
    <div className="card-container">
       {isLoading ? <div>Loading</div>:contentList.map((element) => {

        return (
          <div key={element.id} className="card">
            <img width={400} src={element.image} alt="" />
            <div className="text-content">
              <h3>{element.title}</h3>

              <p>{element.content}</p>
            </div>
          </div>
        );
      })} 
    </div>
  );
};

export default Card;
