import React, { Component } from 'react';
import {Link, withRouter}  from 'react-router-dom'

class NavBar extends Component {

  constructor(props) {
    super(props);
  }

  getNavLinkClass = (path) => {
      return this.props.location.pathname === path ? 'nav-item active' : 'nav-item';
  }

  render(){
    return(
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li className={this.getNavLinkClass("/")} >
              <Link class="nav-link" to="/" exact >Home</Link>
            </li>
            <li className={this.getNavLinkClass("/new")}>
              <Link class="nav-link"  to="/new" >Nuevo libro</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }

}

export default withRouter(NavBar);
