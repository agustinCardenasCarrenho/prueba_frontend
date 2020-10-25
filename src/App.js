import React ,{Component} from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import  Home  from './pages/Home.js';
import NewBook from './pages/NewBook.js';
import BookDetail from './pages/BookDetail.js';

class App extends Component {

  constructor(props) {
    super(props);
  }

  render(){
    return(
      <Router>
        <div>
          <Route exact path="/" component={Home}/>
          <Route path="/new" component={NewBook}/>
          <Route path="/book/:slug" component={BookDetail}/>
        </div>
      </Router>
    );
  }


}

export default App;
