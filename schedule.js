/* Navigation Menu */
var nav = document.querySelector('nav');
var hamburger_menu = document.querySelector('.hamburger-menu-wrap')
var close_icon=document.querySelector('.nav-close-icon');
hamburger_menu.addEventListener('click', (event) => {
    nav.classList.add('open')
});
close_icon.addEventListener('click', (event) => {
    nav.classList.remove('open')
});

// Custom Dropdown


for (const dropdown of document.querySelectorAll(".custom-select-wrapper")) {
    dropdown.addEventListener('click', function() {
        this.querySelector('.custom-select').classList.toggle('open');
    })
}

for (const option of document.querySelectorAll(".custom-option")) {
    option.addEventListener('click', function() {
        if (!this.classList.contains('selected')) {
            this.parentNode.querySelector('.custom-option.selected').classList.remove('selected');
            this.classList.add('selected');
            this.closest('.custom-select').querySelector('.custom-select__trigger span').textContent = this.textContent;
        }
    })
}
window.addEventListener('click', function(e) {
    for (const select of document.querySelectorAll('.custom-select')) {
        if (!select.contains(e.target)) {
            select.classList.remove('open');
        }
    }
});

