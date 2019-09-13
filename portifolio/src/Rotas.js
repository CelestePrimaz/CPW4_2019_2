import React  from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

import Inicio from './pages/pagina/Inicio';
import Bio from './pages/pagina/Bio';
import Contato from './pages/pagina/Contato';


import ROTAS from './constants/rotas';

const Rotas = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path={ROTAS.INICIO} component={Inicio}/>
            <Route exact path={ROTAS.BIO} component={Bio}/>
            <Route exact path={ROTAS.CONTATO} component={Contato}/>
         </Switch>
    </BrowserRouter>
);
export default Rotas;