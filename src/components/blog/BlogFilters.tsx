'use client';

import React, { useState } from 'react';

interface Category {
  id: string;
  name: string;
  description: string;
}

interface BlogFiltersProps {
  categories: Category[];
  onFilterChange: (category: string | null) => void;
}

const BlogFilters: React.FC<BlogFiltersProps> = ({
  categories,
  onFilterChange
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleCategoryChange = (category: string | null) => {
    setSelectedCategory(category);
    onFilterChange(category);
  };

  return (
    <div className="mb-8">
      {/* Categories - Buttons on desktop, Combobox on mobile */}
      <div className="mb-4">
        <h2 className="text-lg font-semibold text-slate-700 mb-2">
          Categories:
        </h2>
        {/* Mobile Combobox */}
        <select
          className="md:hidden w-full px-4 py-3 text-lg border border-slate-300 rounded-md bg-white text-slate-700 focus:outline-none focus:ring-2 focus:ring-sky-500"
          value={selectedCategory || ''}
          onChange={(e) => handleCategoryChange(e.target.value || null)}
        >
          <option value="" className="text-lg py-2">
            All Categories
          </option>
          {categories.map((category) => (
            <option
              key={category.id}
              value={category.name}
              className="text-lg py-2"
            >
              {category.name}
            </option>
          ))}
        </select>
        {/* Desktop Buttons */}
        <div className="hidden md:flex flex-wrap gap-4">
          <button
            onClick={() => handleCategoryChange(null)}
            className={`px-4 py-2 rounded-full text-sm ${
              selectedCategory === null
                ? 'bg-sky-600 text-white'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryChange(category.name)}
              className={`px-4 py-2 rounded-full text-sm ${
                selectedCategory === category.name
                  ? 'bg-sky-600 text-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogFilters;
