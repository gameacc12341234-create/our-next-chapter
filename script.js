/* ==========================
   LOADER
========================== */

window.addEventListener("load", () => {
    setTimeout(() => {
        document.getElementById("loader").style.display = "none";
    }, 3000);
});

/* ==========================
   COUNTDOWN
========================== */

const weddingDate = new Date("December 25, 2026 00:00:00").getTime();

const countdown = () => {

    const now = new Date().getTime();

    const distance = weddingDate - now;

    if (distance < 0) {

        document.querySelector(".countdown h2").innerHTML =
            "Today is the Wedding! ❤️";

        clearInterval(timer);

        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60)) /
        (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60)) /
        1000
    );

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
};

countdown();

const timer = setInterval(countdown, 1000);

/* ==========================
   SCROLL ANIMATIONS
========================== */

const cards = document.querySelectorAll(".story-card");

const reveal = () => {

    cards.forEach(card => {

        const top = card.getBoundingClientRect().top;

        if (top < window.innerHeight - 120) {

            card.classList.add("show");

        }

    });

};

window.addEventListener("scroll", reveal);

reveal();

/* ==========================
   GALLERY LIGHTBOX
========================== */

const galleryImages =
document.querySelectorAll(".gallery-grid img");

const lightbox =
document.getElementById("lightbox");

const lightboxImage =
document.getElementById("lightbox-img");

const close =
document.getElementById("close");

galleryImages.forEach(image => {

    image.addEventListener("click", () => {

        lightbox.style.display = "flex";

        lightboxImage.src = image.src;

    });

});

close.addEventListener("click", () => {

    lightbox.style.display = "none";

});

lightbox.addEventListener("click", e => {

    if (e.target === lightbox) {

        lightbox.style.display = "none";

    }

});

/* ==========================
   MUSIC
========================== */

const music =
document.getElementById("music");

const musicButton =
document.getElementById("musicButton");

let playing = false;

musicButton.addEventListener("click", () => {

    if (!playing) {

        music.play();

        musicButton.innerHTML = "⏸️";

        playing = true;

    } else {

        music.pause();

        musicButton.innerHTML = "🎵";

        playing = false;

    }

});

/* ==========================
   HERO PARALLAX
========================== */

window.addEventListener("scroll", () => {

    const hero =
        document.querySelector(".hero img");

    const scroll = window.pageYOffset;

    hero.style.transform =
        `translateY(${scroll * 0.2}px) scale(1.08)`;

});

/* ==========================
   BUTTON SMOOTH SCROLL
========================== */

document.querySelectorAll("a[href^='#']").forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        document.querySelector(
            this.getAttribute("href")
        ).scrollIntoView({

            behavior: "smooth"

        });

    });

});

/* ==========================
   FADE HEADER ON SCROLL
========================== */

window.addEventListener("scroll", () => {

    const heroContent =
        document.querySelector(".hero-content");

    const opacity =
        1 - window.scrollY / 500;

    heroContent.style.opacity =
        opacity < 0 ? 0 : opacity;

});

/* ==========================
   SIMPLE IMAGE PRELOAD
========================== */

const preload = [];

galleryImages.forEach(img => {

    const image = new Image();

    image.src = img.src;

    preload.push(image);

});

console.log(
    "Our Next Chapter loaded successfully ❤️"
);