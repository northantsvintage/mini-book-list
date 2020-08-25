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

  handleDelete = (id) => {
    // all the books that dont have this id, return them; that is how it is the targeted one deleted

    const sortedBooks = this.state.books.filter((item) => item.id !== id);
    console.log(sortedBooks);
    // filter it with setState, that is new state after clicking on the button
    this.setState({
      books: sortedBooks,
    });
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
