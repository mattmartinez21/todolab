class AddressBook {
  constructor() {
    this.contacts = [];
  }
  add(name, email, phone, relation) {
    let newContact = new Contact(name, email, phone, relation);
    this.contacts.push(newContact);
  }

  delete(name) {
    const index = this.contacts.findIndex(contact => {
      return contact.name === name;
    });
    if (index >= 0) {
      this.contacts.splice(index, 1);
    }
  }
  display() {
    for (let i = 0; i < this.contacts.length; i++) {
        const newItem = document.createElement('li');
        newItem.innerHTML = `
        <p>Name: ${this.contacts[i].name}</p>
        <p>Email: ${this.contacts[i].email}</p>
        <p>Phone: ${this.contacts[i].phone}</p>
        <p>Family: ${this.contacts[i].family}</p>
        <button index=${i} class="delete_btn">DELETE</button>
        `; document.querySelector("#contactList").append(newItem);
    }
}

class Contact {
  constructor(name, email, phone, relation) {
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.relation = relation;
  }
}

const addressBook = new AddressBook();
addressBook.add("Matt", "mattmartinez21@gmail.com", "734-837-7002", "Self");
addressBook.add("Bob", "remart99@hotmail.com", "734-558-0099", "Dad");
addressBook.print();
addressBook.delete("Matt");
addressBook.print();
