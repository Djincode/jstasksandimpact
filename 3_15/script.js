const fruits = [
    "Apple",
    "Banana",
    "Orange",
    "Mango",
    "Grapes",
    "Pineapple",
    "Kiwi",
    "Strawberry",
    "Watermelon",
    "Peach",
    "Cherry",
  ];
  
  const quote = "Life is like a box of chocolates. You never know what you're gonna get.";
  
  const movies = [
    "The Shawshank Redemption",
    "The Godfather",
    "The Dark Knight",
    "Pulp Fiction",
    "The Lord of the Rings: The Return of the King",
    "Forrest Gump",
    "Fight Club",
    "Inception",
    "The Matrix",
    "Interstellar",
    "The Silence of the Lambs",
  ];


//   1. Fruits array'indeki sonu 'e' herfi ile biten meyvelerden yeni bir array yarad


let filteredFruits = fruits.filter((item)=>{
    return item.endsWith("e");

})

console.log(filteredFruits);


// 2. Quote deyishenindeki bütün sozlerin baş herflerini boyuk et


let bigger = quote.split(" ");

bigger.map(item=>{
    console.log(item[0].toUpperCase() + item.slice(1));
    
//   
})

// console.log(bigger);

