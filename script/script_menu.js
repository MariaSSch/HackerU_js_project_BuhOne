const navBtn = document.querySelector(".nav_btn");
const menuElem = document.querySelector(".menu");

navBtn.addEventListener("click", () => {
    menuElem.classList.toggle("menuOn");
});

const menuItems = [...document.querySelectorAll(".menu li")];
menuItems.forEach(item => item.addEventListener("click", () => {
    menuElem.classList.remove("menuOn")
})
);

window.addEventListener("resize", e => {
    if (document.documentElement.clientWidth > 1300) {
        menuElem.classList.remove("menuOn");

    }
});

const navArr = document.querySelectorAll(".first_line li");
const pageArr = document.querySelectorAll(".page");

navArr.forEach((elem, index) => { 
    elem.addEventListener("click", () => {
        pageArr[index].scrollIntoView({behavior: "smooth"});
    })
});