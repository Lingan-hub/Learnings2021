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
const protractor_1 = require("protractor");
const Home_1 = require("../PageObject/Home");
const mocha_1 = require("mocha");
const Properties_1 = require("../TestData/Properties");
const log = require('../Logs/Log4JS').file;
let home = new Home_1.Home();
mocha_1.describe('Testing Petclic Application', function () {
    this.beforeAll('Navigate to the Petclinic URL', () => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.get(Properties_1.default.appUrl);
    }));
    mocha_1.it("Click on Home button and verify Homepage title ", () => __awaiter(this, void 0, void 0, function* () {
        yield home.navigateToHomepage();
        log.debug("clicked on Home button");
        yield home.titleVerification();
        log.debug("Welcome to Petclinic");
    }));
    mocha_1.it("Click on Specialist button and verify Specialist page title", () => __awaiter(this, void 0, void 0, function* () {
        yield home.navigateToSpecialtiesPage();
        log.debug("Clicked on Specialist button");
        yield home.specialtiestitleVerification();
        log.debug("Specialties");
    }));
    mocha_1.it("Verify all the buttons enabled", () => __awaiter(this, void 0, void 0, function* () {
        yield home.isAddHomeDeleteEditEnable();
        log.debug("All buttons are enabled");
    }));
    mocha_1.it("Click on Add button", () => __awaiter(this, void 0, void 0, function* () {
        yield home.clickOnAdd();
        log.debug("clicked on Add  button");
    }));
    mocha_1.it("Enter Specialist name", () => __awaiter(this, void 0, void 0, function* () {
        yield home.enterName();
        log.debug("Name entered");
    }));
    mocha_1.it("Verify is save button enabled or not", () => __awaiter(this, void 0, void 0, function* () {
        yield home.clickSave();
        log.debug("Clicked on Save button");
    }));
    afterEach(() => __awaiter(this, void 0, void 0, function* () {
        const png = yield protractor_1.browser.takeScreenshot();
        yield allure.createAttachment('Screenshot', new Buffer(png, 'base64'), 'image/png');
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL1Rlc3RTcGVjaWFsdGllcy9UZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsMkNBQXFDO0FBQ3JDLDZDQUF3QztBQUN4QyxpQ0FBcUM7QUFDckMsdURBQThDO0FBRTlDLE1BQU0sR0FBRyxHQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLElBQUksQ0FBQztBQUV6QyxJQUFJLElBQUksR0FBQyxJQUFJLFdBQUksRUFBRSxDQUFDO0FBRXBCLGdCQUFRLENBQUMsNkJBQTZCLEVBQUM7SUFFbkMsSUFBSSxDQUFDLFNBQVMsQ0FBQywrQkFBK0IsRUFBRSxHQUFPLEVBQUU7UUFFekQsTUFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBRW5DLENBQUMsQ0FBQSxDQUFDLENBQUM7SUFFSCxVQUFFLENBQUMsaURBQWlELEVBQUMsR0FBTyxFQUFFO1FBQzFELE1BQU0sSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDaEMsR0FBRyxDQUFDLEtBQUssQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1FBQ3BDLE1BQU0sSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDL0IsR0FBRyxDQUFDLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0lBQ3RDLENBQUMsQ0FBQSxDQUFDLENBQUM7SUFFSCxVQUFFLENBQUMsNkRBQTZELEVBQUMsR0FBTyxFQUFFO1FBRXRFLE1BQU0sSUFBSSxDQUFDLHlCQUF5QixFQUFFLENBQUM7UUFDdkMsR0FBRyxDQUFDLEtBQUssQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO1FBQzFDLE1BQU0sSUFBSSxDQUFDLDRCQUE0QixFQUFFLENBQUM7UUFDMUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUU3QixDQUFDLENBQUEsQ0FBQyxDQUFDO0lBRUgsVUFBRSxDQUFDLGdDQUFnQyxFQUFDLEdBQU8sRUFBRTtRQUV6QyxNQUFNLElBQUksQ0FBQyx5QkFBeUIsRUFBRSxDQUFDO1FBQ3ZDLEdBQUcsQ0FBQyxLQUFLLENBQUMseUJBQXlCLENBQUMsQ0FBQztJQUV6QyxDQUFDLENBQUEsQ0FBQyxDQUFDO0lBRUgsVUFBRSxDQUFDLHFCQUFxQixFQUFDLEdBQU8sRUFBRTtRQUU5QixNQUFNLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUN4QixHQUFHLENBQUMsS0FBSyxDQUFDLHdCQUF3QixDQUFDLENBQUM7SUFFeEMsQ0FBQyxDQUFBLENBQUMsQ0FBQztJQUVILFVBQUUsQ0FBQyx1QkFBdUIsRUFBQyxHQUFPLEVBQUU7UUFFaEMsTUFBTSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDdkIsR0FBRyxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUU5QixDQUFDLENBQUEsQ0FBQyxDQUFDO0lBRUgsVUFBRSxDQUFDLHNDQUFzQyxFQUFDLEdBQU8sRUFBRTtRQUUvQyxNQUFNLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUN2QixHQUFHLENBQUMsS0FBSyxDQUFDLHdCQUF3QixDQUFDLENBQUM7SUFFeEMsQ0FBQyxDQUFBLENBQUMsQ0FBQztJQUNILFNBQVMsQ0FBQyxHQUFRLEVBQUU7UUFDaEIsTUFBTSxHQUFHLEdBQUcsTUFBTSxvQkFBTyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQzNDLE1BQU0sTUFBTSxDQUFDLGdCQUFnQixDQUFDLFlBQVksRUFBRSxJQUFJLE1BQU0sQ0FBQyxHQUFHLEVBQUUsUUFBUSxDQUFDLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDeEYsQ0FBQyxDQUFBLENBQUMsQ0FBQTtBQUVOLENBQUMsQ0FBQyxDQUFDIn0=