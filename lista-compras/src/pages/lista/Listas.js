import React, { Component } from 'react';
import { Link } from 'react-router-dom';


import  Menu from '../../components/menu/Menu';
import logo from '../../img/logo.png';
import adicionar from '../../img/adicionar.png';
import ListaService from '../../services/ListaService';
import './Lista.scss';

class Listas extends Component {

  constructor(){
      /**
       * Toda vez que criar um contrutor em um componente REACT, lembre-se
       * de invocar o contrutor da classe mãe Componet na primeira linha 
       * de código.
       */
      super();

      this.state = {
        listas: []
      }

      this.service = new ListaService();

  }

  async componentDidMount(){
    const listas =
    await this.service.recuperarListas();
    this.setState({listas})
  }


  render() {
    const listas = this.state.listas.map(lista => (
      <div className="item" key={lista._id}>{lista.nome}</div>
      
    ));
    return (
      <div>
        <Menu 
          logo={logo}
          paginaAnterior="/"
          titulo="Lista de Compras"/>

        <div className="conteiner">
          <div>
            {
              /**
               * Neste trecho de códgio,
               * o operador AND(&&) atua como
               * um operador de ligação entre a 
               * condição lógica e o código de
               * apresentação a ser renderizado. 
               */
              !this.state.listas  &&
              <h2>Minhas listas</h2>
            }

            {
              this.state.listas &&
              <p id="mensagemNenhumaLista">Clique no botão abaixo para cadastrar sua lista!</p>
            }
            <div id="listagem">
              {listas}
            </div>

            <div id="areaBotao">
              <div id="botaoNovaLista">
                <Link to="/criarLista">
                  <img src={adicionar} alt="Nova lista" />
                </Link>
              </div>
              
            </div>

          </div>
        </div>
      </div>
    );
  }
}
export default Listas;