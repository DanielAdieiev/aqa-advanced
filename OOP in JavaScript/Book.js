class Book {
    constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year=year;
    };

    get title(){
        return this._title;
    };
    set title(title){
        if(typeof title !== 'string'){
            throw new Error('Title must be a string');
        }
        this._title=title;
    };

    get author(){
        return this._author;
    };
    set author(author){
        if(typeof author !== 'string'){
            throw new Error('Author must be a string');
        }
        this._author=author;
    };

    get year(){
        return this._year;
    };
    set year(year){
        if(typeof year !== 'number'){
            throw new Error('Year must be a number');
        }
        this._year=year;
    };

    printInfo(){
        console.log(` Title: ${this.title}, \n Author: ${this.author}, \n Year: ${this.year}`);
    }
    // Task 4
    static theOldestBook(books) {
        let oldestBook = books[0];
        books.forEach((book) => {
          if (book.year < oldestBook.year) {
            oldestBook = book;
          }
        });
        return oldestBook;
      }
};
export default Book;