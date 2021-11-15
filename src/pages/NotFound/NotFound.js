import React from 'react';
import { Link } from 'react-router-dom';
import error from '../../images/error.jpg'
const NotFound = () => {
    return (
        <div>
            <img style={{ width: '100%' }} src={error} alt="" />
            <Link to="/"><button>Go Back</button>
            </Link>
        </div>
    );
};

export default NotFound;