const inputElement = document.getElementById("myInput");

inputElement.addEventListener("keydown", function(event) {
    if (event.key === " " || event.key === "Backspace") {
        event.preventDefault();
    }

    if (event.key === " ") {
        const selectionStart = inputElement.selectionStart;
        const selectionEnd = inputElement.selectionEnd;
        const currentValue = inputElement.value;
        inputElement.value = currentValue.substring(0, selectionStart - 1) + currentValue.substring(selectionEnd);
        
        inputElement.setSelectionRange(selectionStart - 1, selectionStart - 1);
    }

    if (event.key === "Backspace") {
        const selectionStart = inputElement.selectionStart;
        const currentValue = inputElement.value;
        inputElement.value = currentValue.substring(0, selectionStart) + " " + currentValue.substring(selectionStart);
        
        inputElement.setSelectionRange(selectionStart + 1, selectionStart + 1);
    }
});
