import React, {useContext, useState} from 'react';
import "./NewBlog.css";
import blog from "../assets/blok.png";
import { addContent } from '../utils/Function';
import { userInfo } from '../App';

const NewBlog = () => {
 const [title, setTitle] = useState("");
 const [image, setImage] = useState("");
 const [content, setContent] = useState("");

 const {myUser} = useContext(userInfo);

 const initial = {
  email: myUser.email,
  title: title,
  image:image,
  content:content
 }

 const mySubmit = (e) =>{
  addContent(initial);
  console.log(initial);
  e.preventDefault();
 
 }

  return (
    <div className="newBlog-container">
      <div className="new-blog-img">
        <img src={blog} alt="" />
        <div>­­­­─­­­­­­­­­­───── NEW BLOG­­­­­­ ­­­­─­­­­­­­­­­─────</div>
      </div>
      <form onSubmit={(e)=>mySubmit(e)} action="submit">
        <div className="form-container">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title*"
            type="text"
          />
          <input
            value={image}
            onChange={(e) => setImage(e.target.value)}
            placeholder="Image URL*"
            type="text"
          />
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Content*"
            name=""
            id=""
            rows="20"
          ></textarea>
          <button type='submit'>bas bana</button>
        </div>
      </form>
    </div>
  );
}

export default NewBlog