const increaseCounter = evt => {
  if (evt.target.id !== "reset-button") {
    const counter = document.querySelector("#count");
    const count = Number(counter.innerText);

    counter.innerText = count + 1;

    const tallyClicker = document.querySelector("#tally-clicker");
    tallyClicker.classList.add("tallied");
  }
};

const resetCount = () => {
  const counter = document.querySelector("#count");

  counter.innerText = 0;
};

const removeTransition = evt => {
  if (evt.propertyName !== "transform") {
    return;
  }

  const tallyClicker = document.querySelector("#tally-clicker");
  tallyClicker.classList.remove("tallied");
};

const tallyClickerContainer = document.querySelector("#tally-clicker");
tallyClickerContainer.addEventListener("mousedown", increaseCounter);

const countContainer = document.querySelector("#count");
countContainer.addEventListener("transitionend", removeTransition);

const resetButton = document.querySelector("#reset-button");
resetButton.addEventListener("click", resetCount);
