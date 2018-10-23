var webdriver = require('selenium-webdriver');
    
class basePage{
    constructor(){
        if(global.driver == null) {
            global.driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();
            }
        }
    navigateToHome(){
        driver.get('https://bbqnationus.com');
    }
}
module.exports = basePage;