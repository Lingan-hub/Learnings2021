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
exports.NewVeterinary = void 0;
const protractor_1 = require("protractor");
const Properties_1 = require("../testdata/Properties");
const log = require('../Logs/Log4JS').file;
const expect = require('chai').expect;
var ec = protractor_1.ExpectedConditions;
class NewVeterinary {
    constructor() {
        this.firstname = protractor_1.element(protractor_1.by.css("#firstName"));
        this.lastname = protractor_1.element(protractor_1.by.css("#lastName"));
        this.typeDropdown = protractor_1.element(protractor_1.by.css("#specialties"));
        this.selectType = protractor_1.element(protractor_1.by.css("#specialties option:nth-child(2)"));
        this.save = protractor_1.element(protractor_1.by.css("button[type='submit']"));
        this.veterinariansTbl = protractor_1.element(protractor_1.by.css("table.table-striped"));
    }
    enterFN_LN({ First_Name, Last_Name }) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.firstname.sendKeys(First_Name);
            expect(First_Name).to.have.lengthOf.above(2);
            log.debug("FirstName length is greater than 2");
            yield this.lastname.sendKeys(Last_Name);
            expect(Last_Name).to.have.lengthOf.above(2);
            log.debug("LastName length is greater than 2");
        });
    }
    selectSpecialist() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.typeDropdown.click();
            log.debug("clicked on TypeDropdown");
            yield this.selectType.click();
            log.debug("Selected a Specialist type");
        });
    }
    saveVet() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.save.click();
            log.debug("Clicked on save button");
        });
    }
    verifyNewVetDetails() {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.wait(ec.visibilityOf(this.veterinariansTbl), 20000, 'Taking too long to load');
            var veternariDetails = yield this.veterinariansTbl.all(protractor_1.by.tagName("tr")).last();
            yield protractor_1.browser.actions().mouseMove(veternariDetails).perform();
            let vetName = yield veternariDetails.getText();
            let res = yield vetName.substr(0, 13);
            yield log.debug("Vet details are :- " + res);
            yield expect(Properties_1.default.userData.VeterinariData.vetDetails).to.equal(res);
        });
    }
}
exports.NewVeterinary = NewVeterinary;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTmV3VmV0ZXJpbmFyeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL1BhZ2VPYmplY3RzL05ld1ZldGVyaW5hcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsMkNBQW9FO0FBQ3BFLHVEQUE4QztBQUM5QyxNQUFNLEdBQUcsR0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxJQUFJLENBQUM7QUFDekMsTUFBTSxNQUFNLEdBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQztBQUNwQyxJQUFJLEVBQUUsR0FBQywrQkFBa0IsQ0FBQztBQUcxQixNQUFhLGFBQWE7SUFBMUI7UUFHWSxjQUFTLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7UUFFeEMsYUFBUSxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1FBRXRDLGlCQUFZLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7UUFFN0MsZUFBVSxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDLENBQUM7UUFFL0QsU0FBSSxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLENBQUM7UUFFOUMscUJBQWdCLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQztJQStDcEUsQ0FBQztJQTVDZ0IsVUFBVSxDQUFFLEVBQUMsVUFBVSxFQUFFLFNBQVMsRUFBcUM7O1lBR2hGLE1BQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDMUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM3QyxHQUFHLENBQUMsS0FBSyxDQUFDLG9DQUFvQyxDQUFDLENBQUM7WUFHaEQsTUFBTSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUN4QyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzVDLEdBQUcsQ0FBQyxLQUFLLENBQUMsbUNBQW1DLENBQUMsQ0FBQztRQUVuRCxDQUFDO0tBQUE7SUFFWSxnQkFBZ0I7O1lBRXpCLE1BQU0sSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUNoQyxHQUFHLENBQUMsS0FBSyxDQUFDLHlCQUF5QixDQUFDLENBQUE7WUFDcEMsTUFBTSxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQzlCLEdBQUcsQ0FBQyxLQUFLLENBQUMsNEJBQTRCLENBQUMsQ0FBQztRQUc1QyxDQUFDO0tBQUE7SUFFWSxPQUFPOztZQUVoQixNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDeEIsR0FBRyxDQUFDLEtBQUssQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1FBQ3hDLENBQUM7S0FBQTtJQUVZLG1CQUFtQjs7WUFFNUIsTUFBTSxvQkFBTyxDQUFDLElBQUksQ0FBRSxFQUFFLENBQUMsWUFBWSxDQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBRSxFQUFFLEtBQUssRUFBRSx5QkFBeUIsQ0FBRSxDQUFDO1lBQ2pHLElBQUksZ0JBQWdCLEdBQUMsTUFBTSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFFLGVBQUUsQ0FBQyxPQUFPLENBQUUsSUFBSSxDQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNqRixNQUFNLG9CQUFPLENBQUMsT0FBTyxFQUFFLENBQUMsU0FBUyxDQUFFLGdCQUFnQixDQUFFLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDaEUsSUFBSSxPQUFPLEdBQUcsTUFBTSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUMvQyxJQUFJLEdBQUcsR0FBRSxNQUFNLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ3BDLE1BQU0sR0FBRyxDQUFDLEtBQUssQ0FBRSxxQkFBcUIsR0FBRyxHQUFHLENBQUUsQ0FBQztZQUMvQyxNQUFNLE1BQU0sQ0FBRSxvQkFBUSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFFLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBRSxHQUFHLENBQUUsQ0FBQztRQUdoRixDQUFDO0tBQUE7Q0FHSjtBQTVERCxzQ0E0REMifQ==