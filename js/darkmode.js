let darkMode = localStorage.getItem('darkMode');
const darkModeToggle = document.querySelector('#dark-mode-toggle');
const mobileDarkModeToggle = document.querySelector("#mobile-dark-mode-toggle");

//Desktop
const enableDarkMode = () => {
    document.body.classList.add("darkmode");
    localStorage.setItem("darkMode", "enabled");
    const darkModeInput = document.querySelector("#dark-mode-input");
    darkModeInput.checked = true;
};

const disableDarkMode = () => {
    document.body.classList.remove("darkmode");
    localStorage.setItem("darkMode", null);
    const darkModeInput = document.querySelector("#dark-mode-input");
    darkModeInput.checked = false;
};

//Mobile
const enableDarkModeMobile = () => {
    document.body.classList.add("darkmode");
    localStorage.setItem("darkMode", "enabled");
    const darkModeInput = document.querySelector("#mobile-dark-mode-input");
    darkModeInput.checked = true;
};

const disableDarkModeMobile = () => {
    document.body.classList.remove("darkmode");
    localStorage.setItem("darkMode", null);
    const darkModeInput = document.querySelector("#mobile-dark-mode-input");
    darkModeInput.checked = false;
};

function checkDarkMode() {
    if(darkMode === "enabled") {
        document.body.classList.add("darkmode");
        localStorage.setItem("darkMode", "enabled");
        const darkModeInput = document.querySelector("#dark-mode-input");
        const mobileInput = document.querySelector("#mobile-dark-mode-input");
        const sun = document.getElementById("sun");
        darkModeInput.checked = true;
        mobileInput.checked = true;
        sun.style.display = "none";
    }
}

function darkModeListener() {
    darkModeToggle.addEventListener("change", () => {
        const darkModeInput = document.querySelector('#dark-mode-input');
        const sun = document.getElementById("sun");
        if (darkModeInput.checked === true) {
            enableDarkMode();
            sun.style.display = "none";
            console.log("Enabled darkmode");
        } else {
            disableDarkMode();
            sun.style.display = "inline";
            console.log("Enabled lightmode");
        }
        makeNavTransparent();
    });


    mobileDarkModeToggle.addEventListener("change", () => {
        const darkModeInput = document.querySelector('#mobile-dark-mode-input');
        if (darkModeInput.checked === true) {
            enableDarkModeMobile();
            console.log("Enabled darkmode");
        } else {
            disableDarkModeMobile();
            console.log("Enabled lightmode");
        }
    });
}

function makeNavTransparent() {
    let nav = document.getElementById("navbar");
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        //Darkmode enabled
        if (localStorage.getItem("darkMode") === "enabled") {
            nav.style.background = "#121212";
            nav.style.borderBottom = "1px solid #303030";
            nav.style.transition = "background .2s";
        } else {
            //Lightmode enabled
            nav.style.background = "#FFF";
            nav.style.borderBottom = "1px solid lightgrey";
            nav.style.transition = "background .2s";
        }
    } else {
        //Transparent nav at top
        nav.style.backgroundColor = "transparent";
        nav.style.border = "0";
    }
}

//If dark mode is enabled, enable switch for desktop and mobile
checkDarkMode();
darkModeListener();