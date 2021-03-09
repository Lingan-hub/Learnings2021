"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const Home_1 = require("../PageObjects/Home");
const NewOwner_1 = require("../PageObjects/NewOwner");
let { setDefaultTimeout } = require('cucumber');
setDefaultTimeout(50 * 1000);
let home = new Home_1.Home();
let newOwner = new NewOwner_1.NewOwner();
cucumber_1.Given('user Navigate to Petclinic Home page and Verify HomePage Title', () => __awaiter(void 0, void 0, void 0, function* () {
    yield home.navigateToHomepage();
    yield home.titleVerification();
}));
cucumber_1.When('user Clicks on OWNERS dropdown select Add New option from owners dropdown', () => __awaiter(void 0, void 0, void 0, function* () {
    yield home.navigateToNewOwnerPage();
}));
cucumber_1.When('verify Title', () => __awaiter(void 0, void 0, void 0, function* () {
    yield newOwner.verifyTitle();
}));
cucumber_1.When('provide vaild owner details as {string} {string} {string} {string} {string}', (First_Name, Last_Name, Address, City, Telephone) => __awaiter(void 0, void 0, void 0, function* () {
    yield newOwner.addNewOwnerDetails({ First_Name, Last_Name, Address, City, Telephone });
}));
cucumber_1.Then('click on Add Owner', () => __awaiter(void 0, void 0, void 0, function* () {
    yield newOwner.clickOnAddOwner();
}));
cucumber_1.Then('verify whether user is successfull added new owner or not', () => __awaiter(void 0, void 0, void 0, function* () {
    yield newOwner.verifyOwnersEntry();
}));
cucumber_1.Then('also check Back button in New Owner page', () => __awaiter(void 0, void 0, void 0, function* () {
    yield home.navigateToNewOwnerPage();
    yield newOwner.backButton();
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWRkT3duZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9TdGVwRGVmaW5pdGlvbi9BZGRPd25lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHVDQUE2QztBQUU3Qyw4Q0FBMkM7QUFDM0Msc0RBQW1EO0FBSW5ELElBQUksRUFBRSxpQkFBaUIsRUFBRSxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUNoRCxpQkFBaUIsQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUM7QUFFN0IsSUFBSSxJQUFJLEdBQUMsSUFBSSxXQUFJLEVBQUUsQ0FBQztBQUNwQixJQUFJLFFBQVEsR0FBQyxJQUFJLG1CQUFRLEVBQUUsQ0FBQztBQUc1QixnQkFBSyxDQUFDLGdFQUFnRSxFQUFFLEdBQVEsRUFBRTtJQUNsRixNQUFNLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQ2hDLE1BQU0sSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7QUFFL0IsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUNILGVBQUksQ0FBQywyRUFBMkUsRUFBRSxHQUFRLEVBQUU7SUFFeEYsTUFBTSxJQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztBQUV0QyxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFDLGNBQWMsRUFBRSxHQUFRLEVBQUU7SUFDN0IsTUFBTSxRQUFRLENBQUMsV0FBVyxFQUFFLENBQUM7QUFDL0IsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUdILGVBQUksQ0FBQyw2RUFBNkUsRUFBRSxDQUFPLFVBQWUsRUFBRSxTQUFjLEVBQUUsT0FBWSxFQUFFLElBQVMsRUFBRSxTQUFjLEVBQUMsRUFBRTtJQUVwSyxNQUFNLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBRSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsQ0FBRSxDQUFDO0FBRTNGLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFSCxlQUFJLENBQUMsb0JBQW9CLEVBQUUsR0FBUSxFQUFFO0lBRW5DLE1BQU0sUUFBUSxDQUFDLGVBQWUsRUFBRSxDQUFDO0FBRW5DLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFSCxlQUFJLENBQUMsMkRBQTJELEVBQUUsR0FBUSxFQUFFO0lBRTFFLE1BQU0sUUFBUSxDQUFDLGlCQUFpQixFQUFFLENBQUM7QUFFckMsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUdILGVBQUksQ0FBQywwQ0FBMEMsRUFBRSxHQUFTLEVBQUU7SUFFMUQsTUFBTSxJQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztJQUNwQyxNQUFNLFFBQVEsQ0FBQyxVQUFVLEVBQUUsQ0FBQztBQUU5QixDQUFDLENBQUEsQ0FBQyxDQUFDIn0=