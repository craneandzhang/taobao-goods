import React, { useState } from 'react';

// CategoryList组件，接受分类数据和选择分类的函数作为props
function CategoryList({ categories, onCategorySelect }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <div className="category-list">
      {categories.map((category, index) => (
        // 循环渲染每个分类的按钮，并设置点击事件
        <div className={ currentIndex === index ? 'active' : ''} key={category.id} onClick={() => {
          onCategorySelect(category.id);
          setCurrentIndex(index);
        }
        }>
          {category.name}
        </div>
      ))}
    </div>
  );
}

export default CategoryList;
