import React, { Component } from 'react';

class Botonera extends Component {
  render() {
    return (
      <div>
       <button
        onClick={()=>this.props.eliminar(this.props.id)}><i className="fas fa-trash-alt"></i></button>
        <button 
        onClick={()=>this.props.marcar(this.props.id)}><i className="fas fa-check"></i></button>
      </div>
    );
  }
}

export default Botonera;