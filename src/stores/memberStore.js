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
}

const memberStore = new MemberStore();
export default memberStore;
