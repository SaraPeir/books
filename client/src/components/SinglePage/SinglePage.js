import React, { Component } from 'react';
import './SinglePage.css';
import BookCard from '../BookCard/BookCard';
import ModalBS from '../Modal/Modal';
import todosObject from '../../todos.json';

class SinglePage extends Component {

  constructor() {
    super();

  }
  
    renderCards(){
      const {spArray} = this.props;
      if (this.props.spArray !== undefined && this.props.spArray.length !== 0 ) {
        console.log('ficcionBooks in renderCard()', this.props.spArray[0]);
        if (this.props.filterText === null) {
          let mapped = this.props.spArray[0].map((card, index) => {
            return (
              <div key={index} className={'col-xs-12 col-sm-6 col-md-4 m-5'}>
              <BookCard title={card.title} author={card.author} type={card.type} url={card.urlImg} openModal={this.openModal} introductionText={card.introductionText} content={card.content} pageNumber={card.pageNumber} tag={card.tag} type2={card.type2} />
              </div>);
            });
          } else {
          var mapped = spArray[0].filter(book => book.title.toLowerCase().search(this.props.filterText.toLowerCase()) !== -1 || 
          book.author.toLowerCase().search(this.props.filterText.toLowerCase()) !== -1 || 
          book.type.toLowerCase().search(this.props.filterText.toLowerCase()) !== -1 ||
          book.type2.toLowerCase().search(this.props.filterText.toLowerCase()) !== -1 ) 
          // sería: filtrame todos los casos donde en los x = (title || author || type)  no me resulta qye el metodo search, applicado a book.x y con argumento la string contenida en filterText me dea resultado true (!== 1)
            .map((book, index) => {
              return (
                <div key={index} className={'col-xs-12 col-sm-6 col-lg-4 mt-3 mb-3 mt-sm-5 mb-sm-5'}>
                  <BookCard title={book.title} author={book.author} type={book.type} url={book.urlImg} introductionText={book.introductionText} content={book.content} pageNumber={book.pageNumber} tag={book.tag} type2={book.type2} />
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

  render() {
    return (
      <div>
      <div className="searchbox-container">
        <p id="page-title">{this.props.title}</p>
        
        <div className="search-box">
          <input className="input-style" placeholder="buscar por título, autor o temática" type="text" onChange={this.props.onChangeText} value={this.props.filterText} />
        </div>
        <p id="page-text">{this.props.text}</p>
        </div>
        <div className="container">
        <div className="row">
        {this.renderCards()}
        </div>
        </div>
      </div>
    );
  }
}

export default SinglePage;
