import React, { useRef } from 'react';
import { useLoaderData } from 'react-router';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';


const LocationUs = () => {
    const position = [23.6850, 90.3563];
    const serviceCenters = useLoaderData();
    const mapRef = useRef(null);

        const handleSearch = e => {
        e.preventDefault();
        const location = e.target.location.value;
        const district = serviceCenters.find(c => c.district.toLowerCase().includes(location.toLowerCase()));

        if (district) {
            const coord = [district.latitude, district.longitude];
            // go to the location
            mapRef.current.flyTo(coord, 14);
        }
    }
    return (
        <div className='my-10 sm:my-15 md:my-20 sticky px-4 sm:px-6 lg:px-8'>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center">We are available in 64 districts</h3>
                     <div className='my-8 sm:my-12 md:my-15'>
                        {/* search  */}
                        <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-2 sm:gap-0 justify-center items-center">
                            <label className="input w-full sm:w-auto sm:ml-0 sm:max-w-md">
                                <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <g
                                        strokeLinejoin="round"
                                        strokeLinecap="round"
                                        strokeWidth="2.5"
                                        fill="none"
                                        stroke="currentColor"
                                    >
                                        <circle cx="11" cy="11" r="8"></circle>
                                        <path d="m21 21-4.3-4.3"></path>
                                    </g>
                                </svg>
                                <input type="search" className="grow" name="location" placeholder="Search" />
                            </label>
                            <button type='submit' className="btn join-item text-black sm:ml-2 rounded-xl bg-[#FFE3F2] p-3 sm:p-5 w-full sm:w-[110px]">Search</button>
                        </form>
                    </div>
                    {/*  */}
                    <div className='rounded-2xl container mx-auto h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] xl:h-[800px]'>
                        <MapContainer
                            center={position}
                            zoom={8}
                            scrollWheelZoom={true}
                            className='h-full'
                            ref={mapRef}
                        >
                            <TileLayer
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
        
                            {
                                serviceCenters.map((center, index) => <Marker
                                    key={index}
                                    position={[center.latitude, center.longitude]}>
                                    <Popup>
                                        <strong>{center.district}</strong> <br /> Service Area: {center.covered_area.join(', ')}.
                                    </Popup>
                                </Marker>)
                            }
        
                        </MapContainer>
                    </div>
                </div>
    );
};

export default LocationUs;