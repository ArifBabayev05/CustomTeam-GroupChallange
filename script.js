
const cards = document.querySelectorAll(".custom_card");
let prevCard = cards[0];

cards.forEach((card) => {
    card.addEventListener('click', () => {
        prevCard.classList.remove('active');
        card.classList.add('active');
        prevCard = card;
    });
});
function myFunction() {
    alert("Olsun, Bu Dəfəliy Şanslı İdiz.");
  }