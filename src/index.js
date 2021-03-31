import React from "react";
import ReactDom from "react-dom";
import "./index.css";

function BookList() {
  return (
    <section className="booklist">
      <Book />
    </section>
  );
}

const Book = () => {
  const title = "And Away...";
  const author = "Bob Mortimer";
  const image = "https://m.media-amazon.com/images/I/51XKn0Ua3gL.jpg";
  return (
    <article className="book">
      <img src={image} alt="" />
      <h1>{title}/</h1>
      <h4>{author.toUpperCase()}</h4>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
