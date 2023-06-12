import { useState } from 'react';
import beers from '../assets/beers.png';
import newbeer from '../assets/new-beer.png';
import randomBeer from '../assets/random-beer.png';

function HomePageCards ({beerImage}) {
const [cardImages, setCardImages] = useState({
    beers,
    newbeer,
    randomBeer
})
function handleImages(){
    if(beerImage === cardImages.beers) {
        setCardImages({...cardImages, beers })
    }else if(beerImage === cardImages.newbeer){
        setCardImages({...cardImages, newbeer})
    }else if(beerImage=== cardImages.randomBeer) {
        setCardImages({...cardImages, randomBeer})
    }else {
        return 
    }

}

    return (
        <div>
         <p>{handleImages}</p>
        </div>
    )
} 
export default HomePageCards