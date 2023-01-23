function Contact(firstName, lastName, phoneNumber){
    this.firstName = firstName;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
}

Contact.prototype.fullName = function(){
    return this.firstName + " " + this.lastName;
}

function AddressBook(){
    this.contacts = {};
    this.currentId = 0;
}

AddressBook.prototype.addContact = function(contact){
    contact.id = this.assignId();
    this.contacts[contact.id] = contact;
}

AddressBook.prototype.assignId = function(){
    this.currentId += 1;
    return this.currentId;
}

AddressBook.prototype.findContact = function(id){
    if (this.contacts[id] !== undefined){
        return this.contacts[id];
    }
    return false;
} 

AddressBook.prototype.deleteContact = function(id){
    if (this.contacts[id] === undefined){
        return false;
    }
    delete this.contacts[id];
    return true;
}

window.addEventListener("load", function(){
    document.getElementById("newAddressInput").addEventListener("submit", onSubmit)
});

function onSubmit(event){
    event.preventDefault();
    document.getElementById()

}


let testContact = new Contact("ada", "lovelace", "808-555-1111");
let testContact2 = new Contact("john", "smith", "123-321-1234");
let newAddressBook = new AddressBook();
newAddressBook.addContact(testContact);
newAddressBook.addContact(testContact2);

console.log(newAddressBook.contacts["ada"].phoneNumber);