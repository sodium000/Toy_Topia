import React from 'react';
import { use } from 'react';
import { NavLink } from 'react-router';

const CategoriesPromise = fetch("/toyCatagory.json").then(res => res.json())


const CategoryList = () => {
    const CategoriesList = use(CategoriesPromise);

    return (
        <div>
            <div className='flex flex-col mt-5 gap-1 '>
                {
                    CategoriesList.map(category =>
                    <NavLink key={category.id} 
                    className={" btn justify-start pl-5 hover:bg-sky-200 bg-base-100 border-0 font-semibold"}
                    to={`${category.name}`}>{category.name}
                    </NavLink>

                    )
                }
            </div>
        </div>
    );
};

export default CategoryList;