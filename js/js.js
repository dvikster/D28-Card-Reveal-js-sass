$(document).ready(function () {
    $('.activator').on('click', function () {
        $('.card-reveal').css('top', '0');
    });
    $('.card-reveal .card-title').on('click', function () {
        $('.card-reveal').css('top', '100%');
    });
});
//