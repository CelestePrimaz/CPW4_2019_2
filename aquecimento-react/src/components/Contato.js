import React, { Component } from 'react';


import ItemContato from "./ItemContato";
import email from "../img/email.png";
import endereco from "../img/endereco.png";
import fone from "../img/fone.png";

export default class Contato extends Component {
    render() {
        return (
            <div>
                <h3>Contato</h3>

                <ItemContato 
                icone={endereco}
                descricao="Endereço"
                contato="Rua helio galan, 0000" />

                <ItemContato 
                icone={fone}
                descricao="Telefone"
                contato="(67) 9-96000000" />

                <ItemContato 
                icone={email}
                descricao="E-mail"
                contato="cpw4@gmail.com" />
            </div>
        );
    }
}

