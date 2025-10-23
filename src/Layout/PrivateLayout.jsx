import React from 'react';
import NavBar from '../NavBar/NavBar';

const PrivateLayout = ({Children}) => {
    return (
        <div>
            <NavBar></NavBar>
            {Children}
        </div>
    );
};

export default PrivateLayout;