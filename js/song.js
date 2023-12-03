fetch("http://localhost:3000/songs")
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
    card.innerHTML += `   <div class="box">
        <h1>${mult.title}</h1>
        <a href="${mult.image}">
          <button>Yuklab olish</button>
        </a>
      </div>
  `;
  });
}
