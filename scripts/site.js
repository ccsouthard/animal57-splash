// mobile nav toggle
var $header = document.getElementById('site-header'),
    $toggle = document.querySelector('#site-header .nav-toggle'),
    $nav = document.querySelector('#site-header nav');

$toggle.addEventListener('click', function() {
    $header.classList.toggle('nav-visible');
    $nav.style.height = document.body.clientHeight + 'px';
});
