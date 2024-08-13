import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductsComponent } from "./products/products.component";
import { NgFor } from '@angular/common';
import { CartComponent } from './cart/cart.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductsComponent,CartComponent ,NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'food-order-app';

 

}
