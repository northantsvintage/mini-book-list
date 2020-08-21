import React, { Component } from "react";

export default class Book extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log("you clicked me");
    console.log(this.state.count);
  }

  render() {
    // console.log(this.props);

    const { img, title, author } = this.props.info;
    return (
      <article className="book">
        <img src={img} width="150" alt="book" />
        <div>
          <h3>Title: {title} </h3>
          <h4>Author: {author} </h4>
          <button type="button" onClick={this.handleClick}>
            add count
          </button>
        </div>
      </article>
    );
  }
}
