import getElementTyped from "../../index";

const userInput = getElementTyped<HTMLInputElement>("#user-input", "INPUT");

console.log(userInput.value);