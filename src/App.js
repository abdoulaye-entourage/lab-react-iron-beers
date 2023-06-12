import './App.css';
import HomePage  from './pages/HomePage';
import Beers from './pages/Beers';
import RandomBeer from './pages/RandomBeers.js';  
import NewBeer from './pages/NewBeer';

import {
  Switch,
  BrowserRouter,
  Route,
} from "react-router-dom"; 
import BeerDetails from './pages/BeerDetails';
import Jokes from './pages/Jokes';

function App({beer}) {
  return (
    <div className="App">
         <BrowserRouter>
      
   <Switch>

      <Route exact path="/" ><HomePage /></Route>
      <Route path="/jokes"><Jokes /></Route>
      <Route path="/random-beer" > <RandomBeer/></Route>
      <Route path="/new-beer" ><NewBeer/></Route>
      <Route path="/beers/:beerId" ><BeerDetails/></Route>
      <Route path="/beers"> <Beers /></Route>

    </Switch>
  </BrowserRouter>
    </div>
  );
}

export default App;
