'use strict';
let ratings = document.querySelectorAll('.rating');

ratings.forEach((rating) => {
  rating.addEventListener('click', () => {
    ratings.forEach((el) => el.classList.remove('active'));

    rating.classList.add('active');
  });
});

let y = 0;

const submitBtn = document.getElementById('submit');
const thankyouCard = document.querySelector('.thankyou-card');
const ratingCard = document.querySelector('.rating-card');

submitBtn.addEventListener('click', () => {
  thankyouCard.setAttribute('data-visible', true);
  ratingCard.setAttribute('data-visible', false);
});
