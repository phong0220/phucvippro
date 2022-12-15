"use strict";

var buyBtns = document.querySelectorAll('.js-buy-tickets');
var modal = document.querySelector('.modal');
var modalContainer = document.querySelector('.js-modal-container');
var modalClose = document.querySelector('.js-modal-close'); //Ham hien thi modal mua ve (them class open vao modal)

function showBuyTickets() {
  modal.classList.add('open');
} //Ham an (go bo class open cua modal)


function hideBuyTickets() {
  modal.classList.remove('open');
} //Lap qua tung the button va nghe click


var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = buyBtns[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var buyBtn = _step.value;
    buyBtn.addEventListener('click', showBuyTickets);
  } //Nghe hanh vi click vao button close

} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator["return"] != null) {
      _iterator["return"]();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}

modalClose.addEventListener('click', hideBuyTickets);
modal.addEventListener('click', hideBuyTickets);
modalContainer.addEventListener('click', function (event) {
  event.stopPropagation();
});
//# sourceMappingURL=main.dev.js.map
