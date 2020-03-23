let darkMode = localStorage.getItem('darkMode');
const darkModeToggle = document.querySelector('#dark-mode-toggle');

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

if(darkMode === "enabled") {
    enableDarkMode();
}

darkModeToggle.addEventListener("change", () => {
    const darkModeInput = document.querySelector('#dark-mode-input');
    if (darkModeInput.checked === true) {
        enableDarkMode();
        console.log("Enabled darkmode");
    } else {
        disableDarkMode();
        console.log("Enabled lightmode");
    }
});