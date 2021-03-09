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
exports.PetTypes = void 0;
const protractor_1 = require("protractor");
const log = require('../Logs/Log4JS').file;
const expect = require('chai').expect;
class PetTypes {
    constructor() {
        this.addbtn = protractor_1.element(protractor_1.by.cssContainingText('.btn-default', ' Add '));
        this.homeBtn = protractor_1.element(protractor_1.by.cssContainingText('.btn-default', 'Home'));
        this.title = protractor_1.element(protractor_1.by.css('div .xd-container h2'));
        this.editBtn = protractor_1.element.all(protractor_1.by.cssContainingText('.btn-default', 'Edit')).first();
        this.deleteBtn = protractor_1.element.all(protractor_1.by.cssContainingText('.btn-default', 'Delete')).first();
        this.petName = protractor_1.element(protractor_1.by.css("#name"));
        this.save = protractor_1.element(protractor_1.by.cssContainingText('.btn-default', 'Save'));
        this.firstPet = protractor_1.element.all(protractor_1.by.css('tbody tr td')).first();
        this.table = protractor_1.element(protractor_1.by.css('.table.table-striped tbody'));
    }
    verifyTitle() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.title.getText().then(function (txt) {
                log.debug(txt);
                expect(txt).to.equal('Pet Types');
                log.debug("Pet Types page title is verified");
            });
        });
    }
    isAddHomeDeleteEditEnable() {
        return __awaiter(this, void 0, void 0, function* () {
            let status = yield this.addbtn.isEnabled();
            expect(status).to.equal(true);
            log.debug("Add button is enabled in Pet Types page");
            let status1 = yield this.homeBtn.isEnabled();
            expect(status1).to.equal(true);
            log.debug("Home button is Enabled in Pet Types page");
            let status2 = yield this.editBtn.isEnabled();
            expect(status2).to.equal(true);
            log.debug("Edit button is Enabled in Pet Types page");
            let status3 = yield this.deleteBtn.isEnabled();
            expect(status3).to.equal(true);
            log.debug("Delete button is Enabled in Pet Types page");
        });
    }
    clickOnAdd() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.addbtn.click();
            log.debug("Clicked on Add button in Pet Types page");
        });
    }
    enterName({ Name }) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.petName.sendKeys(Name);
            log.debug("Pet name Entered");
        });
    }
    clickOnSave() {
        return __awaiter(this, void 0, void 0, function* () {
            let status = yield this.save.isEnabled();
            expect(status).to.equal(true);
            log.debug("save button is Enabled");
            yield this.save.click();
            log.debug("Clicked on Save button is Enabled");
        });
    }
    countAndDisplay() {
        return __awaiter(this, void 0, void 0, function* () {
            let row = this.table.$$("tr");
            let count = yield row.count();
            log.debug("No of pet present-- " + count);
            for (let i = 0; i < count; i++) {
                let firstTD = row.get(i).$$("td");
                let firstdata = firstTD.get(0);
                //   browser.wait(ec.presenceOf(firstdata), 5000);
                yield firstdata.element(protractor_1.by.name('pettype_name')).getAttribute('value').then((title) => {
                    log.debug("PetType  ::" + title);
                });
            }
        });
    }
    deleteFirstPet() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.firstPet.element(protractor_1.by.name('pettype_name')).getAttribute('value').then((petName) => __awaiter(this, void 0, void 0, function* () {
                log.debug("Deleted PetType Name is ::" + petName);
                yield this.deleteBtn.click();
            }));
        });
    }
}
exports.PetTypes = PetTypes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGV0VHlwZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9QYWdlT2JqZWN0cy9QZXRUeXBlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBdUQ7QUFDdkQsTUFBTSxHQUFHLEdBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUMsSUFBSSxDQUFDO0FBQ3pDLE1BQU0sTUFBTSxHQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLENBQUM7QUFFcEMsTUFBYSxRQUFRO0lBQXJCO1FBR1ksV0FBTSxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLGlCQUFpQixDQUFDLGNBQWMsRUFBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBRTdELFlBQU8sR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxjQUFjLEVBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUU3RCxVQUFLLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQztRQUU5QyxZQUFPLEdBQUMsb0JBQU8sQ0FBQyxHQUFHLENBQUMsZUFBRSxDQUFDLGlCQUFpQixDQUFDLGNBQWMsRUFBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBRXpFLGNBQVMsR0FBQyxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxlQUFFLENBQUMsaUJBQWlCLENBQUMsY0FBYyxFQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7UUFFN0UsWUFBTyxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBRWpDLFNBQUksR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxjQUFjLEVBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUUxRCxhQUFRLEdBQUMsb0JBQU8sQ0FBQyxHQUFHLENBQUMsZUFBRSxD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