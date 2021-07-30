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
import ProtectedRoute from './components/ProtectedRoute';

function App(props) {

  // Variables que se usaran para la autentificación de usuario
  const [isAuth,setAuth] = useState(false)
  const [errorMessage,setErrorMessage] = useState(false)
  let history = useHistory()

  // challenge@alkemy.org
  // react
  const login = async (values) => {
    await axios.post(`http://challenge-react.alkemy.org/`,{'email': values.email,'password': values.password})
    .then((data) => {
      console.log(data)
      localStorage.setItem('Token', data.data.token)
      setAuth(true)
      history.push("/home")
    })
    .catch(error => {
      setErrorMessage(true)
    })
  }

  const closeErrorMessage = () => {
    setErrorMessage(false)
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
          <Login login={login} errorMessage={errorMessage} closeModal={closeErrorMessage} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
