import Header from '../Header'
import LogoutBtn from '../LogoutButton'
import './index.css'

const Home = () => (
  <>
    <Header />
    <div className="home-container">
      <h1 className="heading">Home Route</h1>
      <LogoutBtn />
    </div>
  </>
)
export default Home
