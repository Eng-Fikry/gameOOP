// let data=[]

import { Games } from "./games.js";

new Games()






























// getGames("MMORPG")

// //games api
// async function getGames(a) {
//         const options = {
//         method: "GET",
//         headers: {
//         "X-RapidAPI-Key": "761b8a3226msh868f0d927cb6ea4p117ef0jsn46d63d281712",
//         "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
//     }
// }
        
       
        
//         const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${a}`, options);
        
//         data = await api.json();
//         console.log(data);
        
//         console.log(a);
//         display()
// }

// //gams display
// function display(){

//     let games=""
//     for(i=0;i<data.length;i++){

      

//         games+=`
//         <div onclick="detailsGames(this.id)" id="${data[i].id}" class="col-lg-3 col-md-6 col-sm-12  ">
//         <div class="overlays  rounded-2 "></div>
//         <div class="card1 text-white p-3  rounded-2 ">
//           <img class="w-100 rounded-top-2 mb-2" src="${data[i].thumbnail}" alt="">
//           <div class="caption d-flex justify-content-between">
//             <p>${data[i].title}</p>
//             <span class="badge text-bg-primary p-2">Free</span>
//           </div>
//           <p class="text-center py-1">${data[i].short_description.split(" ", 5)}</p>
          
//           <div class="footer d-flex justify-content-between pt-2 ">
//             <span>${data[i].genre}</span>
//             <span>${data[i].platform}</span>
//           </div>

//         </div>
//       </div>
        
//         `
//     }

   



//     document.querySelector(".row").innerHTML=games
// }

// // games details
// async function detailsGames(x) {
//     const options = {
//         method: 'GET',
//         headers: {
//             'x-rapidapi-key': 'de628f8f3cmsh412f75de8fe5d32p1a26ebjsna6e3bd2cd6c8',
//             'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
//         }
//     };

//     const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${x}`, options);
    
//     const details = await api.json();
//     console.log(details);
    
//     document.querySelector(".details").innerHTML=`
    

//   <div class="container">

//     <div class="row text-white">


//       <div class="col-lg-3 col-md-12 ">
//         <div class="">
//           <h2>Details Game</h2>
//           <img class="w-100" src="${details.thumbnail}" alt="">

//         </div>
//       </div>



//       <div class="col-lg-9 col-md-12  text-white my-5">
//         <div class="">

//           <h3>${details.title}</h3>
//           <div class="cat d-flex">
//             <p>category:</p>
//             <p class=" text-bg-info rounded-3 ms-1 p-1">${details.genre}</p>
//           </div>
//           <div class="plat d-flex">
//             <p>plat: </p>
//             <p class=" text-bg-info rounded-3 ms-1 p-1">${details.platform}</p>

//           </div>
//           <div class="status d-flex">
//             <p>status:</p>
//             <p class=" text-bg-info rounded-3 ms-1 p-1">${details.status}</p>
//           </div>

//           <p>${details.description}</p>

//           <a target="_blank" href="${details.game_url}"><button class="btn btn-info">show game</button></a>

//         </div>
//       </div>



//     </div>

//   </div>

//     `
 
// }





// //close and open details
// document.querySelector(".row").addEventListener("click",function(){
//   document.querySelector(".row").classList.add("d-none")
//   document.querySelector(".details").classList.remove("d-none")
//   document.querySelector("nav").classList.add("d-none")
//   document.querySelector("header").classList.add("d-none")
//   document.querySelector(".iy").classList.remove("d-none")

// })


// document.querySelector(".iy").addEventListener("click",function(){
//   document.querySelector(".row").classList.remove("d-none")
//   document.querySelector(".details").classList.add("d-none")
//   document.querySelector("nav").classList.remove("d-none")
//   document.querySelector("header").classList.remove("d-none")
//   document.querySelector(".iy").classList.add("d-none")

// })

// console.log(document.querySelector(".iy"));






