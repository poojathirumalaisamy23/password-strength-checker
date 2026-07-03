const password = document.getElementById("password");
const progress = document.querySelector(".progress");

password.addEventListener("input", function () {

    let value = password.value;
    let score = 0;
    let suggestions = [];

if(value.length < 8){
    suggestions.push("Use at least 8 characters");
}

if(!/[A-Z]/.test(value)){
    suggestions.push("Add an uppercase letter");
}

if(!/[0-9]/.test(value)){
    suggestions.push("Add a number");
}

if(!/[^A-Za-z0-9]/.test(value)){
    suggestions.push("Add a special character");
}

if(suggestions.length === 0){
    suggestions.push("Strong password 🔥");
}

document.getElementById("suggestionText").innerHTML =
suggestions.join("<br>");

    if (value.length >= 8) score += 25;
    if (/[A-Z]/.test(value)) score += 25;
    if (/[0-9]/.test(value)) score += 25;
    if (/[^A-Za-z0-9]/.test(value)) score += 25;

    progress.style.width = score + "%";

    if (score <= 25) {
        progress.style.background = "red";
    } else if (score <= 50) {
        progress.style.background = "orange";
    } else if (score <= 75) {
        progress.style.background = "gold";
    } else {
        progress.style.background = "green";
    }
});
const toggle = document.getElementById("togglePassword");

toggle.addEventListener("click", function () {

    if (password.type === "password") {
        password.type = "text";
        toggle.innerHTML = "🙈";
    } else {
        password.type = "password";
        toggle.innerHTML = "👁️";
    }

});

const crackTime = document.getElementById("crackTime");
const scoreText = document.getElementById("scoreText");

password.addEventListener("input", function(){

let value = password.value;
let score = 0;

if(value.length >= 8) score += 25;
if(/[A-Z]/.test(value)) score += 25;
if(/[0-9]/.test(value)) score += 25;
if(/[^A-Za-z0-9]/.test(value)) score += 25;

scoreText.innerHTML = "Password Score: " + score + "/100";


if(score < 25){
crackTime.innerHTML="Crack Time: Instant ⚠️";
}
else if(score < 50){
crackTime.innerHTML="Crack Time: Few minutes";
}
else if(score < 75){
crackTime.innerHTML="Crack Time: Several days";
}
else{
crackTime.innerHTML="Crack Time: Very Strong 🔥";
}

});
const generateBtn = document.getElementById("generatePassword");

generateBtn.addEventListener("click", function(){

let chars = 
"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$!";

let newPassword = "";

for(let i = 0; i < 12; i++){

newPassword += chars.charAt(
Math.floor(Math.random() * chars.length)
);

}

password.value = newPassword;

password.dispatchEvent(new Event("input"));

});
const copyBtn = document.getElementById("copyPassword");

copyBtn.addEventListener("click", function () {

    navigator.clipboard.writeText(password.value);

    alert("Password copied successfully!");

});