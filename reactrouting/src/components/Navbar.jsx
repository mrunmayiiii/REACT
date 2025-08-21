import React from 'react'
import { Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Dashboard from './Dashboard';
import './navbar.css'; 
const Navbar = () => {
  return (
    <div>
<ul>
    <li>

        {/* ////navlink can also be used instead of Link */}
        <Link to ="/">Home</Link>
    </li>
    <li>
         <Link to ="/about">About</Link>
    </li>
    <li>
        <Link to ="/dashboard">Dashboard</Link>
    </li>

</ul>

    </div>
  )
}

export default Navbar