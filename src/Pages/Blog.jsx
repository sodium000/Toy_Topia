import React from 'react';

const Blog = () => {

    const blogPosts = [
        {
            id: 1,
            title: "30 Best Developmental Toys for 18-Month-Old",
            date: "October 20, 2025",
            category: "Learning & Development",
            excerpt: "Discover our top picks that combine playtime with essential early-age learning skills, perfect for little hands.",
            imageUrl: "https://i.ibb.co.com/jP0dHSwM/bolg1.webp", 
            link: "https://www.thebump.com/a/best-toys-for-18-month-old"
        },
        {
            id: 2,
            title: "How to Start Model Building",
            date: "October 15, 2025",
            category: "Hobbies & Kits",
            excerpt: "Ready to start a new hobby? Our step-by-step guide covers everything from basic tools to painting techniques.",
            imageUrl: "https://i.ibb.co.com/jkM76yh8/bolg2.webp", 
            link: "https://www.hobbyco.com.au/blogs/blog/how-to-start-model-building-tools-tips-and-first-project-ideas?srsltid=AfmBOoqA7ldisswhEGUUhHKmnbygM83dRqSZY88ECMksN8r86ITwB6u5"
        },
        {
            id: 3,
            title: "Outdoor Fun: Making the Most of Autumn Playtime",
            date: "October 10, 2025",
            category: "Outdoor Play",
            excerpt: "Don't let the cooler weather stop the fun! We have great ideas for keeping kids active and engaged outdoors this season.",
            imageUrl: "https://i.ibb.co.com/XP4x4x4/blog3.jpg", 
            link: "https://simplekidswellness.com/free-fall-outdoor-activities-for-kids/"
        },
    ];
    return (
        <div>
            <section className="py-10 sm:py-14 md:py-16 lg:py-24 mt-8 sm:mt-12 md:mt-15 bg-white dark:bg-gray-800 rounded-2xl px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">

                    {/* Section Header */}
                    <div className="text-center">
                        <h2 className="text-sm sm:text-base font-semibold text-amber-500 tracking-wide uppercase">
                            From Our Toy Experts
                        </h2>
                        <p className="mt-2 text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                            Helpful Guides and Latest Play Tips
                        </p>
                        <p className="mt-3 sm:mt-4 max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-gray-500 dark:text-gray-400 px-4">
                            Read our latest articles on parenting, toy reviews, and creative play ideas to inspire your family.
                        </p>
                    </div>
                    <div className="mt-8 sm:mt-10 md:mt-12 grid gap-6 sm:gap-8 md:gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        {blogPosts.map((post) => (
                            <div
                                key={post.id}
                                className="flex flex-col rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition duration-300 dark:bg-gray-800"
                            >
                                <a href={post.link} className="block relative h-48 sm:h-56 md:h-60">
                                    <img
                                        className="h-full w-full object-cover"
                                        src={post.imageUrl}
                                        alt={post.title}
                                    />
                                    <span className="absolute top-3 right-3 inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-sky-100 text-sky-800 dark:bg-sky-900 dark:text-sky-300">
                                        {post.category}
                                    </span>
                                </a>
                                <div className="flex-1 p-4 sm:p-5 md:p-6 flex flex-col justify-between">
                                    <div className="flex-1">
                                        <p className="text-xs sm:text-sm font-medium text-gray-500 dark:text-gray-400">
                                            {post.date}
                                        </p>
                                        <a href={post.link} className="block mt-2">
                                            <p className="text-lg sm:text-xl font-semibold text-gray-900 hover:text-sky-600 dark:text-white dark:hover:text-sky-400 line-clamp-2">
                                                {post.title}
                                            </p>
                                            <p className="mt-2 sm:mt-3 text-sm sm:text-base text-gray-500 dark:text-gray-400 line-clamp-3">
                                                {post.excerpt}
                                            </p>
                                        </a>
                                    </div>
                                    <div className="mt-6 flex justify-end">
                                        <a
                                            href={post.link}
                                            className="text-base font-semibold text-sky-600 hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-200 transition duration-150"
                                        >
                                            Read Article &rarr;
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 text-center">
                        <a
                            href="/addblog"
                            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-amber-500 hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 transition duration-150"
                        >
                            Add Blog
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blog;