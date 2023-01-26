const resources = [
    {
        category: "HTML",
        text: "HTML står for HyperText Markup Language, og er et strukturspråk som brukes for å lage strukturer til nettside- og applikasjonsgrensesnitt.",
        sources: [
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/html/"
            },
            {
                title: "HTML Living standard",
                url: "https://html.spec.whatwg.org/multipage/"
            },
            {
                title: "HTML.com Tutorials",
                url: "https://html.com/"
            },
        ]
    },
    {
        category: "CSS",
        text: "CSS står for Cascading StyleSheets, og brukes for å sette stilregler på HTML-elementer.",
        sources: [
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/css/"
            },
            {
                title: "W3C HTML & CSS Standards",
                url: "https://www.w3.org/standards/webdesign/htmlcss.html"
            },
            {
                title: "W3C CSS Validator",
                url: "https://jigsaw.w3.org/css-validator/"
            },
            {
                title: "CSS Tricks",
                url: "https://css-tricks.com/"
            },
        ]
    },
    {
        category: "JavaScript",
        text: "JavaScript er et scriptspråk basert på EcmaScript. JavaScript kjører direkte i nettleseren, og brukes ofte til å manipulere HTML og CSS i webgrensnesnitt.",
        sources: [
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/js/"
            },
            {
                title: "MDN Web Docs",
                url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            },
            {
                title: "How to read JavaScript Documentation",
                url: "https://www.youtube.com/watch?v=O3iR-CIufKM"
            },
        ]
    },
    {
        category: "React",
        text: "React er et rammeverk bygget i JavaScript. React bruker komponenter og states for å lage en levende frontend.",
        sources: [
            {
                title: "React documentation",
                url: "https://reactjs.org/docs/getting-started.html"
            },
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/REACT/DEFAULT.ASP"
            },
            {
                title: "How to read JavaScript Documentation",
                url: "https://www.youtube.com/watch?v=O3iR-CIufKM"
            },
        ]
    },
    {
        category: "Sanity and headless CMS",
        text: "Sanity er et headless CMS som står for innholdsadministrasjon. Innhold hentes inn i applikasjoner via GROQ-spørringer.",
        sources: [
            {
                title: "Sanity documentation",
                url: "https://www.sanity.io/docs"
            },
            {
                title: "OnCrawl: a beginners guide to headless CMS",
                url: "https://www.oncrawl.com/technical-seo/beginners-guide-headless-cms/"
            },
            {
                title: "Section.io: Getting started with Sanity CMS",
                url: "https://www.section.io/engineering-education/getting-started-with-sanity-cms/"
            },
        ]
    },
]


let title = document.querySelector("#title");
let text = document.querySelector("#text");
let list = document.querySelector("#list");
let nav = document.querySelector("#navigation");


function tab(number) {
    for (var i = 0; i < resources.length; i++) {
        if (number == i) {
            for (var j = 0; j < resources[i].sources.length; j++) {

                title.innerHTML = resources[i].category + " ";
                text.innerHTML = resources[i].text + " ";

                let li = document.createElement('li');
                let a = document.createElement('a');
                a.setAttribute("href", resources[i].sources[j].url);
                a.innerHTML = resources[i].sources[j].title;
                li.appendChild(a);
                list.appendChild(li);
            }
        }
    }

}

for (let n = 0; n < resources.length; n++) {
    let navButtons = document.createElement('button');
    navButtons.innerHTML = resources[n].category;
    navButtons.setAttribute("data-id", n);
    if (n == 0) {
        navButtons.classList.add("active");
        tab(parseInt(navButtons.getAttribute("data-id")));
    }
    nav.appendChild(navButtons);
}

const buttons = document.querySelectorAll("button");
for (let k = 0; k < buttons.length; k++) {
    buttons[k].addEventListener("click", function () {
        const dataId = this.getAttribute("data-id");
        for (let m = 0; m < buttons.length; m++) {
            buttons[m].classList.remove("active");
        }
        this.classList.add("active");
        list.innerHTML = "";
        tab(dataId);
    });
}

