import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ShopSidebarCategories = ({ onSelectCategory }) => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null); // State to keep track of the selected category

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('https://jap.digisole.in/api/v1/category/main/paginate');
        setCategories(response.data.data);
      } catch (error) {
        console.error('Failed to fetch categories:', error);
      }
    };

    fetchCategories();
  }, []);

  const handleCategorySelect = (categorySlug) => {
    // Toggle the selected category
    if (selectedCategory === categorySlug) {
      setSelectedCategory(null); // Unselect the category if it's already selected
      onSelectCategory(null); // Call the callback function to show all products
    } else {
      setSelectedCategory(categorySlug); // Set the selected category
      onSelectCategory(categorySlug); // Call the callback function with the selected category
    }
  };

  return (
    <div className="bd-filter__widget child-content-hidden">
      <h4 className="bd-filter__widget-title drop-btn">Categories</h4>
      <div className="bd-filter__content">
        <div className="bd-product__check">
          <ul>
            {categories.map((category) => (
              <li key={category.slug}>
                <input
                  className="check-input"
                  type="checkbox"
                  id={`s-${category.slug}`}
                  checked={selectedCategory === category.slug} // Check if the category is selected
                  onChange={() => handleCategorySelect(category.slug)}
                />
                <label className="check-label" htmlFor={`s-${category.slug}`}>
                  {category.slug}
                </label>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ShopSidebarCategories;
