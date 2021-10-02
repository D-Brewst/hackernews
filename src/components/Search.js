import React, { useRef } from 'react';
import { searchHnApi } from '../utils/hnapi.js';

const Search = ({results, setResults, history, setHistory}) => {

    const searchRef = useRef();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const term = searchRef.current.value;
        const data = await searchHnApi(term);
        setResults(data.hits);
        const updatedHistory = [...history, term];
        setHistory(updatedHistory);
    }

    return (
        <div>
            <h3>Enter a search term to see related news articles.</h3>
            <form onSubmit={handleSubmit}>
                <input
                type="text"
                aria-disabled="false"
                ref={searchRef}
                placeholder="Search"
                />
                <div>
                    <button className="login__btn" type="submit">Submit</button>
                </div>
            </form>
            <div>
                <ul>
                    {results.length ? (
                        results.map((article) => (
                            <li key={article.objectID}>
                                <a href={article.url}>{article.title}</a> 
                            </li>
                        ))
                    ) : (
                        <div></div>
                    )}
                </ul>
            </div>
        </div>
    )
}

export default Search;
