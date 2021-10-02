import React from 'react';

const History = ({history}) => {
    return (
        <div>
            <h5>Your Search History:</h5>
            <ul>
                {history.length ? history.map((term) => (
                    <li>{term}</li>
                )) : <p>You have not made a search during this session.</p>}
            </ul>
        </div>
    )
}

export default History;
