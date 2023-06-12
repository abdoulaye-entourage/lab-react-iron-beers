import { useState } from "react"
import Header from "../components/Header"
import '../components/styles/newBeer.css'
import axios from "axios"
import { useHistory} from 'react-router-dom'
// import {Redirect} from 'react-router-dom'

function NewBeer () {
    const [formData, setFormData] =useState({
        name : '',
        tagline : '',
        description : '', 
        first_brewed : '' , 
        attenuation_level : 0, 
        contributed_by :'',
    })

  const navigate = useHistory()

    function handleChange(event) {
        event.preventDefault()
        return setFormData({
            ...formData, 
            [event.target.name] : event.target.value,
        });
    }
    function handleSubmit(event) {
        event.preventDefault()
        axios.post('https://ih-beers-api2.herokuapp.com/beers/new', formData)
        .then(()=> {
            setFormData('')
            alert("New beer created")
            navigate("/beers")

            
           
        })
        .catch((error => console.log(error)))
    }
    return (
        <div>
          <Header />
            <form className="new-beeer" onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" onChange={handleChange}/>

                <label htmlFor="tagline">Tagline</label>
                <input type="text" name="tagline" id="tagline" onChange={handleChange}/>

                <label htmlFor="description">Description</label>
                <input type="text" name="description" id="description" onChange={handleChange}/>

                <label htmlFor="first brewed">First Brewed</label>
                <input type="text" name="first_brewed" id="first_brewed" onChange={handleChange}/>

                <label htmlFor="brewers tips">Brewers Tips</label>
                <input type="text" name="brewers_tips" id="brewers_tips" onChange={handleChange}/>

                <label htmlFor="name">Attenuation Level</label>
                <input type="text" name="attenuation_level" id="attenuation_level" onChange={handleChange}/>

                <label htmlFor="name">Contributed By</label>
                <input type="text" name="contributed_by" id="contributed_by" onChange={handleChange}/>
                <button type="submit" className="submitButton"
                >ADD NEW</button>
            </form>
            </div> 
   
      
    )
}
export default NewBeer