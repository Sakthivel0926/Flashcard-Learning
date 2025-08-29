// src/components/CategoryList.tsx
import React from 'react';

interface CategoryListProps {
  categories: string[];
  onCategoryClick: (category: string | null) => void;
}

const CategoryList: React.FC<CategoryListProps> = ({ categories, onCategoryClick }) => {
  return (
    <div className="flex gap-4">
      <button onClick={() => onCategoryClick(null)} className="text-blue-500">
        All
      </button>
      {categories.map((category) => (
        <button  className="text-blue-500" key={category} onClick={() => onCategoryClick(category)}>
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryList;
