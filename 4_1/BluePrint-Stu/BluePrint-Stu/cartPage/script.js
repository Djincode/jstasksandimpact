"use strict";

const data = [
  {
    id: 1,
    name: "puffer jacket",
    image:
      "https://static.bershka.net/4/photos2/2023/I/0/2/p/6666/644/305/738537c6f8a6f0154f291325abee2b38-6666644305_2_4_0.jpg?imwidth=1920&impolicy=bershka-itxmediumlow&imformat=chrome",
    price: "89",
    category: "Jacket",
    color: "yellow",
    sizes: ["xs", "s", "m", "l", "xl"],
  },
  {
    id: 2,
    name: "zipped jumper",
    image:
      "https://static.bershka.net/4/photos2/2023/I/0/2/p/7336/623/800/3cff9417825ad0b50d0804ae249358fd-7336623800_2_4_0.jpg?imwidth=1920&impolicy=bershka-itxmediumlow&imformat=generic",
    price: "89",
    category: "Sweater",
    color: "black",
    sizes: ["xs", "s", "m", "l", "xl"],
  },
  {
    id: 3,
    name: "textured sweater",
    image:
      "https://static.bershka.net/4/photos2/2024/V/0/2/p/7335/623/513/8c4e84f0b46d295163e82317c8e76b03-7335623513_2_4_0.jpg?imwidth=850&impolicy=bershka-itxmedium&imformat=generic",
    price: "79",
    category: "Sweater",
    color: "green",
    sizes: ["xs", "s", "m", "l", "xl"],
  },
  {
    id: 4,
    name: "baggy jeans",
    image:
      "https://static.bershka.net/4/photos2/2023/I/0/2/p/5415/335/800/ea6818ec458051e6a0fcfefaca9c5afb-5415335800_2_4_0.jpg?imwidth=850&impolicy=bershka-itxmedium&imformat=chrome",
    price: "109",
    category: "Pants",
    color: "gray",
    sizes: ["xs", "s", "m", "xl"],
  },
  {
    id: 5,
    name: "vintage jeans",
    image:
      "https://static.bershka.net/4/photos2/2024/V/0/2/p/5394/534/428/840d8b0640170bc135ae28d2e5e25d32-5394534428_2_4_0.jpg?imwidth=850&impolicy=bershka-itxmedium&imformat=chrome",
    price: "89",
    category: "Jeans",
    color: "blue",
    sizes: ["xs", "s", "m", "l", "xl"],
  },
  {
    id: 6,
    name: "leather jacket",
    image:
      "https://static.bershka.net/4/photos2/2023/I/0/2/p/6692/310/800/2e42f27b0b8fde0feaa06aeffe8cddec-6692310800_2_4_0.jpg?imwidth=850&impolicy=bershka-itxmedium&imformat=generic",
    price: "109",
    category: "Jacket",
    color: "black",
    sizes: ["xs", "s", "m", "l", "xl"],
  },
  {
    id: 7,
    name: "shiny puffer jacket",
    image:
      "https://static.bershka.net/4/photos2/2024/V/0/2/p/1900/226/501/fd47beaba918dff008b932b818815ca9-1900226501_2_4_0.jpg?imwidth=850&impolicy=bershka-itxmedium&imformat=chrome",
    price: "149",
    category: "Jacket",
    color: "green",
    sizes: ["xs", "s", "m", "l", "xl"],
  },
  {
    id: 8,
    name: "boxy-fit sweater",
    image:
      "https://static.bershka.net/4/photos2/2023/I/0/2/p/7348/623/627/72280f3478fbdcb92cb24da1033cc8e4-7348623627_2_4_0.jpg?cropfixwidth=2052&imwidth=750&impolicy=bershka-crop-fix-width-itxmedium&imformat=chrome",
    price: "79",
    category: "Sweater",
    color: "pink",
    sizes: ["xs", "s", "m", "l", "xl"],
  },
  {
    id: 8,
    name: "high-neck jumper",
    image:
      "https://static.bershka.net/4/photos2/2023/I/0/2/p/7542/693/612/a66a6267efae2b65e5da3c78d27b60ad-7542693612_2_4_0.jpg?cropfixwidth=2052&imwidth=750&impolicy=bershka-crop-fix-width-itxmedium&imformat=chrome",
    price: "79",
    category: "Sweater",
    color: "purple",
    sizes: ["xs", "s", "m", "l", "xl"],
  },
  {
    id: 9,
    name: "polo sweater",
    image:
      "https://static.bershka.net/4/photos2/2023/I/0/2/p/7949/596/515/b3c4977f28bf813596a48504f3f4f46c-7949596515_2_4_0.jpg?cropfixwidth=2052&imwidth=750&impolicy=bershka-crop-fix-width-itxmedium&imformat=chrome",
    price: "79",
    category: "Sweater",
    color: "green",
    sizes: ["xs", "s", "m", "l", "xl"],
  },
];

