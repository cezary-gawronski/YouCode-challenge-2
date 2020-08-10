
(() => {
    const mobileButton = document.querySelector(".js-navigation__mobile-button");
    const mobileMenu = document.querySelector(".js-navigationMobile");

    const toggleClass = () => {
        mobileMenu.classList.toggle("navigation__list--isActiveMobile");
    };

    mobileButton.addEventListener("click", toggleClass);
    mobileMenu.addEventListener("click", toggleClass);

})();


(() => {
    const navBar = document.querySelector(".navigationWrapper");
    const pointObserved = document.querySelector(".hero__header");

    const pointObservedOptions = {
        rootMargin: "-370px 0px 0px 0px"
    };

    const sectionOneObserver = new IntersectionObserver((
        entries
    ) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                navBar.classList.add("js-navigationWrapperScrolled");
            } else {
                navBar.classList.remove("js-navigationWrapperScrolled");
            }
        });
    },
        pointObservedOptions);

    sectionOneObserver.observe(pointObserved);

})();


(() => {
    const target = document.querySelector(".hero");
    console.log(target);
    window.addEventListener('scroll', () => {
        const value = window.scrollY;
        target.style.backgroundPosition = `0px ${value * -0.3}px`;

    })
})();
