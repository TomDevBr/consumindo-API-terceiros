import React from 'react';
import logo from '../assets/logo.svg'
import configIcon from '../assets/configIcon.svg'
import gaiaIcon from '../assets/gaiaIcon.svg'
import userIcon from '../assets/userIcon.svg'

import '../style/components/Header.scss'

export const Header = () => {
    return (
      <>
        <nav className="navbar navbar-expand-sm  navbar-light header ">
          <a className="navbar-brand" href="/#">
            <h1>logo</h1>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse  menu navbar-collapse " id="collapsibleNavbar">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link user" href="/#">
                  <h3>Nome de Usuario</h3>
                  <img className="user-icon" src={userIcon} alt="user" />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#">
                  <img className="config-icon" src={configIcon} alt="config" />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#">
                  <img className="gaia-icon" src={gaiaIcon} alt="gaia" />
                </a>
              </li>
            </ul>
          </div>
        </nav>
       
      </>
    );
}
