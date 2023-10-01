alert();
function hideShow(nam) {
  switch (nam.textContent) {
    case "Skills":
      document.querySelectorAll(".tab-contents")[0].classList.toggle("show");

      break;
    case "Experience":
      document.querySelectorAll(".tab-contents")[2].classList.toggle("show");
      break;
    case "Education":
      document.querySelectorAll(".tab-contents")[1].classList.toggle("show");
      break;

    default:
      console.log(this);
      break;
  }
}
for (
  var i = 0;
  i < document.querySelectorAll(".tab-titles .tab-links").length;
  i++
) {
  document
    .querySelectorAll(".tab-titles .tab-links")
    [i].addEventListener("click", function () {
      for (
        let i = 0;
        i < document.querySelectorAll(".tab-titles .tab-links").length;
        i++
      ) {
        document
          .querySelectorAll(".tab-links")
          [i].classList.remove("active-link");
        document.querySelectorAll(".tab-contents")[i].classList.remove("show");
      }
      this.classList.toggle("active-link");

      hideShow(this);
    });
}
