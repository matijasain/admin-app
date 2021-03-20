import {FC} from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Login from './Login';
import Users from './Users';
import Posts from './Posts';
import NotFound from './NotFound';

const App:FC = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/users" component={Users} />
          <Route exact path="/posts" component={Posts} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
