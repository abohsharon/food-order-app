import { Component, inject } from '@angular/core';
import { ProductsComponent } from '../products/products.component';
import { CartService } from '../services/cart.service';
import { pipe } from 'rxjs';
import { DecimalPipe, JsonPipe, NgIf } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [ProductsComponent, JsonPipe, NgIf, DecimalPipe],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
    
  cartService = inject(CartService);

//  cartItemNumber: number = 0;

 

  onDelete(item: any){
    this.cartService.delete(item)
  }
orderSubmitted: boolean = false;


confirmOrder(){
 this.orderSubmitted = true;
}

startNewOrder(){
  this.orderSubmitted = false;
  this.cartService.getItems().length = 0;
}
emptyCart(){
  this.cartService.items.length = 0;
}
 

}
