document.addEventListener("DOMContentLoaded", function () {
    const valentineCard = document.querySelector(".valentine");
    const text = document.querySelector(".cards1");
    const text2 = document.querySelector(".cards2");
    const text3 = document.querySelector(".cards3");
    const openCardsLeft = document.querySelector(".front");
    valentineCard.addEventListener("click", function () {
        valentineCard.classList.toggle("closed");
        text.classList.toggle("open");
        text2.classList.toggle("open1");
        text3.classList.toggle("open3");
        openCardsLeft.classList.toggle("frontOpen2");
    });
});
