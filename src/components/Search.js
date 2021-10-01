import React, { useRef } from 'react';
import { searchHnApi } from '../utils/hnapi.js';

const Search = () => {
    const searchRef = useRef();

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(searchRef.current.value);
        const data = await searchHnApi(searchRef.current.value);
        console.log(data);
    }

    return (
        <div>
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
        </div>
    )
}

export default Search;
