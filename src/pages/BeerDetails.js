import axios from "axios"
import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import Header from "../components/Header"
import '../components/styles/beerDetails.css'






function BeerDetails () {
    const [singleBeer, setSingleBeer]= useState({})
    console.log(singleBeer)
    const {beerId} = useParams()
    // console.log('beerId:', beerId)
   

    useEffect(()=> {
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
        .then(response=> {
            // console.log('data.response2:',response.data)
            setSingleBeer(response.data)
        })
    },[beerId])
    return (
        <div>
            <header className="">
              <Header /> 
            </header>
            <h1>Single Beer Detail</h1>
        <div className="beerDetailContainer">
            <img src={singleBeer.image_url} alt="beerImg" className="imgDetail"></img>
            <div className="details">
                <div className="detailsPart1">
                    <section>
                <h3>{singleBeer.name}</h3>
                <p className="greyColor">{singleBeer.tagline}</p>
                </section>
                <section>
                <p className="blackColor">{singleBeer.attenuation_level}</p>
                <p className="greyColor bigFont">{singleBeer.first_brewed}</p>
                
                </section>
                </div>
                <p>{singleBeer.description}</p>
                <p className="greyColor">{singleBeer.contributed_by}</p>

            </div>
        </div>
            <Link to="/beers" className="backButton"><button>Go back</button></Link>
        </div>
    )
}
export default BeerDetails