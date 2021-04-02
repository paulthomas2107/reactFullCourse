import React from "react";

const Book = (props) => {
  const { id, img, author, title } = props;
  // Attribute, eventHandler
  // onClick, onMouseOver
  const clickHandler = () => {
    alert("Hello Paul !");
  };
  const complexExmple = (author) => {
    console.log(author);
  };
  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log("Hi, I am a mouseover " + author);
      }}
    >
      <img src={img} alt="" />
      <h1 onClick={() => console.log(title)}>{title}</h1>
      <h4>{author}</h4>
      <h4>{id}</h4>
      <button type="button" onClick={clickHandler}>
        Ref Example
      </button>
      <button type="button" onClick={() => complexExmple(author)}>
        More complex example
      </button>
    </article>
  );
};

export default Book;
