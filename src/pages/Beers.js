import Header from "../components/Header"
import axios from "axios"
import { useEffect, useState } from "react"
import Search from "../components/Search"
import '../components/styles/allbeers.css'
import Card from "../components/Card"
 

function Beers () {
    const [allBeers, setAllBeers] = useState([])
    

    useEffect(()=>  {
        axios.get("https://ih-beers-api2.herokuapp.com/beers")
        .then(response => {
            
            setAllBeers(response.data)
            console.log(response.data)
        })
        .catch((error) => console.log(error))
    },[])

    
    
    const updateAfterSearch = (beersSearched) => {
        console.log(beersSearched)
        setAllBeers(beersSearched)
        // par exemple envoyer la requete en utilisant la variable x
                                                                                                                                                              // mettre à jour le state de allBeers
    }
    const beersCard = (beersElement) => {
        setAllBeers(beersElement)
    }
    //callback={getBeers}
    return(
        <div>
            <header className="">
          <Header /> 
      </header>k
     < Search callback={updateAfterSearch} route="https://ih-beers-api2.herokuapp.com/beers/search?q=" />
      {allBeers.map(beers => {
      return <div key={beers._id}> <Card callback={beersCard} gCard={beers} />
      </div>
      
      
      })}

        </div>
    )
}
export default Beers