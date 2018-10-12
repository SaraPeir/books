import React, { Component } from 'react';
import './FavouritesCards.css';

class FavouritesCards extends Component {
    constructor(props) {
        super(props);
      }
      
  render() {
    return (
      <div>
        <div className="card-box" >
          <img src={this.props.url} alt={`${this.props.title} image`} />
          <p id="strong">{this.props.title}</p>
          <p>{this.props.author}</p>
          <p>{this.props.type}</p>
          <button type="button" className="close" onClick={this.props.onClose}>&times;</button>
        </div>
      </div>
    );
  }
}

export default FavouritesCards;
