import React, { Component } from 'react';
import {NavLink, Link} from "react-router-dom";

import "./styles/Navbar.css";

class Navbar extends Component {
    render() { 
        return ( 
            <nav className="navbar navbar-expand-lg navbar-dark "
                           style={{ flexGrow: 1, 
                                    width:"100%",
                                    backgroundColor:"#095627"}}>
                <Link className="navbar-brand">
                      Projects
                </Link> 
                <button
                   className='navbar-toggler'
                    type='button'
                    data-toggle='collapse'
                    data-target='#navbarNav'
                    aria-controls='navbarNav'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                 >
                   <span className="navbar-toggler-icon" />  
                 </button> 
                 <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item"
                                     onClick={() => this.props.currentPage(0)}>
                             Staff
                        </li>
                        <li className="nav-item"
                                     onClick={() => this.props.currentPage(1)}>
                             AdocStaff
                        </li>
                        <li className="nav-item"
                                     onClick={() => this.props.currentPage(2)}>
                             Add
                        </li>
                        
                    </ul>
                </div>  
            </nav>
         );
    }
}
 
export default Navbar;