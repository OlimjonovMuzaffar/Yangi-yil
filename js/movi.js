fetch("http://localhost:3000/movies")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    multiks(data);
  })
  .catch((error) => {
    console.log(error);
  });

let card = document.querySelector(".card");

function multiks(data) {
  data.forEach((mult) => {
    console.log(mult.image);
  });
}
