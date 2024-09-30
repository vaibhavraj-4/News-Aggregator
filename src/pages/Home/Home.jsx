
import AllNews from '../../Components/AllNews/AllNews'
import Category from '../../Components/Category/Category'
import Sidebar from '../../Components/Sidebar/Sidebar'
import './Home.scss'

const Home = () => {


  return (
    <div className='home'>
      <Category />
      <div className="newsandsidebar">
        <AllNews />
        <Sidebar />
      </div>
    </div>
  )
}

export default Home