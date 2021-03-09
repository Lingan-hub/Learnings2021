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
exports.NewOwner = void 0;
const protractor_1 = require("protractor");
let ec = protractor_1.ExpectedConditions;
const expect = require('chai').expect;
const Properties_1 = require("../TestData/Properties");
const log = require('../Logs/Log4JS').file;
class NewOwner {
    constructor() {
        this.title = protractor_1.element(protractor_1.by.css("div.xd-container h2"));
        this.firstName = protractor_1.element(protractor_1.by.id("firstName"));
        this.lastName = protractor_1.element(protractor_1.by.id("lastName"));
        this.address = protractor_1.element(protractor_1.by.id("address"));
        this.city = protractor_1.element(protractor_1.by.id("city"));
        this.telePhone = protractor_1.element(protractor_1.by.id("telephone"));
        this.addOwnerButton = protractor_1.element(protractor_1.by.buttonText("Add Owner"));
        this.backBtn = protractor_1.element(protractor_1.by.cssContainingText('.btn-default', 'Back'));
        this.ownerListTbl = protractor_1.element(protractor_1.by.css('table.table-striped tbody'));
    }
    verifyTitle() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.title.getText().then((txt) => __awaiter(this, void 0, void 0, function* () {
                expect(txt).to.equal("New Owner");
            }));
        });
    }
    addNewOwnerDetails({ First_Name, Last_Name, Address, City, Telephone }) {
        return __awaiter(this, void 0, void 0, function* () {
            const status = yield this.addOwnerButton.isEnabled();
            expect(status).to.equal(false);
            log.debug("AddOwner Button Disabled");
            yield this.firstName.sendKeys(First_Name);
            expect(First_Name).to.have.lengthOf.above(2);
            log.debug("First Name length is greater than 2 ");
            yield this.lastName.sendKeys(Last_Name);
            expect(Last_Name).to.have.lengthOf.above(2);
            log.debug("Last Name length is greater than 2 ");
            yield this.address.sendKeys(Address);
            expect(Address).to.have.lengthOf.above(2);
            log.debug("Address length is greater than 2 ");
            yield this.city.sendKeys(City);
            expect(City).to.have.lengthOf.above(2);
            log.debug("City length is greater than 2");
            yield this.telePhone.sendKeys(Telephone);
            expect(Telephone).to.have.lengthOf.above(2);
            log.debug("Telephone length is greater than 2");
        });
    }
    backButton() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.backBtn.click();
            log.debug("Clicked on Back button");
        });
    }
    clickOnAddOwner() {
        return __awaiter(this, void 0, void 0, function* () {
            const status = yield this.addOwnerButton.isEnabled();
            expect(status).to.equal(true);
            log.debug("AddOwner Button is Enabled");
            yield this.addOwnerButton.click();
        });
    }
    verifyOwnersEntry() {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.wait(ec.visibilityOf(this.ownerListTbl), 20000, 'Taking too long to load');
            let ownerDetails = yield this.ownerListTbl.all(protractor_1.by.tagName("tr")).last();
            yield protractor_1.browser.actions().mouseMove(ownerDetails).perform();
            let ownerName = yield ownerDetails.getText();
            yield protractor_1.browser.wait(ec.elementToBeClickable(ownerDetails), 20000, 'Element taking too long to appear in the DOM');
            log.debug("Owner details are :- " + ownerName);
            yield expect(Properties_1.default.userData.OwnerData.ownerDetails).to.equal(ownerName);
        });
    }
}
exports.NewOwner = NewOwner;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTmV3T3duZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9QYWdlT2JqZWN0cy9OZXdPd25lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBc0U7QUFDdEUsSUFBSSxFQUFFLEdBQUcsK0JBQWtCLENBQUM7QUFDNUIsTUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFFLE1BQU0sQ0FBRSxDQUFDLE1BQU0sQ0FBQztBQUN4Qyx1REFBOEM7QUFDOUMsTUFBTSxHQUFHLEdBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUMsSUFBSSxDQUFDO0FBRXpDLE1BQWEsUUFBUTtJQUFyQjtRQUVZLFVBQUssR0FBRSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDO1FBRTlDLGNBQVMsR0FBRyxvQkFBTyxDQUFFLGVBQUUsQ0FBQyxFQUFFLENBQUUsV0FBVyxDQUFFLENBQUUsQ0FBQztRQUU1QyxhQUFRLEdBQUcsb0JBQU8sQ0FBRSxlQUFFLENBQUMsRUFBRSxDQUFFLFVBQVUsQ0FBRSxDQUFFLENBQUM7UUFFMUMsWUFBTyxHQUFHLG9CQUFPLENBQUUsZUFBRSxDQUFDLEVBQUUsQ0FBRSxTQUFTLENBQUUsQ0FBRSxDQUFDO1FBRXhDLFNBQUksR0FBRyxvQkFBTyxDQUFFLGVBQUUsQ0FBQyxFQUFFLENBQUUsTUFBTSxDQUFFLENBQUUsQ0FBQztRQUVsQyxjQUFTLEdBQUcsb0JBQU8sQ0FBRSxlQUFFLENBQUMsRUFBRSxDQUFFLFdBQVcsQ0FBRSxDQUFFLENBQUM7UUFFNUMsbUJBQWMsR0FBRyxvQkFBTyxDQUFFLGVBQUUsQ0FBQyxVQUFVLENBQUUsV0FBVyxDQUFFLENBQUUsQ0FBQztRQUV6RCxZQUFPLEdBQUUsb0JBQU8sQ0FBRSxlQUFFLENBQUMsaUJBQWlCLENBQUMsY0FBYyxFQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFFL0QsaUJBQVksR0FBRyxvQkFBTyxDQUFF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