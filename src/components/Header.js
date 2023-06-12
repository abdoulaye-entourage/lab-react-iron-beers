import { Link } from "react-router-dom"
import './styles/header.css'

function Header () {    
    return (
        <div className="header">
            <Link to='/'>
                <div className="divLink">
                    <img  src="https://static.thenounproject.com/png/3574480-200.png" alt="header-img"/>
                </div>
            </Link>

        </div>
    )
}
export  default Header 