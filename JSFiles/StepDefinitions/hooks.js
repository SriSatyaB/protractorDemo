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
const cucumber_1 = require("@cucumber/cucumber");
const protractor_1 = require("protractor");
cucumber_1.Before({ tags: "@calctest" }, function () {
    console.log("this is clac test begining");
});
cucumber_1.Before({ tags: " @angulartest" }, function () {
    console.log("-----------------start");
});
cucumber_1.After({ tags: "@angulartest" }, function () {
    console.log("----------------------end");
});
//taking screenshot on scenario failure
cucumber_1.After(function (scenario) {
    return __awaiter(this, void 0, void 0, function* () {
        if (scenario.result.status == cucumber_1.Status.FAILED) {
            const screenshot = yield protractor_1.browser.takeScreenshot();
            this.attach(screenshot, "image/png");
        }
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9va3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9TdGVwRGVmaW5pdGlvbnMvaG9va3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxpREFBeUQ7QUFDekQsMkNBQXFDO0FBQ3JDLGlCQUFNLENBQUMsRUFBQyxJQUFJLEVBQUUsV0FBVyxFQUFDLEVBQUU7SUFDeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO0FBQzVDLENBQUMsQ0FBQyxDQUFDO0FBRUgsaUJBQU0sQ0FBQyxFQUFDLElBQUksRUFBRSxlQUFlLEVBQUMsRUFBRTtJQUM5QixPQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUM7QUFDeEMsQ0FBQyxDQUFDLENBQUM7QUFFSCxnQkFBSyxDQUFDLEVBQUMsSUFBSSxFQUFFLGNBQWMsRUFBQyxFQUFFO0lBQzVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsMkJBQTJCLENBQUMsQ0FBQztBQUMzQyxDQUFDLENBQUMsQ0FBQztBQUVILHVDQUF1QztBQUV2QyxnQkFBSyxDQUFFLFVBQWdCLFFBQVE7O1FBQzNCLElBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNLElBQUksaUJBQU0sQ0FBQyxNQUFNLEVBQUM7WUFDdkMsTUFBTSxVQUFVLEdBQUcsTUFBTSxvQkFBTyxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ2xELElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQ3ZDO0lBRUwsQ0FBQztDQUFBLENBQUMsQ0FBQyJ9