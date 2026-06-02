const faqCards = document.querySelectorAll(".faq-card");

faqCards.forEach((card) => {
    card.addEventListener("click", () => {
        const answer = card.nextElementSibling;
        answer.classList.toggle("active");

        const icon = card.querySelector("i");
        icon.classList.toggle("rotate");
    });
});