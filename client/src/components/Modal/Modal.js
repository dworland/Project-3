import React from 'react';
import PropTypes from 'prop-types';
import './Modal.css';

class Modal extends React.Component {
  render() {
    // Render nothing if the "show" prop is false
    if(!this.props.show) {
      return null;
    }

    return (
      <div className="Modal-modal">
      <div className="modal-close-button row">
        <div className="col-sm-1 col-sm-offset-11">
          <button onClick={ this.props.onClose } className="close-btn">X</button>
        </div>
      </div>

        {this.props.children}
      </div>
    ); 
  }
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node
};

export default Modal;