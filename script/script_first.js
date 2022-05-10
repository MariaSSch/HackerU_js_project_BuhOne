const firstScreen          = document.querySelector(".first_screen");
const h2Title           = document.querySelector(".screen_title");

const ulElem            = document.querySelector(".ul_screen");
const shift             = document.querySelector(".shift");
const shiftPrev         = document.querySelector(".shift_prev");
const shiftNext         = document.querySelector(".shift_next");


const imgList = ["1.png", "2.png", "3.png", "4.png"];
const mediaPath = "media/slider/";
let imgIndex = 0;

const serviceList = [
    "Бухгалтерские услуги в Санкт-Петербурге",
    "Консультации о налогах",
    "Сдача отчетности",
    "Ведение бухгалтерского учета"
];

ulElem.append(...imgList.map((_, index) => {
    const liElem = document.createElement("li");

    liElem.addEventListener("click", event => {
        const liElem_active = event.target;
        imgIndex = [...liElem_active.parentNode.children].indexOf(liElem_active);

        render();
    });
    return liElem;
})
);

function render() {
    firstScreen.style.backgroundImage = `url("${mediaPath + imgList[imgIndex]}")`;
    h2Title.innerText = serviceList[imgIndex];

    const liList = document.querySelectorAll(".ul_screen li");
    liList.forEach(dot => dot.classList.remove("active"));
    liList[imgIndex].classList.add("active");
}

shiftPrev.addEventListener("click", ()=>{
    if(imgIndex > 0) {
        imgIndex--;
    } else {
        imgIndex = imgList.length - 1;
    }

    render();
});

shiftNext.addEventListener("click", () => {
    if (imgList.length - 1 > imgIndex) {
        imgIndex++
    } else {
        imgIndex = 0;
    }
    render();
});

render();