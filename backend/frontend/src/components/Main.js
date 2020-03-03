import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Boards from '../containers/Boards';
import Board from '../containers/Board';

const Main = () => (
  <div className="Main">
    <Switch>
      <Route exact path='/' component={Boards} />
      <Route exact path='/boards' component={Boards} />
      <Route path='/boards/:id' component={Board} />
    </Switch>
  </div>
)

export default Main;