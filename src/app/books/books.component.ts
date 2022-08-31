import { Component, OnInit } from '@angular/core';
import { IBook } from './interfaces/IBook';
import { BooksService } from './services/books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})

export class BooksComponent implements OnInit {

  books : IBook[] = [];

  constructor(private booksService : BooksService) {}

  isShowing : boolean = true;

  ngOnInit(): void {
    this.books = this.booksService.getBooks();
  }
}
