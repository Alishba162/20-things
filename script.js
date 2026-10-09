const slides = document.querySelectorAll(".slide");
const progress = document.getElementById("progress");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");

let currentSlide = 0;

function showSlide(index) {
    currentSlide = index;

    slides.forEach((slide, i) => {
        slide.classList.toggle("active", i === currentSlide);
    });

    progress.textContent =
        `${String(currentSlide + 1).padStart(2, "0")} / ${String(slides.length).padStart(2, "0")}`;

    prevButton.disabled = currentSlide === 0;

    if (currentSlide === slides.length - 1) {
        nextButton.textContent = "Read again ↻";
    } else {
        nextButton.textContent = "Next →";
    }

    window.scrollTo({
        top: 0,
        behavior: "auto"
    });
}

prevButton.addEventListener("click", () => {
    if (currentSlide > 0) {
        showSlide(currentSlide - 1);
    }
});

nextButton.addEventListener("click", () => {
    if (currentSlide < slides.length - 1) {
        showSlide(currentSlide + 1);
    } else {
        showSlide(0);
    }
});

showSlide(0);
