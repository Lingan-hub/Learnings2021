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
exports.config = {
    directConnect: true,
    framework: 'mocha',
    SELENIUM_PROMISE_MANAGER: false,
    capabilities: {
        browserName: 'firefox',
    },
    suites: {
        mochaTest: '../JSFiles/TestSpecialties/*.js'
    },
    onPrepare: function () {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.driver.manage().window().maximize();
        });
    },
    mochaOpts: {
        reporter: 'mocha-allure-reporter',
        timeout: 100000
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vQ29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsMkNBQXFDO0FBQ3JDLE9BQU8sQ0FBQyxNQUFNLEdBQUc7SUFFYixhQUFhLEVBQUUsSUFBSTtJQUNuQixTQUFTLEVBQUUsT0FBTztJQUVsQix3QkFBd0IsRUFBRSxLQUFLO0lBQy9CLFlBQVksRUFDWjtRQUNJLFdBQVcsRUFBRSxTQUFTO0tBRXpCO0lBR0QsTUFBTSxFQUFFO1FBQ0osU0FBUyxFQUFFLGlDQUFpQztLQUMvQztJQUNELFNBQVMsRUFBRTs7WUFDUCxNQUFNLG9CQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3RELENBQUM7S0FBQTtJQUVELFNBQVMsRUFBRTtRQUNQLFFBQVEsRUFBRSx1QkFBdUI7UUFDakMsT0FBTyxFQUFFLE1BQU07S0FDbEI7Q0FDSixDQUFBIn0=