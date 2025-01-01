import React from 'react';
const NotFound = () => {
    return (
        <>
            <div className='p-5'>
                <h1>404 Error</h1>
                <p>The page you are looking for does not exist.</p>
                <a href="/" className='text-success'>Go Back To Home</a>
            </div>
        </>
    )
}

export default NotFound;
