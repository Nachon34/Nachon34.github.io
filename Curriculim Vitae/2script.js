


const fullScreenElement = document.getElementById("fullscreen-img");
const imgElement = document.getElementById("show-img")
imgElement.addEventListener("click", function () {
    fullScreenElement.style.display = "block"

});
fullScreenElement.addEventListener("click", function () {
    fullScreenElement.style.display = "none"
});

const darkButton = document.getElementById("black-button");
let isDark = false;

darkButton.addEventListener("click", function () {
    if (isDark) {
        document.body.style.setProperty("--main-font-color", "#000")
        document.body.style.setProperty("--secondary-font-color", "#fff")
        document.body.style.setProperty("--main-background", "linear-gradient(to bottom, #95A8BC 0%, #FFFFFF 72%, #3A3B63 100%)")
        document.body.style.setProperty("--secondary-background", "#666699")
        darkButton.textContent = "Modo Oscuro"

    }
    else {
        document.body.style.setProperty("--main-font-color", "#fff")
        document.body.style.setProperty("--secondary-font-color", "#000")
        document.body.style.setProperty("--main-background", "linear-gradient(to bottom, #3a3127 0%, #000000 90% )")
        document.body.style.setProperty("--secondary-background", "#999966")
        darkButton.textContent = "Modo Claro"
    }

    isDark = !isDark
})