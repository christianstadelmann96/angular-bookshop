import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { IBook } from '../interfaces/IBook';

@Injectable()
export class BooksService {

  private dbPath = '/books';
  booksRef: AngularFirestoreCollection<IBook>;

  constructor(private db: AngularFirestore) {
    this.booksRef = db.collection(this.dbPath);
  }

  getAll(): AngularFirestoreCollection<IBook> {
    return this.booksRef;
  }
}
