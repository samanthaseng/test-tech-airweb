const { queryDatabase } = require('../config/db.config');

const getProducts = async () => {
    const categoriesOptions = {
        method: 'ALL',
        sql: `SELECT *
              FROM categories 
              ORDER BY cat_index`
    };
    const categoriesResult = await queryDatabase(categoriesOptions);

    const productsOptions = {
        method: 'ALL',
        sql: `SELECT *
              FROM products`
    };
    const productsResult = await queryDatabase(productsOptions);
    
    return categoriesResult.map(category => {
        category.products = productsResult.filter(product => product.category_id === category.id);
        return category
    });   
}

module.exports = { getProducts };