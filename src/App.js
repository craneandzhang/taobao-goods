import React, { useState, useEffect, useRef } from 'react';
import CategoryList from './components/CategoryList';
import SubcategoryList from './components/SubcategoryList';
import ProductGrid from './components/ProductGrid';
import categoriesData from './data';
import './style3.css';

function App() {
  const [categories] = useState(categoriesData);
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const [selectedSubcategoryId, setSelectedSubcategoryId] = useState(null);
  const [visibleSubcategoryId, setVisibleSubcategoryId] = useState(null);
  const subcategoryRefs = useRef({});

  const selectedCategory = categories.find(cat => cat.id === selectedCategoryId);
  const subcategories = selectedCategory ? selectedCategory.subcategories : [];

  useEffect(() => {
    if (categories.length > 0 && selectedCategoryId === null) {
      setSelectedCategoryId(categories[0].id);
    }
  }, [categories, selectedCategoryId]);

  useEffect(() => {
    if (visibleSubcategoryId && subcategoryRefs.current[visibleSubcategoryId]) {
      subcategoryRefs.current[visibleSubcategoryId].scrollIntoView({
        behavior: 'smooth'
      });
    }
  }, [visibleSubcategoryId]);

  return (
    <div className="outer-container">
      <div className="app-container">
        <CategoryList categories={categories} onCategorySelect={id => {
          setSelectedCategoryId(id);
          setSelectedSubcategoryId(null);
          setVisibleSubcategoryId(null);
        }} />
        <div className="right-panel">
          <SubcategoryList subcategories={subcategories} onSubcategorySelect={id => {
            setSelectedSubcategoryId(id);
            setVisibleSubcategoryId(id);
          }} />
          {subcategories.map((sub, index) => (
            <div ref={el => subcategoryRefs.current[sub.id] = el} key={sub.id}>
              {(!selectedSubcategoryId || index >= subcategories.findIndex(sc => sc.id === selectedSubcategoryId)) && (
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
