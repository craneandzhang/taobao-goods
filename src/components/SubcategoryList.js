import React from 'react';

// SubcategoryList组件，接受子分类数据和选择子分类的函数作为props
function SubcategoryList({ subcategories, onSubcategorySelect }) {
  return (
    <div className="subcategory-list">
      {subcategories.map((sub) => (
        // 循环渲染每个子分类的按钮，并设置点击事件
        <button key={sub.id} onClick={() => onSubcategorySelect(sub.id)}>
          {sub.name}
        </button>
      ))}
    </div>
  );
}

export default SubcategoryList;
