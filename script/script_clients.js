const clients = document.querySelector(".clients");
const sliderClients = document.querySelector(".slider_clients");


const ulElemClients            = document.querySelector(".ul_clients");
const shiftPrevClients         = document.querySelector(".shift_prev_clients");
const shiftNextClients         = document.querySelector(".shift_next_clients");

const mediaPathClients = "media/";
const clientLogoList = ["client1.png", "client2.png", "client3.png", "client4.png"];

let clientIndex = 0;
let numberOfClients = 4;
let sliderStepSize;
let sliderWidth;
let clientStart = false;//при первой загрузке элементы слайдера не выделяются

const clientsInfoList = [
    {
        client_name: "Microsoft",
        years: "3 года бухгалтерского сопровождения",
    },
    {
        client_name: "Microsoft",
        years: "4 года бухгалтерского сопровождения",
    },
    {
        client_name: "Microsoft",
        years: "5 лет бухгалтерского сопровождения",
    },
    {
        client_name: "Microsoft",
        years: "у нас нет других клиентов :(",
    }
];

ulElemClients.append(...clientsInfoList.map(() => {
    const liElem = document.createElement("li");

    liElem.addEventListener("click", event => {
        const liElem_active = event.target;
        clientIndex = [...liElem_active.parentNode.children].indexOf(liElem_active);
        renderC();
    });
    return liElem;
})
);

clients.append(...clientLogoList.map(logo => {
    const clientElem = document.createElement("div");
    clientElem.classList.add("client_logo");
    const imgElem = document.createElement("img");
    imgElem.src = `${mediaPathClients + logo}`;

    let logoIndex = clientLogoList.indexOf(logo);

    const clientInfo = document.createElement("p"); 
    clientInfo.innerText = clientsInfoList[logoIndex].years;
    clientElem.append(imgElem, clientInfo);

    
    return clientElem;
}))


const clientsList = document.querySelectorAll(".client_logo"); 
const styleForClients = clients.childNodes;

function slide() {
    clients.style.left = -clientIndex * sliderStepSize + "px";

    const liList = document.querySelectorAll(".ul_clients li");
    liList.forEach(dot => dot.classList.remove("active"));
    liList[clientIndex].classList.add("active");

    if(clientStart) {
    styleForClients.forEach(item => item.style.backgroundColor = "transparent");
    styleForClients[clientIndex].style.backgroundColor = "white";
    }
    clientStart = true;

    
}

const renderC = () => {

    if(window.innerWidth < 1000) {
        numberOfClients = 1;
    } else if(window.innerWidth < 1400) {
        numberOfClients = 2;
    } else if(window.innerWidth < 1700) {
        numberOfClients = 3;
       clientsList.forEach(client => client.classList.remove("current_client"));

    } else {
        numberOfClients = 4;
    }

    sliderWidth = sliderClients.offsetWidth;
    sliderStepSize = sliderWidth/numberOfClients;

    clientsList.forEach(client => client.style.width = sliderStepSize + "px");
    clients.style.width = clientsList.length * sliderStepSize + "px";

        slide();



}
renderC();

shiftPrevClients.addEventListener("click", ()=>{
    if(clientIndex > 0) {
        clientIndex--;
    } else {
        clientIndex = clientsList.length - 1;
    }
    slide();
});

shiftNextClients.addEventListener("click", () => {
    if (clientsList.length - 1 > clientIndex) {
        clientIndex++
    } else {
        clientIndex = 0;
    }
    slide();
});



window.addEventListener("resize", renderC);
window.addEventListener("scroll", () => {
    if((clients.getBoundingClientRect().top > window.innerHeight) 
    || (clients.getBoundingClientRect().bottom < 0)) {
        styleForClients.forEach(item => item.style.backgroundColor = "transparent");
    }
})
