const form = document.querySelector(".js-form"),
    name = form.querySelector("input");

const USER_LS = "pxz";
const SHOWING_ON = "showing";

function showingName(text){
    form.classList.remove(SHOWING_ON);
}

function getName(){
    const currentUser = localStorage.getItem(USER_LS);

    if (currentUser === null){  
        localStorage.setItem(USER_LS, currentUser);
    } else {


        showingName(currentUser);
    }
}

function init(){
    getName();
}

init();