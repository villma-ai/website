'use client';

import React, { useState } from 'react';

interface Tag {
  id: string;
  name: string;
  count: number;
}

interface Category {
  id: string;
  name: string;
  description: string;
}

interface BlogFiltersProps {
  categories: Category[];
  tags: Tag[];
  onFilterChange: (category: string | null, tag: string | null) => void;
}

const BlogFilters: React.FC<BlogFiltersProps> = ({
  categories,
  tags,
  onFilterChange
}) => {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleCategoryChange = (category: string | null) => {
    setSelectedCategory(category);
    onFilterChange(category, selectedTag);
  };

  const handleTagChange = (tag: string | null) => {
    setSelectedTag(tag);
    onFilterChange(selectedCategory, tag);
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

      {/* Tags - Buttons on desktop, Combobox on mobile */}
      <div>
        <h2 className="text-lg font-semibold text-slate-700 mb-2">Tags:</h2>
        {/* Mobile Combobox */}
        <select
          className="md:hidden w-full px-4 py-3 text-lg border border-slate-300 rounded-md bg-white text-slate-700 focus:outline-none focus:ring-2 focus:ring-sky-500"
          value={selectedTag || ''}
          onChange={(e) => handleTagChange(e.target.value || null)}
        >
          <option value="" className="text-lg py-2">
            All Tags
          </option>
          {tags.map((tag) => (
            <option key={tag.id} value={tag.name} className="text-lg py-2">
              {tag.name} ({tag.count})
            </option>
          ))}
        </select>
        {/* Desktop Buttons */}
        <div className="hidden md:flex flex-wrap gap-4">
          <button
            onClick={() => handleTagChange(null)}
            className={`px-4 py-2 rounded-full text-sm ${
              selectedTag === null
                ? 'bg-sky-600 text-white'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            All
          </button>
          {tags.map((tag) => (
            <button
              key={tag.id}
              onClick={() => handleTagChange(tag.name)}
              className={`px-4 py-2 rounded-full text-sm ${
                selectedTag === tag.name
                  ? 'bg-sky-600 text-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {tag.name} ({tag.count})
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogFilters;
