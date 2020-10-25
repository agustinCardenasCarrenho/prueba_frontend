import React ,{Component} from 'react';
import New from '../components/New.js';
import { withRouter } from 'react-router-dom';

class Home extends Component{

  constructor(props) {
    super(props);
    this.state = {books : []};
  }

  handleClick = (slug) => {
   this.props.history.push(`/book/${slug}`);
  }

  render(){
    return(
      <div class="container">
        <New/>
        <div class="row row-cols-1 row-cols-md-3">
            {this.state.books.map(book => {
              return(
              <div class="container">
                <div class="col m-4">
                   <div class="card">
                      <img src={'http://localhost:3001/'+book.image} class="card-img-top img-fluid" alt="..." onClick={ () => this.handleClick(book.slug)}/>
                      <div class="card-body">
                        <h5 class="card-title text-center">{book.title}</h5>
                        <p class="card-text">{book.synopsis}</p>
                      </div>
                   </div>
                 </div>
                </div>
              )
            })}
        </div>
      </div>
    );
  }

  componentDidMount(){
    fetch('http://localhost:3001/api/v1/book').then(resp =>  resp.json()).
    then( data => {
      this.setState({books : data});
    });
  }

}


export default withRouter(Home);
