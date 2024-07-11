import { Details } from "./details.js";
import { Ui } from "./ui.js";


export class Games{
    constructor(){
        
        this.ui=new Ui()
        
        this.loading=document.getElementById("loading")
        this.details=document.querySelector(".details")
        this.games=document.querySelector(".row")
        this.x=document.querySelector(".close")
        this.header=document.querySelector("header")
        this.nav=document.querySelector("nav")
        this.getGames("MMORPG")
        document.querySelectorAll(".nav-link").forEach((link)=>{
            link.addEventListener("click",()=>{
             const cat=link.getAttribute("data-cat")
             document.querySelector(".active").classList.remove("active")
             link.classList.add("active")
             
                this.getGames(cat)

            })
            
            
        })

       
        
    }
    

    async getGames(a){

        this.loading.classList.remove("d-none")
        const options = {
        method: "GET",
        headers: {
        "X-RapidAPI-Key": "761b8a3226msh868f0d927cb6ea4p117ef0jsn46d63d281712",
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
    }
}
    const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${a}`, options);
    
    
    const data = await api.json();
    this.loading.classList.add("d-none")
    
    console.log(data);
     this.ui.displayGames(data)


     document.querySelectorAll(".col-lg-3").forEach((idGame)=>{
        idGame.addEventListener("click",()=>{
         const id=idGame.getAttribute("data-id")
         
            this.details.classList.remove("d-none")
            this.games.classList.add("d-none")
            this.x.classList.remove("d-none")
            this.header.classList.add("d-none")
            this.nav.classList.add("d-none")
            new Details(id)
            

        })
        
        
    })
    
}




    }


    
