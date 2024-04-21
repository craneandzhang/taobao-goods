import React, { useState, useEffect, useRef } from 'react';
import CategoryList from './components/CategoryList';
import SubcategoryList from './components/SubcategoryList';
import ProductGrid from './components/ProductGrid';
import categoriesData from './data';
import './style.css';

function App() {
  // 创建一个状态变量，初始化为data.js中的数据
  const [categories] = useState(categoriesData);
  // 使用钩子函数创建三个状态变量存储3个id，初始化为null
  const [selectedCategoryId, setSelectedCategoryId] = useState('1');
  const [selectedSubcategoryId, setSelectedSubcategoryId] = useState(null);
  const [visibleSubcategoryId, setVisibleSubcategoryId] = useState(null);
  // 使用钩子函数创建引用变量，用于存储子分类的引用信息
  const subcategoryRefs = useRef({});
  // 根据一级对象id获取data对象中的一级对象
  const selectedCategory = categories.find(cat => cat.id === selectedCategoryId);
  // 如果上一步的一级对象存在，就获取它的二级分类列表，否则将其置为null
  const subcategories = selectedCategory ? selectedCategory.subcategories : [];

  useEffect(() => {
    // 组件加载后，数据不为空且一级分类id为null，因为初始化为null，就设置selectedCategoryID是第一个分类的id
    if (categories.length > 0 && selectedCategoryId === null) {
      setSelectedCategoryId(categories[0].id);
    }
  }, [categories, selectedCategoryId]); // 依赖于categories和selectedCategoryId的变化

  useEffect(() => {
    // 当visibleSubcategoryId不为空且subcategoryRefs中存在对应ID的引用时，将其滚动到可视区域
    if (visibleSubcategoryId && subcategoryRefs.current[visibleSubcategoryId]) {
      subcategoryRefs.current[visibleSubcategoryId].scrollIntoView({
        behavior: 'smooth' // 平滑滚动
      });
    }
  }, [visibleSubcategoryId]); // 依赖于visibleSubcategoryId的变化

  return (
    <div className="outer-container"> {/* 整个页面的外部容器，设置页面大小并水平垂直居中 */}
      <div className="app-container"> {/* 页面主要内容容器，包含左侧分类列表和右侧商品展示区 */}
        <CategoryList categories={categories} onCategorySelect={id => {
          // 当一级分类被选中时，更新selectedCategoryId并重置selectedSubcategoryId和visibleSubcategoryId为null
          setSelectedCategoryId(id);
          setSelectedSubcategoryId(null);
          setVisibleSubcategoryId(null);
        }} /> {/* 分类列表组件，接收分类数据和选中事件处理函数 */}
        <div className="right-panel"> {/* 右侧面板，包含二级分类列表和商品展示区 */}
          <SubcategoryList subcategories={subcategories} onSubcategorySelect={id => {
            // 当二级分类被选中时，更新selectedSubcategoryId并设置visibleSubcategoryId为选中的ID
            setSelectedSubcategoryId(id);
            setVisibleSubcategoryId(id);
          }} /> {/* 子分类列表组件，接收二级分类数据和选中事件处理函数 */}
          {subcategories.map((sub, index) => (
            <div ref={el => subcategoryRefs.current[sub.id] = el} key={sub.id}>
              {/* 映射每个二级分类，设置其引用并显示商品网格 */}
              {(!selectedSubcategoryId || index >= -1) && (
                <>
                  <h3 className="subcategory-title">{sub.name}</h3>
                  <ProductGrid products={sub.products} />
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
