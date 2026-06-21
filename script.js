var acc = document.getElementsByClassName
    ("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function
        () {
        this.classList.toggle("active");
        this.parentElement.classList.toggle("active");

        var panel = this.nextElementSibling;

        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}
// 🚀 Simplified: Only store the changing headings
const headingSequence = [
    "Pakistan's #1 Smart Egg Trading Platform.",
    "Connecting Poultry Farms and Egg Traders in a Simplified Way.",
    "Representing The Future <br> of Egg Trading: Fast and Smart."
];

// 🚀 Store your static paragraph text in one single location
const staticParagraphText = "EggX is a digital marketplace for fresh eggs that connects poultry farmers across the country with a vast network of fresh egg consumers in their areas, where they can sell their farm eggs at the best prices they want.";

let currentIndex = 0;
const h1Element = document.getElementById("fade-h1");
const pElement = document.getElementById("fade-p");

function cycleHeadingSequence() {
    // 1. Remove visibility class directly from the H1 element
    h1Element.classList.remove("visible");

    // Wait for the fade-out transition to complete (600ms)
    setTimeout(() => {
        // 2. Inject the next headline string
        h1Element.innerHTML = headingSequence[currentIndex];

        // 3. Add visibility back to transition the new headline in
        h1Element.classList.add("visible");

        // Advance to the next heading in the loop
        currentIndex = (currentIndex + 1) % headingSequence.length;
    }, 600); 
}

// Initialize layout configurations on page load
document.addEventListener("DOMContentLoaded", () => {
    // Set the static paragraph text once (it will never blink or disappear)
    pElement.textContent = staticParagraphText;

    // Load and display the initial first frame headline
    h1Element.innerHTML = headingSequence[0].h1 || headingSequence[0]; 
    h1Element.classList.add("visible");
    currentIndex = 1;

    // Rotate the heading values every 4.5 seconds
    setInterval(cycleHeadingSequence, 4500);
});