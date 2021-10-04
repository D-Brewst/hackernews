import React from 'react';

const History = ({history}) => {
    return (
        <div>
            <h3>Your Search History:</h3>
            <ul>
                {history.length ? history.map((term, index) => (
                    <li key={index}>{term}</li>
                )) : <p>You have not made a search during this session.</p>}
            </ul>
        </div>
    )
}

export default History;
