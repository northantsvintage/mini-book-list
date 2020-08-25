import React, { Component } from "react";

export default class Book extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
      showInfo: true,
    };
  }

  handleInfo = () => {
    this.setState({
      showInfo: !this.state.showInfo,
    });
  };

  render() {
    // console.log(this.props);

    const { id, img, title, author } = this.props.info;
    const { handleDelete } = this.props;

    const checkInfo = (info) => {
      if (info === true) {
        return <p>More info about the book</p>;
      } else {
        return null;
      }
    };

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
          <button type="button" onClick={this.handleInfo}>
            Toggle Info
          </button>
          {/* conditional rendering: first way */}
          {/* {this.state.showInfo && <p>More info about the</p>} */}
          {/* ternary operator: second way */}
          {/* {this.state.showInfo ? <p>More info about the book</p> : null} */}
          {/* functional rendering: third way */}
          {checkInfo(this.state.showInfo)}
        </div>
      </article>
    );
  }
}
