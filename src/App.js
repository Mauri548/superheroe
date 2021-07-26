// ********************************* Aclaración de Challenger *************************************
// No pude terminar el login por completo asi que deje comentado, lo que me falto finalizar es que al logearte
// te redireccione al /home y hacer un control de validación en el formulario de login.

import { BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
  Redirect,
  useHistory,
} from 'react-router-dom';
import { useEffect, useState } from 'react';
import Home from './components/Home';
import Login from './components/Login';
import axios from 'axios';
import auth from './auth';
import ProtectedRoute from './components/ProtectedRoute';

function App(props) {

  // Variables que se usaran para la autentificación de usuario
  const [isAuth,setAuth] = useState(false)
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  let history = useHistory()

  const ChangeEmail = (ev) => {
    setEmail(ev.target.value)
  }
  const ChangePassword = (ev) => {
    setPassword(ev.target.value)
  }

  // challenge@alkemy.org
  // react
  const login = async () => {
    await axios.post(`http://challenge-react.alkemy.org/`,{'email':email,'password': password})
    .then((data) => {
      console.log(data)
      localStorage.setItem('Token', data.data.token)
      setAuth(true)
      history.push("/home")
    })
    .catch(error => console.log(error))
  }

  return (
    <div className="container-fluid px-0">
      <Switch>
        {/* Ruta para verificar que el usuario este logeado */}
        <Route 
          exact path={"/"}
          render = {() => {
            return(
              isAuth? <Redirect to="/home" /> : <Redirect to="/login" />
            )
          }}
        />
        <ProtectedRoute exact path="/home" component={Home} isAuth={isAuth} />
        
        <Route exact path="/login" >
          <Login changemail={ChangeEmail} changepassword={ChangePassword} login={login} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
