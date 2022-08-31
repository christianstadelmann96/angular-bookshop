import { Injectable } from '@angular/core';
import { IBook } from '../../books/interfaces/IBook';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart : IBook[] = [];

  constructor() { }

  add(book : IBook) {
    console.log(book);
    
    this.cart.push(book);
  }

  get() {
    return this.cart;
  }

  remove(book : IBook) {
    this.cart = this.cart.filter((b) => b != book);
  }
}
