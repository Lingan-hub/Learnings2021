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
class Home {
    constructor() {
        this.homebtn = protractor_1.element(protractor_1.by.css("a[href='/petclinic/welcome']"));
        this.title = protractor_1.element(protractor_1.by.css("app-welcome h1"));
        this.owners = protractor_1.element(protractor_1.by.css("ul.navbar-nav li.dropdown:nth-child(2)"));
        this.addnewOwner = protractor_1.element(protractor_1.by.css("a[href='/petclinic/owners/add']"));
        this.veterinar = protractor_1.element(protractor_1.by.css("ul.navbar-nav li:nth-child(3)"));
        this.allVeter = protractor_1.element(protractor_1.by.css("a[href='/petclinic/vets/add']"));
        this.petTypesBtn = protractor_1.element(protractor_1.by.css("a[href='/petclinic/pettypes']"));
    }
    navigateToHomepage() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.homebtn.click();
        });
    }
    titleVerification() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.title.getText().then((text) => __awaiter(this, void 0, void 0, function* () {
                log.debug(text);
                yield log.debug(text);
                yield expect(text).to.equal("Welcome to Petclinic");
            }));
        });
    }
    navigateToNewOwnerPage() {
        return __awaiter(this, void 0, void 0, function* () {
            let name = yield this.owners.getText();
            expect(name).to.equal("OWNERS");
            yield this.owners.click();
            yield this.addnewOwner.click();
        });
    }
    navigateToVeterinaryPage() {
        return __awaiter(this, void 0, void 0, function* () {
            let name = yield this.veterinar.getText();
            expect(name).to.equal("VETERINARIANS");
            yield this.veterinar.click();
            yield this.allVeter.click();
        });
    }
    navigateToPetTypesPage() {
        return __awaiter(this, void 0, void 0, function* () {
            let name = yield this.petTypesBtn.getText();
            expect(name).to.equal("PET TYPES");
            yield this.petTypesBtn.click();
        });
    }
}
exports.Home = Home;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSG9tZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL1BhZ2VPYmplY3RzL0hvbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsMkNBQXlDO0FBQ3pDLE1BQU0sTUFBTSxHQUFHLE9BQU8sQ0FBRSxNQUFNLENBQUUsQ0FBQyxNQUFNLENBQUM7QUFDeEMsTUFBTSxHQUFHLEdBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUMsSUFBSSxDQUFDO0FBRXpDLE1BQWEsSUFBSTtJQUFqQjtRQUVjLFlBQU8sR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsOEJBQThCLENBQUMsQ0FBQyxDQUFDO1FBRTFELFVBQUssR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO1FBRTFDLFdBQU0sR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsd0NBQXdDLENBQUMsQ0FBQyxDQUFDO1FBRW5FLGdCQUFXLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLGlDQUFpQyxDQUFDLENBQUMsQ0FBQztRQUVqRSxjQUFTLEdBQUUsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLCtCQUErQixDQUFDLENBQUMsQ0FBQztRQUU1RCxhQUFRLEdBQUUsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLCtCQUErQixDQUFDLENBQUMsQ0FBQztRQUUzRCxnQkFBVyxHQUFFLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQywrQkFBK0IsQ0FBQyxDQUFDLENBQUM7SUEyQzVFLENBQUM7SUF2Q29CLGtCQUFrQjs7WUFFN0IsTUFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQzdCLENBQUM7S0FBQTtJQUVZLGlCQUFpQjs7WUFFNUIsTUFBTSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFNLElBQUksRUFBQyxFQUFFO2dCQUMzQyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNqQixNQUFNLEdBQUcsQ0FBQyxLQUFLLENBQUUsSUFBSSxDQUFFLENBQUM7Z0JBQ3hCLE1BQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsc0JBQXNCLENBQUMsQ0FBQztZQUdyRCxDQUFDLENBQUEsQ0FBQyxDQUFBO1FBQ0osQ0FBQztLQUFBO0lBRVcsc0JBQXNCOztZQUdoQyxJQUFJLElBQUksR0FBQyxNQUFNLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDckMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDL0IsTUFBTSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQzFCLE1BQU0sSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNuQyxDQUFDO0tBQUE7SUFFWSx3QkFBd0I7O1lBRXBDLElBQUksSUFBSSxHQUFDLE1BQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUN4QyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUNuQyxNQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDN0IsTUFBTSxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2pDLENBQUM7S0FBQTtJQUVZLHNCQUFzQjs7WUFFakMsSUFBSSxJQUFJLEdBQUMsTUFBTSxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQzFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ25DLE1BQU0sSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNqQyxDQUFDO0tBQUE7Q0FDUDtBQXpERCxvQkF5REMifQ==