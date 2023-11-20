"use strict"

let store = [{
                src: "km.jpg",
                name: "Akilash",
                Desgin: "web Developer",
                content: "web developing process management and senior designer"
                }, 
                {
                src: "aj.jpg",
                name: "Pattabi Raman",
                Desgin: "Ceo",
                content: "Ceo of prkap organization and founder in 2030 in new york"
                },
                {
                src: "images.jpeg",
                name: "Vighesh",
                Desgin: "Full stack developer",
                content: "full stack developing in web based development and management."
                }, 
                {
                src: "lok.jpg",
                name: "Madhan Kumar",
                Desgin: "Ui/Ux designer",
                content: "desginer developer and graphic desginer and director in film designs"
            }];

let buttons = document.querySelectorAll("button");
let images=document.getElementById('img');


let h2content=document.getElementById("h2content");
let h4content=document.getElementById("h4content");
let para=document.getElementById("para");

images.src = store[0].src
h2content.innerHTML = store[0].name
h4content.innerHTML = store[0].Desgin
para.innerHTML = store[0].content

var data=0;  
buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
       if (btn == buttons[0]) 
       {
        if (data == 0) {
            data = store.length;
        }
        data--

        console.log(data);
        images.src = store[data].src
        h2content.innerHTML=store[data].name
        h4content.innerHTML=store[data].Desgin
        para.innerHTML=store[data].content

       }
        else 
        {
            if (data > store.length - 1) {
                data = 0;
            }
            data++

            images.src = store[data].src
            h2content.innerHTML = store[data].name
            h4content.innerHTML = store[data].Desgin
            para.innerHTML = store[data].content
            console.log(data);
        }
    })
})



 




