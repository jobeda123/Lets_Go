import './App.css';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/Header/Header';
import bg from '../src/images/road-bg3.jpg'
import Search from './components/Search/Search';
import LogIn from './components/LogIn/LogIn';
import { createContext, useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();


function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <div  style={{ backgroundImage: `url(${bg})`, width:"100%", height:"100%" ,backgroundPosition: 'center',backgroundRepeat:"no-repeat", backgroundSize:"cover" }}>
        <Router>
        <Header></Header>
        <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/home">
              <Home />
            </Route>

            <PrivateRoute path="/destination">
              <Search></Search>
            </PrivateRoute>

            <PrivateRoute path="/destination/:vehicalType">
              <Search />
            </PrivateRoute>

            <Route path="/login">
              <LogIn />
            </Route>

          </Switch>
      </Router>
      
    </div>
    </UserContext.Provider>
  );
}

export default App;
