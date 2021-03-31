function setActive(el) {
    let allCards = document.getElementsByClassName("product");
    for (var i = 0; i < allCards.length; i++) {
        if (allCards[i].classList.contains("active")) {
            allCards[i].classList.remove("active");
        }
    }
    el.classList.add("active");
}

function showMobileMenu() {
    var element = document.getElementById("menu-wrap");
    element.classList.toggle("mobileMenu");
    document.getElementById("logo").classList.toggle("hide");
    document.getElementById("header").classList.toggle("mobile-header");
}