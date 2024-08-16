import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
   items: any[] = []; 
  //  JSON.parse(localStorage.getItem('cartItems') || '[]');


  constructor() { }

  addToCart(product: any){
        this.items.push({...product, count: 1}); 
  } 

  getItems(){
    return this.items;
  }


  // inc(product:any){
  //   this.items = this.items.map((i) =>{
  //     if(i.productName === product.productName){
  //       i.count++;
  //     }
  //     return i
  //   })
  // }

  delete(item: any){ 
    // this.items = this.items.filter((i) => i.id !== item.id);
    this.items.splice(this.items.indexOf(item), 1);
  }

  getTotal(){
     return this.items.reduce((a,item) =>{
      return (item.price*item.count)+a
     },0)
  }


  // totalCount(){  
  //      return array_sum($this->session->data['items']);
  // }
totalCount(){
  let totalC = 0;
  this.items.forEach(item => {
    totalC = totalC + item.count
  })
  return totalC
}

// confirmationMessage(){
//   // this.items.forEach(item => {
//   //  return item.productName
//   // })
//   const result = this.items.toString();
//   return result;
// }


//        first try

  // updateQty(id: number){
  //     let item = this.items.find((i) => i.id === id);
  //     if (item) {
  //       item.quantity++;
  //     }
    //   this.items.forEach((item) => {
    //     item.quantity++;
    //  });

  // }

//   removeQty(id: number){
//     let item = this.items.find((i) => i.id === id);
//     if (item) {
//       item.quantity--;
//     }
//     this.items.forEach((item) => {
//       item.quantity--;
//    });
//   }

//   getTotal() {
//     return this.items.reduce((acc, item) => {
//       return acc + item.price * item.quantity;
//     }, 0);
     
//   }
 }
