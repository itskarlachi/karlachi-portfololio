// Object.values(document.getElementsByTagName("a"))
//   .filter(
//     (anchor) =>
//       anchor.getAttribute("href") && anchor.getAttribute("href").includes("#")
//   )
//   .forEach((anchor) => {
//     anchor.addEventListener("click", function (e) {
//       e.preventDefault()

//       document.querySelector(this.getAttribute("href")).scrollIntoView({
//         behavior: "smooth",
//       })
//     })
//   })
