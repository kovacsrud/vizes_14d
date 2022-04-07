import Header from "./components/Header";
import Main from "./components/Main";
import Navigation from "./components/Navigation";
import Vizallas from "./components/Vizallas";
import Igazgatosag from "./components/Igazgatosag";
import {BrowserRouter,Switch,Route,Redirect} from 'react-router-dom';


function App() {
  return (
    <div className="bg-sky-100">
      <Header />
      <BrowserRouter>            
      <Navigation />
      <Switch>
        <Route path='/' exact><Main /></Route>
        <Route path='/vizallas'><Vizallas /></Route>
        <Route path='/igazgatosag'><Igazgatosag /></Route>      
        <Redirect to={'/'} />
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
