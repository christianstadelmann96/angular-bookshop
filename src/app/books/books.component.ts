import { Component, OnInit } from '@angular/core';
import { IBook } from './interfaces/IBook';
import { BooksService } from './services/books.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})

export class BooksComponent implements OnInit {

  books?: IBook[];
  currentBook?: IBook;
  currentIndex = -1;
  title = '';

  constructor(private booksService : BooksService) {}

  isShowing : boolean = true;

  ngOnInit(): void {
    this.retrieveBooks();
  }

  refreshList(): void {
    this.currentBook = undefined;
    this.currentIndex = -1;
    this.retrieveBooks();
  }

  retrieveBooks(): void {
    this.booksService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      this.books = data;
    });
  }

  setActiveTutorial(book: IBook, index: number): void {
    this.currentBook = book;
    this.currentIndex = index;
  }
}
