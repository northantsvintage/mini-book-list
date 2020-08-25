import React, { Component } from "react";

export default class Book extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
    };
  }

  render() {
    // console.log(this.props);

    const { id, img, title, author } = this.props.info;
    const { handleDelete } = this.props;

    return (
      <article className="book">
        <img src={img} width="150" alt="book" />
        <div>
          <h3>Title: {title} </h3>
          <h4>Author: {author} </h4>
          {/* use anonymous function in order to call handleDelete with id as paramenter */}
          <button type="button" onClick={() => handleDelete(id)}>
            Delete Me
          </button>
        </div>
      </article>
    );
  }
}
