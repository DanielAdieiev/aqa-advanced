import Book from "./Book.js"
import EBook from "./eBook.js"
// Task 1 + Task 3
let book1;
try {
    const book1 = new Book('Dune', 'Frank Herbert', 1965);
    book1.printInfo();
} catch (error) {
    console.error(`Error creating book1: ${error.message}`);
};

let book2;
try {
    book2 = new Book('A Tale of Two Cities', 'Charles Dickens', 1859);
    book2.printInfo();
} catch (error) {
    console.error(`Error creating book2: ${error.message}`);
};

let book3;
try {
    book3 = new Book('The Hobbit', 'J.R.R. Tolkien', 1937);
    book3.printInfo();
} catch (error) {
    console.error(`Error creating book3: ${error.message}`);
};

let book4;
try {
    book4 = new Book('The Alchemist', 'Paulo Coelho', 1988);
    book4.printInfo();
} catch (error) {
    console.error(`Error creating book4: ${error.message}`);
}
// Task 2 + Task 3
let eBook1;
try {
    eBook1 = new EBook('The Little Prince', 'Antoine de Saint-Exupéry', 1943, 'CSV');
    eBook1.printInfo();
} catch (error) {
    console.error(`Error creating eBook1: ${error.message}`);
}

// Task 4 
const books = [book1, book2, book3, eBook1].filter(book => book !== undefined);
let oldestBook = Book.theOldestBook(books)
console.log(`The oldest book is: ${oldestBook.title} by ${oldestBook.author} published in ${oldestBook.year}`);
// Task 5
const eBook2 = EBook.booktoEBook(book4, "PDF");
eBook2.printInfo();
