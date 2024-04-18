import React from 'react';

// CategoryList组件，接受分类数据和选择分类的函数作为props
function CategoryList({ categories, onCategorySelect }) {
  return (
    <div className="category-list">
      {categories.map((category) => (
        // 循环渲染每个分类的按钮，并设置点击事件
        <button key={category.id} onClick={() => onCategorySelect(category.id)}>
          {category.name}
        </button>
      ))}
    </div>
  );
}

export default CategoryList;
