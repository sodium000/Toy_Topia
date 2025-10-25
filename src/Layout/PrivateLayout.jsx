import React from 'react';
import NavBar from '../NavBar/NavBar';
import AuthContext from '../AuthContext/AuthContext';
import { use } from 'react';
import { Navigate, useLocation } from 'react-router';
import Footer from '../Footer/Footer';

const PrivateLayout = ({children}) => {
    const location = useLocation();
    const {user,loading}=use(AuthContext);

          if (loading) {
        return (<div className='h-screen flex justify-center items-center'>
            <span className="loading loading-spinner text-success"></span>
        </div>)
    }
     if (user && user?.email) {
        return( <>
            <NavBar></NavBar>
            {children}
            <Footer></Footer>
        </>);
    }
    return <Navigate state={location.pathname} to='/login'></Navigate>
    
};

export default PrivateLayout;