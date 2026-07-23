const coding = ["js", "java", "rb", "py", "cpp"];

// coding.forEach( function (val) {
//     console.log(val);
// })

// coding.forEach( (iteam) => {
//     console.log(iteam);

// })

function printMe(iteam) {
  console.log(iteam);
}

// coding.forEach(printMe);

// coding.forEach((iteam, index, arr) => {
//     console.log(iteam, index, arr);

// })

const myCodding = [
  {
    languageName: "JavaScript",
    languageFileName: "js",
  },
  {
    languageName: "Java",
    languageFileName: "java",
  },
  {
    languageName: "Python",
    languageFileName: "py",
  },
];


myCodding.forEach( (iteam) => {
    console.log(iteam["languageFileName"]);
    
})