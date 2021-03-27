function setActive(el) {
    let allCards = document.getElementsByClassName("product");
    for (var i = 0; i < allCards.length; i++) {
        if (allCards[i].classList.contains("active")) {
            allCards[i].classList.remove("active");
        }
    }
    el.classList.add("active");
}