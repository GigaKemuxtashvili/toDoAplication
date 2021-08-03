const leftAside = document.querySelector(".left");
const rightAside = document.querySelector(".right");
const titles = document.querySelectorAll(".title");
const texts = document.querySelectorAll(".text");
const tbody = document.querySelector("tbody");
const adderBtn = document.querySelector("#adder");

// value = textArea

adderBtn.addEventListener("click", function () {
    var title;
    var text;
    if (leftAside.classList.contains("active")) {
        title = titles[0].value;
        text = texts[0].value
    } else {
        title = titles[1].value;
        text = texts[1].value
    }
    insertHtmlInTbody(title,text);
});


function insertHtmlInTbody(title,text){
    var tr = 
    `<tr>
        <td>${title}</td>
        <td>${text}</td>
        <td>${(new Date()).toISOString()}</td>
    </tr>`

    tbody.innerHTML += tr;
}



leftAside.addEventListener("click", function () {
    this.classList.add("active");
    if (rightAside.classList.contains("active")) {
        rightAside.classList.remove("active");
    }
});


rightAside.addEventListener("click", function () {
    this.classList.add("active");
    if (leftAside.classList.contains("active")) {
        leftAside.classList.remove("active");
    }
});