// ---------------------------------------------
// UNBLUR ANIMATION
// ---------------------------------------------
window.addEventListener("load", () => {
    setTimeout(() => {
        document.body.classList.add("unblur");
    }, 100);
});


// ---------------------------------------------
// MENU OPTIONS (in circular order)
// ---------------------------------------------
const options = [
    "Singleplayer",
    "Multiplayer",
    "Credits"
];

let index = 0;


// ---------------------------------------------
// ELEMENT REFERENCES
// ---------------------------------------------
const leftBox   = document.getElementById("menu-left");
const centerBox = document.getElementById("menu-center");
const rightBox  = document.getElementById("menu-right");
const centerLabel = document.getElementById("menu-label");


// ---------------------------------------------
// UPDATE UI BASED ON CURRENT INDEX
// ---------------------------------------------
function updateMenu() {
    const left  = (index - 1 + options.length) % options.length;
    const right = (index + 1) % options.length;

    leftBox.textContent = options[left];
    centerLabel.textContent = options[index];
    rightBox.textContent = options[right];
}

updateMenu();


// ---------------------------------------------
// ROTATION LOGIC + ANIMATION
// ---------------------------------------------
function rotateLeft() {
    centerBox.classList.remove("animate-right");
    centerBox.classList.add("animate-left");

    index = (index - 1 + options.length) % options.length;
    updateMenu();

    setTimeout(() => centerBox.classList.remove("animate-left"), 250);
}

function rotateRight() {
    centerBox.classList.remove("animate-left");
    centerBox.classList.add("animate-right");

    index = (index + 1) % options.length;
    updateMenu();

    setTimeout(() => centerBox.classList.remove("animate-right"), 250);
}


// ---------------------------------------------
// KEYBOARD INPUT
// ---------------------------------------------
window.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") rotateLeft();
    if (e.key === "ArrowRight") rotateRight();
    if (e.key === "Enter") selectOption();
});


// ---------------------------------------------
// SWIPE INPUT
// ---------------------------------------------
let startX = 0;
let isSwiping = false;

document.addEventListener("pointerdown", (e) => {
    startX = e.clientX;
    isSwiping = true;
});

document.addEventListener("pointerup", (e) => {
    if (!isSwiping) return;
    isSwiping = false;

    const dx = e.clientX - startX;

    if (dx > 80) rotateLeft();
    else if (dx < -80) rotateRight();
});


// ---------------------------------------------
// SELECT OPTION
// ---------------------------------------------
function selectOption() {
    const selected = options[index];

    switch (selected) {
        case "Singleplayer":
            console.log("Singleplayer selected");
            break;

        case "Multiplayer":
            console.log("Multiplayer selected");
            break;

        case "Credits":
            console.log("Credits selected");
            break;
    }
}

centerBox.addEventListener("click", selectOption);


// ---------------------------------------------
// TOP BAR BUTTONS
// ---------------------------------------------
document.getElementById("settings-btn").addEventListener("click", () => {
    console.log("Settings clicked");
});

document.getElementById("profile-btn").addEventListener("click", () => {
    console.log("Profile clicked");
});
