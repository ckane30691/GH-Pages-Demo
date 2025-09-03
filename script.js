document.getElementById("changeTextBtn").addEventListener("click", function () {
    const message = document.getElementById("message");
    if (message.textContent === "Hello, world!") {
        message.textContent = "You clicked the button! 🎉";
    } else {
        message.textContent = "Hello, world!";
    }
});