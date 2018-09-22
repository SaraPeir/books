import React, { Component } from 'react';
import './App.css';
import SinglePage from './components/SinglePage/SinglePage';
import todosObject from './todos.json';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';


class App extends Component {

  constructor() {
    super();
    this.state = {
      books: [],
      ficcionBooks: [],
      noFiccionBooks: [],
      filterText: ''
    };
  }

    componentDidMount() {
      this.createArrays();
  }

  createArrays() {
    const array = [];
    const booksArray = [];
    const booksFiccionArray = [];
    const booksNoFiccionArray = [];

    const allBooks = array.concat(todosObject);  //conca<t porque todosObject es un pbjecto, no un array
    const {books, ficcionBooks, noFiccionBooks} = this.state;
    
    booksArray.push(allBooks[0]);
    booksFiccionArray.push(allBooks[0].ficcion);
    booksNoFiccionArray.push(allBooks[0].noFiccion);

    console.log('booksArray', booksArray);
    console.log('ficcion books Array', booksFiccionArray);
    console.log('no ficcion books Array', booksNoFiccionArray);
    console.log(booksNoFiccionArray[0][0].title);

    this.setState({
      book: booksArray,
      ficcionBooks: booksFiccionArray,
      noFiccionBooks: booksNoFiccionArray
    });

    console.log('ficcionBooks actuslizado', this.state.ficcionBooks);
    console.log('books actuslizado', this.state.books);
  }

  render() {
    const ficcionBooksTitle = 'Los libros más vendidos de ficción';
    const ficcionBooksText = 'Descubre cuáles son los libros más vendidos de este año con este ránking de bestsellers. Los libros más leídos de romántica, thriller, juvenil, novelas, libros de no ficción y mucho más lo encontrarás aquí.';

    const noFiccionBooksTitle = 'Los libros más vendidos de no ficción';
    const noFiccionBooksText = 'Ensayos, biografías, libros de historia, empresa, bienestar... Descubre cuáles son los bestsellers de los libros de no ficción.';
    return (
      <div className="App">
        <button>  <Link to='/' style={{ textDecoration: 'none', color: 'white', textAlign: 'center'}} > Libros de ficción </Link></button>
        <button> <Link to='/noFiccion' style={{ textDecoration: 'none', color: 'white', textAlign: 'center'}}>Libros de no ficción</Link></button>
        <Switch>
          <Route exact path='/' render={(props) => <SinglePage {...props} spArray={this.state.ficcionBooks} title={ficcionBooksTitle} text={ficcionBooksText} />}/>
          <Route exact path='/noFiccion' render={(props) => <SinglePage {...props} spArray={this.state.noFiccionBooks} title={noFiccionBooksTitle} text={noFiccionBooksText} />}/>
        </Switch>
      </div>
    );
  }
}

export default App;

