import React, { Component } from 'react';
import './Favourites.css';
import FavouritesCard from '../FavouritesCards/FavouritesCards';

class Favourites extends Component {

    constructor() {
        super();
        this.state = {
        favourites: [],
        title: '',
        author: ''
        };
        this.changeTitle = this.changeTitle.bind(this);
        this.changeAuthor = this.changeAuthor.bind(this);
        this.updateData = this.updateData.bind(this);
        // this.resetInput = this.resetInput.bind(this);
        this.deleteCard = this.deleteCard.bind(this);
      }

      changeTitle(event) {
        const {title} = this.state;
        this.setState({
          title: event.target.value
        });
    }

    changeAuthor(event) {
        const {author} = this.state;
        this.setState({
        author: event.target.value
        });
    }

    resetTitle(){
        this.setState({
            title: ''
          });
      }

      resetAuthor(){
        this.setState({
            author: ''
          });
      }

    updateData(){
        const {title,  author, favourites} = this.state;
        const newTitle = title;
        const newAuthor = author;
        
        if(newTitle !== '' && newAuthor !== '') {
            this.setState({
                favourites: favourites.concat({newTitle, newAuthor})
            });
        }
        console.log('favourites', this.state.favourites);
        this.resetTitle();
        this.resetAuthor();
    }

    deleteCard(title) {
    const filteredArray = this.state.favourites.filter(favourite => favourite.newTitle !== title)
    this.setState({favourites: filteredArray});
    console.log('filteredArray', this.state.favourites)
    }

    renderFavourites() {
        if (this.state.favourites.length > 0) {
            var cards = this.state.favourites.map((card, index) => {
                return (
                        <div key={index} className="col-xs-12 col-sm-6 col-lg-4 mt-3 mb-3 mt-sm-5 mb-sm-5">
                            <FavouritesCard title={card.newTitle} author={card.author} onClose={() => this.deleteCard(card.newTitle)} />
                </div>
                );
            });
            return (
                <div className="container">
                    <div className="row">
                {cards} 
                </div>
                </div>
            );
        }
    }
        

render() {
    
return (
    <div>
    <div className={'form-container'}>
    <input className="input-favourites-style" placeholder="título" type="text" onChange={this.changeTitle} value={this.state.title} />
    <input className="input-favourites-style" placeholder="autor" type="text" onChange={this.changeAuthor} value={this.state.author} />
    <button onClick={this.updateData}>Ya</button>
    </div>
    {this.renderFavourites()}
    
    </div>
);
}
}

export default Favourites;

// =============================

// import ContentEditable from 'react-contenteditable';
// import React, { Component } from 'react';


// class Favourites extends Component {
// constructor() {
// super()
// this.state = {html: "<b>Hello <i>World</i></b>"};
// };

// handleChange = evt => {
// this.setState({html: evt.target.value});
// };



// render() {


//     return (
//         <div>
//         <ContentEditable
//         html={this.state.html} // innerHTML of the editable div
//         disabled={false}       // use true to disable edition
//         onChange={this.handleChange} // handle innerHTML change
//         tagName='article' // Use a custom HTML tag (uses a div by default)
//             /> 
    

//         </div>
//     );
    
    
// };
// }

// export default Favourites;



