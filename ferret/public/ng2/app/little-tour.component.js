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
var hero_1 = require("../shared/hero");
var LittleTourComponent = (function () {
    function LittleTourComponent() {
        this.heroes = [
            new hero_1.Hero(1, 'Windstorm'),
            new hero_1.Hero(2, 'Bombasto'),
            new hero_1.Hero(3, 'Magneta'),
            new hero_1.Hero(4, 'Tornado')
        ];
    }
    LittleTourComponent.prototype.addHero = function (newHero) {
        if (newHero) {
            this.heroes.push(new hero_1.Hero(this.heroes.length + 1, newHero));
            console.log('Now are ' + this.heroes.length + ' heroes registered');
        }
    };
    return LittleTourComponent;
}());
LittleTourComponent = __decorate([
    core_1.Component({
        selector: 'little-tour',
        template: "\n    <input #newHero\n      (keyup.enter)=\"addHero(newHero.value)\"\n      (blur)=\"addHero(newHero.value); newHero.value='' \">\n\n    <button (click)=addHero(newHero.value)>Add</button>\n\n    <ul><li *ngFor=\"let hero of heroes\">{{hero.name}}</li></ul>\n  "
    }),
    __metadata("design:paramtypes", [])
], LittleTourComponent);
exports.LittleTourComponent = LittleTourComponent;

//# sourceMappingURL=little-tour.component.js.map
