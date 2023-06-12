import axios from 'axios'
import { useState } from 'react'
import '../components/styles/allbeers.css'

function SearchBeer ({callback, route}) {
const [search, setSearch] = useState({})

    function handleChange(event) {
       event.preventDefault()
      setSearch(event.target.value)    
    }
    
    async function handleSubmit(event) {
        event.preventDefault()
        try {
            const res = await axios.get(`${route}${search}`, {
                headers : {accept: "application/json"}
            })
            // callback(res.data)
            callback(res.data)
          
        } catch (err) {
            return console.log(err)
        }

        // axios.get(`https://icanhazdadjoke.com/search?term=${search}`)
        // .then((response)=> {
        //     callback(response.data.results)
        // })
        // .catch((err)=> console.log(err))

        // si c'est sur la page bière alors: 
        // route = `https://ih-beers-api2.herokuapp.com/beers/search?q=`
        // et je dois appeler la fonction axios.get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${search}`)
        

        // si c'est sure la page joke alors: 
        // route = `https://icanhazdadjoke.com/search?term=`
        // et je dois appeler la fonction axios.get(`https://icanhazdadjoke.com/search?term=${search}`)
         
     
        }
               // récupérer la valeur de l'input text dans lequel l'utilisateur a tapé la recherche
        // envoyer la requête GET sur le path /beers/search avec en query param q = chaine de caractères de la recherche
        // récupérer la data renvoyée par la requête

    return (
        <div>
            <form   onSubmit={handleSubmit} className='searchInput '> 
                <label htmlFor='search'>Search </label>
                <input className='searchButton' type="text" name='search' id='search' onChange={handleChange} placeholder='type beer name'></input>
                <button type='submit' >submit Search</button>
            </form>
            <div>
                {/* {search.map((inputValue, index)=>{
                  return  (
                        <div key={index} className='searchResult'>
                            {inputValue.name}
                        </div>
                    )
                })} */}
            </div>
        </div>
    )
}
export default SearchBeer