const GOODDAY_TEXTS = [
    "Hello, World!"
];
var gdt_idx = 0;
const html_label = document.getElementById("good-morning-label");
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

function main() {
    setText();
    setInterval(setText, 5000);
}

function setText() {
    gdt_idx = gdt_idx % GOODDAY_TEXTS.length;
    html_label.style.transition = "opacity 1.0"
    html_label.innerText = GOODDAY_TEXTS[gdt_idx];
    html_label.style.transition = "opacity 0.0"
    gdt_idx = gdt_idx + 1;
}

main();