const GOODDAY_TEXTS = [
    "Hello, World!", "Heló, Világ."
];
var gdt_idx = 0;
const html_label = document.getElementById("good-morning-label");

function main() {
    setText();
    setInterval(setText, 5000);
}

async function fadeText(startalpha, endalpha) {
    var t = 0;

    while (t < 1.0) {
        print(t);
        html_label.style.opacity = lerp(startalpha, endalpha, t);
        setTimeout(20);
        t += 0.02;
    }

    return;
}

function lerp(a, b, t) {
    return a + (b - a) * t;
}

async function setText() {
    gdt_idx = gdt_idx % GOODDAY_TEXTS.length;
    await fadeText(1, 0);
    html_label.innerText = GOODDAY_TEXTS[gdt_idx];
    await fadeText(0, 1);
    gdt_idx = gdt_idx + 1;
}

main();