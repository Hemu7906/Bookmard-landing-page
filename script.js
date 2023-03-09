// JavaScript for making responsive navigation bar

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav_menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav_links").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))

// JavaScript for making corousel 

document.querySelectorAll(".carousel").forEach((carousel) => {
    const items = carousel.querySelectorAll(".carousel__item");
    const buttonsHtml = Array.from(items, () => {
      return `<span class="carousel__button"></span>`;
    });
  
    const buttons = carousel.querySelectorAll(".carousel__button");
  
    buttons.forEach((button, i) => {
      button.addEventListener("click", () => {
        // un-select all the items
        items.forEach((item) =>
          item.classList.remove("carousel__item--selected")
        );
        buttons.forEach((button) =>
          button.classList.remove("carousel__button--selected")
        );
  
        items[i].classList.add("carousel__item--selected");
        button.classList.add("carousel__button--selected");
      });
    });
  
    // Select the first item on page load
    items[0].classList.add("carousel__item--selected");
    buttons[0].classList.add("carousel__button--selected");
  });


// JavaScript for making Accordion

const acc_btns = document.querySelectorAll(".accordion_header");
const acc_contents = document.querySelectorAll(".accordion_body");

acc_btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        acc_contents.forEach((acc) => {
            if (
                e.target.nextElementSibling !== acc && 
                acc.classList.contains("active")
            ) {
                acc.classList.remove("active");
                acc_btns.forEach((btn) => btn.classList.remove("active"));
                }
        });

        const panel = btn.nextElementSibling;
        panel.classList.toggle("active");
        btn.classList.toggle("active");
    });
});

window.onclick = (e) => {
    if (!e.target.matches(".accordion_header")) {
        acc_btns.forEach((btn) => btn.classList.remove("active"));
        acc_contents.forEach((acc) => acc.classList.remove("active"));
    }
}