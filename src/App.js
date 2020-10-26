import React ,{Component} from 'react';
import './App.css';
import { BrowserRouter ,Route  } from "react-router-dom";
import  Home  from './pages/Home.js';
import NewBook from './pages/NewBook.js';
import BookDetail from './pages/BookDetail.js';
import NavBar  from './components/NavBar.js';

class App extends Component {

  constructor(props) {
    super(props);
  }

  render(){
    return(
      <div>
      <BrowserRouter>
        <div>
        <NavBar />
          <Route exact path="/" component={Home}/>
          <Route path="/new" component={NewBook}/>
          <Route path="/book/:slug" component={BookDetail}/>
        </div>
      </BrowserRouter>
      </div>
    );
  }


}

export default App;
