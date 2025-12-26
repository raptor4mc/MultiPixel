// ---------------------------------------------
// UNBLUR ANIMATION
// ---------------------------------------------
window.addEventListener("load", () => {
    setTimeout(() => {
        document.body.classList.add("unblur");
    }, 250); // slight delay for cinematic effect
});


// ---------------------------------------------
// SWIPEABLE MENU CARDS
// ---------------------------------------------
const container = document.getElementById("menu-container");
const cards = Array.from(document.querySelectorAll(".menu-card"));

let startX = 0;
let currentOffset = 0;     // which card index we are centered on
let isDragging = false;


// Helper: update card positions + active state
function updateCardPositions() {
    const cardWidth = 260; // card width + gap
    container.style.transform =
        `translate(calc(-50% + ${currentOffset * -cardWidth}px), -50%)`;

    cards.forEach((card, index) => {
        card.classList.toggle("active", index === -currentOffset);
    });
}


// Pointer down
container.addEventListener("pointerdown", e => {
    startX = e.clientX;
    isDragging = true;
});


// Pointer move
container.addEventListener("pointermove", e => {
    if (!isDragging) return;

    const dx = e.clientX - startX;
    const cardWidth = 260;

    container.style.transform =
        `translate(calc(-50% + ${dx + currentOffset * -cardWidth}px), -50%)`;
});


// Pointer up
container.addEventListener("pointerup", e => {
    if (!isDragging) return;
    isDragging = false;

    const dx = e.clientX - startX;

    // Swipe threshold
    if (dx > 100) {
        currentOffset += 1; // swipe right
    } else if (dx < -100) {
        currentOffset -= 1; // swipe left
    }

    // Clamp offset
    currentOffset = Math.max(currentOffset, -(cards.length - 1));
    currentOffset = Math.min(currentOffset, 0);

    updateCardPositions();
});


// ---------------------------------------------
// CARD CLICK ACTIONS
// ---------------------------------------------
cards.forEach(card => {
    card.addEventListener("click", () => {
        const action = card.dataset.action;

        switch (action) {
            case "singleplayer":
                console.log("Singleplayer selected");
                // TODO: transition into game world
                break;

            case "multiplayer":
                console.log("Multiplayer selected");
                // TODO: open multiplayer menu
                break;

            case "credits":
                console.log("Credits selected");
                // TODO: show credits screen
                break;
        }
    });
});


// ---------------------------------------------
// TOP BAR BUTTONS
// ---------------------------------------------
document.getElementById("settings-btn").addEventListener("click", () => {
    console.log("Settings clicked");
    // TODO: open settings menu
});

document.getElementById("profile-btn").addEventListener("click", () => {
    console.log("Profile clicked");
    // TODO: open profile screen
});


// ---------------------------------------------
// INITIAL STATE
// ---------------------------------------------
updateCardPositions();
