// 示例的商品数据，每个分类下有多个二级分类和商品
const categoriesData = [
    {
        id: '1', name: '运动', subcategories: [
            { id: '1-1', name: '篮球', products: [...Array(5).fill().map((_, i) => ({ id: `1-1-${i+1}`, name: `篮球 ${i+1}`, image: 'https://via.placeholder.com/150' }))]},
            { id: '1-2', name: '跑步', products: [...Array(5).fill().map((_, i) => ({ id: `1-2-${i+1}`, name: `跑步 ${i+1}`, image: 'https://via.placeholder.com/150' }))]},
            { id: '1-3', name: '足球', products: [...Array(5).fill().map((_, i) => ({ id: `1-3-${i+1}`, name: `足球 ${i+1}`, image: 'https://via.placeholder.com/150' }))]},
        ]
    },
    {
        id: '2', name: '书籍', subcategories: [
            { id: '2-1', name: '图书', products: [...Array(5).fill().map((_, i) => ({ id: `2-1-${i+1}`, name: `图书 ${i+1}`, image: 'https://via.placeholder.com/150' }))]},
            { id: '2-2', name: '小说', products: [...Array(5).fill().map((_, i) => ({ id: `2-2-${i+1}`, name: `小说 ${i+1}`, image: 'https://via.placeholder.com/150' }))]},
            { id: '2-3', name: '漫画', products: [...Array(5).fill().map((_, i) => ({ id: `2-3-${i+1}`, name: `漫画 ${i+1}`, image: 'https://via.placeholder.com/150' }))]},
        ]
    },
    {
        id: '3', name: '数码', subcategories: [
            { id: '2-1', name: '电脑', products: [...Array(5).fill().map((_, i) => ({ id: `2-1-${i+1}`, name: `电脑 ${i+1}`, image: 'https://via.placeholder.com/150' }))]},
            { id: '2-2', name: '平板', products: [...Array(5).fill().map((_, i) => ({ id: `2-2-${i+1}`, name: `平板 ${i+1}`, image: 'https://via.placeholder.com/150' }))]},
            { id: '2-3', name: '手机', products: [...Array(5).fill().map((_, i) => ({ id: `2-3-${i+1}`, name: `手机 ${i+1}`, image: 'https://via.placeholder.com/150' }))]},
        ]
    },
    // 更多分类...
  ];
  
  export default categoriesData;