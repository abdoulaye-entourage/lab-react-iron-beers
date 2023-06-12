import '../components/styles/card.css'
import { Link } from 'react-router-dom';


function Card ({gCard}) {
  console.log('gCard:',gCard)


  // if(gCard.beers) 
    return (   
            <div key={gCard._id} className="allbeers">
              <div className='jokes'>
              <li>id: {gCard.id}</li>
               <li>Joke: {gCard.joke}</li>
              </div>
      { gCard.image_url &&  <img src={gCard.image_url} alt="imgBeer" className="beerImage"></img>} 
                <div className="beersInfo">
                <h3> {gCard.name}</h3>
                <p className="tagline">{gCard.tagline}</p>
                <p className="contribution">{gCard.contributed_by}</p>
                </div>

              {gCard.image_url ? <Link to={`/beers/${gCard._id}`} className="moreDetails"><button>More Details</button></Link> : null}

            </div>
    )
}
export default Card