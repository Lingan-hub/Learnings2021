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
const PetTypes_1 = require("../PageObjects/PetTypes");
let { setDefaultTimeout } = require('cucumber');
setDefaultTimeout(50 * 1000);
let home = new Home_1.Home();
let petTypes = new PetTypes_1.PetTypes();
cucumber_1.Given('User is on Pet Types page', () => __awaiter(void 0, void 0, void 0, function* () {
    yield home.navigateToPetTypesPage();
}));
cucumber_1.When('Verify page title', () => __awaiter(void 0, void 0, void 0, function* () {
    yield petTypes.verifyTitle();
}));
cucumber_1.When('All the buttons in the page are enabled', () => __awaiter(void 0, void 0, void 0, function* () {
    yield petTypes.isAddHomeDeleteEditEnable();
}));
cucumber_1.When('Click on add buttons', () => __awaiter(void 0, void 0, void 0, function* () {
    yield petTypes.clickOnAdd();
}));
cucumber_1.When('Enter the {string} and click on Save button', (Name) => __awaiter(void 0, void 0, void 0, function* () {
    yield petTypes.enterName({ Name });
    yield petTypes.clickOnSave();
}));
cucumber_1.Then('Count the PetTypes and User should see all the PetTypes', () => __awaiter(void 0, void 0, void 0, function* () {
    yield petTypes.countAndDisplay();
}));
cucumber_1.Then('click on first delete button page and show the deleted pet Name', () => __awaiter(void 0, void 0, void 0, function* () {
    yield petTypes.deleteFirstPet();
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWRkRGVsZXRlUGV0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vU3RlcERlZmluaXRpb24vQWRkRGVsZXRlUGV0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsdUNBQXlDO0FBQ3pDLDhDQUEyQztBQUMzQyxzREFBbUQ7QUFFbkQsSUFBSSxFQUFFLGlCQUFpQixFQUFFLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQ2hELGlCQUFpQixDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQztBQUU3QixJQUFJLElBQUksR0FBQyxJQUFJLFdBQUksRUFBRSxDQUFDO0FBQ3BCLElBQUksUUFBUSxHQUFDLElBQUksbUJBQVEsRUFBRSxDQUFDO0FBRTVCLGdCQUFLLENBQUMsMkJBQTJCLEVBQUUsR0FBUSxFQUFFO0lBRXpDLE1BQU0sSUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQUM7QUFFdEMsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVILGVBQUksQ0FBQyxtQkFBbUIsRUFBRSxHQUFRLEVBQUU7SUFFbEMsTUFBTSxRQUFRLENBQUMsV0FBVyxFQUFFLENBQUM7QUFFL0IsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVILGVBQUksQ0FBQyx5Q0FBeUMsRUFBRSxHQUFRLEVBQUU7SUFFeEQsTUFBTSxRQUFRLENBQUMseUJBQXlCLEVBQUUsQ0FBQztBQUU3QyxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFDLHNCQUFzQixFQUFFLEdBQVEsRUFBRTtJQUVyQyxNQUFNLFFBQVEsQ0FBQyxVQUFVLEVBQUUsQ0FBQztBQUU5QixDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFDLDZDQUE2QyxFQUFFLENBQU8sSUFBUSxFQUFDLEVBQUU7SUFFcEUsTUFBTSxRQUFRLENBQUMsU0FBUyxDQUFDLEVBQUMsSUFBSSxFQUFDLENBQUMsQ0FBQztJQUNqQyxNQUFNLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztBQUUvQixDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFDLHlEQUF5RCxFQUFFLEdBQVEsRUFBRTtJQUV4RSxNQUFNLFFBQVEsQ0FBQyxlQUFlLEVBQUUsQ0FBQztBQUVuQyxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFDLGlFQUFpRSxFQUFFLEdBQVEsRUFBRTtJQUVoRixNQUFNLFFBQVEsQ0FBQyxjQUFjLEVBQUUsQ0FBQztBQUVsQyxDQUFDLENBQUEsQ0FBQyxDQUFDIn0=