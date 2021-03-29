import React from "react";
import ReactDom from "react-dom";
import "./index.css";

function BookList() {
  return (
    <section className="booklist">
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => (
  <img src="https://m.media-amazon.com/images/I/51XKn0Ua3gL.jpg" alt="" />
);

const Title = () => <h1>And Away...</h1>;

const Author = () => <h4>Bob Mortimer</h4>;

ReactDom.render(<BookList />, document.getElementById("root"));
