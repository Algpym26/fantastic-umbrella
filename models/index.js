// import models
const Product = Require('./Product');
const Category = Require('./Category');
const Tag = Require('./Tag');
const ProductTag = Require('./ProductTag');

// Products belongsTo Category

// Categories have many Products

// Products belongToMany Tags (through ProductTag)

// Tags belongToMany Products (through ProductTag)

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
