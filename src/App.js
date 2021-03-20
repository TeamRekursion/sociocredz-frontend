import './App.css';
import Landingpage from './pages/landing'
import Loginpage from './pages/loginpage';
import More from './pages/more';
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
      </Switch>
      {/* <Dashnav/> */}
      {/* <Loginpage/> */}
      {/* <More /> */}
      {/* <Landingpage/> */}
    </div>
    </Router>
  );
}

export default App
