// ENUMS
const enum Size {
    Small = 1,
    Medium,
    Large,
}

let mySize: Size = Size.Medium;
console.log(mySize);

// FUNCTIONS
function calculateTax(income: number, taxYear = 2022): number {
    if (taxYear < 2022) return income * 1.2;

    return income * 1.3;
}

calculateTax(10_000);

// OBJECTS
let employee: {
    readonly id: number;
    name: string;
    retire: (date: Date) => void;
} = {
    id: 1,
    name: 'Shane',
    retire: (date: Date) => {
        console.log(date);
    },
};

// EXERCISES

// For each of these values what will the typescript complier infer?
// let a = 100;
// let b = 'Coffee';
// let c = [true, false, false];
// let d = { age: number };
// let e = [3];
// let f;
// let g = [];

// What are the compliation errors in each of the following code snippets?

// Release year is in the definition as required but not provided to the object.
// let song: {
//     title: string;
//     releaseYear: number;
// } = { title: 'My song' };

let song: {
    title: string;
    releaseYear: number;
} = { title: 'My song', releaseYear: 2024 };

let song2: {
    title: string;
    releaseYear?: number;
} = { title: 'My song' };

// Cannot assign a string value to a number array.
let prices = [100, 200, 300];
// prices[0] = '$100';
prices[0] = 400;

// Expected to return a number but got undefined instead.
// function add(a: number, b: number): number {}

function add(a: number, b: number): number {
    return a + b;
}
