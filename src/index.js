import React from "react";
import ReactDom from "react-dom";
import "./index.css";
// setup
const books = [
  {
    id: 1000,
    img: "https://m.media-amazon.com/images/I/51XKn0Ua3gL.jpg",
    title: "And Away...",
    author: "Bob Mortimer",
  },
  {
    id: 2000,
    img: "https://m.media-amazon.com/images/I/51XKn0Ua3gL.jpg",
    title: "And Away V2.0",
    author: "Bob Mortimer and Anon",
  },
];

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return (
          <Book key={book.id} book={book}></Book>
        );
      })}
    </section>
  );
}

const Book = (props) => {
  const { id, img, author, title } = props.book;
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
      <h4>{id}</h4>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
