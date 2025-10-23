import React, { Suspense } from 'react';
import CategoryList from './CategoryList/CategoryList';

const LeftHome = () => {
    return (
        <div>
            <h2 className='font-bold'>All categories</h2>
            <Suspense fallback={<div className='flex justify-center-safe'><span className="loading loading-spinner text-accent  mt-10"></span></div>}>
                <CategoryList></CategoryList>
            </Suspense>
        </div>
    );
};

export default LeftHome;