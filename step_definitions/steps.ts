// import {Given, When} from 'cucumber';

const { I } = inject();
// Add in your custom step files

Given('I have a defined step', () => {
    I.amOnPage(('/'));
    I.wait(3);
    I.click('(//a[contains(text(),"Sign in")])[2]');
    I.wait(3);


});
When(/^I do something$/, function () {

});
Given(/^I am in BTC$/, function () {

});
When(/^Login with valid credentials$/, function () {
    I.amOnPage('');
    I.wait(5);
    I.fillField('input[id= "1-email"]', 'fmedici@seagullscientific.com');
    I.fillField('input[id= "1-password"]', 'Se@gull123');
    I.wait(5);
    I.click('(//*[@id="1-submit"])');
    I.wait(5);

//*[@id="1-submit"]


});