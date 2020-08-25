import React, { Component } from "react";
import Book from "./Book";
import booksData from "./bookData";
import books from "./bookData";

export default class Booklist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: booksData,
    };
  }

  handleDelete = () => {
    console.log("I am from parent component");
  };

  render() {
    // const books = this.state.books.map((item) => item.book);
    // console.log(books);
    return (
      <section>
        <h3>Booklist</h3>
        {this.state.books.map((item) => (
          <Book key={item.id} info={item} handleDelete={this.handleDelete} />
        ))}
      </section>
    );
  }
}
