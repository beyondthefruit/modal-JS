// select modal-btn,modal-overlay,close-btn
const btn = document.querySelector('.modal-btn');
const modal = document.querySelector('.modal-overlay');
const closeBtn = document.querySelector('.close-btn');

// when user clicks modal-btn add .open-modal to modal-overlay
function tog() {
  modal.classList.toggle('open-modal');
}
// listen for click events on modal-btn and close-btn
btn.addEventListener('click', function () {
  tog();
});
closeBtn.addEventListener('click', function () {
  tog();
});
// when user clicks close-btbtn.addEventListener('click', function () {
