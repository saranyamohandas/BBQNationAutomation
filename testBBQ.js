var homePage = require('./home');//import file current dir
var orderPage1 = require('./order');
var checkoutPage = require('./checkout');
//var emptyCheckoutPage = require('./emptyOrder');
//use method from homePage
let homeNavigate = function(){
    return new Promise(function(resolve,reject){
        resolve(homePage.navigateToHome());
    })
};
var homeCheck = function(){
    return new Promise(function(resolve,reject){
        resolve(homePage.checkMenu());
    })
}
let homeOrder = function(){
    return new Promise(function(resolve,reject){
        resolve(orderPage1.addToCart());
       // reject(console.log('Promise - Rejected!'))
    })
}
let checkoutPay = function(){
    return new Promise(function(resolve,reject){
        resolve(checkoutPage.checkOut());
    })
}


let pageError = function(){
    return new Promise(function(resolve,reject){
        //resolve(homeCheck.addToCart());
        reject(console.log('Promise Rejected!'))
    })
}
//checkout with multiple items
homeNavigate().then(function(){
    return homeCheck();
}).then(function(){
    return homeOrder();
}).then(function(){
    return checkoutPay();
}).catch(function(err){
    console.log(err);
    return pageError();
})





