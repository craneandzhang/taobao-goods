import React, { useState } from 'react';

// SubcategoryList组件，接受子分类数据和选择子分类的函数作为props
function SubcategoryList({ subcategories, onSubcategorySelect }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <div className="subcategory-list">
      {subcategories.map((sub, index) => (
        // 循环渲染每个子分类的按钮，并设置点击事件
        <span className={ currentIndex === index ? 'subActive' : ""} key={sub.id} onClick={() => {
          onSubcategorySelect(sub.id);
          setCurrentIndex(index);
        }
        }>
          {sub.name}
        </span>
      ))}
    </div>
  );
}

export default SubcategoryList;
