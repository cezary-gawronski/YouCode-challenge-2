
(() => {
    const mobileButton = document.querySelector(".js-navigation__mobile-button");
    const mobileMenu = document.querySelector(".js-navigationMobile");

    const toggleClass = () => {
        mobileMenu.classList.toggle("navigation__list--isActiveMobile");
    };

    mobileButton.addEventListener("click", toggleClass);
    mobileMenu.addEventListener("click", toggleClass);

})();


// (() => {
//     const button = document.querySelector(".js-main-navigation__mobile-button");
//     const menu = document.querySelector(".js-main-navigation__menu");

//     const toggleClass = () => {
//         menu.classList.toggle("main-navigation__menu--open");
//     };

//     button.addEventListener("click", toggleClass);
//     menu.addEventListener("click", toggleClass);

// })()