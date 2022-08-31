import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart/services/cart.service';
import { IBook } from '../interfaces/IBook';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  @Input() book: IBook = {} as IBook;
  isInCart : boolean = false;

  constructor(private cartService : CartService) { }

  ngOnInit(): void {
  }

  addToCart() {
    this.cartService.add(this.book);
    this.isInCart = true;
  }

  removeFromCart() {
    this.cartService.remove(this.book);
    this.isInCart = false;
  }
}
