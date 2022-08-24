import {HiSearch} from 'react-icons/hi';
import {useState} from 'react';


export default function SearchBar() {
    const [search, setSearch] = useState([])

    function handleChange(event) {
        setSearch(event.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault();
  
        setSearch('');
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
            <input
                type="text"
                id="search-bar"
                placeholder="Search"
                name="search"
                onChange={handleChange}
                value={search}
                />
            <button type="submit-button"><HiSearch /></button>
            </form>
        </>
    )
}