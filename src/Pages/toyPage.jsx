import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import ToyCard from '../Card/ToyCard';


const ToyPage = () => {
    const data = useLoaderData()
    const {name} = useParams();

    const [Toydata, setToydata] = useState([]); 

    useEffect(() => {
        if (name == 'All') {
            setToydata(data);

        } else {
            const FilterNews = data.filter((toy) => toy.subCategory == name)
            setToydata(FilterNews);
        }

    }, [data,name])


    return (
        <div className='grid grid-cols-4 col-span-10 gap-6 '>
            {Toydata.map((toy, index) => (
                <ToyCard key={toy.toyId || index} ratingData={toy} />
            ))}
        </div>
    );
};

export default ToyPage;