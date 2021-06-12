// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id',
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id',
  //onDelete: 'CASCADE',
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag,{
  through: {
    model: ProductTag,
    unique: true,
  },
  //ProductTag,
  //foreignKey: 'product_id',
    
  as: 'product_id'

});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product,{
  through:  {
    model: ProductTag,
    unique: true
  }, 
  //ProductTag,
  //foreignKey: 'tag_id',
   as: 'tag_id' 
  // Define an alias for when data is retrieved
  /* as: 'product_tag' */
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
