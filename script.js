//  Part 2: JavaScript Functions — Scope, Parameters & Return Values

// Global variable (accessible everywhere)
let isBoxAnimated = false;

// Function with parameter + return value
function calculateScale(factor) {
  // Local variable (only inside this function)
  let base = 1;
  return base * factor;
}

// Function to trigger box animation (demonstrates scope + DOM manipulation)
function triggerBoxAnimation() {
  const box = document.getElementById("box");
  if (!isBoxAnimated) {
    let scaleValue = calculateScale(1.5); // using parameter + return
    box.style.transform = `scale(${scaleValue}) rotate(45deg)`;
    isBoxAnimated = true;
  } else {
    box.style.transform = "scale(1) rotate(0)";
    isBoxAnimated = false;
  }
}

// 🎨🎬 Part 3: Combining CSS Animations with JavaScript

// Function to toggle modal visibility
function toggleModal() {
  const modal = document.getElementById("modal");
  modal.classList.toggle("show");
}

// Function to add CSS animation class dynamically
function addAnimation(elementId, animationClass) {
  const el = document.getElementById(elementId);
  el.classList.add(animationClass);

  // Remove class after animation so it can replay
  el.addEventListener("animationend", () => {
    el.classList.remove(animationClass);
  }, { once: true });
}

// Example: Add animation to box when page loads
window.onload = () => {
  addAnimation("box", "animate");
};
