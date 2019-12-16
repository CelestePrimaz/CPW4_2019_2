import React, { Component } from 'react';

import './Pesquisar.scss';

export default class Pesquisar extends Component {

    constructor() {
        super();
        this.state = {
            valoresRetornados: [],
            termosPesquisa: ''
        }
    }
    pesquisa = event => {
        event.preventDefault();
        this.setState({
            valoresRetornados: []
        });
        const ponteiro = this;

        var url = "https://pt.wikipedia.org/w/api.php";
        var 
            param = {
                action: 'query',
                list: 'search',
                srsearch: this.state.termosPesquisa,
                format: 'json'
        };

        url = url + '?origin=*';
        Object.keys(param).forEach((key) => {
            url += "&" + key + "=" + param[key];
        });
        fetch(url)
            .then(
                function (response) {
                    return response.json();
                }
            )
            .then(
                function (resposta) {
                    for (var key in resposta.query.search) {
                        ponteiro.state.valoresRetornados.push({
                            pagResultID: resposta.query.search[key].pageid,
                            pagResultTitulo: resposta.query.search[key].title,
                            pagResultTrecho: resposta.query.search[key].snippet
                        });
                    }
                }
            )
            .then(
                function (resposta) {

                    for (var key2 in ponteiro.state.valoresRetornados) {
                        let page = ponteiro.state.valoresRetornados[key2];
                        let pageID = page.pagResultID;
                        let recuperarUrl = `https://pt.wikipedia.org/w/api.php?origin=*&action=query&prop=info&pageids=${pageID}&inprop=url&format=json`;

                        fetch(recuperarUrl)
                            .then(
                                function (resposta) {
                                    return resposta.json();
                                }
                            )
                            .then(
                                function (resposta) {                                    
                                    page.urlResultConsulta =
                                    resposta.query.pages[pageID].fullurl;
                                    ponteiro.forceUpdate();
                         }
                    )
                }
            }
        )
    }

    alterarTermPesq = event => {
        this.setState({
            termosPesquisa: event.target.value
        });
    }
    render() {
        let pesquisaResults = [];
        for (var key3 in this.state.valoresRetornados) {
            pesquisaResults.push(
                <div className="resultado" key={key3}>
                    <h3>
                        <a href={this.state.valoresRetornados[key3].urlResultConsulta}>
                            {this.state.valoresRetornados[key3].pagResultTitulo}
                        </a>
                    </h3>

                    <p className="sinopse" dangerouslySetInnerHTML=
                        {{ __html: this.state.valoresRetornados[key3].pagResultTrecho }}></p>
                </div>
            );
        }
        console.log(pesquisaResults);

        return (
            <div className="buscador">
                <h1>Buscador de artigos</h1>
                <form >
                    <input 
                        type="text"
                        placeholder="buscar artigo"
                        value={this.state.termosPesquisa || ''}
                        onChange={this.alterarTermPesq} />

                    <button 
                        type='submit'
                        onClick={this.pesquisa}>
                        Pesquisar
                        </button>
                </form>
                {pesquisaResults}
            </div>
        );
    }
}