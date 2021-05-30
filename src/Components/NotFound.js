import React from 'react';

// 404 Error when URL does not match existing route
const NotFound = () => {
    return (
        <ul>
            <li class="not-found">
                <h3>404</h3>
                <p>oops! page not found</p>
            </li>
        </ul>
    )
}

export default NotFound;