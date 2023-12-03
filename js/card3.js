fetch(
  `https://api.unsplash.com/search/photos?client_id=uWVrg72t8OVmTVU-YnhWlmZJf3nUgid5GNfGeYZCeWE&page=2&per_page=50&query=christmas`
)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    let images = data.results;
    walpaper(images);
  });

let card = document.querySelector(".card");

function walpaper(images) {
  images.forEach((image) => {
    let img = image.urls.full;
    let yuklash = image.links.download;
    console.log(image);


    card.innerHTML += ` <div class="box">
            <img width="400px" height="300px" src=${img} alt="">
            <a href=${yuklash}>
        <button>Yuklab Olish</button>
       </a>
        </div>`;
  });
}
