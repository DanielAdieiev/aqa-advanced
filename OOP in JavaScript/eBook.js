import Book from "./Book.js"
class EBook extends Book {
    constructor(title, author, year, fileType) {
        super(title, author, year);
        this.fileType = fileType
    };
    printInfo() {
        super.printInfo();
        console.log(`FileType: ${this.fileType}`);
    };

    get fileType() {
        return this._fileType;
    };
    set fileType(fileType) {
        const validFileTypes = ['PDF', 'DOC', 'FB2'];
        if (!validFileTypes.includes(fileType)) {
            throw new Error('Wrong file type. Must be PDF, DOC or FB2');
        }
        this._fileType = fileType;
    };
//Task 5
    static booktoEBook(book, fileFormat) {
        if (book instanceof Book) {
          return new EBook(book.title, book.author, book.year, fileFormat);
        }
    }
};
export default EBook;