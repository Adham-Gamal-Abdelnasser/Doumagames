import { Ui } from "./Ui.module.js";
export class Details {
  constructor(id) {
    document.getElementById("btnClose").addEventListener("click", () => {
      document.getElementById("gameDetails").classList.add("d-none");
      document.getElementById("games").classList.remove("d-none");
    });
    this.getDetails(id);
  }
  async getDetails(id) {
    const loading = document.querySelector(".loading");
    loading.classList.remove("d-none");
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "0b776ca97cmsh3c615d80054e727p124bdcjsn4bc81d49e2b1",
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
      },
    };
    const detailsApi = await fetch(
      `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`,
      options
    );
    const detailsApiResponse = await detailsApi.json();
    loading.classList.add("d-none");
    new Ui().displayDetails(detailsApiResponse);
  }
}
