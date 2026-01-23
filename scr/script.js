const GOODDAY_TEXTS = [
    "Hello, World!", "Heló, Világ."
]
gdt_idx = 0;
const html_label = document.getElementById('good-morning-label');

function main() {
    setInterval(setText, 2500);
}

function setText() {
    gdt_idx = gdt_idx % GOODDAY_TEXTS.length;
    html_label.innerHTML = GOODDAY_TEXTS[gdt_idx];
    gdt_idx = gdt_idx + 1;
}