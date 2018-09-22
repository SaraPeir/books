import React, { Component } from 'react';
import './SinglePage.css';
import BookCard from '../BookCard/BookCard';
import Modal from '../Modal/Modal';
import todosObject from '../../todos.json';

class SinglePage extends Component {

  constructor() {
    super();
    this.state = {
      filterText: ''
    };
    this.handleChangeText = this.handleChangeText.bind(this);
  }
  
    renderCards(){
      const {spArray} = this.props;
      if(this.props.spArray !== undefined && this.props.spArray.length !== 0 ){
        console.log('ficcionBooks in renderCard()', this.props.spArray[0]);
        if(this.state.filter === '') {
          let mapped = this.props.spArray[0].map((card, index) => {
            return (
              <div key={index}>
              <BookCard title={card.title} author={card.author} type={card.type} url={card.urlImg} openModal={this.openModal} />
              </div>);
            });
          } else {
          var mapped = spArray[0].filter(book => book.title.toLowerCase().search(this.state.filterText.toLowerCase()) !== -1) 
          // sería: filtrame todos los casos donde en los titulos no me resulta el metodo search, applicado a book.title y con argumento la string contenida en filterText no me da resultado false
            .map((book, index) => {
              return (
                <div key={index}>
                  <BookCard title={book.title} author={book.autor} type={book.type} url={book.urlImg} />
                </div>          
              )
            }
          );
        console.log('spArray[0]', spArray[0]);
        console.log('filtered', mapped);
      }
        return mapped;
        }
        else {
          return <p>No results </p>
        }
    }

handleChangeText(event) {
    const {spArray} = this.props;
    const {filterText} = this.state;
    this.setState({
      filterText: event.target.value
    });
    console.log(filterText);
}

  render() {
    return (
      <div>
        <p id="page-title">{this.props.title}</p>
        <p id="page-text">{this.props.text}</p>
        <div className="search-box">
          <input className="input-style" placeholder="buscar por título, autor o temática" type="text" onChange={this.handleChangeText} value={this.state.filterText} />
        </div>
        <div className="books-box">
          {this.renderCards()}
        </div>
      </div>
    );
  }
}

export default SinglePage;
