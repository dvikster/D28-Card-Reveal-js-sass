$(document).ready(function () {
    $('.activator').on('click', function () {
        $('.card-reveal').css('top', '0');
    });
    $('.card-reveal .card-title').on('click', function () {
        $('.card-reveal').css('top', '100%');
    });
});

function one() {
    this.p=7; // this не задан явно, поэтому this является window
}
// one.p = 7;
one();
console.log(window.p);