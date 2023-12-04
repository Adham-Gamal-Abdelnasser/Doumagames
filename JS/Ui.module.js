export class Ui {
  displayGames(data) {
    let gamesBox = ``;
    for (let i = 0; i < data.length; i++) {
      gamesBox += `
            <div class="col-sm-12 col-md-6 col-lg-3">
            <div class="card text-white bg-transparent border border-1 border-black" data-id"${
              data[i].id
            }">
              <img src="${data[i].thumbnail}" class="card-img-top" alt="...">
              <div class="card-body border-1 border-bottom border-black">
                <h5 class="card-title">${
                  data[i].title
                } <span class="bg-info bg-opacity-50 p-1 rounded-2 mx-2">Free</span> </h5>
                <p class="card-text">${data[i].short_description
                  .split(" ", 8)
                  .join(" ")}</p>
              </div>
              <ul class="bg-transparent list-unstyled p-1">
                <li class="mx-1">
                  <span class="text-uppercase me-5">${data[i].genre}</span>
                  <span class="text-capitalize ms-5">${data[i].platform}</span>
                </li>
              </ul>
          </div>
        </div>
            `;
    }
    document.getElementById("gamesContainer").innerHTML = gamesBox;
  }
  displayDetails(data) {
    const detailsBox = `
      <div class="col-lg-4 col-md-12 ">
                        <img src="${data.thumbnail}" class="w-100" alt="image details" />
                      </div>
                      <div class="col-lg-8 col-md-12">
                          <h3>Title: ${data.title}</h3>
                          <p>Category: <span class="badge text-bg-info"> ${data.genre}</span> </p>
                          <p>Platform: <span class="badge text-bg-info"> ${data.platform}</span> </p>
                          <p>Status: <span class="badge text-bg-info"> ${data.status}</span> </p>
                          <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="${data.screenshots[0].image}" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="${data.screenshots[1].image}" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="${data.screenshots[2].image}" class="d-block w-100" alt="...">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
                          <p class="small">${data.description}</p>
                          <a class="btn btn-outline-warning" target="_blank" href="${data.game_url}">Show Game</a>
                      </div>

      `;
    document.getElementById("detailsContent").innerHTML = detailsBox;
  }
}
