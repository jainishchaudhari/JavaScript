const coding = ["js", "ruby", "java", "python", "cpp"];

// const values = coding.forEach( (iteam) => {
//     console.log(iteam);
//     return iteam;
// });

// console.log(values);

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const values = nums.filter( (num) => num > 5);

// console.log(values);

const values = nums.filter((num) => {
  return num > 5;
});

// console.log(values);

// const newNums = [];

// nums.forEach((iteam) => {
//     if (iteam > 4) {
//         newNums.push(iteam)
//     }
// });

// console.log(newNums);

const books = [
  { title: "Think", genre: "Self", published: 1937 },
  { title: "Atomic", genre: "Self", published: 2018 },
  { title: "Clean", genre: "Programming", published: 2008 },
  { title: "Hobbit", genre: "Fantasy", published: 1937 },
  { title: "Mockingbird", genre: "Classic", published: 1960 },
  { title: "Money", genre: "Finance", published: 2020 },
  { title: "Harry", genre: "Fantasy", published: 1997 },
  { title: "Pragmatic", genre: "Programming", published: 1999 },
  { title: "Rich Dad", genre: "Finance", published: 1997 },
  { title: "Zero", genre: "Fiction", published: 2021 },
  { title: "Dune", genre: "Sci-Fi", published: 1965 },
  { title: "1984", genre: "Dystopian", published: 1949 },
  { title: "Sapiens", genre: "History", published: 2011 },
  { title: "Ikigai", genre: "Self", published: 2016 },
  { title: "Inferno", genre: "Thriller", published: 2013 },
  { title: "Origin", genre: "Thriller", published: 2017 },
  { title: "Sherlock", genre: "Mystery", published: 1892 },
  { title: "Dracula", genre: "Horror", published: 1897 },
  { title: "Frankenstein", genre: "Horror", published: 1818 },
  { title: "Cosmos", genre: "Science", published: 1980 },
];

// const userBooks = books.filter( (bk) => bk.genre === "Self" )
const userBooks = books.filter((bk) => {
  return bk["published"] > 2000 && bk["genre"] === "Thriller";
});

console.log(userBooks);
