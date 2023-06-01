import React from "react";
import { NavLink,Outlet } from "react-router-dom";


export default function RootLayout() {
    return (

        <div>
        <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
        <a class="navbar-item" href="https://bulma.io">
          <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28"></img>
      </a>
  
      <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
  
    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <a class="navbar-item">
          <NavLink to={`/data`}>Data</NavLink>
        </a>
  
        <a class="navbar-item">
          <NavLink to={`/about`}>About</NavLink>
        </a>
      </div>
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a class="button is-primary">
              <strong>Sign up</strong>
            </a>
            <a class="button is-light">
              Log in
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
  <main>
    <Outlet></Outlet>
  </main>
  </div>
      );
}
