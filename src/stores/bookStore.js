import { makeAutoObservable, set } from "mobx";
import books from "../data/books";

class BookStore {
	books = books;
	query = "";
	filterQuery = "";
	genres = this.books.map(book => book.genre).flat();
	gen = [...new Set(this.genres)];

	constructor() {
		makeAutoObservable(this);
	}

	setQuery = e => {
		this.query = String(e);
	};

	setFilterQuery = e => {
		this.filterQuery = String(e);
	};

	addBook = newBook => {
		newBook.id = this.books[this.books.length - 1].id + 1;
		newBook.slug = newBook.title.toLowerCase().replace(/ /g, "-");
		newBook.borrowedBy = [];
		newBook.available = true;
		newBook.genre = newBook.genre.split(", ");
		this.gen = [...this.gen, newBook.genre].flat();
		this.gen = [...new Set(this.gen)];
		this.books = [...this.books, newBook];
	};

	setBorrow = ({ memberId, bookId }) => {
		this.books.filter(
			book =>
				book.id === +bookId &&
				((book.borrowedBy = [...book.borrowedBy, +memberId]),
				(book.available = false))
		);
	};

	setReturn = bookId => {
		this.books.filter(book => book.id === bookId && (book.available = true));
	};
}

const bookStore = new BookStore();
export default bookStore;
