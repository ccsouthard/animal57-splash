// mobile nav toggle
var $header = document.getElementById('site-header'),
    $toggle = document.querySelector('#site-header .nav-toggle'),
    $share = document.querySelector('#site-header .share'),
    $shareList = document.querySelector('#site-header .share-list'),
    $nav = document.querySelector('#site-header nav');

$toggle.addEventListener('click', function() {
    $header.classList.toggle('nav-visible');
    $nav.style.height = document.body.clientHeight + 'px';
});

$share.addEventListener('click', function() {
    $shareList.classList.toggle('share-visible');
});
