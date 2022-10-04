const submit = document.querySelector(".submit");
const ratingCard = document.querySelector(".rating");
const thankyouCard = document.querySelector(".thankyou");
const ratingSelected = document.querySelectorAll(".number");
const rating = document.querySelector(".selectedrating");
const selectedRating = document.getElementById("selectedrating");

submit.addEventListener("click", () => {
  ratingCard.style.display = "none";
  thankyouCard.style.display = "block";
});

ratingSelected.forEach((rate) => {
  rate.addEventListener("click", (e) => {
    let rateId = e.target.id;
    const numberBtn = document.getElementById(rateId);
    numberBtn.classList.add("number-selected");
    selectedRating.innerHTML = numberBtn.innerHTML;
  });
});
