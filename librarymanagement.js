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
    constructor (title, id, isAvailable){
    this.title = title;
    this.id = id;
    this.isAvailable = isAvailable;
    
    }
    checkout(){
        this.isAvailable = false
        console.log(`You have checked out ${this.title}\n**********************************`);
    };
    returnItem(){
        this.isAvailable = true
        console.log(`You have returned ${this.title}\n**********************************`);
    };
}  
class Book extends LibraryItem {
    constructor(author, genre,){
        super(); // gets properties and methods from LibraryItem
        this.author = author
        this.genre = genre
    }
} 
class DVD extends LibraryItem {
    constructor(director,duration) {
        super(); // get properties and methods from LibraryItem
        this.director = director;
        this.duration = duration;
    };
}
class Magazine extends LibraryItem {
    constructor(issueNumber, publisher) {
        super(); // get properties and methods from LibraryItem
        this.issueNumber = issueNumber
        this.publisher = publisher
    };
}

let theHobbit = new Book("Tolkein", "fantasy");
theHobbit.title = "The Hobbit: An Unexpected Journey";
theHobbit.id = 1234567;
theHobbit.returnItem();
console.log('');
console.log(theHobbit);
let theTerminator = new DVD("James Cameron", "Sci-Fi");
theTerminator.title = "The Terminator";
theTerminator.id = 921342
theTerminator.isAvailable = true
theTerminator.checkout();
console.log()
console.log(theTerminator);
let theAtlantic = new Magazine("May 2025", "The Atlantic");

theAtlantic.title = "The Atlantic, May 2025";
theAtlantic.id = 89374234
theAtlantic.isAvailable = true
console.log(theAtlantic);


console.log(theAtlantic.isAvailable);