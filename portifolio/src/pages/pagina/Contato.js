import React, { Component } from 'react';

import Menu from '../../components/menu/Menu';
import './Style.scss';

export default class Inicio extends Component {
    render() {
        return (
            <div>
                <Menu inicio="/" bio="/bio"  contato="/contato"/>

                <div className="main">

                         <h1>Contato</h1>

                         <ul>
                            <li>Nome: Celeste Da Costa Primaz</li>
                            <li>E-mail: celesteprimaz@gmail.com</li>
                            <a href="https://github.com/CelestePrimaz"><li>Projetos Github: CelestePrimaz</li></a>
                            <li>Estado: Aquidauana-MS</li>
                        </ul>

                </div>
             
            </div>
        );
    }
}