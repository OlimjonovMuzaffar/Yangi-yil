fetch("http://localhost:3000/cartoons")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    multiks(data);
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

let card = document.querySelector(".card");

function multiks(data) {
  data.forEach((mult) => {
    console.log(mult);
    card.innerHTML += `    <div class="box">
        <img style="border-radius: 12px; width: 400px; height: 400px;" src=${mult.image} alt="">
        <h1>Title: ${mult.title}</h1>
        <a href="${mult.download}">
          <button class="futbol">Yuklab olish</button>
        </a>
      </div>
  `;
  });
}
