"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ProductsComponent = void 0;
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var cart_service_1 = require("../services/cart.service");
var ProductsComponent = /** @class */ (function () {
    function ProductsComponent() {
        this.cartService = core_1.inject(cart_service_1.CartService);
        this.productsList = [
            { productId: 1, quantity: 1, productName: 'Waffle with Berries', price: 6.50, currencyCode: 'USD', category: "Waffle", image: '/assets/images/image-waffle-desktop.jpg' },
            { productId: 2, quantity: 1, productName: 'Vanilla Bean Creme Brulee', price: 7.00, currencyCode: 'USD', category: "Crème Brûlée", image: '/assets/images/image-creme-brulee-desktop.jpg' },
            { productId: 3, quantity: 1, productName: 'Macaron Mix of Five', price: 8.00, currencyCode: 'USD', category: "Macaron", image: '/assets/images/image-macaron-desktop.jpg' },
            { productId: 4, quantity: 1, productName: 'Classic Tiramisu', price: 5.50, currencyCode: 'USD', category: "Tiramisu", image: '/assets/images/image-tiramisu-desktop.jpg' },
            { productId: 5, quantity: 1, productName: 'Pistachio Baklava', price: 4.00, currencyCode: 'USD', category: "Baklava", image: '/assets/images/image-baklava-desktop.jpg' },
            { productId: 7, quantity: 1, productName: 'Lemon Maringue Pie', price: 5.00, currencyCode: 'USD', category: "Pie", image: '/assets/images/image-meringue-desktop.jpg' },
            { productId: 8, quantity: 1, productName: 'Red Velvet Cake', price: 4.50, currencyCode: 'USD', category: "Cake", image: '/assets/images/image-cake-desktop.jpg' },
            { productId: 9, quantity: 1, productName: 'Salted Caramel Brownie', price: 5.50, currencyCode: 'USD', category: "Brownie", image: '/assets/images/image-brownie-desktop.jpg' },
            { productId: 10, quantity: 1, productName: 'Vanilla Panna Cotta', price: 6.50, currencyCode: 'USD', category: "Panna Cotta", image: '/assets/images/image-panna-cotta-desktop.jpg' }
        ];
        //    Second try
        //  inc(product: any){
        //   if(product.quantity != 10){
        //    
        //   }
        // }
        //   dec(product: any){
        //     if (product.quantity != 0){
        //     product.quantity--;
        //   }
        // }
    }
    ProductsComponent.prototype.addedToCart = function (product) {
        var pName = this.cartService.getItems().find(function (p) {
            if (product.productName === p.productName) {
                return true;
            }
            else {
                return false;
            }
        });
        return pName;
    };
    ProductsComponent.prototype.incQty = function (product) {
        this.cartService.items = this.cartService.getItems().map(function (p) {
            if (product.productName === p.productName && product.quantity != 20) {
                p.count++;
                product.quantity++;
            }
            return p;
        });
    };
    ProductsComponent.prototype.decQty = function (product) {
        this.cartService.items = this.cartService.getItems().map(function (p) {
            if (product.productName === p.productName && product.quantity != 0) {
                p.count--;
                product.quantity--;
            }
            // else if (product.productName === p.productName && product.quantity == 0)  { 
            //   this.cartService.items.splice(product, 1);
            //   }
            return p;
        });
    };
    ProductsComponent.prototype.addToCart = function (product) {
        this.cartService.addToCart(product);
        // this.addedToCart = true;
    };
    ProductsComponent.prototype.confirmOrder = function () {
    };
    ProductsComponent = __decorate([
        core_1.Component({
            selector: 'app-products',
            standalone: true,
            imports: [common_1.NgFor, common_1.NgIf, common_1.CurrencyPipe,],
            templateUrl: './products.component.html',
            styleUrl: './products.component.css'
        })
    ], ProductsComponent);
    return ProductsComponent;
}());
exports.ProductsComponent = ProductsComponent;
