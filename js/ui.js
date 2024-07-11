export class Ui{
    constructor(){
        
        
    }





     displayGames(data){

        let games=""
        for(let i=0;i<data.length;i++){
    
          games+=`
            <div data-id="${data[i].id}"  class="col-lg-3 col-md-6 col-sm-12   ">
            <div class="overlays  rounded-2 "></div>
            <div class="card1 text-white p-3  rounded-2 ">
              <img class="w-100 rounded-top-2 mb-2" src="${data[i].thumbnail}" alt="">
              <div class="caption d-flex justify-content-between">
                <p>${data[i].title}</p>
                <span class="badge text-bg-primary p-2">Free</span>
              </div>
              <p class="text-center py-1">${data[i].short_description.split(" ", 5)}</p>
              
              <div class="footer d-flex justify-content-between pt-2 ">
                <span>${data[i].genre}</span>
                <span>${data[i].platform}</span>
              </div>
    
            </div>
          </div>
            
            `
        }
    
       
    
    
    
        document.querySelector(".row").innerHTML=games
    }
    

    displayDetails(details){

        document.querySelector(".details").innerHTML=`
    

    <div class="container">
  
      <div class="row text-white">
  
  
        <div class="col-lg-3 col-md-12 ">
          <div class="">
            <h2>Details Game</h2>
            <img class="w-100" src="${details.thumbnail}" alt="">
  
          </div>
        </div>
  
  
  
        <div class="col-lg-9 col-md-12  text-white my-5">
          <div class="">
  
            <h3>${details.title}</h3>
            <div class="cat d-flex">
              <p>category:</p>
              <p class=" text-bg-info rounded-3 ms-1 p-1">${details.genre}</p>
            </div>
            <div class="plat d-flex">
              <p>plat: </p>
              <p class=" text-bg-info rounded-3 ms-1 p-1">${details.platform}</p>
  
            </div>
            <div class="status d-flex">
              <p>status:</p>
              <p class=" text-bg-info rounded-3 ms-1 p-1">${details.status}</p>
            </div>
  
            <p>${details.description}</p>
  
            <a target="_blank" href="${details.game_url}"><button class="btn btn-info">show game</button></a>
  
          </div>
        </div>
  
  
  
      </div>
  
    </div>
  
      `

    }


    

}