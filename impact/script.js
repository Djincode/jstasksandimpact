
///My Datas
const data = [
    { img: "./images/app-1.jpg",
      name: "App 1",
      about: "Lorem ipsum, dolor sit amet consectetur" 
    },
    {img: "./images/product-1.jpg",
    name: "Product 1",
    about: "Lorem ipsum, dolor sit amet consectetur" 
    },
    { img: "./images/branding-1.jpg",
      name: "Barnding 1",
      about: "Lorem ipsum, dolor sit amet consectetur" 
    },
    {img: "./images/books-1.jpg",
    name: "Books 1",
    about: "Lorem ipsum, dolor sit amet consectetur" 
    }, 
    { img: "./images/app-2.jpg",
    name: "App 2",
    about: "Lorem ipsum, dolor sit amet consectetur" 
    },
    {img: "./images/product-2.jpg",
     name: "Product 2",
     about: "Lorem ipsum, dolor sit amet consectetur" 
    }, 
    { img: "./images/branding-2.jpg",
      name: "Branding 2",
     about: "Lorem ipsum, dolor sit amet consectetur" 
    },
    {img: "./images/books-2.jpg",
     name: "Books 2",
     about: "Lorem ipsum, dolor sit amet consectetur" 
    }, 
    { img: "./images/app-3.jpg",
      name: "App 3",
      about: "Lorem ipsum, dolor sit amet consectetur" 
    },
    {img: "./images/product-3.jpg",
     name: "Product 3",
     about: "Lorem ipsum, dolor sit amet consectetur" 
    }, 
    { img: "./images/branding-3.jpg",
      name: "Branding 3",
      about: "Lorem ipsum, dolor sit amet consectetur" 
    },
    {img: "./images/books-3.jpg",
     name: "Books 3",
    about: "Lorem ipsum, dolor sit amet consectetur" 
     },
  ];
  ////Create element
  
  const cardContainer = document.querySelector(".card-container");
  
  
  data.forEach(item => {
    
    const card = document.createElement("div");
    card.classList.add("card");
  
    
    card.innerHTML = `
       <img src=${item.img}>
      <h2>${item.name}</h2>
      <p> ${item.about}</p>
    `;
  
    
    cardContainer.appendChild(card);
  });

  ///// Button functions





let buttons = document.querySelectorAll(".links a");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    
   
    buttons.forEach(btn => {
      btn.classList.remove("active");
    });

    
    button.classList.add("active");

    /////////////filtering

    const buttonValue = button.textContent.toLowerCase(); 
   
    cardContainer.innerHTML = '';

  
    const filteredarray = data.filter(item => {

      let itemName =item.name.toLowerCase();
      return itemName.includes(buttonValue.slice(0,3)) && buttonValue !== "all";
    });




    filteredarray.forEach(item => {
      const card = document.createElement("div");
      card.classList.add("card");

      card.innerHTML = `
         <img src=${item.img}>
        <h2>${item.name}</h2>
        <p>${item.about}</p>
      `;





      cardContainer.appendChild(card);
    });




    if (buttonValue === "all") {
      data.forEach(item => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
           <img src=${item.img}>
          <h2>${item.name}</h2>
          <p>${item.about}</p>
        `;

        cardContainer.appendChild(card);
      });
    }

  })

  

})

let accordion = document.querySelectorAll(".contentbox");
for(i=0;i<accordion.length;i++){
    accordion[i].addEventListener("click", (e)=>{
        e.currentTarget.classList.toggle("active")
    })
}
