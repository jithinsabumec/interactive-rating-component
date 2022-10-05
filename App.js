const submit = document.querySelector(".submit");
const ratingCard = document.querySelector(".rating");
const thankyouCard = document.querySelector(".thankyou");
const ratingSelected = document.querySelectorAll(".num");
const rating = document.querySelector(".selectedrating");
const selectedRating = document.getElementById("selectedrating");

submit.addEventListener("click", (e) => {
  ratingCard.style.display = "none";
  thankyouCard.style.display = "block";
  document.getElementById("");
});

ratingSelected.forEach((rate) => {
  rate.addEventListener("click", (e) => {
    const numberBtn = e.target.id;
    selectedRating.innerHTML = document.getElementById(numberBtn).textContent;
    console.log(document.getElementById(numberBtn));
  });
});
