const comment = document.querySelector(".comment");
const personAvatar = document.querySelector(".person_avatar");
const personName   = document.querySelector(".person_name");
const personPosition  = document.querySelector(".person_position");

const ulElemReview            = document.querySelector(".ul_review");
const shiftPrevReview         = document.querySelector(".shift_prev_review");
const shiftNextReview         = document.querySelector(".shift_next_review");


const mediaPathAvatar = "media/avatar/";
let reviewIndex = 0;

const reviewList = [
    {
        name: "Екатерина Иванова",
        avatar: "1.png",
        position: "Директор ООО “Раз-два”",
        review: "Lorem Ipsum - это текст-рыба, часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной рыбой для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum - это текст-рыба, часто используемый в печати и вэб-дизайне. "
    },
    {
        name: "Госпожа Беладонна", 
        avatar: "2.png",
        position: "Владелица магазина «Слеза ребенка»",
        review: "Люблю детишек, которые вопят: «Хочу то! Хочу это!» Дети плачут, а родители платят. Каждая детская слезинка — это монета! Ах, мне было бы так одиноко без моего миллиона!"
    },
    {
        name: "Скрудж МакДак",
        avatar: "3.png",
        position: "Миллиардер",
        review: "Как я стал таким богатым? Я был умнее самых умных и упорнее самых упорных! Там, где вы видите старый сарай, я вижу дело с оборотом в миллион долларов! Я заслужил всё до последнего пенни потому что всё заработал честно.",
    },
    {
        name: "Джон Сильвер",
        avatar: "4.png",
        position: "Пират",
        review: "Так всегда с джентльменами удачи. Жизнь у них тяжелая, они рискуют попасть на виселицу, но едят и пьют как боевые петухи перед боем. Они уходят в плавание с сотнями медных грошей, а возвращаются с сотнями фунтов. Добыча пропита, деньги растрачены – и снова в море в одних рубашках. Но я поступаю не так. Я вкладываю все свои деньги по частям в разные банки, но нигде не кладу слишком много, чтобы не возбудить подозрения."
    }
];

ulElemReview.append(...reviewList.map((_, index) => {
    const liElem = document.createElement("li");

    liElem.addEventListener("click", event => {
        const liElem_active = event.target;
        reviewIndex = [...liElem_active.parentNode.children].indexOf(liElem_active);

        renderR();
    });
    return liElem;
})
);

function renderR() {
    personAvatar.style.backgroundImage = `url("${mediaPathAvatar + reviewList[reviewIndex].avatar}")`;
    comment.innerText = reviewList[reviewIndex].review;
    personName.innerText = reviewList[reviewIndex].name;
    personPosition.innerText = reviewList[reviewIndex].position;


    const liList = document.querySelectorAll(".ul_review li");
    liList.forEach(dot => dot.classList.remove("active"));
    liList[reviewIndex].classList.add("active");
}

shiftPrevReview.addEventListener("click", ()=>{
    if(reviewIndex > 0) {
        reviewIndex--;
    } else {
        reviewIndex = reviewList.length - 1;
    }

    renderR();
});

shiftNextReview.addEventListener("click", () => {
    if (reviewList.length - 1 > reviewIndex) {
        reviewIndex++
    } else {
        reviewIndex = 0;
    }
    renderR();
});

renderR();