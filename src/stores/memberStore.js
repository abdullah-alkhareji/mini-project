import { makeAutoObservable } from "mobx";
import members from "../data/members";

class MemberStore {
  members = members;

  constructor() {
    makeAutoObservable(this);
  }

  addMember = (newMember) => {
    newMember.id = this.members[this.members.length - 1].id + 1;
    newMember.slug = `${newMember.firstName.toLowerCase()}-${newMember.lastName.toLowerCase()}`;
    newMember.currentlyBorrowedBooks = [];
    this.members = [...this.members, newMember];
  };

  setBorrow = ({ memberId, bookId }) => {
    this.members.filter(
      (member) =>
        member.id === +memberId &&
        (member.currentlyBorrowedBooks = [
          ...member.currentlyBorrowedBooks,
          +bookId,
        ])
    );
  };

  setReturn = (bookId) => {
    this.members.find((member) =>
      member.currentlyBorrowedBooks.includes(bookId)
    ).currentlyBorrowedBooks = this.members
      .find((member) => member.currentlyBorrowedBooks.includes(bookId))
      .currentlyBorrowedBooks.splice(
        // currentlyBorrowedBooks.indexOf(bookId, 1)
      );
  };
}

const memberStore = new MemberStore();
export default memberStore;
