import React, { Component } from 'react';

import Menu from '../../components/menu/Menu';
import './Style.scss';

export default class Inicio extends Component {
    render() {
        return (
            <div>
                <Menu inicio="/" bio="/bio"  contato="/contato"/>

                <div className="main">

                         <h1>Bio</h1>

                         <p>
                         
                            Meu nome é Celeste Da Costa Primaz tenho 20 anos , conclui o ensino médio em 2016 na 
                             Ee Dep Carlos Souza Medeiros, atualmente estou cursando
                            tecnologia em sistemas para internet(TSI) no IFMS campus Aquidauana, no 4º semestre ...
                         </p>

                </div>
             
            </div>
        );
    }
}