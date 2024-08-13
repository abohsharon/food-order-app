import { CurrencyPipe, NgFor, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [NgFor, NgIf, CurrencyPipe,],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {


   cartService = inject(CartService);
    
  
  productsList: any[] = [
    {productId:1, quantity: 1, productName: 'Waffle with Berries', price: 6.50, currencyCode: 'USD',  category: "Waffle", image: '/assets/images/image-waffle-desktop.jpg'  },
    {productId:2, quantity: 1, productName: 'Vanilla Bean Creme Brulee', price: 7.00, currencyCode: 'USD', category: "Crème Brûlée",  image: '/assets/images/image-creme-brulee-desktop.jpg'  },
    {productId:3, quantity: 1, productName: 'Macaron Mix of Five', price: 8.00, currencyCode: 'USD', category: "Macaron", image: '/assets/images/image-macaron-desktop.jpg'  },
    {productId:4, quantity: 1, productName: 'Classic Tiramisu', price: 5.50, currencyCode: 'USD', category: "Tiramisu", image: '/assets/images/image-tiramisu-desktop.jpg'  },
    {productId:5, quantity: 1, productName: 'Pistachio Baklava', price: 4.00, currencyCode: 'USD', category: "Baklava", image: '/assets/images/image-baklava-desktop.jpg'  },
    {productId:7, quantity: 1, productName: 'Lemon Maringue Pie', price: 5.00, currencyCode: 'USD', category: "Pie", image: '/assets/images/image-meringue-desktop.jpg'  },
    {productId:8, quantity: 1, productName: 'Red Velvet Cake', price: 4.50, currencyCode: 'USD', category: "Cake", image: '/assets/images/image-cake-desktop.jpg'  },
    {productId:9, quantity: 1, productName: 'Salted Caramel Brownie', price: 5.50, currencyCode: 'USD', category: "Brownie", image: '/assets/images/image-brownie-desktop.jpg'  },
    {productId:10,quantity: 1, productName: 'Vanilla Panna Cotta', price: 6.50, currencyCode: 'USD', category: "Panna Cotta", image: '/assets/images/image-panna-cotta-desktop.jpg'  }
   ];

   addedToCart(product:any): boolean{
       let pName: boolean = this.cartService.getItems().find((p) => {
          if(product.productName === p.productName) {
            return true
          }
          else { 
            return false
          }
       })
       return pName
   }
   
   incQty(product:any){
        this.cartService.items = this.cartService.getItems().map((p) => {
          if(product.productName === p.productName && product.quantity != 20){
            p.count++;
            product.quantity++;
          }
          return p
        })   
   }

   decQty(product:any){
    this.cartService.items = this.cartService.getItems().map((p) => {
      if(product.productName === p.productName && product.quantity != 1){
        p.count--;
        product.quantity--;
      }
      return p
    })   
}


   addToCart(product:any){
        this.cartService.addToCart(product);
        // this.addedToCart = true;
   }

   confirmOrder(){

   }


   
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
