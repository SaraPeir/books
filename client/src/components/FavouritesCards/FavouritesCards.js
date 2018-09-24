import React, { Component } from 'react';


class FavouritesCards extends Component {
    constructor(props) {
        super(props);
      }
      
// https://github.com/haltu/muuri#table-of-contents

  render() {
    return (
      <div>
        <div className="card-box" >
          <img src={this.props.url} alt={`${this.props.title} image`} />
          <p id="strong">{this.props.title}</p>
          <p>{this.props.author}</p>
          <p>{this.props.type}</p>
          <button type="button" className="close">&times;</button>
        </div>
      </div>
    );
  }
}

export default FavouritesCards;