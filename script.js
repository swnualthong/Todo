const inputbox = document.getElementById("input-box");
const listcontent = document.getElementById("list-content");
const popup = document.getElementById("popup");

let isPopupOpen = false;

showTask();

function addtask() {
    if (isPopupOpen) {
        return;
    }

    if (inputbox.value === '') {
        document.body.classList.add('blur-background');
        popup.classList.add("open-popup");
        document.querySelector('.container').classList.add('blur-text');
        document.querySelector('.site-copyright').classList.add('blur-text');
        isPopupOpen = true;
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        listcontent.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        saveData();
    }

    inputbox.value = "";
}

function closePopup() {
    document.body.classList.remove('blur-background');
    document.querySelector('.container').classList.remove('blur-text');
    document.querySelector('.site-copyright').classList.remove('blur-text');
    popup.classList.remove("open-popup");
    isPopupOpen = false;
}

listcontent.addEventListener("click", function (e) {
    if (isPopupOpen) {
        return;
    }

    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("data", listcontent.innerHTML);
}

function showTask() {
    listcontent.innerHTML = localStorage.getItem("data");
}
