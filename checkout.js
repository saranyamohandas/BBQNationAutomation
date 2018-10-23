var webdriver = require('selenium-webdriver');
var basePage = require('./base');
var By = webdriver.By,
    until = webdriver.until;
class checkOutPage extends basePage{
    checkOut(){
        driver.wait(until.elementLocated(By.css('#ddlPickupTime')),80000).then(function(){
        driver.findElement(By.css('#ddlPickupTime')).click();
        driver.findElement(By.css('option[value="9:30 PM"]')).click().then(function(){
            //ENTER CONTACT DETAILS
            driver.findElement(By.css('input[placeholder="First name"]')).sendKeys('Jane');
            driver.findElement(By.css('input[placeholder="Last name"]')).sendKeys('Doe');
            driver.findElement(By.css('input[placeholder="Email Address"]')).sendKeys('janedoe@xxxmail.com');
            driver.findElement(By.css('input[placeholder="Format(xxxxxxxxxx)"]')).sendKeys('1234567890');
            //ENTER PAYMENT DETAILS
            driver.findElement(By.css('input[placeholder="First Name On Card"]')).sendKeys('Jane');
            driver.findElement(By.css('input[placeholder="Last Name On Card"]')).sendKeys('Doe');
            driver.findElement(By.css('select[name="CardType"]')).click();
            driver.findElement(By.css('option[value="visa"]')).click();
            driver.findElement(By.css('input[placeholder="Credit Card Number"]')).sendKeys('1234567890');
            driver.findElement(By.css('select[name="ExpiryMonth"]')).click();
            driver.findElement(By.css('option[value="1"]')).click();
            driver.findElement(By.css('input[placeholder="ZipCode"]')).sendKeys('12345');
            driver.findElement(By.css('input[placeholder="CVV"]')).sendKeys('0421');
            driver.findElement(By.css('input[value="Place Order"]')).click();
            var err1 = driver.wait(until.elementLocated(By.css("span[id='MainContent_DigitalMenuCart_lblValidationErrorMessage']")));
            console.log('err1-',err1);
        
        });
        
        });
    };
};
    
module.exports = new checkOutPage();