import './App.css';

import { BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
  Redirect
} from 'react-router-dom';
import { useState } from 'react';
import Home from './components/Home';

function App() {

  const [userAuthenticate,setUserAuthenticate] = useState(true)

  return (
    <div>
      <Router>
        <Switch>
          <Route 
            exact path="/"
            render = {() => {
              return(
                userAuthenticate? <Redirect to="/home" /> : <Redirect to="/login" />
              )
            }}
          />
          <Route path="/home">
            <Home/>
          </Route>
          
          <Route path="/login" >Login</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
