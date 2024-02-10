import { Link } from "react-router-dom"

import "./navBar.scss"

const Navbar = () => {
  return (
    <div className='navbar-content'>
      <h1 className='navbar-title'>Employees Management</h1>
      <Link to="/">
        <span className='button-list-employees'>
          Employee List
        </span>
      </Link>
    </div>
  )
}

export default Navbar;
