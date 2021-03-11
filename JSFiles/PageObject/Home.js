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
exports.Home = void 0;
const protractor_1 = require("protractor");
const expect = require('chai').expect;
const log = require('../Logs/Log4JS').file;
const Properties_1 = require("../TestData/Properties");
class Home {
    constructor() {
        this.hometab = protractor_1.element(protractor_1.by.css("a[href='/petclinic/welcome']"));
        this.hometitle = protractor_1.element(protractor_1.by.css("app-welcome h1"));
        this.specialistBtn = protractor_1.element(protractor_1.by.css("a[href='/petclinic/specialties']"));
        this.specialtiestitle = protractor_1.element(protractor_1.by.css('div .xd-container h2'));
        this.addbtn = protractor_1.element(protractor_1.by.cssContainingText('.btn-default', ' Add '));
        this.editBtn = protractor_1.element.all(protractor_1.by.cssContainingText('.btn-default', 'Edit')).first();
        this.homeBtn = protractor_1.element(protractor_1.by.cssContainingText('.btn-default', 'Home'));
        this.deleteBtn = protractor_1.element.all(protractor_1.by.cssContainingText('.btn-default', 'Delete')).first();
        this.specaltiName = protractor_1.element(protractor_1.by.css("#name"));
        this.save = protractor_1.element(protractor_1.by.cssContainingText('.btn-default', 'Save'));
        this.firstSpecialty = protractor_1.element.all(protractor_1.by.css('tbody tr td')).first();
        this.table = protractor_1.element(protractor_1.by.css('.table.table-striped tbody'));
    }
    navigateToHomepage() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.hometab.click();
        });
    }
    titleVerification() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.hometitle.getText().then((text) => __awaiter(this, void 0, void 0, function* () {
                log.debug(text);
                yield log.debug(text);
                yield expect(text).to.equal("Welcome to Petclinic");
            }));
        });
    }
    navigateToSpecialtiesPage() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.specialistBtn.click();
        });
    }
    specialtiestitleVerification() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.specialtiestitle.getText().then((text) => __awaiter(this, void 0, void 0, function* () {
                log.debug(text);
                yield log.debug(text);
                yield expect(text).to.equal("Specialties");
            }));
        });
    }
    isAddHomeDeleteEditEnable() {
        return __awaiter(this, void 0, void 0, function* () {
            let status = yield this.addbtn.isEnabled();
            expect(status).to.equal(true);
            let status1 = yield this.homeBtn.isEnabled();
            expect(status1).to.equal(true);
            let status2 = yield this.editBtn.isEnabled();
            expect(status2).to.equal(true);
            let status3 = yield this.deleteBtn.isEnabled();
            expect(status3).to.equal(true);
        });
    }
    clickOnAdd() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.addbtn.click();
        });
    }
    enterName() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.specaltiName.sendKeys(Properties_1.default.userData.Data.SpecialtiesName);
        });
    }
    clickSave() {
        return __awaiter(this, void 0, void 0, function* () {
            let status = yield this.save.isEnabled();
            expect(status).to.equal(true);
            yield this.save.click();
        });
    }
}
exports.Home = Home;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSG9tZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL1BhZ2VPYmplY3QvSG9tZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBeUM7QUFDekMsTUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFFLE1BQU0sQ0FBRSxDQUFDLE1BQU0sQ0FBQztBQUN4QyxNQUFNLEdBQUcsR0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxJQUFJLENBQUM7QUFDekMsdURBQTZDO0FBRTdDLE1BQWEsSUFBSTtJQUFqQjtRQUVjLFlBQU8sR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsOEJBQThCLENBQUMsQ0FBQyxDQUFDO1FBRTFELGNBQVMsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO1FBRTlDLGtCQUFhLEdBQUUsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLGtDQUFrQyxDQUFDLENBQUMsQ0FBQztRQUVuRSxxQkFBZ0IsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxDQUFDO1FBRXpELFdBQU0sR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxjQUFjLEVBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUU3RCxZQUFPLEdBQUMsb0JBQU8sQ0FBQyxHQUFHLENBQUMsZUFBRSxDQUFDLGlCQUFpQixDQUFDLGNBQWMsRUFBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBRXpFLFlBQU8sR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxjQUFjLEVBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUU3RCxjQUFTLEdBQUMsb0JBQU8sQ0FBQyxHQUFHLENBQUMsZUFBRSxDQUFDLGlCQUFpQixDQUFDLGNBQWMsRUFBQyxRQUFRLENBQUMs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