const cartItemList = document.querySelector(".cart__list");
const cartTotalPrice = document.querySelector(".cart__total__price");


class Cart{
  constructor(){
    this.cartItems = [];
    this.fetchCartFromLocalStorage;
    this.displayCartItemElements()


  }

   fetchCartFromLocalStorage(){
    const fetchedCartItem = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [];

    if(!fetchedCartItem) return;


    this.cartItems = fetchedCartItem.map((cartItem)=>{
      const product = data.find((product)=>product.id === cartItem.id);
    
       return {
        ...product,
        totalPrice: cartItem.quantity * product.price ,
       }
      

    })

  }

  displayCartItemElements() {
    // Clear the cart item list
    cartItemList.innerHTML = "";

    // Iterate over each cart item
    this.cartItems.forEach((cartItem) => {
      // Create cart item container
      const cartItemElement = document.createElement("div");
      cartItemElement.className = "cart__item";

      // Create cart item image container
      const imageContainer = document.createElement("div");
      imageContainer.className = "cart__item__image";
      const image = document.createElement("img");
      image.src = cartItem.image;
      image.alt = cartItem.name;
      imageContainer.appendChild(image);
      cartItemElement.appendChild(imageContainer);

      // Create cart item info container
      const infoContainer = document.createElement("div");
      infoContainer.className = "cart__item__info";

      // Create name and category elements
      const nameCategoryContainer = document.createElement("div");
      const nameElement = document.createElement("h3");
      nameElement.className = "cart__item__name";
      nameElement.textContent = cartItem.name;
      const categoryElement = document.createElement("h4");
      categoryElement.className = "cart__item__category";
      categoryElement.textContent = cartItem.category;
      nameCategoryContainer.appendChild(nameElement);
      nameCategoryContainer.appendChild(categoryElement);
      infoContainer.appendChild(nameCategoryContainer);

      // Create description container
      const descriptionContainer = document.createElement("div");
      descriptionContainer.className = "cart__item__description";
      const colorDiv = document.createElement("div");
      colorDiv.className = "cart__item__color";
      colorDiv.style.backgroundColor = cartItem.color;
      descriptionContainer.appendChild(colorDiv);
      const sizeDiv = document.createElement("div");
      sizeDiv.className = "cart__item__size";
      sizeDiv.textContent = "xs"; // Assuming the size is always xs
      descriptionContainer.appendChild(sizeDiv);
      infoContainer.appendChild(descriptionContainer);

      // Create price container
      const priceContainer = document.createElement("div");
      const priceSpan = document.createElement("span");
      priceSpan.className = "cart__item__price";
      priceSpan.innerHTML = `${cartItem.quantity} x ${cartItem.price} AZN | <span>${cartItem.totalPrice} AZN</span>`;
      priceContainer.appendChild(priceSpan);
      infoContainer.appendChild(priceContainer);

      // Create counter container
      const counterContainer = document.createElement("div");
      counterContainer.className = "cart__counter";

      // Create decrease button
      const decreaseBtn = document.createElement("button");
      decreaseBtn.textContent = "-";
      decreaseBtn.addEventListener("click", () => {
        // Decrease quantity logic here
      });

      // Create input element for quantity
      const quantityInput = document.createElement("input");
      quantityInput.type = "number";
      quantityInput.min = "1";
      quantityInput.max = "100";
      quantityInput.value = cartItem.quantity; // Set initial value
      quantityInput.addEventListener("change", () => {
        // Update quantity logic here
      });

      // Create increase button
      const increaseBtn = document.createElement("button");
      increaseBtn.textContent = "+";
      increaseBtn.addEventListener("click", () => {
        // Increase quantity logic here
      });

      // Append buttons and input to counter container
      counterContainer.appendChild(decreaseBtn);
      counterContainer.appendChild(quantityInput);
      counterContainer.appendChild(increaseBtn);

      // Append counter container to cart item
      infoContainer.appendChild(counterContainer);

      // Create remove button container
      const removeBtnContainer = document.createElement("div");
      const removeBtn = document.createElement("button");
      removeBtn.className = "remove__btn";
      removeBtn.textContent = "Remove";
      const removeImg = document.createElement("img");
      removeImg.src = "../assets/icons/remove.svg";
      removeImg.alt = "";
      removeBtn.appendChild(removeImg);

      removeBtn.addEventListener("click", () => {
        
      });

      removeBtnContainer.appendChild(removeBtn);
      infoContainer.appendChild(removeBtnContainer);

      // Append info container to cart item
      cartItemElement.appendChild(infoContainer);

      // Append cart item to cart item list
      cartItemList.appendChild(cartItemElement);
    });}

  }




const cart = new Cart()




