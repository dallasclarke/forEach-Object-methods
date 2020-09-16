//loop through the object using forEach so that it logs, (eg,for user1)
//'user1 is called Jon and is 23 years old'
//the loop should not return a data structure
// Use one or more of the object methods to solve
const obj = {
  user1: {
    name: 'Jon',
    age: 23,
  },
  user2: {
    name: 'Jen',
    age: 25,
  },
  user3: {
    name: 'Jan',
    age: 21,
  },
};

const result1 = Object.entries(obj).forEach((key) => {
  console.log(`${key[0]} is called ${key[1]['name']} and is ${key[1]['age']} years old.`)
})



// Use Object Methods
//Create an albphabeticl list of every folder in the documents object (the keys are the folders)
//Create a list of every file in the documents object. one list.
const documents = {
  taxes: ['2010.xlx', '2020.xlx'],
  records: ['rec1.docx', 'rec2.docx', 'rec3.docx'],
  miscellaneous: ['pic.jpg', 'passwords.pdf', 'docs.txt'],
  Clubhouse: ['paty.jpg', 'christmasRules.pdf', 'pool.txt'],
};

const list = Object.entries(documents).sort();
// list;
list.forEach((entries) => {
  const keys = entries[0];
  const values = entries[1];
    console.log([`${keys}: ${values}`])
});


//Are the two books alike? Create a function and Use Object methods to find out. Change object values to test for non-alike objects
const book1 = {
  title: 'My Book',
  author: 'John Doe',
  year: '2019',
};
const book2 = {
  title: 'My Book',
  author: 'John Doe',
  year: '2019',
};

function books(bookOne, bookTwo) {
  const keyOne = Object.keys(bookOne);
  const keyTwo = Object.keys(bookTwo);

  if (keyOne.length !== keyTwo.length) {
    return false;
  }

  for (const key of keyOne) {
    if (bookOne[key] !== bookTwo[key]) {
      return false;
    }
  }
  return true;
}
console.log(books(book1, book2))
