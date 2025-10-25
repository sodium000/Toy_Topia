import React from 'react';

const Blog = () => {

    const blogPosts = [
        {
            id: 1,
            title: "5 Fantastic Educational Toys for Toddlers",
            date: "October 20, 2025",
            category: "Learning & Development",
            excerpt: "Discover our top picks that combine playtime with essential early-age learning skills, perfect for little hands.",
            imageUrl: "https://i.ibb.co/PvDXKr0X/hq720.jpg", 
            link: "/blog/educational-toys"
        },
        {
            id: 2,
            title: "The Ultimate Guide to Model Kit Building for Beginners",
            date: "October 15, 2025",
            category: "Hobbies & Kits",
            excerpt: "Ready to start a new hobby? Our step-by-step guide covers everything from basic tools to painting techniques.",
            imageUrl: "https://i.ibb.co/VpVz6CQj/3179.jpg", 
            link: "/blog/model-kits-guide"
        },
        {
            id: 3,
            title: "Outdoor Fun: Making the Most of Autumn Playtime",
            date: "October 10, 2025",
            category: "Outdoor Play",
            excerpt: "Don't let the cooler weather stop the fun! We have great ideas for keeping kids active and engaged outdoors this season.",
            imageUrl: "https://i.ibb.co/vvz9xFNM/fall-bucket-list-idea-play-in-the-leaves.webp  ", 
            link: "/blog/outdoor-fun-autumn"
        },
    ];
    return (
        <div>
            <section className="py-16 sm:py-24 bg-white dark:bg-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Section Header */}
                    <div className="text-center">
                        <h2 className="text-base font-semibold text-amber-500 tracking-wide uppercase">
                            From Our Toy Experts
                        </h2>
                        <p className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
                            Helpful Guides and Latest Play Tips
                        </p>
                        <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-400">
                            Read our latest articles on parenting, toy reviews, and creative play ideas to inspire your family.
                        </p>
                    </div>

                    {/* Blog Post Grid */}
                    <div className="mt-12 grid gap-10 lg:grid-cols-3">
                        {blogPosts.map((post) => (
                            <div
                                key={post.id}
                                className="flex flex-col rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition duration-300 dark:bg-gray-800"
                            >
                                {/* Image Container */}
                                <a href={post.link} className="block relative h-60">
                                    <img
                                        className="h-full w-full object-cover"
                                        src={post.imageUrl}
                                        alt={post.title}
                                    />
                                    {/* Category Badge */}
                                    <span className="absolute top-3 right-3 inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-sky-100 text-sky-800 dark:bg-sky-900 dark:text-sky-300">
                                        {post.category}
                                    </span>
                                </a>

                                {/* Content Body */}
                                <div className="flex-1 p-6 flex flex-col justify-between">
                                    <div className="flex-1">
                                        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                                            {post.date}
                                        </p>
                                        <a href={post.link} className="block mt-2">
                                            <p className="text-xl font-semibold text-gray-900 hover:text-sky-600 dark:text-white dark:hover:text-sky-400">
                                                {post.title}
                                            </p>
                                            <p className="mt-3 text-base text-gray-500 dark:text-gray-400">
                                                {post.excerpt}
                                            </p>
                                        </a>
                                    </div>

                                    {/* Read More Button */}
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

                    {/* Main CTA to Blog Page */}
                    <div className="mt-16 text-center">
                        <a
                            href="/blog"
                            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-amber-500 hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 transition duration-150"
                        >
                            See All Play Guides
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blog;