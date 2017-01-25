"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Angular2-Ferret / Tour of Heroes / User Input';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'app-component',
        template: "\n    <h1>{{title}}</h1>\n    <p>\n      <click-me></click-me>\n    </p>\n    <p>\n      <click-me2></click-me2>\n    </p>\n    \n    <h4>Give me some keys!</h4>\n    <div><key-up1></key-up1></div>\n\n    <h4>keyup loop-back component</h4>\n    <div><loop-back></loop-back></div>\n    <br><br>\n\n    <h4>Give me some more keys!</h4>\n    <div><key-up2></key-up2></div>\n\n    <h4>Type away! Press [enter] when done.</h4>\n    <div><key-up3></key-up3></div>\n\n    <h4>Type away! Press [enter] or click elsewhere when done.</h4>\n    <div><key-up4></key-up4></div>\n\n    <h4>Little Tour of Heroes</h4>\n    <p><i>Add a new hero</i></p>\n    <div><little-tour></little-tour></div>\n  "
    }),
    __metadata("design:paramtypes", [])
], AppComponent);
exports.AppComponent = AppComponent;

//# sourceMappingURL=app.component.js.map
