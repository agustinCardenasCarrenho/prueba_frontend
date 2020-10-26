import React, { Component } from 'react';
import { Link } from "react-router-dom";

class BtnBack extends Component{
  constructor(props) {
    super(props);
  }

  render(){
    return(
      <div class="col-1 mr-auto">
        <Link class="" to="/" > <i class="fa fa-arrow-left"></i> </Link>
      </div>
    );
  }
}


export default BtnBack;
