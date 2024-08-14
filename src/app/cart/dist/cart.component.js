"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CartComponent = void 0;
var core_1 = require("@angular/core");
var products_component_1 = require("../products/products.component");
var cart_service_1 = require("../services/cart.service");
var common_1 = require("@angular/common");
var CartComponent = /** @class */ (function () {
    function CartComponent() {
        this.cartService = core_1.inject(cart_service_1.CartService);
        this.orderSubmitted = false;
    }
    //  cartItemNumber: number = 0;
    CartComponent.prototype.onDelete = function (item) {
        this.cartService["delete"](item);
    };
    CartComponent.prototype.confirmOrder = function () {
        this.orderSubmitted = true;
    };
    CartComponent.prototype.startNewOrder = function () {
        this.orderSubmitted = false;
        this.cartService.getItems().length = 0;
    };
    CartComponent.prototype.emptyCart = function () {
        this.cartService.items.length = 0;
    };
    CartComponent = __decorate([
        core_1.Component({
            selector: 'app-cart',
            standalone: true,
            imports: [products_component_1.ProductsComponent, common_1.JsonPipe, common_1.NgIf, common_1.DecimalPipe],
            templateUrl: './cart.component.html',
            styleUrl: './cart.component.css'
        })
    ], CartComponent);
    return CartComponent;
}());
exports.CartComponent = CartComponent;
