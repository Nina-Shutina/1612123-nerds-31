var openBtn = document.querySelector('.button-footer');
var modal = document.querySelector('.modal');
var closeBtn = modal.querySelector('.close');

openBtn.addEventListener('click', function(evt) {
    evt.preventDefault();

    modal.style.display = 'block';
});

closeBtn.addEventListener('click', function () {
    modal.style.display = 'none';
});