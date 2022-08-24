import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

export default function NavBar() {
    return (
        <nav className="nav-bar">
            <Link style={{color: 'white'}} className="link-name" to="/">Home</Link>
            <Link style={{color: 'white'}} className="link-name" to="/topics">Topics</Link>
            <SearchBar />
        </nav>
    )
}