import React, { useState } from "react";

function SearchMovie() {
    const [search, setSearch] = useState('');
    const [results, setResults] = useState([]);

    const handleClick = () => {
        fetch(`http://api.themoviedb.org/3/search/movie?api_key=f33cd318f5135dba306176c13104506a&query=${search}`)
            .then(response => response.json())
            .then(data => setResults(data.results))
            .catch(error => console.log(error))
    }

    return (
        <div className="tile is-ancestor content">
            <div className="tile is-4 is-vertical is-parent is-info">
                <div className="tile is-child box columns">
                    <input className="input is-rounded" onChange={e => setSearch(e.target.value)}
                        placeholder="Enter movie name" />
                    <button className="button is-rounded is-info is-light" onClick={handleClick}>Search</button>
                </div>
            </div>

            <div className="tile is-parent">
                <div className="tile is-child">
                    {results.map(result => (
                        <div className="box" key={result.id}>
                            <figure class="image  ">
                                <img src={`https://image.tmdb.org/t/p/w780/${result.poster_path}`} className='mb-12' alt={result.title} />
                            </figure>
                            <h2>{result.title}</h2>
                            <p>{result.release_date}</p>
                            <p>{result.overview}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    )
}
export default SearchMovie;
