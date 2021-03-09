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
const NewVeterinary_1 = require("../PageObjects/NewVeterinary");
let home = new Home_1.Home();
let newVeterinary = new NewVeterinary_1.NewVeterinary();
let { setDefaultTimeout } = require('cucumber');
setDefaultTimeout(50 * 1000);
cucumber_1.Given('user will Navigate to Petclinic Home page and Verify HomePage Title', () => __awaiter(void 0, void 0, void 0, function* () {
    yield home.navigateToHomepage();
    yield home.titleVerification();
}));
cucumber_1.When('user clicks on VETERINARIANS dropdown and select Add New option', () => __awaiter(void 0, void 0, void 0, function* () {
    yield home.navigateToVeterinaryPage();
}));
cucumber_1.When('provide {string} {string}', (First_Name, Last_Name) => __awaiter(void 0, void 0, void 0, function* () {
    yield newVeterinary.enterFN_LN({ First_Name, Last_Name });
}));
cucumber_1.When('click on Type dropdown and select any option', () => __awaiter(void 0, void 0, void 0, function* () {
    yield newVeterinary.selectSpecialist();
}));
cucumber_1.Then('click on save button', () => __awaiter(void 0, void 0, void 0, function* () {
    yield newVeterinary.saveVet();
}));
cucumber_1.Then('Verify the Newly added Name in Veterinary page', () => __awaiter(void 0, void 0, void 0, function* () {
    yield newVeterinary.verifyNewVetDetails();
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWRkVmV0ZXJpbmFyeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL1N0ZXBEZWZpbml0aW9uL0FkZFZldGVyaW5hcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDQSx1Q0FBNkM7QUFFN0MsOENBQTJDO0FBQzNDLGdFQUE2RDtBQUM3RCxJQUFJLElBQUksR0FBQyxJQUFJLFdBQUksRUFBRSxDQUFDO0FBQ3BCLElBQUksYUFBYSxHQUFDLElBQUksNkJBQWEsRUFBRSxDQUFDO0FBR3RDLElBQUksRUFBRSxpQkFBaUIsRUFBRSxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUNoRCxpQkFBaUIsQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUM7QUFHN0IsZ0JBQUssQ0FBQyxxRUFBcUUsRUFBRSxHQUFRLEVBQUU7SUFFckYsTUFBTSxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUNoQyxNQUFNLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0FBRWpDLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFRCxlQUFJLENBQUMsaUVBQWlFLEVBQUUsR0FBUSxFQUFFO0lBRWhGLE1BQU0sSUFBSSxDQUFDLHdCQUF3QixFQUFFLENBQUM7QUFFeEMsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVILGVBQUksQ0FBQywyQkFBMkIsRUFBRSxDQUFPLFVBQWUsRUFBQyxTQUFjLEVBQUMsRUFBRTtJQUd4RSxNQUFNLGFBQWEsQ0FBQyxVQUFVLENBQUMsRUFBQyxVQUFVLEVBQUUsU0FBUyxFQUFDLENBQUMsQ0FBQztBQUUxRCxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBR0gsZUFBSSxDQUFDLDhDQUE4QyxFQUFFLEdBQVMsRUFBRTtJQUU5RCxNQUFNLGFBQWEsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0FBRXpDLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFHSCxlQUFJLENBQUMsc0JBQXNCLEVBQUUsR0FBUSxFQUFFO0lBRXJDLE1BQU0sYUFBYSxDQUFDLE9BQU8sRUFBRSxDQUFDO0FBRWhDLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFSCxlQUFJLENBQUMsZ0RBQWdELEVBQUUsR0FBUSxFQUFFO0lBRS9ELE1BQU0sYUFBYSxDQUFDLG1CQUFtQixFQUFFLENBQUM7QUFFNUMsQ0FBQyxDQUFBLENBQUMsQ0FBQyJ9