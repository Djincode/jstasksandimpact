"use strict";

const fill = document.querySelector(".fill");
const empties = document.querySelectorAll(".empty");

empties.forEach((el)=>{

    el.addEventListener("dragover",function(e){
      e.preventDefault();
    })

    el.addEventListener("dragstart", function(){
       fill.classList.add("hold");
       setTimeout(()=>{
         fill.classList.add("invisible")
       },0)
    })
    
    el.addEventListener("dragend", function(){
        fill.classList.remove("hold");
        setTimeout(()=>{
              fill.classList.remove("invisible")
        },0)
     })

    el.addEventListener("drop", function(){
      this.append(fill);
    })
    
    el.addEventListener("dragenter", function(){
        this.classList.add("hovered")
    })

    el.addEventListener("dragleave", function(){
        this.classList.remove("hovered");
    })


});

