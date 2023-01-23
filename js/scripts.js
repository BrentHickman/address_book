let myAddressBook = new AddressBook();

function Contact(addressName, addressAddress, addressPhone){
    this.addressName = addressName;
    this.addressAddress = addressAddress;
    this.addressPhone = addressPhone
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

function addNewLine(passedInId){
    //creates a new li element 
    //finds the ul in the html 
    //appends the li element onto the ul
    //populates the li element with the new address we have created
    let newLine = document.createElement('li');
    let newLink = document.createElement('a');
    newLine.setAttribute('id', passedInId);
    newLink.setAttribute('id', "link" + passedInId);
    newLink.setAttribute('href', "javascript:showMore(" + passedInId + ")");
    //newLink.setAttribute('href', `javascript:showMore(${passedInId})`);


    newLink.innerText =  "Name: " + myAddressBook.findContact(passedInId).addressName;
    newLine.append(newLink);
    document.getElementById("ulSpace").append(newLine);
    let newUl = document.createElement('ul');
    newUl.setAttribute('id', "ul" + passedInId + "1");
    newLine.append(newUl);
    let newUl2 = document.createElement('ul');
    newUl2.setAttribute('id', "ul" + passedInId + "2");
    newLine.append(newUl2);
    let hiddenTextAddress = document.createElement('li');
    hiddenTextAddress = "Address: " + myAddressBook.findContact(passedInId).addressAddress;
    document.getElementById("ul" + passedInId + "1").append(hiddenTextAddress);
    let hiddenTextNumber = document.createElement('li');
    hiddenTextNumber = "Number: " + myAddressBook.findContact(passedInId).addressPhone;
    document.getElementById("ul" + passedInId + "2").append(hiddenTextNumber);
    document.getElementById("ul" + passedInId + "1").setAttribute('class', 'hidden');
    document.getElementById("ul" + passedInId + "2").setAttribute('class', 'hidden');
}

function showMore(elementToToggle){
    if (document.getElementById("ul" + elementToToggle + "1").getAttribute("class") === "hidden"){
        document.getElementById("ul" + elementToToggle + "1").setAttribute("class", "notHidden");
        document.getElementById("ul" + elementToToggle + "2").setAttribute("class", "notHidden"); 
    } else {
        document.getElementById("ul" + elementToToggle + "1").setAttribute("class", "hidden");
        document.getElementById("ul" + elementToToggle + "2").setAttribute("class", "hidden"); 
    }
    //find the element we want
    //check if it is hidden
    //if it is hidden, change the class to 'notHidden'
    //if it is notHidden, change the class to 'hidden'
    //do stuff
    console.log(elementToToggle);

}

window.addEventListener("load", function(){
    document.getElementById("newAddressInput").addEventListener("submit", onSubmit);
});

function onSubmit(event){
    event.preventDefault();

    let tempContact = new Contact(
        document.getElementById("placeNameId").value, 
        document.getElementById("placeAddressId").value, 
        document.getElementById("placePhoneId").value);

    myAddressBook.addContact(tempContact);
    addNewLine(myAddressBook.currentId);
}




// let testContact = new Contact("ada", "lovelace", "808-555-1111");
// let testContact2 = new Contact("john", "smith", "123-321-1234");
// let newAddressBook = new AddressBook();
// newAddressBook.addContact(testContact);
// newAddressBook.addContact(testContact2);

// console.log(newAddressBook.contacts["ada"].phoneNumber);