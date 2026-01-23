const GOODDAY_TEXTS = [
    "Hello, World!", "Heló, Világ."
];
var gdt_idx = 0;
const html_label = document.getElementById("good-morning-label");
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

function main() {
    setText();
    setInterval(setText, 5000);
}

async function fadeText(startalpha, endalpha) {
    var t = 0;

    do {
        html_label.style.opacity = lerp(startalpha, endalpha, t);
        await sleep(20);
        t += 0.02;
    } while (t < 1.0)
}

function lerp(a, b, t) {
    return a + (b - a) * t;
}

function setText() {
    gdt_idx = gdt_idx % GOODDAY_TEXTS.length;
    fadeText(1, 0);
    html_label.innerText = GOODDAY_TEXTS[gdt_idx];
    fadeText(0, 1);
    gdt_idx = gdt_idx + 1;
}

main();