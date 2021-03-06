import { makeAutoObservable } from "mobx";
import members from "../data/members";

class MemberStore {
	members = members;

	constructor() {
		makeAutoObservable(this);
	}

	addMember = newMember => {
		newMember.id = this.members[this.members.length - 1].id + 1;
		newMember.slug = `${newMember.firstName.toLowerCase()}-${newMember.lastName.toLowerCase()}`;
		newMember.currentlyBorrowedBooks = [];
		this.members = [...this.members, newMember];
	};

	setBorrow = ({ memberId, bookId }) => {
		this.members.filter(
			member =>
				member.id === +memberId &&
				(member.currentlyBorrowedBooks = [
					...member.currentlyBorrowedBooks,
					+bookId,
				])
		);
	};

	setReturn = bookId => {
		// this.members = this.members.map(member => {
		// 	member.currentlyBorrowedBooks = member.currentlyBorrowedBooks.filter(
		// 		id => id !== bookId
		// 	);
		// 	return member;
		// });

		this.members = this.members.map(member => ({
			...member,
			currentlyBorrowedBooks: member.currentlyBorrowedBooks.filter(
				id => id !== bookId
			),
		}));
	};
}

const memberStore = new MemberStore();
export default memberStore;
