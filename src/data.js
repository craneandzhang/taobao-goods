// 示例的商品数据，每个分类下有多个二级分类和商品
const categoriesData = [
    {
        id: '1', name: '女装男装', subcategories: [
            { id: '1-1', name: '潮流女装', products: [...Array(20).fill().map((_, i) => ({ id: `1-1-${i+1}`, name: `篮球 ${i+1}`, image: 'https://via.placeholder.com/150' }))]},
            { id: '1-2', name: '羽绒服', products: [...Array(20).fill().map((_, i) => ({ id: `1-2-${i+1}`, name: `跑步 ${i+1}`, image: 'https://via.placeholder.com/150' }))]},
            { id: '1-3', name: '呢外套', products: [...Array(20).fill().map((_, i) => ({ id: `1-3-${i+1}`, name: `足球 ${i+1}`, image: 'https://via.placeholder.com/150' }))]},
            { id: '1-4', name: '毛衣', products: [...Array(6).fill().map((_, i) => ({ id: `1-3-${i+1}`, name: `足球1 ${i+1}`, image: 'https://via.placeholder.com/150' }))]},
            { id: '1-5', name: '外套上衣', products: [...Array(6).fill().map((_, i) => ({ id: `1-3-${i+1}`, name: `足球2 ${i+1}`, image: 'https://via.placeholder.com/150' }))]},
            { id: '1-6', name: '时尚男装', products: [...Array(6).fill().map((_, i) => ({ id: `1-3-${i+1}`, name: `足球3 ${i+1}`, image: 'https://via.placeholder.com/150' }))]},
            { id: '1-7', name: '秋外套', products: [...Array(6).fill().map((_, i) => ({ id: `1-3-${i+1}`, name: `足球4 ${i+1}`, image: 'https://via.placeholder.com/150' }))]},
            { id: '1-8', name: '/T恤', products: [...Array(6).fill().map((_, i) => ({ id: `1-3-${i+1}`, name: `足球5 ${i+1}`, image: 'https://via.placeholder.com/150' }))]},
            { id: '1-9', name: '男士裤子', products: [...Array(6).fill().map((_, i) => ({ id: `1-3-${i+1}`, name: `足球6 ${i+1}`, image: 'https://via.placeholder.com/150' }))]},
            { id: '1-10', name: '针织毛衫', products: [...Array(6).fill().map((_, i) => ({ id: `1-3-${i+1}`, name: `足球7 ${i+1}`, image: 'https://via.placeholder.com/150' }))]},
            { id: '1-11', name: '性感内衣', products: [...Array(6).fill().map((_, i) => ({ id: `1-3-${i+1}`, name: `足球8 ${i+1}`, image: 'https://via.placeholder.com/150' }))]},
            { id: '1-12', name: '文胸', products: [...Array(6).fill().map((_, i) => ({ id: `1-3-${i+1}`, name: `足球9 ${i+1}`, image: 'https://via.placeholder.com/150' }))]},
            { id: '1-13', name: '家居服', products: [...Array(6).fill().map((_, i) => ({ id: `1-3-${i+1}`, name: `足球10 ${i+1}`, image: 'https://via.placeholder.com/150' }))]},
            { id: '1-14', name: '丝袜', products: [...Array(6).fill().map((_, i) => ({ id: `1-3-${i+1}`, name: `足球11 ${i+1}`, image: 'https://via.placeholder.com/150' }))]},
            
        ]
    },
    {
        id: '2', name: '鞋类箱包', subcategories: [
            { id: '2-1', name: '女鞋', products: [...Array(11).fill().map((_, i) => ({ id: `2-1-${i+1}`, name: `图书 ${i+1}`, image: 'https://via.placeholder.com/150' }))]},
            { id: '2-2', name: '单鞋', products: [...Array(13).fill().map((_, i) => ({ id: `2-2-${i+1}`, name: `小说 ${i+1}`, image: 'https://via.placeholder.com/150' }))]},
            { id: '2-3', name: '运动风鞋', products: [...Array(15).fill().map((_, i) => ({ id: `2-3-${i+1}`, name: `漫画 ${i+1}`, image: 'https://via.placeholder.com/150' }))]},
            { id: '2-4', name: '男鞋', products: [...Array(6).fill().map((_, i) => ({ id: `2-3-${i+1}`, name: `漫画1 ${i+1}`, image: 'https://via.placeholder.com/150' }))]},
            { id: '2-5', name: '休闲男鞋', products: [...Array(6).fill().map((_, i) => ({ id: `2-3-${i+1}`, name: `漫画2 ${i+1}`, image: 'https://via.placeholder.com/150' }))]},
            { id: '2-6', name: '潮流女包', products: [...Array(6).fill().map((_, i) => ({ id: `2-3-${i+1}`, name: `漫画3 ${i+1}`, image: 'https://via.placeholder.com/150' }))]},
            { id: '2-7', name: '精品男包', products: [...Array(6).fill().map((_, i) => ({ id: `2-3-${i+1}`, name: `漫画4 ${i+1}`, image: 'https://via.placeholder.com/150' }))]},
            { id: '2-8', name: '双肩包', products: [...Array(6).fill().map((_, i) => ({ id: `2-3-${i+1}`, name: `漫画5 ${i+1}`, image: 'https://via.placeholder.com/150' }))]},
            { id: '2-9', name: '旅行箱', products: [...Array(6).fill().map((_, i) => ({ id: `2-3-${i+1}`, name: `漫画6 ${i+1}`, image: 'https://via.placeholder.com/150' }))]},
            { id: '2-10', name: '大牌', products: [...Array(6).fill().map((_, i) => ({ id: `2-3-${i+1}`, name: `漫画7 ${i+1}`, image: 'https://via.placeholder.com/150' }))]},
            { id: '2-11', name: '帽子', products: [...Array(6).fill().map((_, i) => ({ id: `2-3-${i+1}`, name: `漫画8 ${i+1}`, image: 'https://via.placeholder.com/150' }))]},
            { id: '2-12', name: '腰带', products: [...Array(6).fill().map((_, i) => ({ id: `2-3-${i+1}`, name: `漫画9 ${i+1}`, image: 'https://via.placeholder.com/150' }))]},
            { id: '2-13', name: '围巾', products: [...Array(6).fill().map((_, i) => ({ id: `2-3-${i+1}`, name: `漫画10 ${i+1}`, image: 'https://via.placeholder.com/150' }))]},
            { id: '2-14', name: '手套', products: [...Array(6).fill().map((_, i) => ({ id: `2-3-${i+1}`, name: `漫画11 ${i+1}`, image: 'https://via.placeholder.com/150' }))]},
        ]
    },
    {
        id: '3', name: '数码', subcategories: [
            { id: '3-1', name: '电脑', products: [...Array(16).fill().map((_, i) => ({ id: `3-1-${i+1}`, name: `电脑 ${i+1}`, image: 'https://via.placeholder.com/150' }))]},
            { id: '3-2', name: '平板', products: [...Array(4).fill().map((_, i) => ({ id: `3-2-${i+1}`, name: `平板 ${i+1}`, image: 'https://via.placeholder.com/150' }))]},
            { id: '3-3', name: '手机', products: [...Array(9).fill().map((_, i) => ({ id: `3-3-${i+1}`, name: `手机 ${i+1}`, image: 'https://via.placeholder.com/150' }))]},
            { id: '3-4', name: '笔记本', products: [...Array(6).fill().map((_, i) => ({ id: `3-3-${i+1}`, name: `手机1 ${i+1}`, image: 'https://via.placeholder.com/150' }))]},
            { id: '3-5', name: '数码配件', products: [...Array(6).fill().map((_, i) => ({ id: `3-3-${i+1}`, name: `手机2 ${i+1}`, image: 'https://via.placeholder.com/150' }))]},
            { id: '3-6', name: '网络设备', products: [...Array(6).fill().map((_, i) => ({ id: `3-3-${i+1}`, name: `手机3 ${i+1}`, image: 'https://via.placeholder.com/150' }))]},
            { id: '3-7', name: '相机', products: [...Array(6).fill().map((_, i) => ({ id: `3-3-${i+1}`, name: `手机4 ${i+1}`, image: 'https://via.placeholder.com/150' }))]},
            { id: '3-8', name: '智能设备', products: [...Array(6).fill().map((_, i) => ({ id: `3-3-${i+1}`, name: `手机5 ${i+1}`, image: 'https://via.placeholder.com/150' }))]},
            { id: '3-9', name: 'MP3/MP4', products: [...Array(6).fill().map((_, i) => ({ id: `3-3-${i+1}`, name: `手机6 ${i+1}`, image: 'https://via.placeholder.com/150' }))]},
            { id: '3-10', name: '3C配件', products: [...Array(6).fill().map((_, i) => ({ id: `3-3-${i+1}`, name: `手机7 ${i+1}`, image: 'https://via.placeholder.com/150' }))]},
            { id: '3-11', name: '电玩', products: [...Array(6).fill().map((_, i) => ({ id: `3-3-${i+1}`, name: `手机8 ${i+1}`, image: 'https://via.placeholder.com/150' }))]},
            { id: '3-12', name: '存储', products: [...Array(6).fill().map((_, i) => ({ id: `3-3-${i+1}`, name: `手机9 ${i+1}`, image: 'https://via.placeholder.com/150' }))]},
            { id: '3-13', name: '游戏手柄', products: [...Array(6).fill().map((_, i) => ({ id: `3-3-${i+1}`, name: `手机10 ${i+1}`, image: 'https://via.placeholder.com/150' }))]},
            { id: '3-14', name: '游戏掌机', products: [...Array(6).fill().map((_, i) => ({ id: `3-3-${i+1}`, name: `手机11 ${i+1}`, image: 'https://via.placeholder.com/150' }))]},
        ]
    },
    {
        id: '4', name: '珠宝配饰', subcategories: [
            { id: '4-1', name: '时尚饰品', products: [...Array(7).fill().map((_, i) => ({ id: `3-1-${i+1}`, name: `电脑 ${i+1}`, image: 'https://via.placeholder.com/150' }))]},
            { id: '4-2', name: '品质手表', products: [...Array(5).fill().map((_, i) => ({ id: `3-2-${i+1}`, name: `平板 ${i+1}`, image: 'https://via.placeholder.com/150' }))]},
            { id: '4-3', name: '手链', products: [...Array(4).fill().map((_, i) => ({ id: `3-3-${i+1}`, name: `手机 ${i+1}`, image: 'https://via.placeholder.com/150' }))]},
            { id: '4-4', name: '发饰', products: [...Array(6).fill().map((_, i) => ({ id: `3-3-${i+1}`, name: `手机1 ${i+1}`, image: 'https://via.placeholder.com/150' }))]},
            { id: '4-5', name: '珠宝首饰', products: [...Array(6).fill().map((_, i) => ({ id: `3-3-${i+1}`, name: `手机2 ${i+1}`, image: 'https://via.placeholder.com/150' }))]},
            { id: '4-6', name: '潮流眼镜', products: [...Array(6).fill().map((_, i) => ({ id: `3-3-${i+1}`, name: `手机3 ${i+1}`, image: 'https://via.placeholder.com/150' }))]},
            { id: '4-7', name: '项链品坠', products: [...Array(6).fill().map((_, i) => ({ id: `3-3-${i+1}`, name: `手机4 ${i+1}`, image: 'https://via.placeholder.com/150' }))]},
            { id: '4-8', name: '新娘配饰', products: [...Array(6).fill().map((_, i) => ({ id: `3-3-${i+1}`, name: `手机5 ${i+1}`, image: 'https://via.placeholder.com/150' }))]},
            { id: '4-9', name: '和田玉', products: [...Array(6).fill().map((_, i) => ({ id: `3-3-${i+1}`, name: `手机6 ${i+1}`, image: 'https://via.placeholder.com/150' }))]},
            { id: '4-10', name: '细士配件', products: [...Array(6).fill().map((_, i) => ({ id: `3-3-${i+1}`, name: `手机7 ${i+1}`, image: 'https://via.placeholder.com/150' }))]},
            { id: '4-11', name: '手镯', products: [...Array(6).fill().map((_, i) => ({ id: `3-3-${i+1}`, name: `手机8 ${i+1}`, image: 'https://via.placeholder.com/150' }))]},
            { id: '4-12', name: '电子烟', products: [...Array(6).fill().map((_, i) => ({ id: `3-3-${i+1}`, name: `手机9 ${i+1}`, image: 'https://via.placeholder.com/150' }))]},
            { id: '4-13', name: '翡翠', products: [...Array(6).fill().map((_, i) => ({ id: `3-3-${i+1}`, name: `手机10 ${i+1}`, image: 'https://via.placeholder.com/150' }))]},
            { id: '4-14', name: '太阳镜', products: [...Array(6).fill().map((_, i) => ({ id: `3-3-${i+1}`, name: `手机11 ${i+1}`, image: 'https://via.placeholder.com/150' }))]},
        ]
    },
    {
        id: '5', name: '护肤彩妆', subcategories: [
            { id: '5-1', name: '美容护肤', products: [...Array(9).fill().map((_, i) => ({ id: `3-1-${i+1}`, name: `电脑 ${i+1}`, image: 'https://via.placeholder.com/150' }))]},
            { id: '5-2', name: '香氛精油', products: [...Array(12).fill().map((_, i) => ({ id: `3-2-${i+1}`, name: `平板 ${i+1}`, image: 'https://via.placeholder.com/150' }))]},
            { id: '5-3', name: '眼部彩妆', products: [...Array(6).fill().map((_, i) => ({ id: `3-3-${i+1}`, name: `手机 ${i+1}`, image: 'https://via.placeholder.com/150' }))]},
            { id: '5-4', name: '热门品牌', products: [...Array(6).fill().map((_, i) => ({ id: `3-3-${i+1}`, name: `手机1 ${i+1}`, image: 'https://via.placeholder.com/150' }))]},
            { id: '5-5', name: '换季保养', products: [...Array(6).fill().map((_, i) => ({ id: `3-3-${i+1}`, name: `手机2 ${i+1}`, image: 'https://via.placeholder.com/150' }))]},
            { id: '5-6', name: '美发造型', products: [...Array(6).fill().map((_, i) => ({ id: `3-3-${i+1}`, name: `手机3 ${i+1}`, image: 'https://via.placeholder.com/150' }))]},
            { id: '5-7', name: '男士护理', products: [...Array(6).fill().map((_, i) => ({ id: `3-3-${i+1}`, name: `手机4 ${i+1}`, image: 'https://via.placeholder.com/150' }))]},
            { id: '5-8', name: '芦荟胶', products: [...Array(6).fill().map((_, i) => ({ id: `3-3-${i+1}`, name: `手机5 ${i+1}`, image: 'https://via.placeholder.com/150' }))]},
            { id: '5-9', name: 'BB霜', products: [...Array(6).fill().map((_, i) => ({ id: `3-3-${i+1}`, name: `手机6 ${i+1}`, image: 'https://via.placeholder.com/150' }))]},
            { id: '5-10', name: '纤体塑身', products: [...Array(6).fill().map((_, i) => ({ id: `3-3-${i+1}`, name: `手机7 ${i+1}`, image: 'https://via.placeholder.com/150' }))]},
            { id: '5-11', name: '抗皱', products: [...Array(6).fill().map((_, i) => ({ id: `3-3-${i+1}`, name: `手机8 ${i+1}`, image: 'https://via.placeholder.com/150' }))]},
            { id: '5-12', name: '洁面', products: [...Array(6).fill().map((_, i) => ({ id: `3-3-${i+1}`, name: `手机9 ${i+1}`, image: 'https://via.placeholder.com/150' }))]},
            { id: '5-13', name: '爽肤水', products: [...Array(6).fill().map((_, i) => ({ id: `3-3-${i+1}`, name: `手机10 ${i+1}`, image: 'https://via.placeholder.com/150' }))]},
            { id: '5-14', name: '精华', products: [...Array(6).fill().map((_, i) => ({ id: `3-3-${i+1}`, name: `手机11 ${i+1}`, image: 'https://via.placeholder.com/150' }))]},
        ]
    },
    {
        id: '6', name: '汇吃美食', subcategories: [
            { id: '6-1', name: '休闲零食', products: [...Array(12).fill().map((_, i) => ({ id: `3-1-${i+1}`, name: `电脑 ${i+1}`, image: 'https://via.placeholder.com/150' }))]},
            { id: '6-2', name: '水产鲜肉', products: [...Array(15).fill().map((_, i) => ({ id: `3-2-${i+1}`, name: `平板 ${i+1}`, image: 'https://via.placeholder.com/150' }))]},
            { id: '6-3', name: '四季茗茶', products: [...Array(6).fill().map((_, i) => ({ id: `3-3-${i+1}`, name: `手机 ${i+1}`, image: 'https://via.placeholder.com/150' }))]},
            { id: '6-4', name: '生鲜果蔬', products: [...Array(6).fill().map((_, i) => ({ id: `3-3-${i+1}`, name: `手机1 ${i+1}`, image: 'https://via.placeholder.com/150' }))]},
            { id: '6-5', name: '换季保养', products: [...Array(6).fill().map((_, i) => ({ id: `3-3-${i+1}`, name: `手机2 ${i+1}`, image: 'https://via.placeholder.com/150' }))]},
            { id: '6-6', name: '美发造型', products: [...Array(6).fill().map((_, i) => ({ id: `3-3-${i+1}`, name: `手机3 ${i+1}`, image: 'https://via.placeholder.com/150' }))]},
            { id: '6-7', name: '男士护理', products: [...Array(6).fill().map((_, i) => ({ id: `3-3-${i+1}`, name: `手机4 ${i+1}`, image: 'https://via.placeholder.com/150' }))]},
            { id: '6-8', name: '红酒', products: [...Array(6).fill().map((_, i) => ({ id: `3-3-${i+1}`, name: `手机5 ${i+1}`, image: 'https://via.placeholder.com/150' }))]},
            { id: '6-9', name: '番茄', products: [...Array(6).fill().map((_, i) => ({ id: `3-3-${i+1}`, name: `手机6 ${i+1}`, image: 'https://via.placeholder.com/150' }))]},
            { id: '6-10', name: '粮油调味', products: [...Array(6).fill().map((_, i) => ({ id: `3-3-${i+1}`, name: `手机7 ${i+1}`, image: 'https://via.placeholder.com/150' }))]},
            { id: '6-11', name: '抗皱', products: [...Array(6).fill().map((_, i) => ({ id: `3-3-${i+1}`, name: `手机8 ${i+1}`, image: 'https://via.placeholder.com/150' }))]},
            { id: '6-12', name: '牛奶饮料', products: [...Array(6).fill().map((_, i) => ({ id: `3-3-${i+1}`, name: `手机9 ${i+1}`, image: 'https://via.placeholder.com/150' }))]},
            { id: '6-13', name: '麦片', products: [...Array(6).fill().map((_, i) => ({ id: `3-3-${i+1}`, name: `手机10 ${i+1}`, image: 'https://via.placeholder.com/150' }))]},
            { id: '6-14', name: '芒果干', products: [...Array(6).fill().map((_, i) => ({ id: `3-3-${i+1}`, name: `手机11 ${i+1}`, image: 'https://via.placeholder.com/150' }))]},
        ]
    },
    {
        id: '7', name: '母婴用品', subcategories: [
            { id: '7-1', name: '英国牛栏', products: [...Array(15).fill().map((_, i) => ({ id: `3-1-${i+1}`, name: `电脑 ${i+1}`, image: 'https://via.placeholder.com/150' }))]},
            { id: '7-2', name: '磨牙棒', products: [...Array(12).fill().map((_, i) => ({ id: `3-2-${i+1}`, name: `平板 ${i+1}`, image: 'https://via.placeholder.com/150' }))]},
            { id: '7-3', name: '泳装', products: [...Array(6).fill().map((_, i) => ({ id: `3-3-${i+1}`, name: `手机 ${i+1}`, image: 'https://via.placeholder.com/150' }))]},
            { id: '7-4', name: '半身裙', products: [...Array(6).fill().map((_, i) => ({ id: `3-3-${i+1}`, name: `手机1 ${i+1}`, image: 'https://via.placeholder.com/150' }))]},
            { id: '7-5', name: '换季保养', products: [...Array(6).fill().map((_, i) => ({ id: `3-3-${i+1}`, name: `手机2 ${i+1}`, image: 'https://via.placeholder.com/150' }))]},
            { id: '7-6', name: '美发造型', products: [...Array(6).fill().map((_, i) => ({ id: `3-3-${i+1}`, name: `手机3 ${i+1}`, image: 'https://via.placeholder.com/150' }))]},
            { id: '7-7', name: '童车', products: [...Array(6).fill().map((_, i) => ({ id: `3-3-${i+1}`, name: `手机4 ${i+1}`, image: 'https://via.placeholder.com/150' }))]},
            { id: '7-8', name: '红酒', products: [...Array(6).fill().map((_, i) => ({ id: `3-3-${i+1}`, name: `手机5 ${i+1}`, image: 'https://via.placeholder.com/150' }))]},
            { id: '7-9', name: '番茄', products: [...Array(6).fill().map((_, i) => ({ id: `3-3-${i+1}`, name: `手机6 ${i+1}`, image: 'https://via.placeholder.com/150' }))]},
            { id: '7-10', name: '滑板车', products: [...Array(6).fill().map((_, i) => ({ id: `3-3-${i+1}`, name: `手机7 ${i+1}`, image: 'https://via.placeholder.com/150' }))]},
            { id: '7-11', name: '抗皱', products: [...Array(6).fill().map((_, i) => ({ id: `3-3-${i+1}`, name: `手机8 ${i+1}`, image: 'https://via.placeholder.com/150' }))]},
            { id: '7-12', name: '网鞋', products: [...Array(6).fill().map((_, i) => ({ id: `3-3-${i+1}`, name: `手机9 ${i+1}`, image: 'https://via.placeholder.com/150' }))]},
            { id: '7-13', name: '麦片', products: [...Array(6).fill().map((_, i) => ({ id: `3-3-${i+1}`, name: `手机10 ${i+1}`, image: 'https://via.placeholder.com/150' }))]},
            { id: '7-14', name: '母女裙', products: [...Array(6).fill().map((_, i) => ({ id: `3-3-${i+1}`, name: `手机11 ${i+1}`, image: 'https://via.placeholder.com/150' }))]},
        ]
    },
    // 更多分类...
  ];
  
  export default categoriesData;