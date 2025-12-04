import React from 'react';

const Extra1 = () => {
    const toyShopTestimonials = [
        {
            quote: "The 'Stellar Spaceship' was the perfect birthday gift! Amazing quality and kept my little one busy for hours. Five stars for fun!",
            name: "Jenny M.",
            tag: "Happy Parent"
        },
        {
            quote: "The customer service here is brilliant. They helped me find a rare collector's edition figure. This is now my go-to shop for toys!",
            name: "David H.",
            tag: "Collector & Enthusiast"
        },
        {
            quote: "My daughter loves her new 'Rainbow Pony'! The colors are so vibrant and the toy is really durable. Great value for money.",
            name: "Mark T.",
            tag: "Grandparent"
        },
    ];
    return (
        <div>
            <section className="py-12 sm:py-16 md:py-20 rounded-2xl px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto text-center">

                    <h2 className="text-2xl text-black sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight">
                        Joyful Feedback from Happy Shoppers!
                    </h2>
                    <p className="mt-3 text sm:mt-4 max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-black px-4">
                        The best proof is in the playtime. Read what our customers and their kids have to say.
                    </p>
                    <div className="mt-8 sm:mt-10 md:mt-12 grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        {toyShopTestimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                className="bg-white p-4 sm:p-5 md:p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 ease-in-out border-t-4 border-amber-400 dark:bg-gray-700 dark:border-amber-500"
                            >
                                <blockquote className="text-gray-700 italic text-base sm:text-lg dark:text-gray-300">
                                    <p className="relative">
                                        <span className="text-4xl absolute -top-2.5 left-[-15px] text-amber-300 dark:text-amber-500 opacity-60">❝</span>
                                        {testimonial.quote}<span className=" ml-2 text-4xl absolute rotate-180 bottom-1 text-amber-300 dark:text-amber-500 opacity-60">❝</span>
                                    </p>
                                </blockquote>
                                <div className="mt-6 pt-4 border-t border-gray-100 dark:border-gray-600">
                                    <p className="text-lg font-semibold text-sky-600 dark:text-sky-400">
                                        {testimonial.name}
                                    </p>
                                    <p className="text-sm text-gray-400 dark:text-gray-500">
                                        {testimonial.tag}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Extra1;