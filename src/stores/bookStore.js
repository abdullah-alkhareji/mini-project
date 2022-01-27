import { makeAutoObservable } from "mobx";
import books from "../data/books";

class BookStore {
	books = books;
	query = "";

	constructor() {
		makeAutoObservable(this);
	}

	setQuery = e => {
		this.query = String(e);
	};

	addBook = newBook => {
		newBook.id = this.books[this.books.length - 1].id + 1;
		newBook.slug = newBook.title.toLowerCase().replace(/ /g, "-");
		newBook.borrowedBy = [];
		newBook.available = true;
		newBook.genre = newBook.genre.split(", ");
		this.books = [...this.books, newBook];
	};
}

const bookStore = new BookStore();
export default bookStore;
