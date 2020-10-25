import React ,{Component} from 'react';
import { Link } from "react-router-dom";

class BookDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {book : {}}
  }

  render(){
    return(
      <div class="container">
      <div class="col-1 ml-auto mt-4" ><Link to="/"  class="btn btn-danger rounded-circle">X</Link></div>
      <div class="row">
        <div class="col-4">
          <img src={'http://localhost:3001/'+this.state.book.image} class="w-75"/>
        </div>
        <div class="col-8">
        <h1 class="text-center">{this.state.book.title}</h1>
        <h5 class="text-center font-italic"> ({this.state.book.author}) </h5>
        <p>{this.state.book.synopsis}</p>
        <span class="badge badge-success">{this.state.book.category}</span>
        </div>
      </div>
      </div>
    );
  }

  componentDidMount(){
    fetch(`http://localhost:3001/api/v1/book/${this.props.match.params.slug}`).
    then(resp => resp.json()).
    then(data => this.setState({book : data}) );
  }
}

export default BookDetail;
