


let i = document.querySelector("#i");
let s = document.querySelector("#s");
let p = document.querySelector("#p");
let c = document.querySelector("#c");

let intro = document.getElementById("intro");
let skills = document.getElementById("skills");
let projects = document.getElementById("projects");
let contact = document.getElementById("contact");

i.addEventListener("click" , () => {
    intro.style.display = "flex";
    i.style.color = "black";
    skills.style.display = "none";
    s.style.color = "white";
    projects.style.display = "none";
    p.style.color = "white";
    contact.style.display = "none";
    c.style.color = "white";
});

s.addEventListener("click" , () => {
    intro.style.display = "none";
    i.style.color = "white";
    skills.style.display = "flex";
    s.style.color = "black";
    projects.style.display = "none";
    p.style.color = "white";
    contact.style.display = "none";
    c.style.color = "white";
});

p.addEventListener("click" , () => {
    intro.style.display = "none";
    i.style.color = "white";
    skills.style.display = "none";
    s.style.color = "white";
    projects.style.display = "flex";
    p.style.color = "black";
    contact.style.display = "none";
    c.style.color = "white";
});

c.addEventListener("click" , () => {
    intro.style.display = "none";
    i.style.color = "white";
    skills.style.display = "none";
    s.style.color = "white";
    projects.style.display = "none";
    p.style.color = "white";
    contact.style.display = "flex";
    c.style.color = "black";
})