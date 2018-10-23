var webdriver = require('selenium-webdriver');
var basePage = require('./base');
var By = webdriver.By,
    until = webdriver.until;
//JavascriptExecutor jse = (JavascriptExecutor)driver;
class OrdersPage extends basePage{
    addToCart(){
        //driver.switchTo().defaultContent();
        driver.wait(until.elementLocated(By.css("iframe[id='iFrameResizer0']")),800000).then(function(){
            driver.switchTo().frame("iFrameResizer0");
        //driver.manage().timeouts().implicitlywait(5000);
            driver.findElement(By.css("button[id='addToCart184347']")).click();
            //addToCart184353
            driver.wait(until.elementLocated(By.css("input[value='2']")),800000).click().then(function(){
                driver.findElement(By.css("input[name='ctl00$MainContent$btnSubmit']")).click().then(function(){
                driver.manage().window().maximize();
                let addItem = By.css("button[id='addToCart184353']");
                let checkOutCart = By.css("span[class='btn btnpadding']");
                let addItem2 = By.css("input[name='ctl00$MainContent$btnSubmit']");
                driver.wait(until.elementLocated(addItem),80000).then(function(){
        //elementIsVisible takes a webelement reference not By object
        driver.wait(until.elementIsVisible(driver.findElement(addItem)),800000).click().then(function(){
            
                 driver.findElement(addItem2).click().then(function(){
                    console.log("Added item");
                     
                    driver.wait(function(){
                        return driver.findElement(checkOutCart).getCssValue('opacity').then(function(result){
                            return result === '1';
                        });
                    },15000);
                     driver.findElement(checkOutCart).click();
                 });
        });
                });
                })
            })
        });
    };
};
module.exports = new OrdersPage();