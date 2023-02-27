
const recuadro = document.getElementById("recuadro");
const previewContainer = document.getElementById("pre_ver_imagen");
const previewImage = previewContainer.querySelector(".IPI");
const previewDefaultText = previewContainer.querySelector(".texto");

recuadro.addEventListener("change", function () {
  const file = this.files[0];

  if (file) {
    const reader = new FileReader();

    previewDefaultText.style.display = "none"
    previewImage.style.display = "block"

    reader.addEventListener("load", function () {
      previewImage.setAttribute("src", this.result)
    });
    reader.readAsDataURL(file);
  }
});

document.getElementById("boton-enviar").addEventListener("click", function () {
  document.getElementById("form-id").className = "enviado";
});

