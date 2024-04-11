catsArray = [
  {
    id: "1",
    catName: "Mike",
    color: "brown",
  },
  {
    id: "2",
    catName: "Joanne",
    color: "black",
  },
  {
    id: "3",
    catName: "Alex",
    color: "ginger",
  },
  {
    id: "4",
    catName: "Anna",
    color: "white",
  }
];

const addCat = (cat) => {

}

const editCat = (id, cat) => {

}

const removeCat = (id) => {

}

const isCatInRepo = (name) => {
  // if(...)
  return false;
}

addCat({
  id: "5",
  catName: "Mark",
  color: "yellow"
})

// IF IN THE ARRAY THERE IS NO CAT WITH NAME MARK THROW AND EXCEPTION 
// if(nocatwithname..) {
// throw new Error(...);
// }

if(!isCatInRepo("Mark")) {
  throw Error("ERROR")
}