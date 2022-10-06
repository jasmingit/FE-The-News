import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';


export default function NavBar() {
    const {user} = useContext(UserContext)

    return (
        <nav className="nav-bar">
            <Link style={{color: 'white'}} className="link-name" to="/">Home</Link>
            <Link style={{color: 'white'}} className="link-name" to="/topics">Topics</Link>
            <SearchBar />
            { !user && <Link style={{color: 'white'}} className="link-name" to="/login">Login</Link> }
            { user && 
            <span>
                <h4 className="msg">@{user}</h4>
            </span>}
        </nav>
    )
}