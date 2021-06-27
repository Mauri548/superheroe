// ********************************* Aclaración de Challenger *************************************
// No pude terminar el login por completo asi que deje comentado, lo que me falto finalizar es que al logearte
// te redireccione al /home y hacer un control de validación en el formulario de login.


import './App.css';

import { BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
  Redirect
} from 'react-router-dom';
import { useEffect, useState } from 'react';
import Home from './components/Home';
import Login from './components/Login';
import axios from 'axios';

function App() {

  const [userAuthenticate,setUserAuthenticate] = useState(true)
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')

  console.log('home')

  const ChangeEmail = (ev) => {
    setEmail(ev.target.value)
  }
  const ChangePassword = (ev) => {
    setPassword(ev.target.value)
  }

  const login = async () => {
    await axios.post(`http://challenge-react.alkemy.org/`,{'email':email,'password': password})
    .then((data) => {
      console.log(data)
      localStorage.setItem('Token', data.data.token)
      setUserAuthenticate(true)
      
    })
    .catch(error => console.log(error))
  }

  return (
    <div className="container-fluid px-0">
      <Router>
        <Switch>
          <Route 
            exact path={"/"}
            render = {() => {
              return(
                userAuthenticate? <Redirect to="/home" /> : <Redirect to="/login" />
              )
            }}
          />
          <Route path="/home">
            <Home/>
          </Route>
          
          <Route path="/login" >
            <Login changemail={ChangeEmail} changepassword={ChangePassword} login={login} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
