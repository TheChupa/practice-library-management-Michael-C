/*
Instructions
Scenario:
You are tasked with designing a library management system. The library
lends out various types of items such as books, DVDs, and magazines. While
all items share some common properties (e.g., title, id, isAvailable), each
type has unique properties and behaviors. For example:
● Books have an author and a genre.
● DVDs have a director and duration.
● Magazines have an issueNumber and publisher.
Tasks
1. Step 1: Create a Base Class
○ Define a class LibraryItem to represent shared properties
(title, id, isAvailable) and methods (e.g., checkOut() and
returnItem()).
2. Step 2: Extend the Base Class
○ Create child classes Book, DVD, and Magazine that inherit from
LibraryItem.
○ Add unique properties and methods for each child class:
■ Book: Add properties like author and genre.
■ DVD: Add properties like director and duration.
■ Magazine: Add properties like issueNumber and publisher.
3. Step 3: Instantiate Objects
○ Create instances of each class and test the shared and unique
methods.
1
4. Step 4: Test the Inheritance
○ Use inherited methods like checkOut() and returnItem() to
manage the availability of items.
○ Test accessing and displaying unique properties of each child
class.
*/
class LibraryItem {
    constructor (title, id,){
    this.title = title;
    this.id = id; // numbers only
    this.isAvailable = true; // sets all new items to the library as available
    
    }
    checkout(){
        if (this.isAvailable) {
        this.isAvailable = false;
        console.log(`**********************************\nYou have checked out ${this.title}\n**********************************`);
        } else {
        console.log(`**********************************\n${this.title} is checked out!\n**********************************`);
        }
    }
    returnItem() {
        if (!this.isAvailable) { //if checked out, changes isAvailable to true
        this.isAvailable = true;
        console.log(`**********************************\nYou have returned ${this.title}\n**********************************`);
    } else {
        console.log(`**********************************\n${this.title} was not checked out!\n**********************************`);
        }
    }
}  


class Book extends LibraryItem {
    constructor(title, id, author, genre){
        super(title, id); // gets properties and methods from LibraryItem
        this.author = author
        this.genre = genre
    }
    getDetails() {
        return `Book: ${this.title} by ${this.author}, Genre: ${this.genre}`;
    }
} 
class DVD extends LibraryItem {
    constructor(title, id, director, duration) {
        super(title, id,); // get properties and methods from LibraryItem
        this.director = director;
        this.duration = duration; //duration in minutes
    }
    getDetails() {
        return `This is a DVD of ${this.title} directed by ${this.director} and is ${this.duration} long.`;
    }
}
class Magazine extends LibraryItem {
    constructor(title, id, issueNumber, publisher) {
        super(title, id,); // get properties and methods from LibraryItem
        this.issueNumber = issueNumber
        this.publisher = publisher
    }
    getDetails(){
        return `${this.title} is a publication produced by ${this.publisher} in ${this.issueNumber}.`;
    }
}

let theHobbit = new Book("The Hobbit: An Unexpected Journey", 1234567, "Tolkein", "fantasy");
theHobbit.returnItem();
console.log(theHobbit);
let theTerminator = new DVD("The Terminator", 921342, "James Cameron", "107 minutes");
theTerminator.checkout();
console.log(theTerminator);
let theAtlantic = new Magazine("The Atlantic", 89374234, "May 2025", "The Atlantic");
console.log(theAtlantic);

theAtlantic.checkout(); //You have checked out The Atlantic
theAtlantic.checkout(); // The Atlantic is checked out!
theAtlantic.returnItem(); // You have returned The Atlantic
theAtlantic.returnItem(); // The Atlantic is not checked out
console.log(theAtlantic.getDetails());
console.log(theHobbit.getDetails());
console.log(theTerminator.getDetails());