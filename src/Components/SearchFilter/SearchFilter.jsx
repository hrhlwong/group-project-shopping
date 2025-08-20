import React from 'react';
import './SearchFilter.css';

const SearchFilter = ({ searchTerm, setSearchTerm, selectedCategory, setSelectedCategory, priceRange, setPriceRange }) => {
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPriceRange(e.target.value);
  };

  return (
    <div className="search-filter">
      <input 
        type="text" 
        placeholder="Search products..." 
        value={searchTerm} 
        onChange={handleSearch} 
      />
      {/* <select value={selectedCategory} onChange={handleCategoryChange}>
        <option value="">All Categories</option>
        <option value="men">Men</option>
        <option value="women">Women</option>
        <option value="kids">Kids</option>
      </select> */}

      <select value={priceRange} onChange={handlePriceChange}>
        <option value="">All Price Ranges</option>
        <option value="low">Under $50</option>
        <option value="medium">$50 - $100</option>
        <option value="high">Above $100</option>
      </select>
    </div>
  );
};

export default SearchFilter;
