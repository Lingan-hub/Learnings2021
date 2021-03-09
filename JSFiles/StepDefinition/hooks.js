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
const protractor_1 = require("protractor");
const Properties_1 = require("../testdata/Properties");
cucumber_1.BeforeAll(function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.get(Properties_1.default.appUrl);
        yield protractor_1.browser.manage().window().maximize();
    });
});
cucumber_1.After(function (scenario) {
    return __awaiter(this, void 0, void 0, function* () {
        if (scenario.result.status === "failed") {
            const prtscrn = yield protractor_1.browser.takeScreenshot();
            yield this.attach(prtscrn, "image/png");
        }
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9va3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9TdGVwRGVmaW5pdGlvbi9ob29rcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHVDQUFvRDtBQUVwRCwyQ0FBcUM7QUFDckMsdURBQThDO0FBRzlDLG9CQUFTLENBQUU7O1FBRVQsTUFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ25DLE1BQU0sb0JBQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUU3QyxDQUFDO0NBQUEsQ0FBQyxDQUFDO0FBRUgsZ0JBQUssQ0FBQyxVQUFnQixRQUFROztRQUc5QixJQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxLQUFHLFFBQVEsRUFDcEM7WUFDRSxNQUFNLE9BQU8sR0FBQyxNQUFNLG9CQUFPLENBQUMsY0FBYyxFQUFFLENBQUM7WUFFOUMsTUFBTSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxXQUFXLENBQUMsQ0FBQztTQUN4QztJQUVDLENBQUM7Q0FBQSxDQUFDLENBQUMifQ==