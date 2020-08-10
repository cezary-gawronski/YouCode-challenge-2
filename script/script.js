
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
    window.addEventListener('scroll', () => {
        const value = window.scrollY;
        target.style.backgroundPosition = `50% calc(50% - ${value * 0.3}px)`;

    })
})();


(() => {
    const deadline = new Date("Jan 14, 2022 20:30:25").getTime();
    const x = setInterval(() => {
        let nowDate = new Date().getTime();
        let remainingTime = deadline - nowDate;
        let days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
        let hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

        document.querySelectorAll('.js-days').forEach(elm => elm.innerHTML = days);
        document.querySelectorAll('.js-hours').forEach(elm => elm.innerHTML = hours);
        document.querySelectorAll('.js-minutes').forEach(elm => elm.innerHTML = minutes);
        document.querySelectorAll('.js-seconds').forEach(elm => elm.innerHTML = seconds);


        if (remainingTime < 0) {
            clearInterval(x);
            document.querySelectorAll('.js-days').forEach(elm => elm.innerHTML = 0);
            document.querySelectorAll('.js-hours').forEach(elm => elm.innerHTML = 0);
            document.querySelectorAll('.js-minutes').forEach(elm => elm.innerHTML = 0);
            document.querySelectorAll('.js-seconds').forEach(elm => elm.innerHTML = 0);
        }
    }, 1000);
})();


// Odnoszę wrażenie, że te skrypty bardzo obciążają urządzenia.
// Animacje nie są płynne :(

(() => {
    const targetSpeakers = document.querySelectorAll('.js-speakers');

    window.addEventListener('scroll', () => {

        const newSize = Math.floor(580 + window.pageYOffset * .3);
        targetSpeakers.forEach(e => e.style.backgroundSize = `${newSize}px`);
        targetSpeakers.forEach(e => e.style.transition = `.3s ease-in-out tramsition`);


    })
})();


// window.addEventListener('scroll', () => {

//     const targetSpeakers = document.querySelectorAll('.js-speakers');

//     let i = 0, length = targetSpeakers.length;

//     for (i; i < length; i++) {
//         let newSize = 580 + window.pageYOffset * .3;
//         targetSpeakers[i].style.backgroundSize = `${newSize}px`;

//     }

// });



