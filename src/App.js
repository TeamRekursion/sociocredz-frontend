import './App.css'
// import Landingpage from './pages/landing'
import Loginpage from './pages/loginpage';
import More from './pages/more'
// import Dashnav from './components/dashnav'
import './App.css';
import Landingpage from './pages/landing';
import Home from './pages/home';
// import Loginpage from './pages/loginpage';
// import More from './pages/more';
import Campaign from './pages/campaign';
import Posts from "./pages/posts";
import Donations from './pages/donations'
import { BrowserRouter as Router, Switch , Route} from 'react-router-dom';
// import {Link} from 'react-router-dom';
// import Dashnav from './components/dashnav';

function App () {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route path="/" exact component={Landingpage}/>
        <Route path="/login" component={Loginpage}/>
        <Route path="/more" component={More}/>
        <Route path="/campaign" component={Campaign}/>
        <Route path="/donations" component={Donations}/>
        <Route path="/posts" component={Posts}/>
        <Route path="/home" component={Home}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App
