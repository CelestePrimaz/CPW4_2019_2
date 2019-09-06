import axios from 'axios';

export default class ListaService{
    constructor(){
        this.listas = [];
        this.api = axios.create({
            baseURL:'http://localhost:3001/listas'
        });
    }

  async recuperarListas(){
      let resposta = await this.api.get('/');
      this.listas = resposta.data;
      return this.listas;
    }
    async salvar(lista){
        await this.api.post('/', lista);
    
    }
}