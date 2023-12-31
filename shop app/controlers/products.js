const Product =require('../models/product')

exports.addProducts =(req, res, next) => {

    res.render('add-product', {

        pageTitle: 'Add Product',
        path: '/admin/add-product',
        formsCSS: true,
        productCSS: true,
        activeAddProduct: true
    });
}

exports.postAddProducts= (req, res, next) => {

    const product=new Product(req.body.title);
    
    res.redirect('/');
}

exports.getproducts= (req, res, next) => {
    const products=Product.fetchAll();
    res.render('shop', {

        prods: products,
        pageTitle: 'Shop',
        path: '/',
        hasProducts: products.length > 0,
        activeShop: true,
        productCSS: true
    });
}
