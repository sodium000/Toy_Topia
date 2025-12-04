import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import ToyCard from '../Card/ToyCard';


const ToyPage = () => {
    const data = useLoaderData()
    const {name} = useParams();

    const [Toydata, setToydata] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [sortOrder, setSortOrder] = useState('default');
    const [filteredAndSortedData, setFilteredAndSortedData] = useState([]);

    useEffect(() => {
        if (name == 'All') {
            setToydata(data);
        } else {
            const FilterNews = data.filter((toy) => toy.subCategory == name)
            setToydata(FilterNews);
        }
    }, [data, name])

    useEffect(() => {
        let result = [...Toydata];

        // Apply search filter
        if (searchQuery.trim() !== '') {
            result = result.filter((toy) =>
                toy.toyName.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        // Apply sorting
        if (sortOrder !== 'default') {
            switch (sortOrder) {
                case 'price-asc':
                    result.sort((a, b) => a.price - b.price);
                    break;
                case 'price-desc':
                    result.sort((a, b) => b.price - a.price);
                    break;
                case 'rating-asc':
                    result.sort((a, b) => a.rating - b.rating);
                    break;
                case 'rating-desc':
                    result.sort((a, b) => b.rating - a.rating);
                    break;
                case 'name-asc':
                    result.sort((a, b) => a.toyName.localeCompare(b.toyName));
                    break;
                case 'name-desc':
                    result.sort((a, b) => b.toyName.localeCompare(a.toyName));
                    break;
                default:
                    break;
            }
        }

        setFilteredAndSortedData(result);
    }, [Toydata, searchQuery, sortOrder]);

    return (
        <div>
            <div className='mb-6 flex flex-col sm:flex-row gap-4 items-center justify-between'>
                <div className='w-full sm:w-auto sm:flex-1 max-w-md'>
                    <input
                        type="text"
                        placeholder="Search toys by name..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                    />
                </div>

                <div className='w-full sm:w-auto'>
                    <select
                        value={sortOrder}
                        onChange={(e) => setSortOrder(e.target.value)}
                        className='w-full sm:w-auto px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white'
                    >
                        <option value="default">Sort by...</option>
                        <option value="price-asc">Price: Low to High</option>
                        <option value="price-desc">Price: High to Low</option>
                        <option value="rating-asc">Rating: Low to High</option>
                        <option value="rating-desc">Rating: High to Low</option>
                        <option value="name-asc">Name: A to Z</option>
                        <option value="name-desc">Name: Z to A</option>
                    </select>
                </div>
            </div>

            {searchQuery && (
                <div className='mb-4 text-sm text-gray-600'>
                    Found {filteredAndSortedData.length} toy(s) matching "{searchQuery}"
                </div>
            )}

            {/* Toys Grid */}
            {filteredAndSortedData.length > 0 ? (
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6'>
                    {filteredAndSortedData.map((toy, index) => (
                        <ToyCard key={toy.toyId || index} ratingData={toy} />
                    ))}
                </div>
            ) : (
                <div className='text-center py-12'>
                    <p className='text-gray-500 text-lg'>No toys found matching your search criteria.</p>
                </div>
            )}
        </div>
    );
};

export default ToyPage;