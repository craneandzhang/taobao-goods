import React from 'react';

// ProductGrid组件，接受商品数据数组作为props
function ProductGrid({ products }) {
  return (
    <div className="product-grid">
      {products.map((product) => (
        // 循环渲染每个商品的块状展示
        <div key={product.id} className="product">
          <img src={product.image} alt={product.name} />
          <div>{product.name}</div>
        </div>
      ))}
    </div>
  );
}

export default ProductGrid;
