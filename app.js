const faqCards = document.querySelectorAll(".faq-card");
const slider = document.querySelector(".slider-cards");


const leftBtn = document.querySelector(".left-btn");
const rightBtn = document.querySelector(".right-btn");
const container = document.querySelector(".cards-container");

const forms = document.querySelectorAll(".email-form");

// Mail verification
forms.forEach((form) => {
    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const input = form.querySelector(".hero-info-inp");
        const error = form.nextElementSibling;
        if (!input.value.includes("@") || !input.value.includes(".")) {
            error.textContent = "Please enter a valid email address";
        } else {
            error.textContent = "";
        }
    });
});

// Silder functionality
let currPosition = 0;

leftBtn.classList.add("hide-btn");

function getMaxScroll() {
    return slider.scrollWidth - container.clientWidth;
}

function updateButtons() {
    const maxScroll = getMaxScroll();

    if (currPosition >= 0) {
        leftBtn.classList.add("hide-btn");
    } else {
        leftBtn.classList.remove("hide-btn");
    }

    if (Math.abs(currPosition) >= maxScroll) {
        rightBtn.classList.add("hide-btn");
    } else {
        rightBtn.classList.remove("hide-btn");
    }
}

// right-btn
rightBtn.addEventListener("click", () => {
    const maxScroll = getMaxScroll();

    if (Math.abs(currPosition) < maxScroll) {
        currPosition -= container.clientWidth;

        if (Math.abs(currPosition) > maxScroll) {
            currPosition = -maxScroll;
        }

        slider.style.transform = `translateX(${currPosition}px)`;

        updateButtons();
    }
});

//left-btn
leftBtn.addEventListener("click", () => {
    if (currPosition < 0) {
        currPosition += container.clientWidth;

        if (currPosition > 0) {
            currPosition = 0;
        }

        slider.style.transform = `translateX(${currPosition}px)`;

        updateButtons();
    }
});

updateButtons();

// faq-cards javascript
faqCards.forEach((card) => {
    card.addEventListener("click", () => {
        const answer = card.nextElementSibling;
        answer.classList.toggle("active");

        const icon = card.querySelector("i");
        icon.classList.toggle("rotate");
    });
});