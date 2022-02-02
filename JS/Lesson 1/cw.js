let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let result = arr.reduce(function(sum, elem) {
    if (elem >= 0) {
        return sum + elem;
    } else {
        return sum;
    }
});
console.log (result)


let bookone = {
    title: 'NewEra',
    pages: 345,
    genre: 'comic'
}
let bookTwo = {
    title: 'Goover',
    pages: 245,
    genre: 'action',
    authors: 'J.MC.Kanady, Sr.William Shrek'
}

//console.log(bookOne);
//console.log (bookTwo);

let books = [
    {
        title: 'NewEra',
        pages: 345,
        genre: 'comic',
        authors: 'Jonny Dee, Sherly Pig'
    },
    {
        title: 'Goover',
        pages: 245,
        genre: 'action',
        authors: 'J.MC.Kanady, Sr.William Shrek'
    },
    {
        title: 'I am a president',
        pages: 777,
        genre: 'fiction',
        authors: 'Donald Trump'
    },
]

console.log (books [0]);
console.log (books [1]);
console.log (books [2]);

let height = 23;
let width = 10;
let s = height * width;
console.log (s);


const PI = 3.14;
let cheight = 10;
let diameter =4;
let v =PI * Math.pow(diameter, 2) * cheight;
console.log (v);


let n = 3;
let m = 6;
let k = Math.sqrt(Math.pow(n, 2) + Math.pow(m, 2));
console.log (k)



