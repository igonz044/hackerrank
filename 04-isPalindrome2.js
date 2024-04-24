let originalString = "Using JS, you can change the color of a webpage's background, text, and elements.";
console.log(originalString);

let newString = originalString
    .replace("color", "colour")
    .replace("JS", "JavaScript");

console.log(newString);