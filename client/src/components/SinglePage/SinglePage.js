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
    if(this.props.spArray !== undefined && this.props.spArray.length !== 0 ){
      console.log('ficcionBooks in renderCard()', this.props.spArray[0]);
      // const modalHidden = (this.isOpen == true) ? '' : 'hidden';
      
      let mapped = this.props.spArray[0].map((card, index) => {
        return (
          <div key={index}>
          <BookCard title={card.title} author={card.author} type={card.type} url={card.urlImg} openModal={this.openModal} />
          </div>);
      });
      return mapped;
    } else {
      return <p>No results </p>
    }
  }

 handleChangeText(event){
    const {spArray} = this.props;
    const {filterText} = this.state;
    
    this.setState({
      filterText: event.target.value
    });

    console.log(filterText);

    if (spArray[0] !== undefined && this.props.spArray[0].length !== 0) {
      var filtered = spArray[0].filter(book => book.title.includes(this.state.filterText.toLowerCase()))
                              .map((book, index) => {
                                return (
                                  <div key={index}>
                              <BookCard title={book.title.toUpperCase()} author={book.autor} type={book.type} url={book.urlImg} />
                              </div>
                                )
                              }
                            );
                              

    //   var filtered =  spArray[0].filter(b => {
    //     return book.title.toLowerCase().includes('Patria');
    //   }
    // ).map((book, index)=>{
    
    //   return (
    //     <div key={index}>
    //     <BookCard title={book.title.toUpperCase()} author={book.autor} type={book.type} url={book.urlImg} />
    //     </div>)
    //   });
      console.log('spArray[0]', spArray[0]);
      console.log('filtered', filtered);
      return filtered;
    }
    else {
      return <p> No results </p>
    }

   }

  render() {
  //  this.showModal();
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
