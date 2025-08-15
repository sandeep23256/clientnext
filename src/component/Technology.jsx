'use client';

import React, { useState } from 'react';
import { useTechnologyDisplayQuery } from '../../redux/features/technology/technologyApi';

export default function Technology() {
    const { data, isLoading, isError } = useTechnologyDisplayQuery();
    const techs = data || [];

    const [search, setSearch] = useState('');
    const [category, setCategory] = useState('All');

    const filteredTech = techs.filter((tech) => {
        const matchesCategory =
            category === 'All' || tech.category?.toLowerCase() === category.toLowerCase();
        const matchesSearch =
            tech.title?.toLowerCase().includes(search.toLowerCase()) ||
            tech.description?.toLowerCase().includes(search.toLowerCase());

        return matchesCategory && matchesSearch;
    });

    if (isLoading) return <p className="text-center py-10">Loading...</p>;
    if (isError)
        return (
            <p className="text-center py-10 text-red-500">
                Failed to load technologies.
            </p>
        );

    return (
        <div className="max-w-[1200px] mx-auto p-6 pb-20 ">
            <h1 className="text-4xl font-bold mb-6">Technologies We Work On</h1>

            {/* Filter controls */}
            <div className="flex flex-wrap gap-8 mb-12">
                <input
                    type="text"
                    placeholder="Search..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="border p-2 rounded w-full sm:w-auto"
                />
                {['All', 'Web Designing', 'Web Development'].map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setCategory(cat)}
                        className={`px-4 py-2 rounded ${category === cat ? 'bg-blue-600 text-white' : 'bg-gray-200'
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Tech Grid */}
            {filteredTech.length === 0 ? (
                <p className="text-gray-500 text-center">No technologies found.</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {filteredTech.map((tech, index) => (
                        <div
                            key={tech.id || tech._id || index}
                            className="bg-white p-4 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow"
                        >

                            <img
                                src={tech.image.url}
                                alt={tech.title}
                                className="w-24 h-44 mx-auto mb-4 object-contain"
                            />
                            <h2 className="text-xl font-semibold">{tech.title}</h2>
                            <p className="text-gray-600">{tech.description}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
