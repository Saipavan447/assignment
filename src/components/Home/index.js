import {Link} from 'react-router-dom'
import './index.css'

const Home = () => (
  <div className="home-container">
    <h1 className="heading">Home</h1>
    <Link className="route-link" to="/setting">
      <button type="button" className="update-button">
        Update App
      </button>
    </Link>
  </div>
)
export default Home
