import {Link} from 'react-router-dom'
import './index.css'

const Home = () => (
  <div className="home-container">
    <h1 className="heading">Home</h1>
    <ul className="nav-items-list">
      <li className="link-item">
        <Link className="route-link" to="/setting">
          update App
        </Link>
      </li>
    </ul>
  </div>
)
export default Home
