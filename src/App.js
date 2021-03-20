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



function App() {
  return (
    <div  style={{ backgroundImage: `url(${bg})`, height:"100%", width:"100%", backgroundRepeat:"no-repeat", backgroundSize:"cover" }}>
      <Router>
      <Header></Header>
      <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/home">
            <Home />
          </Route>

          <Route path="/Search/:vehicalType">
            <Search />
          </Route>

          <Route path="/login">
            <LogIn />
          </Route>

        </Switch>
    </Router>
      
    </div>
  );
}

export default App;
