import React from 'react'
import "./NewBlog.css"
import blog from "../assets/blok.png"

const NewBlog = () => {
  return (
    <div className="newBlog-container">
      <div className='new-blog-img'>
        <img src={blog} alt="" />
        <div>­­­­─­­­­­­­­­­───── NEW BLOG­­­­­­ ­­­­─­­­­­­­­­­─────</div>
      </div>
      <form action="submit">
        <div className="form-container">
          <input placeholder="Title*" type="text" />
          <input placeholder="Image URL*" type="text" />
          <textarea placeholder="Content*" name="" id="" rows="20"></textarea>
        </div>
      </form>
    </div>
  );
}

export default NewBlog