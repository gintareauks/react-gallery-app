import React from 'react';

// Notification when the user input does not match any results
const NoPhotos = () => {
    return (
        <ul className="container">
            <li class="not-found">
                <h3>No Results Found</h3>
                <p>You search did not return any results. Please try again.</p>
            </li>
        </ul>
    )
}

export default NoPhotos;