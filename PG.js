let inputSlider = document.getElementById("inputSlider");
let sliderValue = document.getElementById("sliderValue");
let passBox = document.getElementById("passBox");
let lowercase = document.getElementById("lowercase");
let uppercase = document.getElementById("uppercase");
let numbers = document.getElementById("numbers");
let symbols = document.getElementById("symbols");
let genBtn = document.getElementById("genBtn");


sliderValue.textContent = inputSlider.value;
inputSlider.addEventListener('input', () => {
    sliderValue.textContent = inputSlider.value;
});

genBtn.addEventListener('click', () => {

    passBox.value = generatePassword();
});
let lowerChar = "abcdefghijklmnopqrstuvwxyz";
let upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let num = "0123456789";
let sym = "!@#$%^&*~"

function generatePassword() {
    let genPassword = "";
    let allChar = "";

    allChar += lowercase.checked ? lowerChar : "";
    allChar += uppercase.checked ? upperChar : "";
    allChar += numbers.checked ? num : "";
    allChar += symbols.checked ? sym : "";

    if (allChar === "") {
        return genPassword;
    }

    for (let i = 0; i < inputSlider.value; i++) {
        genPassword += allChar.charAt(Math.floor(Math.random() * allChar.length));
    }

    return genPassword;
}
let copyIcon = document.getElementById("copyIcon");

copyIcon.addEventListener('click', () => {
    if (passBox.value.length > 0) {
        navigator.clipboard.writeText(passBox.value);
        copyIcon.textContent = "✅"; // feedback on copy
        setTimeout(() => {
            copyIcon.textContent = "📋";
        }, 1000);
    }
});
