// ---------------------------------------------
// UNBLUR ANIMATION
// ---------------------------------------------
window.addEventListener("load", () => {
    setTimeout(() => {
        document.body.classList.add("unblur");
    }, 100); // fast cinematic unblur
});


// ---------------------------------------------
// MENU OPTIONS (in circular order)
// ---------------------------------------------
const options = [
    "Singleplayer",
    "Multiplayer",
    "Credits"
];

// Index of the currently selected option
let index = 0;


// ---------------------------------------------
// ELEMENT REFERENCES
// ---------------------------------------------
const centerLabel = document.getElementById("menu-label");

const corners = {
    tl: document.querySelector(".top-left"),
    tr: document.querySelector(".top-right"),
    bl: document.querySelector(".bottom-left"),
    br: document.querySelector(".bottom-right")
};


// ---------------------------------------------
// UPDATE UI BASED ON CURRENT INDEX
// ---------------------------------------------
function updateMenu() {
    // Center label
    centerLabel.textContent = options[index];

    // Corner previews (next/previous options)
    const left  = (index - 1 + options.length) % options.length;
    const right = (index + 1) % options.length;

    // Assign text to corners (optional: icons later)
    corners.tl.textContent = options[left];
    corners.bl.textContent = options[left];

    corners.tr.textContent = options[right];
    corners.br.textContent = options[right];
}

updateMenu();


// ---------------------------------------------
// ROTATION LOGIC
// ---------------------------------------------
function rotateLeft() {
    index = (index - 1 + options.length) % options.length;
    updateMenu();
}

function rotateRight() {
    index = (index + 1) % options.length;
    updateMenu();
}


// ---------------------------------------------
// KEYBOARD INPUT (PC)
// ---------------------------------------------
window.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") rotateLeft();
    if (e.key === "ArrowRight") rotateRight();
    if (e.key === "Enter") selectOption();
});


// ---------------------------------------------
// TOUCH / SWIPE INPUT (MOBILE + PC)
// ---------------------------------------------
let startX = 0;
let isSwiping = false;

document.addEventListener("pointerdown", (e) => {
    startX = e.clientX;
    isSwiping = true;
});

document.addEventListener("pointermove", (e) => {
    if (!isSwiping) return;
});

document.addEventListener("pointerup", (e) => {
    if (!isSwiping) return;
    isSwiping = false;

    const dx = e.clientX - startX;

    if (dx > 80) rotateLeft();
    else if (dx < -80) rotateRight();
});


// ---------------------------------------------
// SELECT OPTION (ENTER or TAP CENTER)
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

document.getElementById("menu-center").addEventListener("click", selectOption);


// ---------------------------------------------
// TOP BAR BUTTONS
// ---------------------------------------------
document.getElementById("settings-btn").addEventListener("click", () => {
    console.log("Settings clicked");
});

document.getElementById("profile-btn").addEventListener("click", () => {
    console.log("Profile clicked");
});
