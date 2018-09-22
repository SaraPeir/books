import React, { Component } from 'react';
import './Modal.css';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ModalBS extends Component {

  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div>
      <Button onClick={this.toggle}>Más detalles</Button>
      <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
        <ModalHeader toggle={this.toggle}>{this.props.title}</ModalHeader>
        <ModalBody>
          <p>{this.props.title}</p>
        </ModalBody>
      </Modal>
      
    </div>  
    );
  }
}

export default ModalBS;




// import React, { Component } from 'react';
// import './Modal.css';

// class Modal extends Component {

//   render() {
//     return (
//       <div className={`${this.props.isHidden} modal-box`}>
//       <div onClick ={this.onClose}>X</div>
//       <div className="modal-card">
//       <p id="strong">{this.props.title}</p>
//       <p>{this.props.author}</p>
//       <p id="tag">{this.props.type}</p>
//       </div>
//       </div>
//     );
//   }
// }

// export default Modal;

// <img src={this.props.url} alt={`${this.props.title} image`} />