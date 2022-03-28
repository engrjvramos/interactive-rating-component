'use strict';
let ratings = document.querySelectorAll('.rating');
let userSelection;
let isSelected = false;

ratings.forEach((rating) => {
  rating.addEventListener('click', () => {
    ratings.forEach((el) => el.classList.remove('active'));
    rating.classList.add('active');
    userSelection = rating.innerHTML;
    isSelected = true;
  });
});

const submitBtn = document.getElementById('submit');
const thankyouCard = document.querySelector('.thankyou-card');
const ratingCard = document.querySelector('.rating-card');
const userRating = document.getElementById('userRating');

submitBtn.addEventListener('click', () => {
  if (isSelected) {
    thankyouCard.setAttribute('data-visible', true);
    ratingCard.setAttribute('data-visible', false);
    userRating.innerHTML = userSelection;
  } else {
    alert('Please select a rating!');
  }
});
