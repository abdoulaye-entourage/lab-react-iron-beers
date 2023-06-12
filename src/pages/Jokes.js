import axios from "axios"
import { useEffect } from "react"
import Header from "../components/Header"
import { useState } from "react"
import '../components/styles/jokeList.css'
import Search from "../components/Search"
import Card from "../components/Card"


function Jokes () {
    const [jokeList, setJokeList]  =useState([])
  
useEffect(()=> {
console.log('jokeListt:', jokeList)

},[jokeList])

    useEffect(()=>  {
        
        axios.get("https://icanhazdadjoke.com/search?term=fly", {
            headers : {accept: "application/json"}
        } )
        .then(res => {
            
            setJokeList(res.data.results)
           
        
        })
        .catch((error) => console.log(error))
    },[])

    const updateJokesAfterSearch = (jokeSearched) =>{
         setJokeList(jokeSearched.results)
        console.log('jokeSearched:',jokeSearched.results)
    }


    return (<div >
         <Header className="">
          <Header /> 
         </Header>
         < Search callback={updateJokesAfterSearch} route={"https://icanhazdadjoke.com/search?term="}/>

        <div className="jokesList">
         {jokeList.map(jokes  => {
      return <ul key={jokes.id}> <Card gCard={jokes}  /> </ul>
      
      })}

   </div>

    </div>
    )
}
export default Jokes;