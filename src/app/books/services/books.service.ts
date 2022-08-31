import { Injectable } from '@angular/core';

@Injectable()
export class BooksService {

  constructor() { }

  getBooks() {
    return [
      {
        name : "Clean Code",
        author : "Robert C Martin",
        image : "https://assets.thalia.media/img/artikel/60ffb9f2a026190cb399dd76eb256e316a2b6ea4-00-00.jpeg",
        price : 700
      },
      {
        name : "The pragmatic programmer",
        author : "David Thomas",
        image : "https://exlibris.azureedge.net/covers/9780/1359/5705/9/9780135957059xl.webp",
        price : 750
      }
    ]
  }
}
