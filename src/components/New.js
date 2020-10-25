import React, { Component } from 'react';
import { Link } from "react-router-dom";

class New extends Component{
  constructor(props) {
    super(props);
  }

  render(){
    return(
      <div class="col-1 ml-auto">
        <Link class="btn btn-primary" to="/new" > Nuevo Libro </Link>
      </div>
    );
  }
}


export default New;
