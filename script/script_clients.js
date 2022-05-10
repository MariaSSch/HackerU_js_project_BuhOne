const clients = document.querySelector(".clients");
const sliderClients = document.querySelector(".slider_clients");

const ulElemClients            = document.querySelector(".ul_clients");
const shiftPrevClients         = document.querySelector(".shift_prev_clients");
const shiftNextClients         = document.querySelector(".shift_next_clients");

const mediaPathClients = "media/";
const clientLogoList = ["client1.png", "client2.png", "client3.png", "client4.png"];
let clientIndex = 0;
let clientStart = false;//при первой загрузке страницы элементы слайдера не выделяются

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
    const divElem = document.createElement("div");
    divElem.classList.add("client_logo");
    const imgElem = document.createElement("img");
    imgElem.src = `${mediaPathClients + logo}`;

    const clientInfo = document.createElement("p");
    let logoIndex = clientLogoList.indexOf(logo);
    clientInfo.innerText = clientsInfoList[logoIndex].years;
    divElem.append(imgElem, clientInfo);
    
    return divElem;
}))

const clientsList = document.querySelectorAll(".client_logo"); 

function renderC() {

    if(document.documentElement.clientWidth < 1300) {
        const window_width = sliderClients.offsetWidth;
        clients.style.right = window_width * clientIndex + "px";
        clientsList.forEach(client => client.classList.remove("current_client"));

    } else {

        clientsList.forEach(client => client.classList.remove("current_client"));

        if (clientStart){  //при первой загрузке страницы элементы слайдера не выделяются
            clientsList[clientIndex].classList.add("current_client");
        }
        clientStart = true;


        window.addEventListener("resize", e => {
            if (document.documentElement.clientWidth < 1300) {
                clientsList[clientIndex].classList.remove("current_client");
        
            }
        });
    }
    const liList = document.querySelectorAll(".ul_clients li");
    liList.forEach(dot => dot.classList.remove("active"));
    liList[clientIndex].classList.add("active");

    
}

shiftPrevClients.addEventListener("click", ()=>{
    if(clientIndex > 0) {
        clientIndex--;
    } else {
        clientIndex = clientsList.length - 1;
    }

    renderC();
});

shiftNextClients.addEventListener("click", () => {
    if (clientsList.length - 1 > clientIndex) {
        clientIndex++
    } else {
        clientIndex = 0;
    }
    renderC();
});

renderC();