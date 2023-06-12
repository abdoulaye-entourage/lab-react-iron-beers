// import HomePageCards from '../components/HomePageCards'
import {Link} from 'react-router-dom'
import beers from '../assets/beers.png';
import newbeer from '../assets/new-beer.png';
import randomBeer from '../assets/random-beer.png';
import '../components/styles/homePage.css'
// import Cart from '../components/Cart';

function HomePage() {
let data = {
    imgBeers : beers,
    imgNewBeer : newbeer, 
    imgRandombeer : randomBeer
}
    return (
        <div className='homePage'>
          <h1>Home</h1>
        <div className='card-container'>
        <div className='cards'>
          <Link to="/jokes" className='jokes'>
            <button> JOKE LIST</button>
          </Link>
            <Link to='/beers' className='link'>
                <img src={data.imgBeers} alt='beersImg'></img>
                <h2>All beers</h2>
                <p>Lrem ipsum dolor sit amet, consectetur adipiscing  elit, sed do eisumod tempor incididunt ut labore et dolore et magna aliqua.Ut enim ad minin veniam</p>
            </Link>
        </div>
        <div className='cards'>
          <Link to='/random-beer' className='link'>
                <img src={data.imgRandombeer} alt='beersImg'></img>
                <h2>Random Beer</h2>
                <p>Lrem ipsum dolor sit amet, consectetur adipiscing  elit, sed do eisumod tempor incididunt ut labore et dolore et magna aliqua.Ut enim ad minin veniam</p>
            </Link>
          </div>
          <div className='cards'>
          <Link to='/new-beer' className='link'>
                <img src={data.imgNewBeer} alt='beersImg'></img>
                <h2>New Beer</h2>
                <p>Lrem ipsum dolor sit amet, consectetur adipiscing  elit, sed do eisumod tempor incididunt ut labore et dolore et magna aliqua.Ut enim ad minin veniam</p>
            </Link>


          </div>
         
        </div>

        </div>
    )
}
export default HomePage