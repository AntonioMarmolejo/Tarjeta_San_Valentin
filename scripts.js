document.addEventListener("DOMContentLoaded", function () {
    const valentineCard = document.querySelector(".valentine");
    const text = document.querySelector(".cards1");
    const text2 = document.querySelector(".cards2");
    const text3 = document.querySelector(".cards3");
    const openCardsLeft = document.querySelector(".front");

    const dayMother = document.querySelector(".mother");
    const textTwo = document.querySelector(".cards1-2");
    const text2Two = document.querySelector(".cards2-2");
    const text3Two = document.querySelector(".cards3-2");
    const text4Two = document.querySelector(".cards3-2_edit");
    const openCardsLeftTwo = document.querySelector(".front2");

    function openCard() {
        valentineCard.classList.toggle("closed");
        text.classList.toggle("open");
        text2.classList.toggle("open1");
        text3.classList.toggle("open3");
        openCardsLeft.classList.toggle("frontOpen2");
    }
    function openCard2() {
        dayMother.classList.toggle("closed");
        textTwo.classList.toggle("open");
        text2Two.classList.toggle("open1");
        text3Two.classList.toggle("open3");
        text4Two.classList.toggle("open4");
        openCardsLeftTwo.classList.toggle("frontOpen2");
    }

    valentineCard.addEventListener("click", openCard);
    dayMother.addEventListener("click", openCard2);
});
