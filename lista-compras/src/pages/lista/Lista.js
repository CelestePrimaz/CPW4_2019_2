import React, { Component } from 'react';

import Menu from '../../components/menu/Menu';
import paginaAnterior from '../../img/paginaAnterior.png';

class Lista extends Component {
  render() {
    return (
      <div>
       <Menu 
            logo={paginaAnterior}
            paginaAnterior="/"
            titulo="Minha Lista"/>
        Lista
      </div>
    );
  }
}
export default Lista;


