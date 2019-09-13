import React, { Component } from 'react';
import Menu from '../../components/menu/Menu';
import './Style.scss';

export default class Inicio extends Component {
    render() {
        return (
            <div>
                <Menu inicio="/" bio="/bio"  contato="/contato"/>

                <div className="main">

                         <h1>Bem vindo</h1>

                         <p>
                         There are many variations of passages of Lorem Ipsum available, but the majority
                         have suffered alteration in some form,
                         by injected humour, or randomised words which don't look even slightly believable.
                         </p>

                </div>
             
            </div>
        );
    }
}