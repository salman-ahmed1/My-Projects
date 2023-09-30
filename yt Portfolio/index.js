alert();
function hideShow(nam) {
  switch (nam.textContent) {
    case "Skills":
      document.querySelectorAll(".tab-contents")[0].classList.add("show");

      break;
    case "Education":
      document.querySelectorAll(".tab-contents")[1].classList.add("show");
      break;
    case "Experience":
      document.querySelectorAll(".tab-contents")[2].classList.add("show");
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
          [i].classList.remove("active-link", "show");
        document.querySelectorAll(".tab-content")[i].classList.remove("show");
      }
      this.classList.toggle("active-link");
      hideShow(this);
    });
}
