const navItems = document.querySelectorAll('.nav-head .nav-item');
function setActive(item) {
    navItems.forEach((navItem) => {
        navItem.classList.remove('active');
    });
    item.classList.add('active');
}

navItems.forEach((item) => {
    item.addEventListener('click', () => {
        setActive(item);
    })
})

// slide
document.addEventListener("DOMContentLoaded", () => {
    const slideContainer = document.querySelector(".slides-ct .slides");
    const slides = document.querySelectorAll(".slides-ct .slide");
    const dotsContainer = document.querySelector(".slides-ct .dots");
    const leftArrow = document.querySelector(".slides-ct .left-arrow");
    const rightArrow = document.querySelector(".slides-ct .right-arrow");
    const totalSlides = slides.length;

    let currentIndex = 0;

    slides.forEach((_, index) => {
        const dot = document.createElement("div");
        dot.classList.add("dot");
        if (index === 0) dot.classList.add("active");
        dotsContainer.appendChild(dot);

        dot.addEventListener("click", () => {
            currentIndex = index;
            updateSlidePosition();
            updateDots();
        });
    });

    const dots = document.querySelectorAll(".slides-ct .dots .dot");

    const updateSlidePosition = () => {
        const slideWidth = slides[0].clientWidth;
        slideContainer.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    };

    const updateDots = () => {
        dots.forEach((dot, index) => {
            dot.classList.toggle("active", index === currentIndex);
        });
    };

    const moveToPreviousSlide = () => {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        updateSlidePosition();
        updateDots();
    };

    const moveToNextSlide = () => {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateSlidePosition();
        updateDots();
    };

    leftArrow.addEventListener("click", moveToPreviousSlide);
    rightArrow.addEventListener("click", moveToNextSlide);

    setInterval(() => {
        moveToNextSlide();
    }, 3000);
});

// aos

window.addEventListener('load', function () {
    AOS.init();
});

// accordian
document.querySelectorAll(".accordion-title").forEach(title => {
    title.addEventListener("click", function () {
        const item = this.parentElement;
        const content = item.querySelector(".accordion-content");
        const imageDisplay = document.getElementById("displayed-image");

        document.querySelectorAll(".accordion-content").forEach(c => c.style.display = "none");
        document.querySelectorAll(".accordion-item").forEach(i => i.classList.remove("active"));

        if (content.style.display === "block") {
            content.style.display = "none";
            imageDisplay.style.display = "none";
        } else {
            content.style.display = "block";
            item.classList.add("active");
            imageDisplay.src = item.getAttribute("data-image");
            imageDisplay.style.display = "block";
        }
    });
});

// scroll header
document.addEventListener("DOMContentLoaded", function () {
    let navbar = document.querySelector(".navbar");
    let isScrolled = false;

    function handleScroll() {
        if (window.scrollY > 0) {
            if (!isScrolled) {
                navbar.classList.add("scrolled");
                isScrolled = true;
            }
        } else {
            if (isScrolled) {
                navbar.classList.remove("scrolled");
                isScrolled = false;
            }
        }
    }

    window.addEventListener("scroll", () => {
        requestAnimationFrame(handleScroll);
    });
});

// show subnav
document.addEventListener("DOMContentLoaded", function () {
    const navSub = document.querySelector(".nav-item.nav-sub");
    const subNav = navSub.querySelector(".subnav");
    const navbarToggler = document.querySelector(".navbar-toggler");
    const navbarCollapse = document.querySelector(".navbar-collapse");

    navSub.addEventListener("click", function (event) {
        event.stopPropagation();
        subNav.classList.toggle("active");
    });

    document.addEventListener("click", function (event) {
        if (!navSub.contains(event.target)) {
            subNav.classList.remove("active");
        }
    });

    navbarToggler.addEventListener("click", function () {
        if (navbarCollapse.classList.contains("show")) {
            setTimeout(() => {
                document.querySelectorAll(".subnav").forEach(el => el.classList.remove("active"));
            }, 300);
        }
    });
});

// change bg and scroll header
document.addEventListener("DOMContentLoaded", function () {
    let navbar = document.querySelector(".navbar");
    let toggler = document.querySelector(".navbar-toggler");
    let navCollapse = document.querySelector(".navbar-collapse");

    toggler.addEventListener("click", function () {
        navbar.classList.toggle("bg-dark");
    });

    navCollapse.addEventListener("transitionend", function () {
        if (navCollapse.scrollHeight > window.innerHeight) {
            navCollapse.style.overflowY = "auto";
        }
        // else {
        //     navCollapse.style.overflowY = "visible";
        // }
    });
});

// link

document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll(".submenu a");
    links.forEach(link => {
        link.href = "https://hanbiro.com" + link.getAttribute("href");
    });
});

// Change tab smooth
document.addEventListener("DOMContentLoaded", function () {
    const tabLinks = document.querySelectorAll('[data-bs-toggle="pill"]');

    tabLinks.forEach(tab => {
        tab.addEventListener('shown.bs.tab', function (event) {
            const targetTab = document.querySelector(event.target.getAttribute("data-bs-target"));
            targetTab.classList.add("show");
        });
    });
});

// scroll to top every time reload page
window.onload = function () {
    window.scrollTo(0, 0);
};

