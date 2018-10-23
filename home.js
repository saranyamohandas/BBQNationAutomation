var webdriver = require('selenium-webdriver');
var basePage = require('./base');
var By = webdriver.By,
    until = webdriver.until;
    //driver;
class HomePage extends basePage {
    
    checkMenu(){
        var orderOnline = "a[class='btn btn-danger white']";
        //driver.findElement(By.css(orderOnline)).click();
        driver.wait(until.elementLocated(By.css(orderOnline)),800000).then(function(){
            driver.findElement(By.css(orderOnline)).click();
            //return require('./order');
        })
        
         
        }        

}

module.exports = new HomePage();//import HomePage class


