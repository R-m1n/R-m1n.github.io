const textArray = ["Researcher", "Computer Scientist", "Programmer"];
const typingDelay = 100;
const erasingDelay = 50;
const newTextDelay = 1000;
let textIndex = 0;
let charIndex = 0;

const typedTextSpan = document.getElementById("typewriter");

function type() {
    if (charIndex < textArray[textIndex].length) {
        typedTextSpan.textContent += textArray[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    } else {
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    if (charIndex > 0) {
        typedTextSpan.textContent = textArray[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    } else {
        textIndex = (textIndex + 1) % textArray.length;
        setTimeout(type, typingDelay);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(type, newTextDelay);
});