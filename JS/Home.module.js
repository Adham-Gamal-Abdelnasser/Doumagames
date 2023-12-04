import { Details } from "./Details.module.js";
import { Ui } from "./Ui.module.js";
export class Home {
  constructor() {
    this.getGames("mmorpg");

    document.querySelectorAll(".menu a").forEach((link) => {
      link.addEventListener("click", () => {
        this.getGames(link.dataset.category);
      });
    });

    this.details = document.getElementById("gameDetails");
    this.games = document.getElementById("games");
    this.close = document.getElementById("btnClose");
    this.ui = new Ui();
  }
  async getGames(category) {
    const loading = document.querySelector(".loading");
    loading.classList.remove("d-none");
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "761b8a3226msh868f0d927cb6ea4p117ef0jsn46d63d281712",
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };
    const api = await fetch(
      `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`,
      options
    );
    const apiResponse = await api.json();

    this.ui.displayGames(apiResponse);

    loading.classList.add("d-none");

    document.querySelectorAll(".card").forEach((card) => {
      card.addEventListener("click", () => {
        this.details.classList.remove("d-none");
        this.games.classList.add("d-none");
        new Details(
          apiResponse[
            Array.from(document.querySelectorAll(".card")).indexOf(card)
          ].id
        );
        new Ui().displayDetails(apiResponse);
      });
    });
  }
}
