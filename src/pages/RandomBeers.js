import Header from "../components/Header"
import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

function RandomBeer() {
    const [randomBeer, setRandomBeer] = useState({})
    useEffect(()=> {
        axios.get('https://ih-beers-api2.herokuapp.com/beers/random')
        .then(response => {
            console.log(response.data)
            setRandomBeer(response.data)
        })
    },[])
    return (
        <div>
          
          <Header /> 
      
      <div className="beerDetailContainer">
            <img src={randomBeer.image_url} alt="beerImg" className="imgDetail"></img>
            <div className="details">
                <div className="detailsPart1">
                    <section>
                <h3>{randomBeer.name}</h3>
                <p className="greyColor">{randomBeer.tagline}</p>
                </section>
                <section>
                <p className="blackColor">{randomBeer.attenuation_level}</p>
                <p className="greyColor bigFont">{randomBeer.first_brewed}</p>
                
                </section>
                </div>
                <p>{randomBeer.description}</p>
                <p className="greyColor">{randomBeer.contributed_by}</p>

            </div>
        </div>
            <Link to="/beers" className="backButton"><button>Go back</button></Link>
        </div>
    )
}
export default RandomBeer