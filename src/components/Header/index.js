import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <>
    <div className="nav-container">
      <Link to="/">
        <p className="nav-items">Home</p>
      </Link>
      <Link to="/about">
        <p className="nav-items">About</p>
      </Link>
    </div>
  </>
)
export default Header
