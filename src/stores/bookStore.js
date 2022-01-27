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

}

const bookStore = new BookStore();
export default bookStore;
