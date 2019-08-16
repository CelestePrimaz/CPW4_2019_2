import React, { Component } from 'react';

class Menu extends Component {
  render() {
    return (
      <div className="menu">
          <span>{this.props.titulo}</span>
      </div>
    );
  }
}
export default Menu;