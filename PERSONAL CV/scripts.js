const elList = document.getElementById("list");
      const elHamburger = document.getElementById("hamburger");

      elHamburger.addEventListener("click", () => {
        if (elList.classList[0] == undefined) {
          elList.classList.add("active");
        } else {
          elList.classList.remove("active");
        }
      });