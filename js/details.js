import { Ui } from "./ui.js";


export class Details{
    
    constructor(id){
        this.loading=document.getElementById("loading")

        this.detailsOfGames(id)
        this.detailsOfgame=new Ui()
        this.details=document.querySelector(".details")
        this.games=document.querySelector(".row")
        this.x=document.querySelector(".close")
        this.header=document.querySelector("header")
        this.nav=document.querySelector("nav")



        document.querySelector(".close").addEventListener("click",()=>{
            this.details.classList.add("d-none")
                this.games.classList.remove("d-none")
                this.x.classList.add("d-none")
                this.header.classList.remove("d-none")
                this.nav.classList.remove("d-none")
        })
    }
    
    

    async detailsOfGames(id){
        this.loading.classList.remove("d-none")
        const options = {
        method: "GET",
        headers: {
        'x-rapidapi-key': 'de628f8f3cmsh412f75de8fe5d32p1a26ebjsna6e3bd2cd6c8',
        'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
    }
}
    const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, options);
    
    const data = await api.json();
    this.loading.classList.add("d-none")
    this.detailsOfgame.displayDetails(data)

    
}
    
}