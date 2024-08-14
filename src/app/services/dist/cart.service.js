"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CartService = void 0;
var core_1 = require("@angular/core");
var CartService = /** @class */ (function () {
    //  JSON.parse(localStorage.getItem('cartItems') || '[]');
    function CartService() {
        this.items = [];
    }
    CartService.prototype.addToCart = function (product) {
        this.items.push(__assign(__assign({}, product), { count: 1 }));
    };
    CartService.prototype.getItems = function () {
        return this.items;
    };
    // inc(product:any){
    //   this.items = this.items.map((i) =>{
    //     if(i.productName === product.productName){
    //       i.count++;
    //     }
    //     return i
    //   })
    // }
    CartService.prototype["delete"] = function (item) {
        // this.items = this.items.filter((i) => i.id !== item.id);
        this.items.splice(this.items.indexOf(item), 1);
    };
    CartService.prototype.getTotal = function () {
        return this.items.reduce(function (a, item) {
            return (item.price * item.count) + a;
        }, 0);
    };
    // totalCount(){  
    //      return array_sum($this->session->data['items']);
    // }
    CartService.prototype.totalCount = function () {
        var totalC = 0;
        this.items.forEach(function (item) {
            totalC = totalC + item.count;
        });
        return totalC;
    };
    CartService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], CartService);
    return CartService;
}());
exports.CartService = CartService;
